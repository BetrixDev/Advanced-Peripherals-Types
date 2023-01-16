/** @noSelf **/
export interface ChatBox {
  sendFormattedMessage(message: string): LuaMultiReturn<[true, null] | [false, string]>;
  sendMessage(message: string): true | LuaMultiReturn<[true, null] | [false, string]>;
  sendFormattedMessageToPlayer(
    message: string,
    playerName: string
  ): LuaMultiReturn<[true, null] | [false, string]>;
  sendMessageToPlayer(
    message: string,
    playerName: string
  ): LuaMultiReturn<[true, null] | [false, string]>;
}
