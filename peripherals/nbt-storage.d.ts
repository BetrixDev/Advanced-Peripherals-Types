/** @noSelf **/
export interface NBTStorage {
  /** Returns data that stored in block */
  read(): Record<string, any>;

  /** Writes data into block, **string should be valid json** */
  writeJson(data: string): LuaMultiReturn<[true, null] | [false, string]>;

  /** Writes data into block */
  writeTable(data: Record<string, any>): LuaMultiReturn<[true, null] | [false, string]>;
}
