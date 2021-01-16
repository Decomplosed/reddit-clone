import { createContext } from 'react';
import { User } from '../types';

interface State {
  authenticated: boolean;
  user: User | undefined;
}

interface Action {
  type: string;
  payload: any;
}

const StateContext = createContext<State>({
  authenticated: false,
  user: null,
});

const DispatchContext = createContext(null);

const reducer = (state: State, { type, payload }: Action) => {
  switch (type) {
  }
};
