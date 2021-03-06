const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const parameterSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      unique: true,
    },
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
    percentageLiveness: {
      type: Number,
      required: true,
      unique: true,
    },
    percentageSimilarity: {
      type: Number,
      required: true,
      unique: true,
    },
    textColor: {
      type: String,
      required: true,
      unique: true,
    },
    warningTextColor: {
      type: String,
      required: true,
      unique: true,
    },
    operationalStart: {
      type: Number,
      required: true,
      unique: true,
    },
    operationalEnd: {
      type: Number,
      required: true,
      unique: true,
    },
    operationalButton: {
      type: Boolean,
      required: true,
      unique: true,
    },
    attributes: {
      type: Array,
      required: false,
      unique: true,
    },
  },
  {
    date: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
//halooooo
//benerin network erorr

parameterSchema.plugin(mongooseDelete, { overrideMethods: "all" }); //enable soft delete

module.exports = mongoose.model("parameter", parameterSchema);
