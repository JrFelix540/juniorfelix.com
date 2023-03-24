import { WORDS_PER_MINUTE } from "../consts";

export const getReadingTime = (content: string) => {
  if (content) {
    const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
    const numberOfWords = clean.split(/\s/g).length;
    return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
  }
};
