export function parseTags(tags?: string | null): string[] | null {
  let stringsArray: string[] | null = null;
  if (tags) {
    stringsArray = tags.split(",");
  }

  return stringsArray;
}
