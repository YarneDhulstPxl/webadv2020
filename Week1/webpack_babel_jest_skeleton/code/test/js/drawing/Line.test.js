import Point from "../../../src/js/drawing/Point";
import Line from "../../../src/js/drawing/Line";

describe('constructor',
    () => {
        it('should generate a Line-object for valid args',
            () => {
                let point = new Point(1, 1);
                let line = new Line(point, point);
                expect(line).toBeInstanceOf(Line)
            }
        )
        it('should throw error when 1st parameter is not a Point object',
            () => {
                expect(() => {
                    let point = new Point(1, 1);
                    new Line("a", point);
                }).toThrow(Error)
            })
        it('should throw error when 2nd parameter is not a Point object',
            () => {
                expect(() => {
                    let point = new Point(1, 1);
                    new Line(point, "a");
                }).toThrow(Error)
            })
    }
);

test('getPoint1 to return the correct value',
    () => {
        let point1 = new Point(1, 1);
        let point2 = new Point(2, 2);
        let line = new Line(point1, point2);
        let x = line.getPoint1().getX();
        expect(x).toBe(1);
    });

test('getPoint2 to return the correct value',
    () => {
        let point1 = new Point(1, 1);
        let point2 = new Point(2, 2);
        let line = new Line(point1, point2);
        let x = line.getPoint2().getX();
        expect(x).toBe(2);
    });

test('toString to return the correct value', () => {
    let point = new Point(1,1);
    let line = new Line(point, point);
    let returnedString = line.toString();
    expect(returnedString).toBe("Line object");
});