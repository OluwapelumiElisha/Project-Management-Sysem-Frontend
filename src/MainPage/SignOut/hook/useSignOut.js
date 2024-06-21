import { useCurrentUser } from "@/Shared/hook/useCurrentUser";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export const  useSignOut = () =>{
    const [showModal, setShowModal] = useState(false);
    const { handleLogout, currentUser  } = useCurrentUser()
    const handleLogoutClick = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        setShowModal(false);
        toast({
            title: `Hey ${currentUser?.userName}`,
            description: "Log Out Successfully...",
          });
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