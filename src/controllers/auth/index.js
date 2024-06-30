const auth = require("./auth.controller");
const authAdmin = require("./admin.auth.controller");
const authInstructor = require("./instructor.auth.controller");

module.exports = {
  auth,
  authAdmin,
  authInstructor,
};
