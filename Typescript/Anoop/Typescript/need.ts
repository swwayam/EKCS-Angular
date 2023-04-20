class Student{
    name: string;
    school: string;
    rollno: number;
    subject: string;
    
    constructor(name, school, rollno, subject){
        this.name = name;
        this.school = school;
        this.rollno = rollno;
        this.subject = subject;

    }

    data(): boolean{
        if (this.rollno == 12){
            return true 
        }
        return false
    }
    
}
  const rollno = new Student ("xyz", "MDS", 12, "maths")
  console.log (rollno.data());
    
export {}