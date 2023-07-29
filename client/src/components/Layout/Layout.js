import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Helmet} from "react-helmet"; 
import  { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children,title,description,keywords,author}) =>{
  return (
    <div> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
          <div>
  <meta name="description" content={description}/>
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
</div>
   
            </Helmet>
      <Header/>
      <main style={{minHeight:"74vh"}}>
        
        <Toaster/>
        {children}</main>
    
    <Footer/> 
    </div>
  )
}

export default Layout