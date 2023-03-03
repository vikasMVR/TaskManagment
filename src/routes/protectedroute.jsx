import {
    Navigate,
    useLocation,
} from "react-router-dom";
import { useUserAuth } from "../content/userAuthContext";

export default function ProtectedRoute({ children }) {
    const location = useLocation();
    const { user } = useUserAuth();
    console.log(user); 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}