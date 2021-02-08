import React, { Fragment } from 'react';
import { map } from 'lodash';
export const RecommendGoods = () => {
  const recommendList = [
    {
      dataSrcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_180x.jpg?v=1611564664 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_370x.jpg?v=1611564664 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_590x.jpg?v=1611564664 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_740x.jpg?v=1611564664 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_900x.jpg?v=1611564664 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1080x.jpg?v=1611564664 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1296x.jpg?v=1611564664 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1512x.jpg?v=1611564664 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1728x.jpg?v=1611564664 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_2048x.jpg?v=1611564664 2048w',
      srcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_180x.jpg?v=1611564664 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_370x.jpg?v=1611564664 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_590x.jpg?v=1611564664 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_740x.jpg?v=1611564664 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_900x.jpg?v=1611564664 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1080x.jpg?v=1611564664 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1296x.jpg?v=1611564664 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1512x.jpg?v=1611564664 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_1728x.jpg?v=1611564664 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/O1CN01dE08uN1Usw7jpfLek__2757292574-0-cib_2048x.jpg?v=1611564664 2048w',
      capName: 'Fashion Smiley Baseball Cap',
    },
    {
      dataSrcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_180x.jpg?v=1611564650 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_370x.jpg?v=1611564650 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_590x.jpg?v=1611564650 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_740x.jpg?v=1611564650 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_900x.jpg?v=1611564650 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1080x.jpg?v=1611564650 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1296x.jpg?v=1611564650 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1512x.jpg?v=1611564650 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1728x.jpg?v=1611564650 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_2048x.jpg?v=1611564650 2048w',
      srcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_180x.jpg?v=1611564650 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_370x.jpg?v=1611564650 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_590x.jpg?v=1611564650 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_740x.jpg?v=1611564650 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_900x.jpg?v=1611564650 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1080x.jpg?v=1611564650 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1296x.jpg?v=1611564650 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1512x.jpg?v=1611564650 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_1728x.jpg?v=1611564650 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/800-30S_2048x.jpg?v=1611564650 2048w',
      capName: 'Fashion Ediko Baseball Cap',
    },
    {
      dataSrcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_180x.jpg?v=1611564633 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_370x.jpg?v=1611564633 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_590x.jpg?v=1611564633 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_740x.jpg?v=1611564633 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_900x.jpg?v=1611564633 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1080x.jpg?v=1611564633 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1296x.jpg?v=1611564633 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1512x.jpg?v=1611564633 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1728x.jpg?v=1611564633 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_2048x.jpg?v=1611564633 2048w',
      srcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_180x.jpg?v=1611564633 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_370x.jpg?v=1611564633 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_590x.jpg?v=1611564633 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_740x.jpg?v=1611564633 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_900x.jpg?v=1611564633 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1080x.jpg?v=1611564633 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1296x.jpg?v=1611564633 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1512x.jpg?v=1611564633 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_1728x.jpg?v=1611564633 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/20012471060_572990573_2048x.jpg?v=1611564633 2048w',
      capName: 'Vintage Fist Baseball Cap',
    },
    {
      dataSrcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_180x.jpg?v=1611564623 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_370x.jpg?v=1611564623 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_590x.jpg?v=1611564623 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_740x.jpg?v=1611564623 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_900x.jpg?v=1611564623 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1080x.jpg?v=1611564623 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1296x.jpg?v=1611564623 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1512x.jpg?v=1611564623 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1728x.jpg?v=1611564623 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_2048x.jpg?v=1611564623 2048w',
      srcset:
        '//cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_180x.jpg?v=1611564623 180w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_370x.jpg?v=1611564623 370w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_590x.jpg?v=1611564623 590w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_740x.jpg?v=1611564623 740w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_900x.jpg?v=1611564623 900w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1080x.jpg?v=1611564623 1080w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1296x.jpg?v=1611564623 1296w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1512x.jpg?v=1611564623 1512w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_1728x.jpg?v=1611564623 1728w, //cdn.shopifycdn.net/s/files/1/0440/4409/1555/products/RRRR_916386a8-0f92-46df-8d10-a4e14199b9c5_2048x.jpg?v=1611564623 2048w',
      capName: 'Vintage Letter ROCK Baseball Cap',
    },
  ];
  return (
    <div>
      <h2 css={{ textAlign: 'center', fontWeight: '400', color: '#1b1b1b', fontSize: '1.6em' }}>You may also like</h2>
      <div css={{ position: 'relative', marginTop: '2.3em' }}>
        {map(recommendList, (item, idx) => (
          <Fragment key={idx + 'capImg'}>
            <img
              data-widths="[180, 370, 590, 740, 900, 1080, 1296, 1512, 1728, 2048]"
              data-aspectratio="1.0"
              data-sizes="auto"
              alt=""
              data-image=""
              data-srcset={item.dataSrcset}
              sizes="295px"
              srcSet={item.srcset}
            />
            <div css={{ textAlign: 'center', color: '#6a6a6a', margin: '2em 0 1em' }}>{item.capName}</div>
            <div css={{ textAlign: 'center', color: '#6a6a6a', margin: '1em 0 30px', fontSize: '12px' }}>— $19.99</div>
            <div
              css={{
                border: '1px solid #ff1500',
                padding: '11px 9px',
                lineHeight: 1,
                borderRadius: '999px',
                textTransform: 'uppercase',
                color: '#ff1500',
                position: 'absolute',
                top: '0',
                left: '-16px',
                fontSize: '14px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div>SAVE</div>
              <div>$10</div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
