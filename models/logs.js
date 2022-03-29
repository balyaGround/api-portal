const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const logSchema = new mongoose.Schema(
  {
    editedBy: {
      type: String,
      required: false,
    },
    body: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
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

logSchema.plugin(mongooseDelete, { overrideMethods: "all" }); //enable soft delete

module.exports = mongoose.model("log", logSchema);
