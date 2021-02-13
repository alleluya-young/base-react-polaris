import { parse, stringify } from 'querystring';

export const toSearchString = query => {
  const s = stringify(query);
  return s ? `?${stringify(query)}` : '';
};

export function parseSearchString(search) {
  if (search.startsWith('?')) {
    search = search.slice(1);
  }
  return parse(search);
}
