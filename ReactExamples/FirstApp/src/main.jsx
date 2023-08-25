import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer'

function FirstPage(){
  return(
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<FirstPage/>)