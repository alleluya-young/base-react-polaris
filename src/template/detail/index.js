import React, { useCallback, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { map } from 'lodash';
// import { Icon } from '@shopify/polaris';
// import { ArrowLeftMinor, ArrowRightMinor } from '@shopify/polaris-icons';
const Item = props => {
  const { src } = props;
  return (
    <div
      css={{
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${src})`,
        width: 'auto',
        height: 360,
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
          ? 'translateX(calc(-70%))'
          : dir === 'PREV'
          ? 'translateX(calc(2 * (-70%)))'
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
  return <div css={{ width: '100%', flex: '1 0 100%', flexBasis: '80%', order: order }}>{props.children}</div>;
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
const GoodsSwiper = props => {
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
const SelectButton = () => {
  const colorType = ['NAVY', 'RED', 'KHAKI', 'BLACK'];
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <ul
      css={{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: 0,
        marginBottom: 0,
        '> li': {
          boxSizing: 'border-box',
          width: '30%',
          height: '2.5em',
          textAlign: 'center',
          padding: '.5em 0',
          margin: '.6em 0',
        },
      }}
    >
      {map(colorType, (item, idx) => (
        <li
          key={idx + 'li'}
          css={activeIdx === idx ? { border: '1px solid #1b1b1b' } : null}
          onClick={() => {
            setActiveIdx(idx);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
const Stepper = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span css={{ marginRight: '.5em' }}>Quantity</span>
      <div css={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '2em 0' }}>
        <button
          css={{
            width: '2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            backgroundColor: '#f6f6f6',
            border: 'none',
          }}
          onClick={() => setCounter(prevCount => (prevCount - 1 > 0 ? prevCount - 1 : 0))}
        >
          <svg width="14" height="14" viewBox="0 0 20 20">
            <path fill="#1c1d1d" d="M15 9H5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></path>
          </svg>
        </button>
        <input
          type="number"
          css={{
            width: '10vw',
            textAlign: 'center',
            height: '40px',
            color: '#1c1d1d',
            backgroundColor: '#f6f6f6',
            border: '1px solid #f1f1f1',
            borderTop: 0,
            borderBottom: 0,
            transition: 'opacity 0.4s ease-out',
          }}
          value={counter}
        />
        <button
          css={{
            width: '2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            backgroundColor: '#f6f6f6',
            border: 'none',
          }}
          onClick={() => setCounter(prevCount => prevCount + 1)}
        >
          <svg width="14" height="14" viewBox="0 0 20 20">
            <path
              fill="#1c1d1d"
              d="M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
const GoodsInfo = () => {
  return (
    <div css={{ padding: '0 3em' }}>
      <h2
        css={{
          textAlign: 'center',
          color: '#1c1b1b',
          fontSize: '2em',
          marginBottom: '15px',
          lineHeight: 1.4,
          fontWeight: '600',
        }}
      >
        Vintage Anchor Baseball Cap
      </h2>
      <div
        css={{
          display: 'flex',
          alingItems: 'center',
          justifyContent: 'center',
          letterSpacing: '.1em',
          fontSize: '1.2em',
          fontWeight: '600',
          marginBottom: '2em',
        }}
      >
        <span css={{ textDecoration: 'line-through' }}>$29.99</span>
        <span css={{ marginLeft: '.5em', color: '#ff1500' }}>$19.99</span>
      </div>
      <div css={{ margin: '15px 0 25px 0', display: 'flex', alingItems: 'center', justifyContent: 'center' }}>
        <span css={{ color: '#1b1b1b', marginRight: '.1em', textDecoration: 'underline' }}>Shipping</span>
        <span css={{ color: '#6a6a6a' }}>calculated at checkout.</span>
      </div>
      <hr css={{ borderWidth: '1px 0 0 0', width: '50px', margin: '20px auto', borderColor: '#f1f1f1' }} />
      <div css={{ textAlign: 'center', marginBottom: '1.2em' }}>Color</div>
      <SelectButton />
      <Stepper />
      <button
        css={{
          width: '100%',
          border: '1px solid #1b1b1b',
          color: '#1b1b1b',
          backgroundColor: '#fff',
          padding: '.6em 0',
        }}
      >
        ADD TO CART
      </button>
      <button
        css={{
          width: '100%',
          border: '1px solid #1b1b1b',
          color: '#fff',
          backgroundColor: '#1b1b1b',
          padding: '.6em 0',
          marginTop: '.5em',
        }}
      >
        BUY IT NOW
      </button>
      <div
        css={{
          color: '#6a6a6a',
          fontSize: '16px',
          strong: { fontWeight: '700' },
          '>hr': { borderWidth: '1px 0 0 0', width: '50px', margin: '20px auto 20px 0', borderColor: '#f1f1f1' },
          '>ul': {
            margin: '2em 0 0 1em',
            padding: 0,
            '>li': { lineHeight: 1.6, marginBottom: '.5em' },
          },
          '>img': { display: 'block', width: '100%', marginBottom: '20px' },
        }}
      >
        <img
          src="https://cdn.shopify.com/s/files/1/0365/9209/1271/files/3_676b9d32-5f4e-4c40-bfb2-602139db0efe.png"
          alt=""
          css={{ marginTop: '2em' }}
        />
        <ul>
          <li>
            <strong>Shipping </strong>&gt;&gt; Worldwide<strong> Express</strong> Shipping Available
          </li>
          <li>
            <strong>Delivery time </strong>&gt;&gt;<strong> Worldwide 7-15 days</strong>
          </li>
          <li>
            <strong>Handling time </strong>&gt;&gt; Ship with in<strong> 24hours</strong> after payment
          </li>
          <li>
            <strong>Tracking Number for Every Order</strong>
          </li>
        </ul>
        <hr />
        <div css={{ margin: '20px auto 20px 0' }}>
          Vintage Anchor is a maritime inspired cap that offers exceptional fit and function. This will keep you dry and
          comfortable through out all day
        </div>
        <img src="https://cdn.shopify.com/s/files/1/2603/6494/files/1-Recovered_large.jpg?v=1552552259" alt="" />
        <ul css={{ '>li': { lineHeight: 1.3 } }}>
          <li>Cotton & Polyester</li>
          <li>Unisex / Dad Hat</li>
          <li>Adjustable Strap</li>
          <li>Hat Size / 21.65 - 23.22 inches</li>
          <li>Navy, Red, Black, Khaki</li>
        </ul>
        <img
          src="https://cdn.shopify.com/s/files/1/2603/6494/files/download_b6c468aa-4e99-44fd-9fbf-e3df9d78e951_large.jpg?v=1552552277"
          alt=""
        />
        <div css={{ textAlign: 'center' }}>
          🌎&nbsp;<strong>Worldwide Shipping</strong>&nbsp;✈
        </div>
        <div css={{ margin: '20px auto 20px 0' }}>
          Please do note that shipping is insured and takes 7-15 business days worldwide. However, you may receive your
          items earlier. Tracking Numbers will ALWAYS be sent so you can track it every step of the way! Cool things are
          worth waiting for!
        </div>
        <hr />
        <div css={{ textAlign: 'center' }}>
          <strong>AFTER-SALE SERVICE</strong>
        </div>
        <ul css={{ '>li': { lineHeight: 1.3 } }}>
          <li>
            We truly believe we carry some of the most innovative products in the world, and we want to make sure we
            back that up with a risk-free ironclad 30-day guarantee.
          </li>
          <li>
            If you don't have a positive experience for ANY reason, we will do WHATEVER it takes to make sure you are
            100% satisfied with your purchase.
          </li>
          <li>We have 24/7/365 Ticket and Email Support. Please contact us if you need assistance.</li>
        </ul>
        <img
          src="https://cdn.shopify.com/s/files/1/2700/0658/files/trust2_1024x_991e88e0-93f2-48d9-a91a-fe5fc2eb7bca_large.png"
          alt=""
          css={{ marginTop: '2em' }}
        />
      </div>
    </div>
  );
};

export const Detail = () => {
  const history = useHistory();
  return (
    <div css={{ backgroundColor: '#fff' }}>
      {/* detail
      <Button
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>
      详情 */}
      <GoodsSwiper>
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/1111_ab7e8af3-9a6b-4f2a-9170-7e5c381477e0_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113448_d15a6413-0989-4a17-aa9e-efd005676ee1_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113433_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113435_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113436_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113444_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113446_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113442_360x.jpg?v=1611564424" />
        <Item src="https://cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/product-image-653113466_360x.jpg?v=1611564424" />
      </GoodsSwiper>
      <GoodsInfo />
    </div>
  );
};
