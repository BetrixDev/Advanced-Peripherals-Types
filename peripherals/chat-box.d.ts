export interface ChatBox {
  sendFormattedMessage(message: string): true | [null, string];
  sendMessage(message: string): true | [null, string];
  sendFormattedMessageToPlayer(message: string, playerName: string): true | [null, string];
  sendMessageToPlayer(message: string, playerName: string): true | [null, string];
}
