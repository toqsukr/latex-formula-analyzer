export const unionToArray = <T extends string>(union: T): T[] => {
  return union.split("|") as any[]
}
