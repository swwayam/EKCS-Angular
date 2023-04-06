class students{
    nameOfStd : string;
    RollNo : Number;
    classOfStd : number;
    section : string;
    subject : string;
    constructor(nameOfStd, RollNo, classOfStd, section, subject){
        this.nameOfStd = nameOfStd;
        this.RollNo = RollNo;
        this.classOfStd = classOfStd;
        this.section = section;
        this.subject = subject;
    }
    login(): boolean{
        if (this.RollNo == 1) {
            return true
        }
        return false
    }
}

let std1 = new students("Rahul", 1, 5, "A", "English");

console.log(std1.login());