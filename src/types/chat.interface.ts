export interface IChatRow {
  isGroup?: boolean;
  chatName: string;
  lastChat: {
    sender: string;
    message: string;
  };
  lastChatTime: string;
  unreadChat: number;
}

export interface IChat {
  id: number;
  sender: string;
  message: string;
  time: string;
  isSender: boolean;
  isRead: boolean;
}
