import { useState, createContext } from 'react';
import ErrorCSS from '@/styles/error.module.css';

export const Context = createContext({});

export function ContextProvider({children}: any) {

  const [errorType, seterrorType] = useState('')
  const [animationOn, setanimationOn] = useState(ErrorCSS.errorNull)
  const header: any = {
    'Content-Type' : 'application/json',
    "Access-Control-Allow-Origin": "https://shoesshooting.vercel.app", //https://shoesshooting.vercel.app
  }


  return (
    <Context.Provider value={{ 
      errorType, seterrorType,
      animationOn, setanimationOn, header
        }}>
      {children}
    </Context.Provider>
  );
}

export default Context;