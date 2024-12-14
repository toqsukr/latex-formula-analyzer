export const latexChange = (
  inputValue: string,
  prevValue: string,
  replace?: boolean
) => {
  if (replace) {
    return `${inputValue.replace(/\$/g, "")}`
  }
  return `${(prevValue + inputValue).replace(/\$/g, "")}`
}
