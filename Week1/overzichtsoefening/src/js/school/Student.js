"use strict";
import Course from "./Course";
// naam: Yarne D'hulst
export default class Student{
    constructor(_id, _courses = []) {
        this._id = _id;
        this._courses = _courses;
    }

    addCourse(courseObj) {
        if (!(courseObj instanceof Course)) {
            throw new Error("Parameter is not an instance of Course!");
        }

        this._courses.push(courseObj);
    }

    calculateGrade() {
        this._courses.forEach(element => {
            if (!element.completed){
                throw new Error("Amount of completed courses <= 0");
            }
        });

        let sum = 0;

        this._courses.forEach(element => {
           sum += element.grade;
        });

        return (sum / this._courses.length);
    }
}