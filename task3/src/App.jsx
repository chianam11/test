import { Route,Routes,Navigate } from "react-router-dom"
import CreatePosts from "./pages/CreatePosts"
import Posts from "./pages/Posts"
import Nav from "./components/Nav"
const App = () => {
  return (
    <div className="h-[100vh]">
      <Nav />
    <Routes>
  <Route path="/" element={<Posts />} />
  <Route path="/create" element={<CreatePosts />} />
</Routes>

    </div>
  )
}

export default App;