const Pet = require("../models/Pet");

module.exports = {
  editPet: (req, res) => {
    const id = req.params.id;

    Pet.find({}, (err, pets) => {
      res.rend("pet.ejs", {
        petInfo: info,

        petId: id,
      });
    });
  },

  deletePet: (req, res) => {
    const id = req.params.id;
    Pet.findByIdAndRemove(id, (err) => {
      if (err) return res.send(500, err);
      res.redirect("/dashboard");
    });
  },

  updatePet: (req, res) => {
    const id = req.params.id;
    Pet.findByIdAndUpdate(
      id,
      {
        name: req.body.name,
        breed: req.body.breed,
        birthday: req.body.birthday,
        image: req.body.image,
        weight: req.body.weight,
        chip: req.body.chip,
        applied_vaccine: req.body.applied_vaccine,
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/dashboard");
      }
    );
  },
};
