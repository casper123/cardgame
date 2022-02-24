import { SuitModel } from "../models/cardgame.suit.model";

export class SuitService {
    
    public suits: SuitModel[] = [{name: "CLUBS", code: "C"}, {name: "DIAMOND", code: "D"}, {name: "HEART", code: "H"}, {name: "SPADES", code: "S"}];
    /**
    * Constructor function of RhinoAWSService class
    */
    constructor() {
    }
    
    public getAllSuits(): SuitModel[] {
        return this.suits;
    }
}