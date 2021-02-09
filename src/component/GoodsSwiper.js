import React, { useReducer } from 'react';
import { useSwipeable } from 'react-swipeable';
export const Item = props => {
  const { src } = props;
  return (
    <div
      css={{
        backgroundSize: '100% 100%',
        backgroundImage: `url(${src})`,
        margin:'0 auto',
        width: '100vw',
        height: '100vw',
      }}
    ></div>
  );
};
const CarouselContainer = props => {
  const { sliding, dir } = props;
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        transition: sliding ? 'none' : 'transform 1s ease',
        transform: !sliding
          ? 'translateX(calc(-100%))'
          : dir === 'PREV'
          ? 'translateX(calc(2 * (-100%)))'
          : 'translateX(0%)',
      }}
    >
      {props.children}
    </div>
  );
};
const Wrapper = props => {
  return <div css={{ width: '100%', overflow: 'hidden' }}>{props.children}</div>;
};
const CarouselSlot = props => {
  const { order } = props;
  return <div css={{ width: '100%', flex: '1 0 100%', order: order }}>{props.children}</div>;
};
const initialState = { pos: 0, sliding: false, dir: 'NEXT' };
const reducer = (state, { type, numItems }) => {
  console.log(state, '========this.state.');
  console.log(type, '=====tyupe/*  */');
  switch (type) {
    case 'reset':
      return initialState;
    case 'PREV':
      return {
        ...state,
        dir: 'PREV',
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1,
      };
    case 'NEXT':
      return {
        ...state,
        dir: 'NEXT',
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1,
      };
    case 'stopSliding':
      return { ...state, sliding: false };
    default:
      return state;
  }
};
const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

export const GoodsSwiper = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: 'stopSliding' });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide('NEXT'),
    onSwipedRight: () => slide('PREV'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div {...handlers}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {props.children.map((child, index) => {
            return (
              <CarouselSlot key={index} order={getOrder({ index: index, pos: state.pos, numItems })}>
                {child}
              </CarouselSlot>
            );
          })}
        </CarouselContainer>
      </Wrapper>
      {/* <div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Icon
          source={ArrowLeftMinor}
          backdrop={true}
          onClick={() => {
            console.log('11111111');
            slide('PREV');
          }}
        />
        <Icon
          source={ArrowRightMinor}
          backdrop={true}
          onClick={() => {
            slide('NEXT');
          }}
        />
      </div> */}
    </div>
  );
};
