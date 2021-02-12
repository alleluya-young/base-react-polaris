export * from './useRequest';

export const createRequestObject = (name, optionsMethod) => {
  return {
    name,
    optionsMethod,
  };
};
