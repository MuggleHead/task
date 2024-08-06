
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import GridProductPage from './pages/GridProductPage'
import PostPage from './pages/PostPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/2" element={<GridProductPage></GridProductPage>} />
          <Route path="/3" element={<PostPage></PostPage>} />

         
        </Routes>
        <Navbar />
      </BrowserRouter>

    </>
  )
}

export default App
