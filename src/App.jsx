import Footer from './components/Footer'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'

export default function App() {
  return (
    <div id='portfolio'>
      <h1>Diógenes Barreto</h1>
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  )
}