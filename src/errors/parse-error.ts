export class ParseError extends Error {

  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, ParseError.prototype)
  }

}
