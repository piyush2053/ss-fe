import { createContext, useContext, useState, ReactNode } from 'react';

const UserContext = createContext<any>(null);
export const UserProvider =  ({ children }: { children: ReactNode }) => {
  const userPrefetchData = JSON.parse(localStorage?.getItem('data_school_and_user') || '{}');
  const [user, setUser] = useState<any>(userPrefetchData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);