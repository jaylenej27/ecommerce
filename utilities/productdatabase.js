require('dotenv').config();

const postgres = require('postgres');
const sql = postgres();

export async function getProducts() {
  const products = await sql`
  SELECT * FROM shoes
  `;
  console.log(products)
  return products;
  
}

export async function getProductById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const product = await sql`
  SELECT * FROM shoes WHERE id = ${id}`;
  return product;
}

// export const shoes = [
//   {
//     id: '1',
//     name: 'Greenwood',
//     price: '150',
//     image: '/greenwood.jpg',
//     alttext:
//       'a pair of low heeled yellow shoes with blue cutouts on the side and toe box',
//     desc: 'low heel, leather sole, leather upper',
//   },
//   {
//     id: '2',
//     name: 'Seneca', 
//     price: '150',
//     image: '/seneca.jpg',
//     alttext: 'a pair of and cream shoes high heeled shoes in sandal style',
//     desc: 'mid heel, leather sole, leather upper',
//   },
//   {
//     id: '3',
//     name: 'Newport',
//     price: '150',
//     image: '/newport.jpg',
//     alttext: 'a pair of blue high heeled suede shoes with buckle',
//     desc: 'mid heel, leather sole, leather upper',
//   },
//   {
//     id: '4',
//     name: 'Eldorado', 
//     price: '150',
//     image: '/eldorado.jpg',
//     alttext: 'a pair of burgundy lace up boots',
//     desc: 'Flat boot, leather sole, leather upper',
//   },
// ];