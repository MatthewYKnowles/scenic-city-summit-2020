describe("Salary Tests", () => {
    it("should verify employee's salary was increased", () => {
        let employee = new Employee(50000, 10000);

        employee.giveRaise(2000);

        expect(employee.salary).toEqual(52000);
    })
})
