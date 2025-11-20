import 'bootstrap/dist/css/bootstrap.min.css'
import RestaurantNavbar from './components/RestaurantNavbar'
import Home from './components/Home'
import BookAtTable from './components/BookAtTable'
import Bookings from './components/Bookings'

function App() {
  return (
    <>
    <RestaurantNavbar />
    <Bookings />
    <BookAtTable />
    <Home />
    </>
  )
}

export default App
