import Date from "../../../src/js/accounting/Date";

test('toString to return the correct value',
    () => {
        let date = new Date(1, 2, 2020);
        let returnedString = date.toString();
        expect(returnedString).toBe("1/2/2020");
    });

test('toStringMonth to return the correct value',
    () => {
        let date = new Date(1, 2, 2020);
        let returnedString = date.toStringMonth();
        expect(returnedString).toBe("1/feb/2020");
    });