/** Make text easy to match: lower case, no accents, no Arabic diacritics, unified Arabic letters. */
export function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // Latin accents
    .replace(/[ً-ْٰـ]/g, '') // Arabic diacritics and tatweel
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

// Words that should find each other (after normalize()).
const SYNONYMS: string[][] = [
  ['castle', 'fort', 'fortress', 'palace', 'قلعه', 'قصر', 'حصن'],
  ['beach', 'coast', 'sea', 'island', 'شاطي', 'ساحل', 'بحر', 'جزيره'],
  ['mountain', 'mountains', 'peak', 'جبل', 'جبال'],
  ['desert', 'dunes', 'sand', 'صحراء', 'كثبان', 'رمال'],
  ['mosque', 'مسجد'],
  ['museum', 'متحف'],
  ['unesco', 'يونسكو', 'اليونسكو'],
];

function variants(word: string) {
  if (word.length < 3) return [word];
  const group = SYNONYMS.find((g) => g.some((w) => w.startsWith(word) || word.startsWith(w)));
  return group ? [word, ...group] : [word];
}

/** True when every word of the query (or a synonym) appears in the text. */
export function matches(haystack: string, query: string) {
  const q = normalize(query);
  if (!q) return false;
  return q.split(' ').every((word) => variants(word).some((v) => haystack.includes(v)));
}
