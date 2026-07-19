// Image hosting via Cloudinary's free tier (no billing card required, unlike
// Firebase Storage which now needs the Blaze plan just to provision a bucket).
// Uses an unsigned upload preset — see .env.example for setup instructions.
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const isCloudinaryConfigured = Boolean(CLOUD_NAME && UPLOAD_PRESET);

export const uploadImage = async (file) => {
  if (!isCloudinaryConfigured) {
    throw new Error('Cloudinary is not configured — see .env.example for REACT_APP_CLOUDINARY_* setup.');
  }
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);
  formData.append('folder', 'dreamsbhoomi-projects');

  const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('Image upload failed.');
  }
  const data = await response.json();
  return data.secure_url;
};
