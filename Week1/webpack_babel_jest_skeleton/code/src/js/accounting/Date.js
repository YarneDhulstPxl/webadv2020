"use strict";

export default class Date {
    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    static get MONTHS() {
        return ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    }

    static make() {
        this._day = day;
        this._month = month;
        this._year = year;
    }

    getLongMonth(){
        return Date.MONTHS[this._month-1];
    }

    get day() {
        return this._day;
    }

    set day(value) {
        this._day = value;
    }

    get month() {
        return this._month;
    }

    set month(value) {
        this._month = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    toString() {
        return `${this._day}/${this._month}/${this._year}`;
    }

    toStringMonth() {
        return `${this._day}/${this.getLongMonth()}/${this._year}`;
    }
}