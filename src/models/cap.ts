import { v4 as uuidv4 } from "uuid";

export default class Cap {
  capGuid: string;
  elementId: string;
  breweryName: string;
  beerName: string;
  publicId: string;
  dateAdded: Date;

  constructor(
    elementId: string,
    breweryName: string = "",
    beerName: string = "",
    publicId: string = "",
    dateAdded: Date = new Date(2020, 11, 19),
    capGuid: string = uuidv4()
  ) {
    this.capGuid = capGuid;
    this.elementId = elementId;
    this.breweryName = breweryName;
    this.beerName = beerName;
    this.publicId = publicId;
    this.dateAdded = dateAdded;
  }

  get imageUrl() {
    return `//res.cloudinary.com/hartzelldev/image/upload/c_thumb,g_face,h_50,w_50,r_max/cap-tracker/${this.publicId}.png`;
  }
}
