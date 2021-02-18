import React from 'react';
import { useTermsInfo } from '../../clients/hooks';
import { Stack } from '../../component/Stack';
import { map } from 'lodash';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

export const Footer = () => {
  const history = useHistory();
  const [data] = useTermsInfo();
  return (
    <Stack align={'center'} css={{ marginTop: '3em' }}>
      {map(data, item => (
        <Button
          key={item.servicesId}
          css={t => ({ padding: 0, borderRadius: 0, color: t.color.textLight })}
          onClick={() => {
            history.push(`/service/${item.servicesId}`);
          }}
        >
          {item.shopServiceName}
        </Button>
      ))}
    </Stack>
  );
};
