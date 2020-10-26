export const shoes = [
  {
    id: '1',
    name: 'Greenwood',
    
    price: '150',
    image: '/greenwood.jpg',
    alttext:
      'a pair of low heeled yellow shoes with blue cutouts on the side and toe box',
    desc: 'low heel, leather sole, leather upper',
  },
  {
    id: '2',
    name: 'Seneca',
    
    price: '150',
    image: '/seneca.jpg',
    alttext: 'a pair of and cream shoes high heeled shoes in sandal style',
    desc: 'mid heel, leather sole, leather upper',
  },
  {
    id: '3',
    name: 'Newport',
    
    price: '150',
    image: '/newport.jpg',
    alttext: 'a pair of blue high heeled suede shoes with buckle',
    desc: 'mid heel, leather sole, leather upper',
  },
  {
    id: '4',
    name: 'Eldorado',
    
    price: '150',
    image: '/eldorado.jpg',
    alttext: 'a pair of burgundy lace up boots',
    desc: 'Flat boot, leather sole, leather upper',
  },
];


// import postgres from 'postgres';
// import dotenv from 'dotenv';

// dotenv.config();

// const sql = postgres();

// If you want to use the connection string instead for testing,
// you can try this:
//
// const sql = postgres('postgres://username:password@localhost:5432/database')

// export async function getShoes() {
//   const shoes = await sql`
//     SELECT * FROM shoes;
//   `;
// return shoes;

// };

// export async function getShoeById(id) {
  // Return undefined if the id is not
  // in the correct format
  // if (!/^\d+$/.test(id)) return undefined;

//   const shoe = await sql`
//     SELECT * FROM shoes WHERE id = ${id};
//   `;
//   return shoe;

  
// };