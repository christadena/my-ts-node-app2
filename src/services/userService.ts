// src/services/userService.ts
interface User {
    id: string;
    name: string;
  }
  
  const users: User[] = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Doe' },
  ];
  
  export const findUserById = (id: string): User | undefined => {
    return users.find(user => user.id === id);
  };
  