const Pet = require("../models/Pet");
// const multer = require("multer");

module.exports = {
  createPet: async (req, res) => {
    const file = req.image;
    console.log(file);
    const petInfo = new Pet({
      name: req.body.petName,
      owner_pet_id: req.body.owner,
      breed: req.body.breed,
      birthday: req.body.birthday,
      image: req.body.image,
      weight: req.body.weight,
      owner_pet_id: req.owner.id,
    });

    try {
      await petInfo.save();
      console.log(petInfo);
      res.redirect("/auth/dashboard");
    } catch (err) {
      if (err) return res.status(500).send(err);
      res.redirect("/auth/dashboard");
    }
  },
};
