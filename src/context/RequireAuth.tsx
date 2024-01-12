import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";

export const RequireAuth: React.FC<PropsWithChildren> = ({ children }) => {
    const { signed, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <></>;
    }

    if (!signed) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
