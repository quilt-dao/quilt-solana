import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

import { useUserData } from "../stores/useUserData";

import { LoadableButton } from "./base/LoadableButton";

import Logo from "../assets/quilt.png";
import { trimEthereumAddress } from "../helpers/trimEthereumAddress";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const login = useUserData((state) => state.login);
  const logout = useUserData((state) => state.logout);
  const isLogged = useUserData((state) => state.isLogged);

  const address = useUserData((state) => state.address);

  const handleConnectWallet = useCallback(async () => {
    try {
      setIsConnecting(true);
      console.log(window.solana);
      if (!window.solana) throw new Error("Cannot find Phantom wallet");

      const resp = await window.solana.connect();
      const address = resp.publicKey.toString();

      login(address);
      setIsConnecting(false);
    } catch (error: any) {
      toast.error(error.message);
      setIsConnecting(false);
    }
  }, [login]);

  useEffect(() => {
    if (!window.solana) return;
    handleConnectWallet();
  }, [handleConnectWallet]);

  const handleDisconnectWallet = () => {
    window.solana.request({ method: "disconnect" });
    logout();
  };

  return (
    <div className="h-[11vh] w-full flex flex-row justify-center border-b border-gray-700">
      <div className="w-5/6  flex flex-row justify-between align-middle items-center">
        <NavLink className="logo-button" to="/">
          <img src={Logo} alt="logo" className="w-28" />
        </NavLink>
        <div className="flex flex-row">
          {isLogged ? (
            <>
              <LoadableButton
                isLoading={false}
                description="disconnect"
                handleClick={() => handleDisconnectWallet()}
                className="bg-gradient-to-bl from-sky-600 to-blue-700 text-white p-4 rounded-lg w-60 h-16 m-2 text-lg mr-4"
              />
              <LoadableButton
                isLoading={false}
                description={trimEthereumAddress(address, 16)}
                className="border-2 border-sky-600 p-4 rounded-lg text-white w-60 h-16 m-2 text-xl hover:scale-95 transition-all duration-75"
                navigate="/profile"
              />
            </>
          ) : (
            <LoadableButton
              isLoading={isConnecting}
              description="connect wallet"
              handleClick={() => handleConnectWallet()}
              className="bg-gradient-to-bl from-sky-600 to-blue-700 p-4 rounded-lg text-white w-60 h-16 m-2 text-lg mr-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};
