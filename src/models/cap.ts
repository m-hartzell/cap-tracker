import { v4 as uuidv4 } from "uuid";
import { parseISO } from "date-fns";
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
          parseISO(i.dateAddedUtc),
          i.capGuid
        )
    );
  }

  getImageUrl(transformations: string[] = []) {
    const t = transformations.join(",") + "/";
    return `//res.cloudinary.com/hartzelldev/image/upload/${t}cap-tracker/${this.publicId}.png`;
  }

  getMapThumbImg() {
    return `//res.cloudinary.com/hartzelldev/image/upload/h_100,w_100,r_max/cap-tracker/${this.publicId}.png`;
  }
}
