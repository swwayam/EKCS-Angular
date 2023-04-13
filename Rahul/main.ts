class Student {
name:string;
roll no:Number;
suject: string;

constructor (name, roll no, subject){

    this.name = name;
     this.roll no = roll no;
        this.subject = subject;
}

const Students = new Student("Rahul", 12, "Math");

console.log(Students.login());

}