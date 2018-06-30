export default interface Processor {
  processRequest({ data }: { data: string }): Array<any>
}