import React from 'react';
import headerImg from './../../../Images/headerImg.jpg';

const Header = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center w-100">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Trusted Repair <br/> Service</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-primary">Read More</button>
            </div>
            <div className="col-md-6">
                <img src={headerImg} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Header;