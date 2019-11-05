import { root } from "../data";

export const getCommentsCount = (url: string) =>
  fetch(`${root}/api/comments/?url=${url}`);
