import './App.css'
import Nav from './components/Nav/Nav'
import Card from './components/CardCustomerTicket/Card.jsx/Card'
import CustomerTicket from './components/CardCustomerTicket/CardCustomerTicket'
import Footer from './components/Footer/Footer'


import { ToastContainer, toast } from 'react-toastify';
import { Suspense } from 'react'


const ticketJson = async () => {

  const res = await fetch('/tickets.json')
  return res.json()
}




function App() {
  toast('hi')
  const ticketpromise = ticketJson()
  return (
    < >
      <Nav></Nav>
      <div className='bg'>
      <Card ></Card>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <CustomerTicket ticketpromise={ticketpromise}></CustomerTicket>
      </Suspense>
      <Footer></Footer>
      </div>

      {/* <ToastContainer></ToastContainer> */}
    </>
  )
}

export default App
