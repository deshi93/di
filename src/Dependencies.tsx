import React, { createContext, useContext, FC } from 'react'

import useHello from './hooks/useHelloAnother'

type TContext = {
  useHello: () => string
}

const initialContext: TContext = {
  useHello,
}

const Context = createContext<TContext>(initialContext)

const Dependencies: FC = ({ children }) => {
  return (
    <Context.Provider value={initialContext}>
      { children }
    </Context.Provider>
  )
}

export const useDependencies = () => useContext(Context)
export default Dependencies
