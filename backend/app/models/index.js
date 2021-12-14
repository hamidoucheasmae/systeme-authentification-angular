const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// db.students = require ("student.model.js")(mongoose);
db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin"];

module.exports = db;