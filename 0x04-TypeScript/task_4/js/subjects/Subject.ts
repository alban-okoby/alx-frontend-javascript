/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    private _teacher: Teacher | undefined;

    set setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}
