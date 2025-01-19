import { BrowserRouter as Router , Routes , Route } from "react-router"
import HeroPage from "./Pages/HeroPage"
import Popular from "./Pages/Popular"
import Trending from "./Pages/Trending"
import MovieDetail from "./Pages/MovieDetail"

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<HeroPage />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/trending" element={<Trending/>} />
                <Route path="/movie/:id" element={<MovieDetail/>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
