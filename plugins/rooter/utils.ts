/** Count substring */
export const countSubString = (str: string | undefined, snippet: string = "/"): number =>
  typeof str === "undefined" ? 0 : str.split(snippet).length - 1
