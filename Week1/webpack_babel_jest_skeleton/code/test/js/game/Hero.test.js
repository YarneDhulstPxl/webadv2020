import Point from "../../../src/js/game/Point";
import WereldObject from "../../../src/js/game/WereldObject";
import Hero from "../../../src/js/game/Hero";
import Line from "../../../src/js/drawing/Line";

test('moveLeft to change the X position by -1',
    () => {
        let point = new Point(2, 1);
        let hero = new Hero(point);
        hero.moveLeft();
        let x = hero.X;
        expect(x).toBe(1);
    });

test('moveRight to change the X position by +1',
    () => {
        let point = new Point(1, 1);
        let hero = new Hero(point);
        hero.moveRight();
        let x = hero.X;
        expect(x).toBe(2);
    });