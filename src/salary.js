class Employee {
    constructor(salary, taxWithheld) {
        this.salary = salary;
        this.taxWithheld = taxWithheld;
    }

    giveRaise(raiseAmount) {
        this.salary += raiseAmount;
        this.taxWithheld = this.salary * .20;
    }
}