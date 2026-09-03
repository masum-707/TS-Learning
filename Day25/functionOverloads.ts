function format(value: string): string;
function format(value: number): number;
function format(value: string, id: number): string;

function format(value: string | number, id?: number): string | number {
  if (typeof value === "string") {
    return id
      ? `Name: ${value.toUpperCase()} and Id: ${id}`
      : value.toUpperCase();
  }

  return value * 2;
}

console.log(typeof format(5.5555), format(5.5555));
console.log(format("Masum"));
console.log(typeof format("Masum", 2202), format("Masum", 2202));
