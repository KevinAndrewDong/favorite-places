const GAODE_API_KEY = "";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://restapi.amap.com/v3/staticmap?location=${lng.toFixed(
    6
  )},${lat.toFixed(6)}&zoom=13&size=400*200&markers=mid,,A:${lng.toFixed(
    6
  )},${lat.toFixed(6)}&key=${GAODE_API_KEY}`;
  //console.log(imagePreviewUrl);
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://restapi.amap.com/v3/geocode/regeo?location=${lng},${lat}&key=${GAODE_API_KEY}&radius=1000&extensions=all`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("获取地址uibl");
  }
  const data = await response.json();
  const address = data.regeocode.formatted_address;
  return address;
}
