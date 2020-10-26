const shoes = [
  {
    name: 'Greenwood',
    price: '150',
    image: '/greenwood.jpg',
    alttext:
      'a pair of low heeled yellow shoes with blue cutouts on the side and toe box',
    info: 'low heel, leather sole, leather upper',
  },
  {
    name: 'Seneca', 
    price: '150',
    image: '/seneca.jpg',
    alttext: 'a pair of and cream shoes high heeled shoes in sandal style',
    info: 'mid heel, leather sole, leather upper',
  },
  {
    name: 'Newport',
    price: '150',
    image: '/newport.jpg',
    alttext: 'a pair of blue high heeled suede shoes with buckle',
    info: 'mid heel, leather sole, leather upper',
  },
  {
    name: 'Eldorado', 
    price: '150',
    image: '/eldorado.jpg',
    alttext: 'a pair of burgundy lace up boots',
    info: 'Flat boot, leather sole, leather upper',
  },
];

exports.up = async (sql) => {
  // You can automate this:
  await sql`
    INSERT INTO shoes ${sql(shoes, 'name', 'price', 'image', 'alttext', 'info')}
  `;
  // Or, by hand:
  // await sql`
  //   INSERT INTO users (
  //     name,
  //     price,
  //     image,
  //     alttext,
  //     info
  //   ) VALUES (
  //     'Greenwood',
  //   );
  // `;
};

exports.down = async (sql) => {
  for (const shoe in shoes) {
    await sql`
      DELETE FROM shoes WHERE
        name = ${shoe.name}
    `;
  }
  // Or, by hand:
  // await sql`
  //   DELETE FROM users WHERE name = 'Greenwood';
  // `;
};