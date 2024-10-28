import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl font-bold text-center'>Price Options</h1>

      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
