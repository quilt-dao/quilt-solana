import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useCallback, useEffect } from "react";
import Gun from "gun";

import { readPrivateKey, readUsername } from "./modules/storage/storeAccount";
import { readFriendsList } from "./modules/storage/storeFriendsList";
import { createEllipticCurve } from "./modules/ECDH/curveFactory";
import { createEncryptor } from "./modules/encryption/encryption";
import { useGunAccount } from "./stores/useGunAccount";
import { Mainpage } from "./components/pages/Mainpage";
import { NavBar } from "./components/NavBar";
import { gunDbAddress } from "./constants/gundb";
import "react-toastify/dist/ReactToastify.css";

import { useEncryption } from "./stores/useEncryption";
import { useFriendsList } from "./stores/useFriendsList";
import { useGunConnection } from "./stores/useGunConnection";

function App() {
  const isGunLogged = useGunAccount((state) => state.isLogged);
  const setFriendsList = useFriendsList((state) => state.setFriends);
  const setGunConnection = useGunConnection((state) => state.setGunConnection);

  const setPrivateKey = useEncryption((state) => state.setPrivateKey);
  const setEncryptor = useEncryption((state) => state.setEncryptor);
  const setEllipticCurve = useEncryption((state) => state.setCurve);

  const initializeConctractInstance = useCallback(() => {}, []);

  const initailizeEllipticCurve = useCallback(() => {
    setEllipticCurve(createEllipticCurve("secp256r1"));
  }, [setEllipticCurve]);

  const initializeEncryptor = useCallback(() => {
    const encryptor = createEncryptor();

    setEncryptor(encryptor);
  }, [setEncryptor]);

  const initalizeAccount = useCallback(() => {
    const privateKey = readPrivateKey();
    const username = readUsername();

    if (!(privateKey && username)) {
      return;
    }

    setPrivateKey(privateKey);
  }, [setPrivateKey]);

  const initializeGunConnection = useCallback(() => {
    require("gun/sea");

    const gun = Gun({
      peers: [gunDbAddress],
    });

    setGunConnection(gun);
  }, [setGunConnection]);

  useEffect(() => {
    initializeConctractInstance();
    initailizeEllipticCurve();
    initializeEncryptor();
    initalizeAccount();
    initializeGunConnection();
  }, [
    initializeConctractInstance,
    initailizeEllipticCurve,
    initializeEncryptor,
    initalizeAccount,
    initializeGunConnection,
  ]);

  useEffect(() => {
    const friendsObject = readFriendsList();
    useFriendsList.getState().setInitialized(true);

    if (!friendsObject || Object.keys(friendsObject).length === 0) return;

    setFriendsList(friendsObject);
  }, [isGunLogged, setFriendsList]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
