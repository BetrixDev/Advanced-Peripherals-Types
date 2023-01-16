/** @noSelf **/
export interface InventoryManager {
  /** Adds an item to the player's inventory. `direction` is the direction for the chest/inventory block. The Inventory Manager will add a random item to the player's inventory if the argument `item` is null */
  addItemToPlayer(invDirection: string, count: number, slot?: number, item?: string): number;

  /** Returns the content of the player's armor */
  getArmor(): InventoryItemStack[];

  /** Returns the content of the player's */
  getItems(): InventoryItemStack[];

  /** Returns the owner of the memory card, null if the memory card is null */
  getOwner(): string | null;

  /** Returns true if the player is wearing one or more armor */
  isPlayerEquipped(): boolean;

  /** Returns true if the player is wearing a armor piece on the given slot. Slots: 103(Helmet)-100(Boots) */
  isWearing(slot: number): boolean;

  /** Removes an item from the player's inventory to the given inventory direction. `direction` is the direction for the chest/inventory block. The Inventory Manager will remove a random item from the player's inventory if the argument `item` is null. */
  removeItemFromPlayer(invDirection: string, count: number, slot?: number, item?: string): number;

  /** Returns the item in the hand */
  getItemInHand(): InventoryItemStack;

  /** Returns the nearest free slot of the player *(-1 if inventory is full)* */
  getFreeSlot(): number;

  /** Returns true if space is available in the player inventory */
  isSpaceAvailable(): boolean;

  /** The amount of empty slots */
  getEmptySpace(): number;
}

export interface InventoryItemStack {
  slot: number;
  count: number;
  displayName: string;
  maxStackSize: number;
  nbt: any;
}
