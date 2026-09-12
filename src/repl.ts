export function cleanInput(str: string): string[] {
  return str.toLowerCase().trim().split(' ').filter(word => word !== '');
}
