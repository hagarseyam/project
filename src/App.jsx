import './App.css'
import ToDoList from './ToDoList'

function App() {
  return (
    <div
      className="h-screen bg-cover bg-center flex justify-center pt-16 pb-10"
      style={{ backgroundImage: "url('/images/photo_2025-11-17_22-23-52.jpg')" }}
    >
      <ToDoList />
    </div>
  )
}

export default App
