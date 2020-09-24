import { useReducer } from 'react';

export default (shape: any) => useReducer((state: any, newState: any) => ({ ...state, ...newState }), shape);
