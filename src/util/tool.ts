export function getPic(pic: string) {
  return { background: `url(${process.env.PUBLIC_URL}/images/${pic}) 0% 0% / 100% 100%` };
}
