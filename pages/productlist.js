// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import nextCookies from 'next-cookies';
// import Layout from '../../components/Layout';
// import { products } from '../utilities/productdatabase';
// import { toggleFollowUserInCookie } from '../../utilities/cookies';

// export default function ProductList(props) {
//   const [followingFromCookie, setFollowingFromCookie] = useState(
//     props.followingFromCookie,
//   );

//   const [usersWithFollowingData, setUsersWithFollowingData] = useState(users);

//   // Update the users every time that the
//   // "following" value changes
//   useEffect(() => {
//     setUsersWithFollowingData(
//       products.map((product) => {
//         // If the id of the user is in the
//         // array, then set following to true
//         // followingFromCookie = ['1', '2']

//         return {
//           ...product,
//           following: followingFromCookie.includes(product.id),
//         };
//       }),
//     );
//   }, [followingFromCookie, setUsersWithFollowingData]);

//   return (
//     <Layout>
//       <Head>
//         <title>User list</title>
//       </Head>

//       <h1>User List</h1>

//       <ul>
//         {usersWithFollowingData.map((product) => {
//           return (
//             <li key={product.id}>
//               {/* Create a link to /users/:id */}
//               <Link href={`/users/${product.id}`}>
//                 <a>
//                   {product.firstName} {product.lastName}
//                 </a>
//               </Link>

//               <button
//                 style={{
//                   marginLeft: 15,
//                   background: '#ddd',
//                   borderRadius: 5,
//                   border: 0,
//                   padding: '8px 14px 8px 11px',
//                 }}
//                 onClick={
//                   // Any onClick functions will be only
//                   // run in the browser
//                   () => {
//                     // Save the "following" attribute of the user
//                     // in the cookie
//                     const following = toggleFollowUserInCookie(product.id);
//                     setFollowingFromCookie(following);
//                   }
//                 }
//               ></button>
//             </li>
//           );
//         })}
//       </ul>
//     </Layout>
//   );
// }

// export function getServerSideProps(context) {
//   // nextCookies reads from context.req.headers.cookie
//   const allCookies = nextCookies(context);

//   // Use "|| []" in order to use a default
//   // value, in case this is undefined
//   const following = allCookies.following || [];

//   return {
//     props: {
//       followingFromCookie: following,
//       // Serialization will error out
//       // on values such as:
//       // following: undefined,
//       // date: new Date(),
//     },
//   };
// }
