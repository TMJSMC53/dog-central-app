const Vaccine = require("../models/Vaccine");

module.exports = {
  registerVaccine: async (req, res) => {
    try {
      await Vaccine.create({
        name: req.body.vaccine_name,
        last_applied_date: req.body.last_applied_date,
        type: req.body.type,
        frequency: [req.body.years, req.body.month, req.body.days],
        pet_id: req.body.pet_id,
      });
      console.log("New vaccine has been registered!");
      res.status(201).send();
      res.redirect("/auth/dashboard");
    } catch (err) {
      console.log("ERROR: Register vaccine");
      console.log(err);
    }
  },
};
