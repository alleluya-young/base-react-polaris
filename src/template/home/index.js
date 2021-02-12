import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductItem } from '../common/ProductItem';
import { useRequest } from '../../core/request';
import { getIndexPage } from '../../clients';

export const Home = () => {
  const history = useHistory();

  const [data] = useRequest(getIndexPage);

  console.log('@@@@@@@@@@', data);

  return (
    <div>
      <ProductItem
        onClick={() => {
          history.push('/detail');
        }}
      />
    </div>
  );
};
