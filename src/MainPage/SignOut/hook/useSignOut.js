import { useCurrentUser } from "@/Shared/hook/useCurrentUser";
import { useState } from "react";

export const  useSignOut = () =>{
    const [showModal, setShowModal] = useState(false);
    const { handleLogout  } = useCurrentUser()
    const handleLogoutClick = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        setShowModal(false);
        handleLogout()
    };

    const handleCancelLogout = () => {
        setShowModal(false);
    };

    return{
        handleCancelLogout,
        handleConfirmLogout,
        handleLogoutClick,
        showModal
    }
}