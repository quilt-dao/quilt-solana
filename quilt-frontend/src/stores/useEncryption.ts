import create from "zustand";
import { EllipticCurveInterface } from "../modules/ECDH/curveFactory";
import { EncryptorInterface } from "../modules/encryption/encryption";

interface EncryptionStore {
  curve: EllipticCurveInterface | undefined;
  encryptor: EncryptorInterface | undefined;
  privateKey: string;
  setPrivateKey: (newKey: string) => void;
  setCurve: (newCurve: EllipticCurveInterface) => void;
  setEncryptor: (newEncryptor: EncryptorInterface) => void;
}

export const useEncryption = create<EncryptionStore>((set) => ({
  curve: undefined,
  encryptor: undefined,
  privateKey: "",
  setPrivateKey: (newKey: string) => set({ privateKey: newKey }),
  setCurve: (newCurve: EllipticCurveInterface) => set({ curve: newCurve }),
  setEncryptor: (newEncryptor: EncryptorInterface) =>
    set({ encryptor: newEncryptor }),
}));
