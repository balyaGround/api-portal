const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const video_upload = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "video",
    allowedFormats: ["jpeg", "png", "jpg", "mp4"],
    resource_type: "video",
  },
});

module.exports = { cloudinary, video_upload };
