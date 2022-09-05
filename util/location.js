const GAODE_API_KEY = "32c78d0a7d52df3405373a887b33b541";

export function getMapPreview(lng, lat) {
  const imagePreviewUrl = `https://restapi.amap.com/v3/staticmap?location=${lng.toFixed(
    6
  )},${lat.toFixed(6)}&zoom=13&size=400*200&markers=mid,,A:${lng.toFixed(
    6
  )},${lat.toFixed(6)}&key=${GAODE_API_KEY}`;
  console.log(imagePreviewUrl);
  return imagePreviewUrl;
}
