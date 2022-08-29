const Pet = require("../models/Pet");

module.exports = {
  petIndex: async (req, res) => {
    try {
      const pets = await Pet.find();
      res.render("pet.ejs", { pet: pets });
    } catch (err) {
      if (err) return res.status(500).send(err);
    }
  },

  createPet: async (req, res) => {
    const petInfo = new Pet({
      name: req.body.name,
      owner_pet_id: req.body.owner,
      breed: req.body.breed,
      birthday: req.body.birthday,
      image: req.body.image,
      weight: req.body.weight,
      chip: req.body.chip,
      applied_vaccine: req.body.applied_vaccine,
    });

    try {
      await petInfo.save();
      console.log(petInfo);
      res.redirect("/dashboard");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/dashboard");
    }
  },
};
