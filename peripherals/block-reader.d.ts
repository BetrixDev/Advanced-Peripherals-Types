export interface BlockReader {
  /** Returns the registry name of the block *(e.g. minecraft:dirt)* */
  getBlockName(): string;

  /** Returns the block data if the target block is a tile entity */
  getBlockData(): BlockData[];
}

export interface BlockData {
  Items: ItemData[];
  ForgeCaps: {};
}

export interface ItemData {
  id: string;
  Count: number;
  Slot: number;
  tag: Record<string, any>;
}
