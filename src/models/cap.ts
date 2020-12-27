import { v4 as uuidv4 } from "uuid";

export default class Cap {
  capGuid: string;
  elementId: string;
  breweryName: string;
  beerName: string;
  imageUrl: string;
  dateAdded: Date;

  constructor(
    elementId: string,
    breweryName: string = "",
    beerName: string = "",
    imageUrl: string = "",
    dateAdded: Date = new Date(2020, 11, 19),
    capGuid: string = uuidv4()
  ) {
    this.capGuid = capGuid;
    this.elementId = elementId;
    this.breweryName = breweryName;
    this.beerName = beerName;
    this.imageUrl = imageUrl;
    this.dateAdded = dateAdded;
  }
}
