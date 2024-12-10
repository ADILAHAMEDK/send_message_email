import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <Header />
    <Contact />
    <ToastContainer />
    </>
  )
}

export default App
