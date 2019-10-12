export interface Message {
  id: string | null;
  text: string;
  roomId: string;
  timestamp: any;
  user: User;
}

export interface User {
  uid: string;
  displayName: string;
  photoURL: string;
}

export interface Room {
  id: string;
  name: string;
  description: string;
}
