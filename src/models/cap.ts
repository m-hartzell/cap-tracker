import { v4 as uuidv4 } from "uuid";
import { parseISO, startOfToday } from "date-fns";
import capPositions from "./../data/cap-positions.json";

interface DynamoCap extends Cap {
  dateAddedUtc: string;
}

export default class Cap {
  capGuid: string;
  elementId: string;
  breweryName: string;
  beerName: string;
  publicId: string;
  dateAdded: string;

  constructor(
    elementId: string,
    breweryName: string = "",
    beerName: string = "",
    publicId: string = "",
    dateAdded: string = new Date().toISOString(),
    capGuid: string = uuidv4()
  ) {
    this.capGuid = capGuid;
    this.elementId = elementId;
    this.breweryName = breweryName;
    this.beerName = beerName;
    this.publicId = publicId;
    this.dateAdded = dateAdded;
  }

  get position() {
    return capPositions.find((p) => p.id === this.elementId);
  }

  static formatDynamoDBResponse(itemArray: DynamoCap[]) {
    return itemArray.map(
      (i) =>
        new Cap(
          i.elementId,
          i.breweryName,
          i.beerName,
          i.publicId,
          i.dateAddedUtc,
          i.capGuid
        )
    );
  }

  static getPlaceholderThumbUrl() {
    return `
      https://res.cloudinary.com/hartzelldev/image/upload/
      e_colorize,co_rgb:333333,h_100,w_100,r_max/
      cap-tracker/maumee-bay_pljchr.png
    `;
  }

  dynamoDBFormat() {
    return {
      capGuid: this.capGuid,
      elementId: this.elementId,
      breweryName: this.breweryName,
      beerName: this.beerName,
      publicId: this.publicId,
      dateAddedUtc: this.dateAdded,
    };
  }

  getImageUrl(transformations: string[] = []) {
    if (!this.publicId) return Cap.getPlaceholderThumbUrl();

    const t = transformations.join(",") + "/";
    return `https://res.cloudinary.com/hartzelldev/image/upload/${t}${this.publicId}.png`;
  }

  getMapThumbImg() {
    if (!this.publicId) return Cap.getPlaceholderThumbUrl();

    return `https://res.cloudinary.com/hartzelldev/image/upload/h_100,w_100,r_max/${this.publicId}.png`;
  }
}
