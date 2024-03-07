import Building from './5-building.js';

export default class SkyHighBuilding extends Building {

   /**
   * Constructor for SkyHighBuilding class
   * @param {Number} sqft - Square footage of the building
   * @param {Number} floors - Number of floors in the building
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
