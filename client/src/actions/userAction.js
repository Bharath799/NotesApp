// import axios from "axios";

// export const setNotes = notes => {
//   return { type: "SET_NOTES", payload: notes };
// };

// export const startGetNotes = () => {
//   return dispatch => {
//     axios
//       .get("http://localhost:3016/notes", {
//         headers: {
//           "x-auth": localStorage.getItem("authToken")
//         }
//       })
//       .then(response => {
//         const notes = response.data;
//         console.log("SET USERS", notes);
//         dispatch(setNotes(notes));
//       });
//   };
// };
