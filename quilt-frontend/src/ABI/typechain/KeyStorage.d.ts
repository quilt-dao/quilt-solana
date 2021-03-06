/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface KeyStorageInterface extends ethers.utils.Interface {
  functions: {
    "getUserKey(address)": FunctionFragment;
    "getUsername(address)": FunctionFragment;
    "isUsernameAvailable(string)": FunctionFragment;
    "setUserKey(uint256,uint256)": FunctionFragment;
    "setUsername(string)": FunctionFragment;
    "takenUsernames(bytes32)": FunctionFragment;
    "usernames(address)": FunctionFragment;
    "usersToKeys(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getUserKey", values: [string]): string;
  encodeFunctionData(functionFragment: "getUsername", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isUsernameAvailable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUserKey",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setUsername", values: [string]): string;
  encodeFunctionData(
    functionFragment: "takenUsernames",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "usernames", values: [string]): string;
  encodeFunctionData(functionFragment: "usersToKeys", values: [string]): string;

  decodeFunctionResult(functionFragment: "getUserKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUsername",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isUsernameAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setUserKey", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUsername",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "takenUsernames",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usernames", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usersToKeys",
    data: BytesLike
  ): Result;

  events: {
    "KeyPublished(address)": EventFragment;
    "UsernameChanged(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "KeyPublished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UsernameChanged"): EventFragment;
}

export type KeyPublishedEvent = TypedEvent<[string] & { publisher: string }>;

export type UsernameChangedEvent = TypedEvent<
  [string, string] & { userAddress: string; username: string }
>;

export class KeyStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KeyStorageInterface;

  functions: {
    getUserKey(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }]>;

    getUsername(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isUsernameAvailable(
      username: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setUserKey(
      _x: BigNumberish,
      _y: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUsername(
      newUsername: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    takenUsernames(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    usernames(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    usersToKeys(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;
  };

  getUserKey(
    userAddress: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  getUsername(userAddress: string, overrides?: CallOverrides): Promise<string>;

  isUsernameAvailable(
    username: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setUserKey(
    _x: BigNumberish,
    _y: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUsername(
    newUsername: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  takenUsernames(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  usernames(arg0: string, overrides?: CallOverrides): Promise<string>;

  usersToKeys(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

  callStatic: {
    getUserKey(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;

    getUsername(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    isUsernameAvailable(
      username: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setUserKey(
      _x: BigNumberish,
      _y: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setUsername(newUsername: string, overrides?: CallOverrides): Promise<void>;

    takenUsernames(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    usernames(arg0: string, overrides?: CallOverrides): Promise<string>;

    usersToKeys(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { x: BigNumber; y: BigNumber }>;
  };

  filters: {
    "KeyPublished(address)"(
      publisher?: null
    ): TypedEventFilter<[string], { publisher: string }>;

    KeyPublished(
      publisher?: null
    ): TypedEventFilter<[string], { publisher: string }>;

    "UsernameChanged(address,string)"(
      userAddress?: null,
      username?: null
    ): TypedEventFilter<
      [string, string],
      { userAddress: string; username: string }
    >;

    UsernameChanged(
      userAddress?: null,
      username?: null
    ): TypedEventFilter<
      [string, string],
      { userAddress: string; username: string }
    >;
  };

  estimateGas: {
    getUserKey(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUsername(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUsernameAvailable(
      username: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUserKey(
      _x: BigNumberish,
      _y: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUsername(
      newUsername: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    takenUsernames(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    usernames(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    usersToKeys(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getUserKey(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUsername(
      userAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUsernameAvailable(
      username: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUserKey(
      _x: BigNumberish,
      _y: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUsername(
      newUsername: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    takenUsernames(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usernames(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    usersToKeys(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
