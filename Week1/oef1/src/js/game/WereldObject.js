"use strict";

import Point from "./Point";

export default class WereldObject {
    constructor(location) {
        if (!(location instanceof Point)) {
            throw new Error("Parameter is not an instance of Point!");
        }
        this._X = location.getX();
        this._Y = location.getY();
    }
    get X() {
        return this._X;
    }

    set X(value) {
        this._X = value;
    }

    get Y() {
        return this._Y;
    }

    set Y(value) {
        this._Y = value;
    }
}