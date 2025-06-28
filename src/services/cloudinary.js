const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const uploadFile = async (filePath, resourceType = "auto", folder = null) => {
  try {
    if (!filePath)
      throw new Error("File path is missing for Cloudinary upload."); // Throw an error instead of returning null

    const options = {
      resource_type: resourceType,
    };
    if (folder) options.folder = folder;

    const result = await cloudinary.uploader.upload(filePath, options);

    fs.unlinkSync(filePath); // Clean up local file
    return result;
  } catch (error) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    console.error("Cloudinary upload error:", error.message);
    throw error; 
  }
};

const destroyFile = async (publicId, resourceType = "image") => {
  try {
    const result = await cloudinary.uploader.destroy(publicId, {
      resource_type: resourceType, // 'video' or 'image'
    });
    return result;
  } catch (error) {
    console.error("Cloudinary destroy error:", error);
    throw new Error("Cloudinary file deletion failed.");
  }
};

const getPublicIdFromCloudinaryUrl = (url) => {
    if (!url) return null;

    // Cloudinary URLs typically look like:
    // https://res.cloudinary.com/<cloud_name>/image/upload/v<version>/<public_id_with_folders>.<extension>
    // We want the part after 'upload/' (and possibly '/v<version>/') up to the extension.

    const parts = url.split('/');
    const uploadIndex = parts.indexOf('upload');

    if (uploadIndex === -1 || uploadIndex + 1 >= parts.length) {
        return null; // 'upload' not found or URL malformed
    }

    // The public_id starts after 'upload' and potentially 'v<version>'
    let publicIdParts = parts.slice(uploadIndex + 1);

    // Check if the first part after 'upload' is a version number (e.g., 'v123456789')
    // and remove it if it is.
    if (publicIdParts[0] && publicIdParts[0].startsWith('v') && !isNaN(parseInt(publicIdParts[0].substring(1)))) {
        publicIdParts = publicIdParts.slice(1);
    }

    // Join the remaining parts and remove the file extension
    const fullPublicIdWithExtension = publicIdParts.join('/');
    const lastDotIndex = fullPublicIdWithExtension.lastIndexOf('.');
    if (lastDotIndex > -1) {
        return fullPublicIdWithExtension.substring(0, lastDotIndex);
    }
    return fullPublicIdWithExtension; // Return as is if no extension found (unlikely for images)
};


module.exports = { uploadFile, destroyFile,getPublicIdFromCloudinaryUrl };
