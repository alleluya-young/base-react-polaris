import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProductItem } from '../common/ProductItem';
import { map } from 'lodash';
import { useHomeInfo } from '../../clients/hooks';

export const Home = () => {
  const history = useHistory();

  const [{ recommendedLists }] = useHomeInfo();

  return (
    <div>
      {map(recommendedLists, ({ productList }) => {
        return map(productList, item => {
          return (
            <ProductItem
              key={item.randomChar}
              product={item}
              onClick={() => {
                history.push('/detail');
              }}
            />
          );
        });
      })}
    </div>
  );
};
