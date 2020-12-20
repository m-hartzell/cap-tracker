import { v4 as uuidv4 } from "uuid";

export default class Cap {
  capGuid: string;
  capLocationId: string;
  breweryName: string;
  beerName: string;
  imageUrl: string;

  constructor(
    capLocationId: string,
    breweryName: string = "",
    beerName: string = "",
    imageUrl: string = "",
    capGuid: string = uuidv4()
  ) {
    this.capGuid = capGuid;
    this.capLocationId = capLocationId;
    this.breweryName = breweryName;
    this.beerName = beerName;
    this.imageUrl = imageUrl;
  }
}
