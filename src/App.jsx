import './App.css'
import Nav from './components/Nav/Nav'
import Card from './components/Card/Card'
import CustomerTicket from './components/CustomerTicket/CustomerTicket'
import Footer from './components/Footer/Footer'


import { ToastContainer, toast } from 'react-toastify';
import { Suspense } from 'react'





var TicketJson = async () => {

  var res = await fetch('/Tickets.json')
  return res.json()
}




function App() {
  toast('hi')
  var ticketpromise = TicketJson()
  return (
    <>
      <Nav></Nav>
      
      <Card></Card>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>
}>
        <CustomerTicket ticketpromise={ticketpromise}></CustomerTicket>

      </Suspense>
      {/* <Footer></Footer> */}


      {/* <ToastContainer></ToastContainer> */}
    </>
  )
}

export default App
