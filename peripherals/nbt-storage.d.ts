export interface NBTStorage {
  /** Returns data that stored in block */
  read(): Record<string, any>;

  /** Writes data into block, **string should be valid json** */
  writeJson(data: string): [true, null] | [null, string];

  /** Writes data into block */
  writeTable(data: Record<string, any>): [true, null] | [null, string];
}
