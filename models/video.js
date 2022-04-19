const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const videoSchema = new mongoose.Schema(
  {
    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toObject: { getters: true },
    toJSON: { getters: true },
  }
);

videoSchema.plugin(mongooseDelete, { overrideMethods: "all" });
module.exports = mongoose.model("video", videoSchema);
