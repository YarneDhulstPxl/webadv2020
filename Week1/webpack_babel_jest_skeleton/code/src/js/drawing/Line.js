"use strict";

import Point from "./Point";

export default class Line {
    constructor(point1, point2) {
        if (!(point1 instanceof Point) || !(point2 instanceof Point)) {
            throw new Error("Parameter is not an instance of Point!");
        }
        this.point1 = point1;
        this.point2 = point2;
    }
    getPoint1() {
        return this.point1;
    }

    getPoint2() {
        return this.point2;
    }

    toString() {
        return "Line object";
    }
}