import Building from './5-building';

export default class extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  static evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
