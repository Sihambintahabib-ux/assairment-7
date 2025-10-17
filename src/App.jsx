import './App.css'
import Card from './components/CardCustomerTicket/Card.jsx/Card'
import CustomerTicket from './components/CardCustomerTicket/CardCustomerTicket'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react'

console.log('object');


const ticketJson = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}

function App() {

  const ticketpromise = ticketJson()
  return (
    < >
      <Nav></Nav>
      <div className='bg'>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

          <Card ticketpromise={ticketpromise} ></Card>
        </Suspense>

        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <CustomerTicket ticketpromise={ticketpromise}></CustomerTicket>
        </Suspense>
        <Footer></Footer>
      </div>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
