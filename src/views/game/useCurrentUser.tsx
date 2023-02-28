import { useContext, createContext } from 'react'
export interface CurrentUserProps {
  username: string
}

const CurrentUserContext = createContext<CurrentUserProps | null>(null)

const useCurrentUser = () => {
  const currentUserContext = useContext(CurrentUserContext)
  if (!currentUserContext) {
    throw new Error('useCurrentUser has to be used within <CurrentUserContext.Provider>')
  }
  return currentUserContext
}

export default useCurrentUser
