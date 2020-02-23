"use strict";
// naam: Yarne D'hulst
export default class Course {
    constructor(_id, _grade = 0, _completed = false) {
        this._id = _id;
        this._grade = _grade;
        this._completed = _completed;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get grade() {
        return this._grade;
    }

    set grade(value) {
        this._grade = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }
}
