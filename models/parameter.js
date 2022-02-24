const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const parameterSchema = new mongoose.Schema(
  {
    background: {
      type: String,
      required: true,
      unique: true,
    },
    button: {
      type: String,
      required: true,
      unique: true,
    },
    box: {
      type: String,
      required: true,
      unique: true,
    },
    percentage: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  //ganteng
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
//halooooo

parameterSchema.plugin(mongooseDelete, { overrideMethods: "all" }); //enable soft delete

module.exports = mongoose.model("parameter", parameterSchema);
