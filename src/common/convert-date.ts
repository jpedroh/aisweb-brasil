export function convertDate(date: string): Date {
    const splitDateIntoArray: string[] = date.split('-')
    const mapStringtoNumber: number[] = splitDateIntoArray.map((value: string) => parseInt(value, 10))
    return new Date(Date.UTC(mapStringtoNumber[0], mapStringtoNumber[1] - 1, mapStringtoNumber[2]))
}
