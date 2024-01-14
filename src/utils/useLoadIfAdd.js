import { useLocation } from "react-router-dom";

export const useLoadIfAdd = () => {
    const location = useLocation();
    return location.pathname.includes("add");
}
