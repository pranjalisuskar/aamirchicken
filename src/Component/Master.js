import React from 'react'
import Header from './Maincomponent/Header'
import Footer from './Maincomponent/Footer'


const Master = (props) => {
  return (
    <div className='page-content'>
      <Header/>
      <props.Rcf></props.Rcf>
      <Footer/>
    </div>
  )
}

export default Master