import React from "react";

export default function Pet() {
  return (
    <>
      <button
        className="open-button bg-dark text-accent-100"
        onclick="openForm()"
      >
        Register Pet
      </button>

      <section className="form-popup" id="myForm">
        <form
          className="form-container"
          method="POST"
          action="/pet/createPet"
          enctype="multipart/form-data"
        >
          <div className="error" style={{ backgroundColor: "red" }}></div>
          <br />
          <label for="name">
            <input
              type="text"
              name="petName"
              value=""
              id="petName"
              placeholder="Name"
              required
            />
          </label>
          <label for="breed">
            <input
              id="breed"
              type="text"
              name="breed"
              value=""
              placeholder="Breed"
              required
            />
          </label>
          <label className="birthday" for="birthday">
            Birthday:{" "}
            <input
              type="date"
              name="birthday"
              value=""
              id="birthday"
              min="2005-01-01"
              max="2050-12-31"
              required
            />
          </label>
          <label for="imgUpload">
            <input
              type="file"
              id="image"
              name="file"
              alt="Insert photo"
              required
            />
          </label>
          <label for="weight">
            <input
              type="number"
              name="weight"
              id="weight"
              value="weight"
              placeholder="Enter weight in kilograms"
              step="0.01"
              required
            />
          </label>
          <button type="submit" value="Submit" class="btn bg-dark">
            Add Pet
          </button>
          <button type="button" class="btn cancel" onclick={closeForm()}>
            Close
          </button>
        </form>
      </section>

      <ul className="pet-list">
        {petInfo.forEach((pet, i) => (
          <div>
            <li className="pet-list__item">
              <section className="pet-list__item--image item">
                <img
                  className="img"
                  src={pet.image}
                  alt="Photo of {pet.name} "
                />
                <section className="form-btns">
                  <button
                    type="submit"
                    class="btn bg-light fas fa-edit"
                    onclick={updateForm(i)}
                  ></button>

                  <form
                    action="/pet/deletePet/{pet._id}?_method=DELETE"
                    method="POST"
                    className="col-3"
                  >
                    <button
                      className="btn bg-dark fa fa-trash"
                      type="submit"
                    ></button>
                  </form>
                </section>
              </section>
              <section className="pet-list__items">
                <section className="pet-list__item--name">
                  <span className="pet-list__item--title"> Name:</span>
                  {pet.name}
                </section>
                <section class="pet-list__item--breed">
                  <span className="pet-list__item--title">Breed:</span>
                  {pet.breed}
                </section>
                <section className="pet-list__item--birthday">
                  <span class="pet-list__item--title">Birthday:</span>
                  {new Date(pet.birthday).toLocaleDateString("en-US", {
                    timeZone: "UTC",
                  })}
                </section>

                <section className="pet-list__item--weight">
                  <span className="pet-list__item--title">Weight:</span>
                  {pet.weight}
                </section>
              </section>
            </li>

            <section className="updateForm edit-popup">
              <form
                className="form-container col-3"
                action="/pet/updatePet/{pet._id}?_method=PUT"
                method="POST"
                enctype="multipart/form-data"
              >
                <input type="text" value={pet.name} name="name" />
                <input type="text" value={pet.breed} name="breed" />
                <input type="date" value={pet.birthday} name="birthday" />

                <input type="text" value={pet.weight} name="weight" />
                <button type="submit" value="Submit" className="btn bg-dark">
                  Update
                </button>
                <button
                  type="button"
                  class="btn cancel"
                  onclick={closeUpdateForm(i)}
                >
                  Close
                </button>
              </form>
            </section>
          </div>
        ))}
      </ul>
      <script src="/pet.js"></script>
    </>
  );
}
