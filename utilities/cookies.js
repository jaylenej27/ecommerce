import Cookie from 'js-cookie';

export function getProductFromCookies() {
  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const addToCart = Cookie.getJSON('addToCart') || [];
  
  return addToCart;
  
}

export function newProductFromCookies(id) {
  // ['1', '3']
  const previousCartList = getProductFromCookies();

  const newProductCart = [...previousCartList, {id: id}]
  Cookie.set('shoppingCart', newProductCart)
console.log(newProductCart)
  return newProductCart
}

export function removeProductFromCookies(id) {
  const productCart = getProductFromCookies();
  const newProductCart = productCart.filter((item) => item.id !== id);

  Cookie.set('cart', newProductCart);
  console.log('removed item, updated cart', newProductCart);

  return newProductCart;
}