function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
    return this.subject;
}

Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks) {
        return ("Студент отчислен");
    }
    if (!!marksToAdd.length) {
        this.marks.push(...marksToAdd);
    }
    return;
}

Student.prototype.getAverage = function() {
    if (!this.marks || !this.marks.length) {
        return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / this.marks.length;
    return average;
}

Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);