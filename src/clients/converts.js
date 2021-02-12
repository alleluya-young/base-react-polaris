export const productItemConvert = product => {
  return {
    ...product,
    imgUrl: product.affProductImageS3Url || product.imageUrl,
    title: product.affProductName,
    unit: product.currencySymbol,
    lowPrice: product.lowPrice,
    originalPrice: product.originalPrice,
    id: product.randomChar,
  };
};
