const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    clientname: {
      type: String,
      required: true,
      trim: true,
    },
    clientphone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
