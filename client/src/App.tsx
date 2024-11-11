import { Container, Stack } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const PORT = import.meta.env.VITE_PORT
const SERVER_SOURCE = import.meta.env.VITE_SERVER_SOURCE
export const BASE_URL = import.meta.env.VITE_ENV !== "production" ? "http://localhost:" + PORT +"/api" : SERVER_SOURCE + "/api";
function App() {

  return (
    <Stack h="100vh">
      <NavBar />
      <Container>
        <TodoForm />
        <TodoList /> 
      </Container>
    </Stack>
  )
}

export default App
