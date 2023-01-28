import {
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';
import { getUser } from '../services/user-utils.js';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [doneGettingUser, setDoneGettingUser] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
        setDoneGettingUser(true);
      } catch {
        setDoneGettingUser(true);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
