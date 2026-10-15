interface task {
  id?: number;
  name: string;
  duration: string;
}

class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = "Custom Error";
    this.message = message;
    this.statusCode = statusCode;
  }
}

async function getTaskById(id: number): Promise<task> {
  const response = await fetch(`.......task/${id}`);
  if (!response.ok) {
  }
  const task: task = await response.json();
  return task;
}
const previousTask = await getTaskById(101);

async function createTask<T extends task>(task: T): Promise<Response> {
  const response = await fetch(`...task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer {}`,
    },
  });
  return response;
}

const newTask = {
  name: "Create task",
  duration: "8H",
  responsible: "xyz",
};

async function storeTask<T extends task>(task: T): Promise<void> {
  try {
    const response = await createTask(task);
    if (!response.ok) {
      throw new CustomError("failed to create task", 401);
    }
    console.log(`task successfully created`);
  } catch (e: unknown) {
    if (e instanceof CustomError) {
      console.log(e.message, e.statusCode);
    }
  }
}
storeTask(newTask);
