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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, loading, setLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
