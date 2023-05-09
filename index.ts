class Student {
  private name: string;
  private studentID: string;
  private enrolledCourses: string[];
  private balance: number;

  constructor(name: string) {
    this.name = name;
    this.studentID = this.generateID();
    this.enrolledCourses = [];
    this.balance = 0;
  }

  private generateID(): string {
    const id = Math.floor(Math.random() * 100000).toString();
    return id.padStart(5, '0');
  }

  public enroll(course: string, cost: number): void {
    this.enrolledCourses.push(course);
    this.balance += cost;
  }

  public viewBalance(): void {
    console.log(`Balance: ${this.balance}`);
  }

  public payTuition(amount: number): void {
    this.balance -= amount;
    console.log(`Thank you for your payment of ${amount}.`);
  }

  public showStatus(): void {
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

