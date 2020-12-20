import { v4 as uuidv4 } from "uuid";

export default class Cap {
  capGuid: string;
  capLocationId: string;
  brewery: string;
  imageUrl: string;

  constructor(
    capLocationId: string,
    brewery: string = "",
    imageUrl: string = "",
    capGuid: string = uuidv4()
  ) {
    this.capGuid = capGuid;
    this.capLocationId = capLocationId;
    this.brewery = brewery;
    this.imageUrl = imageUrl;
  }
}
