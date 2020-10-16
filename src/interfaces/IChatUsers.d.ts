
export interface IChatUsers {
    userName1: string;
    userName2: string;
  }

export enum UserType {
  User1 = 1,
  User2 = 2
}

export interface IChatMessages {
  type: UserType;
  userName: string;
  message: string;
  createdAt: string;
}
