export class ParseError extends Error {

  constructor(public errorData: any, message?: string) {
    super(message)
    Object.setPrototypeOf(this, ParseError.prototype)
  }

}
