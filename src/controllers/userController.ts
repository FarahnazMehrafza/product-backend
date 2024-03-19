const users = [
    { id: 1, name: "Akeel" },
    { id: 2, name: "John" },
  ];
  
  export const getAllUsers = (req: any, res: any) => {
    res.status(200).send(users);
  };