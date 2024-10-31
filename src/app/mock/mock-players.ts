export interface Player {
  name: string;
  username: string;
  email: string;
  password: string;
}

export const MOCK_PLAYERS: Player[] = [
  {
    name: "Eu",
    username: "jon",
    email: "jon@yahoo.com",
    password: "jon"
  }
];
