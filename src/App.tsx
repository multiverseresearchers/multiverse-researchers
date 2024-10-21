import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Publications from './components/publications/Publications'
import Research from './components/research/Research'
import ResearchPage from './components/research/ResearchPage';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/research' element={<Research />}></Route>
						<Route path='/papers' element={<Publications />}></Route>
						<Route path='/contact' element={<Contact />}></Route>

                        <Route path="/research/:link" element={<ResearchPage />} />
					</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
