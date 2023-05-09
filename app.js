#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
const students = [];
function calculateGrade(totalMarks) {
    let grade = '';
    if (totalMarks >= 90) {
        grade = 'A+';
    }
    else if (totalMarks >= 80) {
        grade = 'A';
    }
    else if (totalMarks >= 70) {
        grade = 'B+';
    }
    else if (totalMarks >= 60) {
        grade = 'B';
    }
    else if (totalMarks >= 50) {
        grade = 'C';
    }
    else {
        grade = 'F';
    }
    return grade;
}
async function addStudent() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter student name:',
        },
        {
            type: 'input',
            name: 'rollNumber',
            message: 'Enter student roll number:',
        },
        {
            type: 'number',
            name: 'mathsMarks',
            message: 'Enter maths marks:',
        },
        {
            type: 'number',
            name: 'scienceMarks',
            message: 'Enter science marks:',
        },
        {
            type: 'number',
            name: 'englishMarks',
            message: 'Enter english marks:',
        },
        {
            type: 'number',
            name: 'historyMarks',
            message: 'Enter history marks:',
        },
    ]);
    const totalMarks = answers.mathsMarks +
        answers.scienceMarks +
        answers.englishMarks +
        answers.historyMarks;
    const grade = calculateGrade(totalMarks);
    const student = {
        name: answers.name,
        rollNumber: answers.rollNumber,
        marks: {
            Maths: answers.mathsMarks,
            Science: answers.scienceMarks,
            English: answers.englishMarks,
            History: answers.historyMarks,
        },
        grade,
    };
    students.push(student);
    console.log(chalk.green('Student added successfully!'));
}
async function viewStudents() {
    console.log(chalk.yellow('List of students:'));
    console.log();
    for (const student of students) {
        console.log(chalk.cyan(`Name: ${student.name}`));
        console.log(chalk.cyan(`Roll Number: ${student.rollNumber}`));
        console.log(chalk.cyan('Marks:'));
        for (const subject in student.marks) {
            console.log(chalk.cyan(`- ${subject}: ${student.marks, [subject]}`));
        }
        console.log(chalk.cyan(`Grade: ${student.grade}`));
        console.log();
    }
}
async function main() {
    while (true) {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'Select an action:',
                choices: [
                    'Add a student',
                    'View all students',
                    'Exit',
                ],
            },
        ]);
        if (answers.action === 'Add a student') {
            await addStudent();
        }
        else if (answers.action === 'View all students') {
            await viewStudents();
        }
        else {
            console.log(chalk.yellow('Goodbye!'));
            break;
        }
    }
}
main();
