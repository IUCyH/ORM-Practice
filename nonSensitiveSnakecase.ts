export function nonSensitiveSnakecase(str: string): string {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g, "$1_");
}