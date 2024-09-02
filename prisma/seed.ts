// import { PrismaClient } from '@prisma/client';

// // initialize Prisma Client
// const prisma = new PrismaClient();

// type users={
//   name:string;
  
// }

// async function main() {
//   //creating country with state and cities
//   const india = await prisma.country.create({
//     data:{
//       name:"india",
//       state:{
//         create:[
//           {
//             name:"tamilnadu",
//             city:{
//               create:[
//                 {
//                 name:"chennai"
//               },
//               {
//                 name:"kanchepuram"
//               }
//               ]
//             }
//           },
//           {
//             name:"Kerala",
//             city:{
//               create:[
//                 {
//                   name:"kochi",
//                 },
//                 {
//                   name:"alappi"
//                 }
//               ]
//             }
//           }
//         ]
//       }
//     }
//   });
//     const usa = await prisma.country.create({
//     data:{
//       name:"united states",
//       state:{
//         create:[
//           {
//             name:"california",
//             city:{
//               create:[
//                 {
//                 name:"Los Angeles"
//               },
//               {
//                 name:"San Francisco"
//               }
//               ]
//             }
//           },
//           {
//             name:"New york",
//             city:{
//               create:[
//                 {
//                   name:"New york city",
//                 },
//                 {
//                   name:"Albany"
//                 }
//               ]
//             }
//           }
//         ]
//       }
//     }
//   });

// // creating authors
// const author1= await prisma.author.create({
//   data: {
//       name: 'vrishab vinayak',
//       email: 'vrishab4252@gmail.com',
//       Dob: '2004-02-25',
//       country: { connect: { id: usa.id } },
//       state: { connect: { id: usa.state[0]}},
//       city: { connect: { id: usa.state[0].city[0].id } }
//     }
// });

//     const author2= await prisma.author.create({
//   data: {
//       name: 'sanjay vinayak',
//       email: 'sanjay4252@gmail.com',
//       Dob: '2004-02-25',
//       country: { connect: { id: usa.id } },
//       state: { connect: { id:usa.} },
//       city: { connect: { id: usa.state[0].city[0].id } }
//     }
// });
//     const author3 = await prisma.author.create({
//       data: {
//       name: 'sudharsan',
//       email: 'sudharsan4252@gmail.com',
//       Dob: '2004-02-25',
//       country: { connect: { id: usa.id } },
//       state: { connect: { id: india.state[0]} },
//       city: { connect: { id: usa.state[0].city[0].id } }
//     }
//     });
//     //books
//     const book1 = await prisma.book.create({
//     data: {
//       name: 'sun',
//       publishedAt: '2021-07-15',
//       authors: {
//         create: { authorId: author2.id }
//       }
//     }
//   });
//   const book2 = await prisma.book.create({
//     data: {
//       name: 'moon',
//       publishedAt: '2021-07-15',
//       authors: {
//         create: { authorId: author1.id }
//       }
//     }
//   });
//   const book3 = await prisma.book.create({
//     data: {
//       name: 'sea',
//       publishedAt: '2021-04-15',
//       authors: {
//         create: { authorId: author3.id }
//       }
//     }
//   });
// }
// // execute the main function
// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     // close Prisma Client at the end
//     await prisma.$disconnect();
//   });