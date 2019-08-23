
export class Student {
    stuId: number;
    stuName: string;
    constructor(name: string, id: number) {
        this.stuName = name;
        this.stuId = id;
    }
    displayStudent() {
        console.log ('Student Code:' + this.stuId + ', Student Name: ' + this.stuName );
        return 'Student Code:' + this.stuId + ', Student Name: ' + this.stuName ;
    }
}
