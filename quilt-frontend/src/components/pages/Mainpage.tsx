import React, { useCallback, useEffect, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { toast } from "react-toastify";

import { useGunAccount } from "../../stores/useGunAccount";
import { useContracts } from "../../stores/useContracts";
import { useMessages } from "../../stores/useMessages";
import { useProvider } from "../../stores/useProvider";
import { useFriendsList } from "../../stores/useFriendsList";

import { storeFriendsList } from "../../modules/storage/storeFriendsList";
import { FriendListItem } from "../FriendListItem";
import { Auth } from "../chat/Auth";
import { Chat } from "../chat/Chat";
import { useUserData } from "../../stores/useUserData";

interface MainpageProps {}

export const Mainpage: React.FC<MainpageProps> = () => {
  const [friendInput, setFriendInput] = useState<string>("");
  const [isGeneratingSharedKey] = useState<boolean>(false);
  const provider = useProvider((state) => state.provider);
  const isGunLogged = useGunAccount((state) => state.isLogged);
  const isLogged = useUserData((state) => state.isLogged);
  const recieverAddress = useMessages((state) => state.recieverAddress);

  const initializedFriendsList = useFriendsList((state) => state.initialized);
  const friends = useFriendsList((state) => state.friends);
  const addFriend = useFriendsList((state) => state.addFriend);
  const removeFriend = useFriendsList((state) => state.removeFriend);
  const setRecieverAddress = useMessages((state) => state.setRecieverAddress);

  const keyStorage = useContracts((state) => state.contract);

  useEffect(() => {
    if (!(keyStorage && provider)) {
      return;
    }

    keyStorage.on("KeyPublished", (...args: any[]) => {
      console.log("new public key was published");
      console.log(args);
    });

    return () => {
      keyStorage.removeAllListeners();
    };
  }, [keyStorage, provider]);

  const handleAddFriend = useCallback(() => {
    toast.info(`Added new friend: ${friendInput}`);

    addFriend(friendInput.replace(/\s/g, ""), { username: "" });
    setFriendInput("");
  }, [addFriend, setFriendInput, friendInput]);

  const handleRemoveFriend = useCallback(
    (address: string) => {
      toast.info(`Removed a friend: ${address}`);
      removeFriend(address);
    },
    [removeFriend]
  );

  const handleSetFriend = (friendAddress: string) => {
    setRecieverAddress(friendAddress);
  };

  useEffect(() => {
    if (!Object.keys(friends).length && !initializedFriendsList) return;

    storeFriendsList(friends);
  }, [friends, initializedFriendsList]);

  return (
    <div className="flex flex-row justify-start h-[82vh] relative">
      <div className="w-1/4 px-5">
        <div className="text-2xl text-white mb-2 pt-6">Friends</div>
        <div className="flex flex-row items-center mb-4">
          <input
            id="friend"
            onChange={(e) => {
              setFriendInput(e.target.value);
            }}
            placeholder="Reciever address"
            name="address"
            value={friendInput}
            className="p-5 w-4/5 h-16 text-black rounded-lg"
          />
          <button
            onClick={() => handleAddFriend()}
            className="bg-gradient-to-bl from-sky-600 to-blue-700 text-white p-4 rounded-lg flex-1 h-16 w-16 ml-2 text-lg flex items-center justify-center"
          >
            <IoPersonAdd></IoPersonAdd>
          </button>
        </div>
        <div>
          {friends &&
            Object.keys(friends).map((element) => (
              <FriendListItem
                key={element}
                address={element}
                handleRemoveFriend={handleRemoveFriend}
                handleSetFriend={handleSetFriend}
              ></FriendListItem>
            ))}
        </div>
      </div>

      <div className="w-2/3 ml-10">
        {isGunLogged ? (
          isLogged &&
          recieverAddress && (
            <Chat isGeneratingSharedKey={isGeneratingSharedKey} />
          )
        ) : (
          <Auth />
        )}
      </div>
    </div>
  );
};
