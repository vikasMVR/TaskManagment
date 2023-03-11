import {
    Navigate,
    useLocation,
} from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

export default function ProtectedRoute({ children }) {
    const location = useLocation();
    const { user } = useUserAuth();
    console.log(user); 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}