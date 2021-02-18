import { isFunction } from 'lodash';
import { useHistory, useLocation } from 'react-router-dom';
import { parseSearchString, toSearchString } from '../utils';
import { useRef } from 'react';

export const useUrlState = initialState => {
  const history = useHistory();
  const location = useLocation();
  const query = parseSearchString(location.search);

  const initialStateRef = useRef(isFunction(initialState) ? initialState() : initialState || {});

  const targetQuery = {
    ...initialStateRef.current,
    ...query,
  };

  const update = s => {
    const newParams = isFunction(s) ? s(targetQuery) : s;
    history.replace({
      search: toSearchString({
        ...query,
        ...newParams,
      }),
    });
  };

  return [targetQuery, update];
};
