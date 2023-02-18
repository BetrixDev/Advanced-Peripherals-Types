/** @noSelf **/
export interface StorageBridge {
  /**
   * Queues the specified item for crafting
   * @param item Information about the item to craft
   * @returns A boolean indicating whether it was started *(not if it finished)*
   */
  craftItem(item: CraftableItem): boolean;

  /**
   * Exports the selected item to an inventory in the specfied direction
   * @param item Information about the item to export
   * @param direction Direction the inventory is in **relative to the bridge block**
   * @returns The amount of items that couldn't fit in the inventory
   */
  exportItem(item: Item, direction: Direction): number;

  /**
   * Exports an item to a chest (every inventory tile entity should work) which is connected to the peripheral network
   * @returns The amount of the items that couldn't fit in the inventory
   */
  exportItemToPeripheral(item: Item, peripheral: string): number;

  /** Returns the stored energy of the whole system. */
  getEnergyStorage(): LuaMultiReturn<[number, undefined]> | LuaMultiReturn<[undefined, string]>;

  /** Returns the energy usage of the whole system */
  getEnergyUsage(): LuaMultiReturn<[number, undefined]> | LuaMultiReturn<[undefined, string]>;

  /** Returns a table with information of the item. */
  getItem(item: Item): StorageItemStack;

  /** Returns the maximum energy storage of the whole system. */
  getMaxEnergyStorage(): LuaMultiReturn<[number, undefined]> | LuaMultiReturn<[undefined, string]>;

  /**
   * Imports an item to the ME System from the chest in the direction of the block
   * @param item Information about the item to import
   * @param direction Direction the inventory is in **relative to the bridge block**
   * @returns The actual amount that was inputted into the system
   */
  importItem(item: Item, direction: Direction): number;

  /**
   * Imports an item to a chest (every inventory tile entity should work) which is connected to the peripheral network.
   * @returns THe actual amount that was inputted into the system
   */
  importItemFromPeripheral(item: Item, peripheral: string): number;

  /** Returns true if a job for the item already exists */
  isItemCrafting(item: Item): boolean;

  /** Returns true if the item is craftble */
  isItemCraftable(item: Item): boolean;

  /** Returns a list of information about all craftable items */
  listCraftableItems(): Item[];

  /** Returns a list of all craftable fluids in the system */
  listCraftableFluids(): FluidStack[];

  /** Returns all stored fluids */
  listFluids(): FluidStack[];

  /** Returns all stored items. */
  listItems(): StorageItemStack[];
}

export type CraftableItem = Omit<Item, "count"> & {
  count?: number;
};

/** Represents an item inside of an AE2 or RS storage system */
export type Item = {
  name: string;
  fingerprint?: string;
  amount: number;
  displayName: string;
  isCraftable: boolean;
  nbt?: string;
};

export type StorageItemStack = Omit<Item, "count"> & {
  amount: number;
  isCraftable: boolean;
};

export type FluidStack = {
  amount: number;
  name: number;
  displayName: string;
  isCraftable: boolean;
  tags: string;
};

export type Direction = "up" | "down" | "north" | "east" | "south" | "west";
