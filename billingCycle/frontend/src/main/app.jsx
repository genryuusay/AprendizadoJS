import '../common/template/dependences'
import React from "react";

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from '../main/routes'

export default props => (
    <div className="wrapper">
        <Header />
        <Sidebar/>
        <div className='content-wrapper'>
            <Routes/>
        </div>
        <Footer/>
    </div>
    
)