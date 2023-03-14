import React from "react";
import Footer from "./components/Footer";
import Pet from "./pet.jsx";

export default function Dashboard({ ownerName, petInfo, petNotes }) {
  return (
    <div>
      <html lang="en" data-theme="light"></html>
      <script
        src="https://kit.fontawesome.com/bc79913c77.js"
        crossOrigin="anonymous"
      ></script>
      {/*Daisy UI */}
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.31.0/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />

      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/dashboard.css" />
      <header className="container">
        <nav className="navbar">
          <a href="/" className="logo text-primary fw-bold">
            <span className="accent-400">Dog</span>
            <span className="central">Central</span>
          </a>

          <h2 className="fs-400 text-neutral-100">
            Welcome Back, {ownerName.firstName}
          </h2>
          <button className="btn btn-logout bg-dark">
            {" "}
            <a href="/auth/logout">Log Out</a>
          </button>
        </nav>
      </header>

      <main className="container">
        {/* Pet Form */}
        <Pet petInfo={petInfo} />
        {/* Notes Section */}
        <section className="notes">
          <div className="notes-box">
            <h2 className="text-primary fs-750 fw-bold">Information Central</h2>
            <button className="note-button bg-light text-accent-100">
              <span className="mas">+</span>
              Note
            </button>
          </div>
          <section className="note-popup" id="addNote">
            <form
              action="/note/addNote"
              className="form-container--note"
              method="POST"
            >
              <div className="error" style={{ backgroundColor: "red" }}></div>
              <br />
              <label htmlFor="event">
                <input
                  type="text"
                  defaultValue=""
                  name="event"
                  id="event"
                  placeholder="Event"
                  required
                />
              </label>
              <label className="date" htmlFor="date">
                <input
                  type="date"
                  name="date"
                  defaultValue=""
                  min="2005-01-01"
                  max="2050-12-31"
                  required
                />
              </label>
              <textarea
                name="notes"
                className="textareaElement"
                placeholder="Notes section for dog events and reminders"
              ></textarea>
              <label className="date" htmlFor="due">
                <input
                  type="date"
                  name="due"
                  defaultValue=""
                  id="due"
                  min="2005-01-01"
                  max="2050-12-31"
                  required
                />
              </label>
              <select name="petId" id="petId">
                {petInfo.map((pet) => (
                  <option key={pet._id}>{pet.name}</option>
                ))}
              </select>
              <button type="submit" value="Submit" className="btn bg-light">
                Add Note
              </button>
              <button
                type="button"
                className="btn cancel"
                // onClick="closeNoteForm()"
              >
                Close
              </button>
            </form>
          </section>

          <div className="table-wrapper">
            <table>
              <thead className="fs-500">
                <th>Event</th>
                <th>Date</th>
                <th>Notes</th>
                <th>Due</th>
                <th>Pet</th>
                <th></th>
              </thead>
              <tbody className="fs-300">
                {petNotes.map((note, i) => {
                  <tr>
                    <td>{note.event}</td>
                    <td>
                      {new Date(note.date).toLocaleDateString("en-US", {
                        timeZone: "UTC",
                      })}
                    </td>
                    <td>{note.notes}</td>
                    <td>
                      {new Date(note.due).toLocaleDateString("en-US", {
                        timeZone: "UTC",
                      })}
                    </td>
                    <td>{note.pet.name}</td>
                    <td>
                      <form
                        action="/note/deleteNote/{note._id }?_method=DELETE"
                        method="POST"
                        className="col-3"
                      >
                        <button
                          className="btn bg-dark fa fa-trash"
                          type="submit"
                        ></button>
                      </form>
                    </td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
      <script src="/pet.js"></script>
    </div>
  );
}
