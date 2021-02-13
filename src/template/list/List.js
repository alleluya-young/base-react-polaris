import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelectSiteProductByType } from '../../clients/hooks';
import { map } from 'lodash';
import { ProductItem } from '../common/ProductItem';

export const List = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const [data] = useSelectSiteProductByType(match.params.id, 100);

  return (
    <div>
      {map(data, item => (
        <ProductItem
          key={item.randomChar}
          product={item}
          onClick={() => {
            history.push(`/${item.randomChar}`);
          }}
        />
      ))}
    </div>
  );
};
