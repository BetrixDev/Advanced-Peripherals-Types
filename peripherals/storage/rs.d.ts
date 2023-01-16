import { Item, StorageBridge, StorageItemStack } from "./common";

/** The [RS Bridge](https://docs.intelligence-modding.de/1.19/peripherals/rs_bridge/) is able to interact with Refined Storage.
 *  You can retrieve items, craft items, get all items as a list and more.
 * ```ts
 *  peripheral.find("rsBridge")
 * ```
 * @noSelf
 */
export interface RSBridge extends StorageBridge {
  /** Returns the crafting pattern of this item. */
  getPattern(item: Item): RSCraftingPattern | null;

  /** Returns the total amount of availabe item disk storage */
  getMaxItemDiskStorage(): number;

  /** Returns the total amount of availabe fluid disk storage */
  getMaxFluidDiskStorage(): number;

  /** Returns the total amount of availabe extern item storage */
  getMaxItemExternalStorage(): number;

  /** 	Returns the total amount of availabe extern fluid storage */
  getMaxFluidExternalStorage(): number;
}

export type RSCraftingPattern = {
  processing: boolean;
  inputs: StorageItemStack[];
  outputs: StorageItemStack[];
  byproducts: StorageItemStack[];
};
