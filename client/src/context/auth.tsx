import { createContext } from 'react';
import { User } from '../types';

interface State {
  authenticated: boolean;
  user: User | undefined;
}

const StateContext = createContext();
