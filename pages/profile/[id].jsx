// import { Skeleton } from "@mui/material";
// import axios from "axios";
// import moment from "moment/moment.js";
// import { useEffect, useState } from "react";
// import { QuoteCard } from "../../Components/QuoteCard/QuoteCard.jsx";
// import Head from "next/head.js";

// function Profile({ id }) {
//   const [userData, setUserData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const getUser = async (id) => {
//     setIsLoading(true);
//     try {
//       const { data } = await axios.get(
//         `https://note-keep-6545.vercel.app/user/${id}`
//       );
//       setUserData(data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     getUser(id);
//   }, [id]);

//   if (isLoading || !userData) {
//     return (
//       <section className="profileBg vh-100">
//         <div className="overlay align-items-center d-flex">
//           <div className="container bg-dark bg-opacity-50 rounded-5 p-5">
//             <div className="row text-light text-center">
//               <h1 className="text-center fw-bolder mb-5">PROFILE</h1>
//               <h4 className="col-md-6 mb-4 d-flex flex-column align-items-center">
//                 <span className="fw-bold">First Name</span>{" "}
//                 <Skeleton animation="wave" width={300} />
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column align-items-center">
//                 <span className="fw-bold">Last Name</span>{" "}
//                 <Skeleton animation="wave" width={300} />
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column align-items-center">
//                 <span className="fw-bold">User Name</span>{" "}
//                 <Skeleton animation="wave" width={300} />
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column align-items-center">
//                 <span className="fw-bold">Email</span>{" "}
//                 <Skeleton animation="wave" width={300} />
//               </h4>
//               <h4 className="col-md-12 mb-4 d-flex flex-column align-items-center">
//                 <span className="fw-bold">Account Created At</span>{" "}
//                 <Skeleton animation="wave" width={300} />
//               </h4>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <>
//       <Head>
//         <title>{userData.user.userName}</title>
//         <meta
//           name="description"
//           content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <section
//         className={`profileBg ${userData.userNotes.length == 0 && "vh-100"}`}
//       >
//         <div className="overlay align-items-center d-flex ">
//           <div className="container bg-dark bg-opacity-50 rounded-5 p-5">
//             <div
//               className={`row text-light text-center ${
//                 userData.userNotes.length > 0 && "mt-5"
//               }`}
//             >
//               <h1 className="text-center fw-bolder mb-5">PROFILE</h1>
//               <h4 className="col-md-6 mb-4 d-flex flex-column">
//                 <span className="fw-bold">First Name</span>{" "}
//                 <span className="text-info">{userData.user.firstName}</span>
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column">
//                 <span className="fw-bold">Last Name</span>{" "}
//                 <span className="text-info">{userData.user.lastName}</span>
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column">
//                 <span className="fw-bold">User Name</span>{" "}
//                 <span className="text-info">{userData.user.userName}</span>
//               </h4>
//               <h4 className="col-md-6 mb-4 d-flex flex-column">
//                 <span className="fw-bold">Email</span>{" "}
//                 <span className="text-info">{userData.user.email}</span>
//               </h4>
//               <h4 className="col-md-12 d-flex flex-column">
//                 <span className="fw-bold">Account Created At</span>{" "}
//                 <span className="text-info">
//                   {moment(userData.user.createdAt).format("LLL")}
//                 </span>
//               </h4>
//               {userData.userNotes.length > 0 && (
//                 <div className="row justify-content-center align-items-center">
//                   <h1 className="text-center fw-bolder mt-5">QUOTES</h1>
//                   {userData.userNotes.map((quote) => (
//                     <div className="col-md-6 p-5">
//                       <QuoteCard
//                         key={quote._id}
//                         quoteId={quote._id}
//                         quoteUID={quote.author}
//                         title={quote.title}
//                         quote={quote.description}
//                         by={"Me"}
//                         at={moment(quote.createdAt).format("LL")}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export async function getStaticPaths(context) {
//   const { params } = context;
//   const { id } = params;
//   return {
//     props: {
//       id,
//     },
//   };
// }

// export default Profile;
