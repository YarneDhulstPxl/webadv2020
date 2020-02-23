import Course from "../../../src/js/school/Course";
import Student from "../../../src/js/school/Student";

test('calculateGrade to throw an error for a student object without a completed course',
    () => {
        expect(() => {
            let course = new Course(1);
            let student = new Student(1);
            student.addCourse(course);
            let grade = student.calculateGrade();
        }).toThrow(Error)
    });

test('culculateGrade to return 12 for a student with one completed course with a grade of 12',
    () => {
        let course = new Course(1, 12, true);
        let student = new Student(1);
        student.addCourse(course);
        let grade = student.calculateGrade();
        expect(grade).toBe(12);
    });