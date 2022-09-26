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
  //   const file = req.image;
  //   console.log(file);
  //   const petInfo = new Pet({
  //     name: req.body.petName,
  //     owner_pet_id: req.body.owner,
  //     breed: req.body.breed,
  //     birthday: req.body.birthday,
  //     image: req.body.image,
  //     weight: req.body.weight,
  //     owner_pet_id: req.owner.id,
  //   });

  //   try {
  //     await petInfo.save();
  //     console.log(petInfo);
  //     res.redirect("/auth/dashboard");
  //   } catch (err) {
  //     if (err) return res.status(500).send(err);
  //     res.redirect("/auth/dashboard");
  //   }
  // },
};
