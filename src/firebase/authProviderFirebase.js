// import {
//     useEffect,
//     useState,
//     useContext,
//     createContext,
//     FunctionComponent,
// } from "react";

// import firebaseApp from './initFirebase'

// const AuthContext = createContext({
//     user: null,
//     loading: true,
//     logout: () => {},
// });

// const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const cancelAuthListner = firebaseApp.auth().onIdTokenChanged(u => {
//             setUser(u)
//             setLoading(false)
//         })
        
//         return () => cancelAuthListner();

//     }, [])

    

//     return (
//         <AuthContext.Provider
//             value ={{ user, loading, logout: () => firebaseApp.auth().signOut() }}
//         >
//           {children}
//         </AuthContext.Provider>
//     )
// }

// export { AuthProvider }