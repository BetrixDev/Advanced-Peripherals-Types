import { Item, StorageBridge } from "./common";

/** The ME Bridge is able to interact with Applied Energistics 2.
 *  You can retrieve items, craft items, get all items as a list and more.
 *  The ME Bridge uses one channel.
 *  ```ts
 *  peripheral.find("meBridge")
 * ```
 * */
export interface MEBridge extends StorageBridge {
  /**
   * Queues the specified item for crafting
   * @param item Information about the item to craft
   * @returns true... [always](https://github.com/SirEndii/AdvancedPeripherals/issues/323)
   */
  craftItem(item: Item): true;

  /** Returns all connected crafting cpus */
  getCraftingCPUs(): MECPU[];
}

/** Represents an ME Crafting CPU */
export type MECPU = {
  /** How much storage the crafting CPU has */
  storage: number;
  /** How many co-processors are available */
  coProcessors: number;
  /** Whether the CPU is currently handling a craft */
  isBusy: boolean;
};
