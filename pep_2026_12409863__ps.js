const students = [
  { id: 1, name: 'Aman', marks: 85, attendance: 92 },
  { id: 2, name: 'Riya', marks: 38, attendance: 76 },
  { id: 3, name: 'Karan', marks: 67, attendance: 81 },
  { id: 4, name: 'Simran', marks: 91, attendance: 88 },
  { id: 5, name: 'Raj', marks: 45, attendance: 60 },
  { id: 6, name: 'Neha', marks: 29, attendance: 95 }
];
const passed = students.filter(({ marks }) => marks >= 40);

const getGrade = m => m >= 80 ? 'A' : m >= 60 ? 'B' : m >= 40 ? 'C' : 'F';
const report = students.map(s => ({ ...s, grade: getGrade(s.marks) }));

const avg = students.reduce((sum, s) => sum + s.marks, 0) / students.length;

const topper = students.reduce((top, s) => s.marks > top.marks ? s : top);

console.log(`Passed: ${passed.map(s => s.name).join(', ')}`);
console.log(`Class Average: ${avg.toFixed(2)}`);
console.log(`Topper: ${topper.name} (${topper.marks} Marks)\n`);
console.log("Report Card:");
report.forEach(({ name, marks, grade }) => console.log(`- ${name}: ${marks} (${grade})`));