namespace University {
  export interface Student {
    id: number;
    name: string;
  }

  interface InternalConfig {
    debug: boolean;
  }
}

const student: University.Student = {
  id: 1,
  name: "Masum",
};
declare function studentInfo(value: any): void;
studentInfo(student);
