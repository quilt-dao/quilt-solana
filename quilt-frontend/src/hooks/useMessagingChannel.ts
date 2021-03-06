import { useEffect } from "react";
import { useGunConnection } from "../stores/useGunConnection";
import { useMessages } from "../stores/useMessages";
import { useUserData } from "../stores/useUserData";

export const useMessagingChannel = (recieverAddress: string) => {
  const gun = useGunConnection((state) => state.gun);
  const userAddress = useUserData((state) => state.address);
  const addMessage = useMessages((state) => state.addMessage);

  // Listening
  useEffect(() => {
    if (!gun) return;

    const messages = gun.get(userAddress);
    messages.map().on((...props) => {
      const m = props[0];
      addMessage(m, undefined);
    });

    return () => {
      messages.off();
    };
  }, [gun, userAddress, addMessage]);

  // Listening to user messages
  useEffect(() => {
    if (!gun) return;
    if (!recieverAddress) return;

    const messages = gun.get(recieverAddress);
    messages.map().on((...props) => {
      const messages = props[0];

      if (props[0].name === userAddress) {
        addMessage(messages, recieverAddress);
      }
    });

    return () => {
      messages.off();
    };
  }, [gun, recieverAddress, userAddress, addMessage]);
};
