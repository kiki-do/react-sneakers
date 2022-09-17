export const calcTotalPrice = (items) => {
  items.reduce((sum, obj) => {
    return obj.price + sum;
  }, 0);
};
