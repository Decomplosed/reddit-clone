import { createContext } from 'react';

interface State {
  authenticated: boolean;
  user: User;
}

const StateContext = createContext();
