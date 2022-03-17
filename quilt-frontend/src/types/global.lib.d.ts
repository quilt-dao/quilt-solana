import { IPFS } from "ipfs-core/src";

declare global {
  interface Window {
    ipfs: IPFS;
    ethereum: any;
    solana: any;
  }
}

window.ipfs = window.ipfs || {};
