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
    percentage: {
      type: Number,
      required: true,
      unique: true,
    },
    // operationalStart: {
    //   type: number,
    //   required: true,
    //   uniqe: true,
    // },
    // operationalEnd: {
    //   type: number,
    //   required: true,
    //   uniqe: true,
    // },
    attributes: {
      type: Array,
      required: false,
      unique: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
//halooooo
//benerin network erorr

parameterSchema.plugin(mongooseDelete, { overrideMethods: "all" }); //enable soft delete

module.exports = mongoose.model("parameter", parameterSchema);
