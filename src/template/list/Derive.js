import { List } from './List';
import React from 'react';
import { useAllType } from '../../clients/hooks';
import { map } from 'lodash';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Stack } from '../../component/Stack';
import { useHistory } from 'react-router-dom';

export const Category = () => {
  const history = useHistory();
  const [data] = useAllType();
  return (
    <Stack
      inline
      css={{
        width: '100%',
        flexWrap: 'wrap',
        paddingLeft: '10%',
        marginTop: '2em',
        '> *': {
          width: '35%',
          marginRight: '10%',
          marginBottom: '1em',
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: '1em .3em',
        },
      }}
    >
      {map(data, item => (
        <ButtonBase
          key={item.id}
          onClick={() => {
            history.push(`/collections/${item.id}`);
          }}
        >
          <span>{item.text}</span>
        </ButtonBase>
      ))}
    </Stack>
  );
};
