// import axios from 'axios';

// const registerUser = async (userData) => {
//     try {
//         const response = await axios.post('http://localhost:8800/api/auth/register', userData, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log('Registration successful:', response.data);
//         return response.data;
//     } catch (error) {
//         if (error.response) {
//             // The request was made, but the server responded with a status code
//             console.error('Error data:', error.response.data);
//             console.error('Error status:', error.response.status);
//             console.error('Error headers:', error.response.headers);
//         } else if (error.request) {
//             // The request was made, but no response was received
//             console.error('No response received:', error.request);
//         } else {
//             // Something happened in setting up the request that triggered an error
//             console.error('Error message:', error.message);
//         }
//         throw error; // Optionally re-throw the error
//     }
// };

// // Example usage
// const userData = {
//     username: 'testUser',
//     email: 'test@example.com',
//     password: 'testPassword'
// };

// // Call the function
// registerUser(userData);

// try {
//     console.log(inputs);
//     const response = await axios.post(
//       "http://localhost:8800/api/auth/register",
//       userData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log("Registration successful:", response.data);
//     return response.data;
//   } catch (error) {
//     if (error.response) {
//       // The request was made, but the server responded with a status code
//       console.error("Error data:", error.response.data);
//       console.error("Error status:", error.response.status);
//       console.error("Error headers:", error.response.headers);
//     } else if (error.request) {
//       // The request was made, but no response was received
//       console.error("No response received:", error.request);
//     } else {
//       // Something happened in setting up the request that triggered an error
//       console.error("Error message:", error.message);
//     }
//     throw error; // Optionally re-throw the error
//   }
