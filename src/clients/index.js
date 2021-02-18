import { createRequestObject } from '../core/request';

//查询首页显示数据
export const getIndexPage = createRequestObject('getIndexPage', () => {
  return {
    url: '/api-shop-isw/indexPage/getIndexPage/',
    method: 'post',
    data: {},
  };
});

//查询购物车信息
export const findShoppingCart = createRequestObject('findShoppingCart', () => {
  return {
    url: '/api-shop-isw/orderNew/findShoppingCart/',
    method: 'post',
  };
});
//查询商城基础信息，独立站或单个商品站点投递
export const geMarketing = createRequestObject('geMarketing', () => {
  return {
    url: '/api-shop-isw/productIndex/geMarketing/',
    method: 'post',
    data: {},
  };
});

//查询所有类别
export const getAllType = createRequestObject('getAllType', () => {
  return {
    url: '/api-shop-isw/type/getAllType/',
    method: 'post',
    data: {},
  };
});

//查询所有类别
export const getTranslatePageByYn = createRequestObject('getTranslatePageByYn', ({ yn }) => {
  return {
    url: '/api-shop-isw/es/getTransalatePageByYn/',
    method: 'post',
    data: { yn },
  };
});

//查询所有类别
export const getTerms = createRequestObject('getTerms', () => {
  return {
    url: '/api-shop-isw/terms/getTerms/',
    method: 'post',
    data: {},
  };
});

//查询类型商品
export const selectSiteProductByType = createRequestObject('selectSiteProductByType', ({ page, productType, size }) => {
  return {
    url: '/api-shop-isw/IswProduct/selectSiteProductByType/',
    method: 'post',
    data: { page, productType, size },
  };
});

//查询类型数据
export const getIswProductType = createRequestObject('getIswProductType', ({ id }) => {
  return {
    url: '/api-shop-isw/indexPage/getIswProductType/',
    method: 'post',
    data: {
      id, //查询类型类型id
    },
  };
});

//查询商品详情
export const getProduct = createRequestObject('getProduct', ({ randomChar }) => {
  return {
    url: '/api-shop-isw/productIndex/getProduct/',
    method: 'post',
    data: {
      randomChar, //商品随机标识码
    },
  };
});

//保存商品ES日志
export const saveEsLog = createRequestObject('saveEsLog', ({ inShop, inShopSite, model, orderAreaId, request }) => {
  return {
    url: '/api-shop-isw/EsNginxlog/saveEsLog/',
    method: 'post',
    data: {
      inShop, //域名标识
      inShopSite, //站点标识
      model, //服务模块
      orderAreaId, //订单地区ID
      request, //记录请求
    },
  };
});

//查询评论
export const getReview = createRequestObject('getReview', ({ affProductId, page, size }) => {
  return {
    url: '/api-shop-isw/review/getReview/',
    method: 'post',
    data: {
      affProductId, //商品id
      page, //页数
      size, //每页条数
    },
  };
});

//查询推荐商品
export const getConnectProduct = createRequestObject('getConnectProduct', ({ randomChar }) => {
  return {
    url: '/api-shop-isw/productIndex/getConnectProduct/',
    method: 'post',
    data: {
      randomChar, //商品随机标识码
    },
  };
});

//保存商品分享记录
export const saveSharingRecord = createRequestObject(
  'saveSharingRecord',
  ({ affProductId, affProductName, inShop, inShopSite, orderAreaId, productSn, sharingPlace, sharingType }) => {
    return {
      url: '/api-shop-isw/sharingRecord/saveSharingRecord',
      method: 'post',
      data: {
        affProductId, //商品id
        affProductName, //商品名称
        inShop, //域名编号
        inShopSite, //站点编号
        orderAreaId, //地区id
        productSn, //商品编号
        sharingPlace, //分享地址
        sharingType, //分享类型
      },
    };
  },
);

//查询最后总价
export const finalPrice = createRequestObject('finalPrice', carts => {
  return {
    url: '/api-shop-isw/orderNew/finalPrice/',
    method: 'post',
    data: carts,
  };
});

//保存结算信息
export const saveSettlement = createRequestObject('saveSettlement', carts => {
  return {
    url: '/api-shop-isw/orderNew/saveSettlement/',
    method: 'post',
    data: carts,
  };
});

//获取结算信息
export const findSettlement = createRequestObject('findSettlement', carts => {
  return {
    url: '/api-shop-isw/orderNew/findSettlement/',
    method: 'post',
    data: carts,
  };
});

//查询订单信息
export const selectFindOrderSn = createRequestObject('selectFindOrderSn', ({ orderAddressMobile, orderSn, yn }) => {
  return {
    url: '/api-shop-isw/orderNew/selectFindOrderSn/',
    method: 'post',
    data: {
      orderAddressMobile, //订单手机
      orderSn, //订单标识
      yn,
    },
  };
});

//在线支付
export const orderOnlinePayment = createRequestObject('orderOnlinePayment', params => {
  return {
    url: '/api-shop-isw/orderNew/orderOnlinePayment/',
    method: 'post',
    data: params,
  };
});

//查询地区信息
export const selectAreaById = createRequestObject('selectAreaById', ({ id }) => {
  return {
    url: '/api-shop-isw/tAreaManagemen/selectById/',
    method: 'post',
    data: {
      id, //地区id
    },
  };
});

//查询成功
export const getSuccessPage = createRequestObject('getSuccessPage', () => {
  return {
    url: '/api-shop-isw/indexPage/getSuccessPage/',
    method: 'post',
  };
});

//查询成功
export const selectSiteProduct = createRequestObject('selectSiteProduct', ({ page, size, typeName }) => {
  return {
    url: '/api-shop-isw/IswProduct/selectSiteProduct/',
    method: 'post',
    data: {
      page,
      size,
      typeName,
    },
  };
});

//购物车记录
export const getCartRecommend = createRequestObject('getCartRecommend', () => {
  return {
    url: '/api-shop-isw/indexPage/getCartRecommend/',
    method: 'post',
  };
});

//添加购物车
export const saveShoppingCart = createRequestObject('saveShoppingCart', params => {
  return {
    url: '/api-shop-isw/orderNew/saveShoppingCart/',
    method: 'post',
    data: params,
  };
});

//删除购物车中选中的商品
export const deleteShoppingCart = createRequestObject('deleteShoppingCart', ({ skuIds }) => {
  return {
    url: '/api-shop-isw/orderNew/deleteShoppingCart/',
    method: 'post',
    data: {
      skuIds, //skuid列表
    },
  };
});
