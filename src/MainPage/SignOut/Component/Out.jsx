import { useCurrentUser } from '@/Shared/hook/useCurrentUser';
import React from 'react';
import { useSignOut } from '../hook/useSignOut';

const Out = () => {
  const { currentUser,  } = useCurrentUser()
  const { handleCancelLogout, handleConfirmLogout, handleLogoutClick, showModal}  = useSignOut()

    return (
        <div className="flex items-center justify-center  bg-white">
            <button
                onClick={handleLogoutClick}
                className="mt-[20%] bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 focus:outline-none"
            >
                Logout
            </button>
            
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6">
                        <h2 className="text-xl mb-4">{currentUser?.userName} are you sure you want to logout?</h2>
                        <div className="flex justify-end">
                            <button
                                onClick={handleCancelLogout}
                                className="bg-gray-300 text-black px-4 py-2 rounded mr-2 hover:bg-gray-400 focus:outline-none"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleConfirmLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Out;

