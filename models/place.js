export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lng: location.lng, lat: location.lat };
    this.id = new Date().toString() + Math.random().toString();
  }
}
