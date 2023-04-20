var students = /** @class */ (function () {
    function students(nameOfStd, RollNo, classOfStd, section, subject) {
        this.nameOfStd = nameOfStd;
        this.RollNo = RollNo;
        this.classOfStd = classOfStd;
        this.section = section;
        this.subject = subject;
    }
    students.prototype.login = function () {
        if (this.RollNo == 1) {
            return true;
        }
        return false;
    };
    return students;
}());
var std1 = new students("Rahul", 1, 5, "A", "English");
console.log(std1.login());
