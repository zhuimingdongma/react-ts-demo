import useCurrentUser from './useCurrentUser'

export function App() {
  const name = useCurrentUser().username
  return <p>user name{name}</p>
}
