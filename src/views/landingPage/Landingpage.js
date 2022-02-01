import React from 'react';
import './Landingpage.css'
import vector from '../../images/work.jpg'
import arrow from '../../images/down-chevron.png'
import Navbar from '../../components/navbar/Navbar';
import Todolist from '../../components/todolist/Todolist';

export const Landingpage = () => {
  return (
    <div className='container'>
        <section className='first'>
            <Navbar />
            <div className='jumbo'>
                <div className='card'>
                    <h1>Welcome To TodoApp</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing 
                    and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book
                    </p>
                </div>
                <img alt='work' className="landImg"src={vector} />
            </div>
            
            <div className='arrowDiv'>
                <img alt='arrow' src={arrow} className='arrowimg' />
            </div>
        </section>
        <section className='second'>
            <Todolist />
        </section>
    </div>
  );
  
};
