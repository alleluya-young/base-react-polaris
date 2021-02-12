import React from 'react';
import { Stack } from '../../component/Stack';

import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { CountOperate } from './CountOperate';

export const ProductItem = ({ onClick, product }) => {
  const { imgUrl, title, unit, lowPrice, originalPrice, id } = product;
  return (
    <Stack>
      <ButtonBase
        css={{ margin: '0 1em', padding: '1em 2em', borderRadius: '5px' }}
        onClick={() => {
          onClick && onClick();
        }}
      >
        <img src={imgUrl} css={{ maxWidth: '100%' }} />
      </ButtonBase>
      <ButtonBase
        css={{ margin: '0 1em', padding: '.3em 0' }}
        onClick={() => {
          onClick && onClick();
        }}
      >
        <Typography variant={'subtitle1'}>{title}</Typography>
      </ButtonBase>
      <Typography variant={'caption'} css={{ textAlign: 'center' }}>
        — {unit} {lowPrice}
      </Typography>
    </Stack>
  );
};

export const ProductItemLine = ({ ...otherProps }) => {
  return (
    <Stack inline css={{ padding: '.5em 0' }} {...otherProps}>
      <img
        css={{ width: '4em' }}
        src={
          'https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012462293_572990573_small.jpg?v=1611564633'
        }
      />
      <Stack justify={'center'} css={{ flexGrow: 1, marginLeft: '.8em' }}>
        <Typography variant={'subtitle1'}>产品名称</Typography>
        <Typography variant={'subtitle2'}>产品简介</Typography>
        <Stack inline justify={'space-between'} css={{ marginTop: '.3em' }}>
          <CountOperate />
          <Typography variant={'caption'} css={{ textAlign: 'center' }}>
            — $22.9
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
