module.exports = function setPostgresDefaultsOnHeroku() {
  if (process.env.DATABASE_URL) {
    const url = require('url');

    // Extract the connection information from the Heroku
    // environment variable
    const { hostname, pathname, auth } = url.parse(process.env.DATABASE_URL);

    const [username, password] = auth.split(':');

    process.env.PGHOST = hostname;
    process.env.PGDATABASE = pathname.slice(1);
    process.env.PGUSERNAME = username;
    process.env.PGPASSWORD = password;
  }
};

require('dotenv').config();

const postgres = require('postgres');
const sql = process.env.NODE_ENV === 'production'
? // Heroku needs SSL connections but
  // has an "unauthorized" certificate
  // https://devcenter.heroku.com/changelog-items/852
  postgres({ ssl: { rejectUnauthorized: false } })
: postgres();

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