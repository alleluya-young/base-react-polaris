import React from 'react';
import { map } from 'lodash';
export const Rate = ({ name = 'rate', flex, fontSize = '18px', checkedIdx, disabled }) => {
  const rateArr = [0, 1, 2, 3, 4];
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: flex ? flex : 'center',
        alignItems: 'center',
        flexFlow: 'row-reverse',
        [`input[name="${name}"]::after`]: {
          color: '#ff4500',
          content: '"\\e645"',
          transition: 'color .4s ease',
        },
        [`input[name="${name}"]:checked::after, input[name="${name}"]:checked~input[name="${name}"]::after`]: {
          content: '"\\e73c"',
          color: '#ff4500',
        },
      }}
    >
      {map(rateArr, (item, idx) => {
        return disabled ? (
          <input
            key={idx + 'input'}
            css={{
              WebkitAppearance: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'iconfont',
              fontSize: fontSize,
            }}
            checked={checkedIdx === item ? true : false}
            type="radio"
            name={name}
            onChange={e => {
              console.log(e, '=============item');
            }}
          />
        ) : (
          <input
            key={idx + 'input'}
            css={{
              WebkitAppearance: 'none',
              border: 'none',
              outline: 'none',
              cursor: 'pointer',
              fontFamily: 'iconfont',
              fontSize: fontSize,
            }}
            type="radio"
            name={name}
            onChange={e => {
              console.log(e, '=============item');
            }}
          />
        );
      })}
    </div>
  );
};
