// import React from "react";
// import { auth } from "../services/firebase"

// var UserStateContext = React.createContext();
// var UserDispatchContext = React.createContext('');

// function userReducer(state:any, action:any) {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return { ...state, isAuthenticated: true };
//     case "SIGN_OUT_SUCCESS":
//       return { ...state, isAuthenticated: false };
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// function UserProvider({ children }) {
//   var [state, dispatch] = React.useReducer(userReducer, {
//     isAuthenticated: !!localStorage.getItem("id_token"),
//   });

//   return (
//     <UserStateContext.Provider value={state}>
//       <UserDispatchContext.Provider value={dispatch}>
//         {children}
//       </UserDispatchContext.Provider>
//     </UserStateContext.Provider>
//   );
// }

// function useUserState() {
//   var context = React.useContext(UserStateContext);
//   if (context === undefined) {
//     throw new Error("useUserState must be used within a UserProvider");
//   }
//   return context;
// }

// function useUserDispatch() {
//   var context = React.useContext(UserDispatchContext);
//   if (context === undefined) {
//     throw new Error("useUserDispatch must be used within a UserProvider");
//   }
//   return context;
// }

// export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };

// // ###########################################################

// function loginUser(dispatch: (arg0: { type: string; }) => void, login: any, password: any, history: string[], setIsLoading: (arg0: boolean) => void, setError: (arg0: boolean | null) => void) {
//   setError(false);
//   setIsLoading(true);

//   auth.signInWithEmailAndPassword(login, password)
//   .then((gResponse: { refreshToken: string; }) => {
//     console.log(gResponse); //response from firebase if success

//     localStorage.setItem('id_token', gResponse.refreshToken)
//     setError(null)
//     setIsLoading(false)
//     dispatch({ type: 'LOGIN_SUCCESS' })

//     history.push('/app/dashboard')
//   })
//   .catch(function(error: any) {
//     // Handle Errors here.
//     console.log(error);
//     dispatch({ type: "LOGIN_FAILURE" });
//     setError(true);
//     setIsLoading(false);
//   });
// }

// function signOut(dispatch: (arg0: { type: string; }) => void, history: string[]) {
//   auth().signOut().then(() => {
//     localStorage.removeItem("id_token");
//     dispatch({ type: "SIGN_OUT_SUCCESS" });
//     history.push("/login");
//   }).catch((error: any) => {
//     //handler signout error here
//   })
// }

export {}