const cloudinary = require("../middleware/cloudinary");
const Pet = require("../models/Pet");

module.exports = {
  createPet: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Pet.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        user: req.owner.id,
        name: req.body.petName,
        breed: req.body.breed,
        birthday: req.body.birthday,
        weight: req.body.weight,
        owner_pet_id: req.owner.id,
      });
      console.log("Post has been added!");
      res.redirect("/auth/dashboard");
    } catch (err) {
      console.log(err);
    }
  },
  updatePet: (req, res) => {
    console.log(req.body);
    try {
      const id = req.params.id;
      console.log(id);
      Pet.findByIdAndUpdate(
        id,
        {
          name: req.body.name,
          breed: req.body.breed,
          birthday: req.body.birthday,
          image: req.body.image,
          weight: req.body.weight,
        },

        (err, results) => {
          console.log(results);
          if (err) return res.status(500).send(err);
          console.log("Pet updated");
          res.redirect("/auth/dashboard");
        }
      );
    } catch (err) {
      console.log(err);
    }
  },

  deletePet: async (req, res) => {
    console.log(req.params);

    try {
      let pet = await Pet.deleteOne({ _id: req.params.id });
      console.log(pet);
      await cloudinary.uploader.destroy(pet.cloudinaryId);
      await Pet.remove({ _id: req.params.id });
      console.log("Pet deleted!");
      res.redirect("/auth/dashboard");
    } catch (err) {
      res.redirect("/auth/dashboard");
    }
  },
};
