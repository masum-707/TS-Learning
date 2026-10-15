type Result<T, E> = { success: true; data: T } | { success: false; error: E };
type UserError =
  | { code: number; message: "user not exist" | "user has been locked" }
  | { code: number; message: "Network error" | "Failed to fetch user" };

interface User {
  id?: number;
  name: string;
  email: string;
}

type UserResult<T> = Result<T, UserError>;

async function getUserById(id: number): Promise<UserResult<User>> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      return {
        success: false,
        error: {
          code: response.status,
          message:
            response.status === 404 ? "user not exist" : "Failed to fetch user",
        },
      };
    }

    const user: User = await response.json();

    return {
      success: true,
      data: user,
    };
  } catch {
    return {
      success: false,
      error: {
        code: 0,
        message: "Network error",
      },
    };
  }
}

const existingUser = await getUserById(-1);

if (existingUser.success) {
  console.log("User:", existingUser.data);
} else {
  console.log("Error:", existingUser.error.message);
}
