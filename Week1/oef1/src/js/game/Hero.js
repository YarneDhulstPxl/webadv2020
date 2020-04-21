"use strict";

import WereldObject from "./WereldObject";

export default class Hero extends WereldObject{
    constructor(location) {
        super(location);
    }

    moveDown() {
        super.Y--;
    }

    moveUp() {
        super.Y++;
    }

    moveLeft() {
        super.X--;
    }

    moveRight() {
        super.X++;
    }
}