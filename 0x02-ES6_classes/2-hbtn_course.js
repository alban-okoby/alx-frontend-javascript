class default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : '';
    this._length = typeof length === 'number' ? length : 0;
    this._students = Array.isArray(students) ? students : [];
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('Name should be a string.');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      console.error('Length should be a number.');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      console.error('Students should be an array of strings.');
    }
  }
}