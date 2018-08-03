export function convertDate(date: string): Date {
  const dateFormat: number[] = date.split('-').map((value: string): number => parseInt(value, 10))
  return new Date(dateFormat[2], dateFormat[1] - 1, dateFormat[0])
}
