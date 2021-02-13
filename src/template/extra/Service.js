import React from 'react';
import { useTermsInfo } from '../../clients/hooks';
import { useRouteMatch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export const Service = () => {
  const match = useRouteMatch();
  const [data] = useTermsInfo(match.params.id);

  return (
    <div css={{ padding: '1em 1.8em' }}>
      <Typography variant={'h6'} align={'center'}>
        {data?.shopServiceName}
      </Typography>
      <Typography variant={'body2'} css={t => ({ color: t.color.textLight, marginTop: '1.8em' })}>
        {data?.shopServiceValue}
      </Typography>
    </div>
  );
};
