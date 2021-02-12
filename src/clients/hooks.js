import { useRequest } from '../core/request';
import { getAllType, getIndexPage, getTerms, selectSiteProductByType } from './index';
import { useEffect, useMemo } from 'react';
import { get, map, filter } from 'lodash';
import { productItemConvert } from './converts';

//convert

export const useHomeInfo = () => {
  const [data, run, loading, error] = useRequest(getIndexPage);

  const convertData = useMemo(
    () => ({
      imageList: get(data, ['objs', 'imageList'], []),
      imageUrl: get(data, ['objs', 'imageUrl'], undefined),
      linksList: get(data, ['objs', 'linksList'], []),
      puzzleList: get(data, ['objs', 'puzzleList'], []),
      recommendedLists: map(get(data, ['objs', 'recommendedLists'], []), item => ({
        ...item,
        productList: map(item.productList, i => productItemConvert(i)),
      })),
      systemShopSiteNavigationList: get(data, ['objs', 'systemShopSiteNavigationList'], []),
    }),
    [data],
  );

  return [convertData, run, loading, error];
};

export const useAllType = () => {
  const [data, run, loading, error] = useRequest(getAllType);

  const convertData = useMemo(() => get(data, ['objs'], []), [data]);

  return [convertData, run, loading, error];
};

export const useSelectSiteProductByType = (productType, size = 10) => {
  const [data, run, loading, error] = useRequest(selectSiteProductByType, { manual: true });

  useEffect(() => {
    run({ page: 1, productType, size });
  }, [productType, size]);

  const convertData = useMemo(() => map(get(data, ['objs', 'list'], []), item => productItemConvert(item)), [data]);

  return [convertData, run, loading, error];
};

export const useTermsInfo = serviceId => {
  const [data, run, loading, error] = useRequest(getTerms);
  const convertData = useMemo(() => {
    const d = get(data, ['objs'], []);
    if (serviceId) {
      return filter(d || [], item => item.servicesId == serviceId)[0];
    }
    return d;
  }, [data, serviceId]);
  return [convertData, run, loading, error];
};
