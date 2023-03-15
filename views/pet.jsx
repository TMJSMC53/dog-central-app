import React from "react";

export default function Pet({ petInfo }) {
  return (
    <>
      <button className="open-button bg-dark text-accent-100">
        Register Pet
      </button>

      <section className="form-popup" id="myForm">
        <form
          className="form-container"
          method="POST"
          action="/pet/createPet"
          encType="multipart/form-data"
        >
          <div className="error" style={{ backgroundColor: "red" }}></div>
          <br />
          <label htmlFor="name">
            <input
              type="text"
              name="petName"
              defaultValue="petName"
              id="petName"
              placeholder="Name"
              required
            />
          </label>
          <label htmlFor="breed">
            <input
              id="breed"
              type="text"
              name="breed"
              defaultValue="breed"
              placeholder="Breed"
              required
            />
          </label>
          <label className="birthday" htmlFor="birthday">
            Birthday:{" "}
            <input
              type="date"
              name="birthday"
              defaultValue="birthday"
              id="birthday"
              min="2005-01-01"
              max="2050-12-31"
              required
            />
          </label>
          <label htmlFor="imgUpload">
            <input
              type="file"
              id="image"
              name="file"
              alt="Insert photo"
              required
            />
          </label>
          <label htmlFor="weight">
            <input
              type="number"
              name="weight"
              id="weight"
              defaultValue="weight"
              placeholder="Enter weight in kilograms"
              step="0.01"
              required
            />
          </label>
          <button type="submit" value="Submit" className="btn bg-dark">
            Add Pet
          </button>
          <button type="button" className="btn cancel">
            Close
          </button>
        </form>
      </section>

      <ul className="pet-list">
        {petInfo.map((pet, i) => (
          <div key={pet.id}>
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
                    id="updateFormButton"
                    className="btn bg-light fas fa-edit"
                    data-index={i}
                    // onclick={updateForm(i)}
                  ></button>

                  <form
                    action={`/pet/deletePet/${pet._id}?_method=DELETE`}
                    method="POST"
                    className="col-3"
                  >
                    <button
                      className="btn bg-dark fa fa-trash"
                      type="submit"
                      data-index={i}
                    ></button>
                  </form>
                </section>
              </section>
              <section className="pet-list__items">
                <section className="pet-list__item--name">
                  <span className="pet-list__item--title"> Name:</span>
                  {pet.name}
                </section>
                <section className="pet-list__item--breed">
                  <span className="pet-list__item--title">Breed:</span>
                  {pet.breed}
                </section>
                <section className="pet-list__item--birthday">
                  <span className="pet-list__item--title">Birthday:</span>
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
                action={`/pet/updatePet/${pet._id}?_method=PUT`}
                method="POST"
                encType="multipart/form-data"
              >
                <input type="text" defaultValue={pet.name} name="name" />
                <input type="text" defaultValue={pet.breed} name="breed" />
                <input
                  type="date"
                  defaultValue={pet.birthday}
                  name="birthday"
                />

                <input type="text" defaultValue={pet.weight} name="weight" />
                <button
                  type="submit"
                  value="Submit"
                  className="btn bg-dark"
                  data-index={i}
                >
                  Update
                </button>
                <button
                  type="button"
                  id="closeUpdateForm"
                  className="btn cancel"
                  // onclick={closeUpdateForm(i)}
                  data-index={i}
                >
                  Close
                </button>
              </form>
            </section>
          </div>
        ))}
      </ul>
    </>
  );
}
