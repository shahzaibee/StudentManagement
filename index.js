class Student {
    name;
    studentID;
    enrolledCourses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateID();
        this.enrolledCourses = [];
        this.balance = 0;
    }
    generateID() {
        const id = Math.floor(Math.random() * 100000).toString();
        return id.padStart(5, '0');
    }
    enroll(course, cost) {
        this.enrolledCourses.push(course);
        this.balance += cost;
    }
    viewBalance() {
        console.log(`Balance: ${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Thank you for your payment of ${amount}.`);
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Enrolled Courses: ${this.enrolledCourses.join(', ')}`);
        console.log(`Balance: ${this.balance}`);
    }
}
// Example usage:
const student = new Student('Shahzaib');
student.enroll('Math', 500);
student.enroll('English', 400);
student.viewBalance();
student.payTuition(300);
student.showStatus();
export {};
