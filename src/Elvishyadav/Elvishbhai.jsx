import React from 'react'
import './Elvishbhai.css'
import { IoMdLock } from "react-icons/io";
import { useState } from 'react';
import Elvishbhainav from './Elvishbhainav';
import Elvishbhaifoot from './Elvishbhaifoot';
import { useNavigate } from 'react-router-dom';
const Elvishbhai = () => {
    const Navigate  = useNavigate();
    const get = ()=>{
        Navigate('/per')
    }
    const card = [{
        img: "imgs",
        title: "Haters slogan hoodie- Olive green",
        price: "💲17999",
        nameOfClass: "abc"
    }, {
        img: "img1",
        title: "BADMOSS- Lavender",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img2",
        title: "TYPO HOODIE- RED",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img3",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img4",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img5",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img6",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img7",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },
    {
        img: "img8",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc",
        button: "position",
        buttons: "Sale"
    },
    {
        img: "img9",
        title: "SYSTUMM TYPO- Hoodie (Black)",
        price: "💲700000",
        nameOfClass: "abc"
    },


    ]

    const card1 = [

        {
            img: "img12",
            title: "SYSTUMM TYPO- Hoodie (Black)",
            price: "💲700000",
            nameOfClass: "abc"
        },
        {
            img: "img13",
            title: "SYSTUMM TYPO- Hoodie (Black)",
            price: "💲700000",
            nameOfClass: "abc"
        },
        {
            img: "img14",
            title: "SYSTUMM TYPO- Hoodie (Black)",
            price: "💲700000",
            nameOfClass: "abc"
        },

    ]
   

    return (
        <>
      <header className='backgroundimage'>

        <Elvishbhainav/>
      </header>


            <div className='backgroundtext'>
                <h1 className='h1'>Hoodies & Sweatshirts</h1>
            </div>


            <div className="container" style={{ marginTop: "1%" }}>
                <div className="row">
                    {
                        card.map((index) => {
                            return (
                                <div className="col-md-12 col-md-6 col-lg-3 mt-5">
                                    <div onClick={()=>{get()}} className={`card ${index.nameOfClass}`} >
                                        <img className={`card-img-top  ${index.img}`} />
                                        <div className="card-body">
                                            <h6 className="card-title text-center">{index.title}
                                            </h6>
                                            <div className="hover-content">
                                                <p className="text-center paragraph">{index.price}</p>
                                                <div className="text-center extra-content">
                                                    <div className="flex justify-around">
                                                        <div>
                                                            <h1 className="flex"><IoMdLock />Select tools</h1>
                                                        </div>
                                                        <div>
                                                            <i className="fa-solid fa-eye"></i> Quick review
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>




            <div className='backgroundtext mt-6'>
                <h1 className='h1'>T-Shirts</h1>
            </div>


            {/* <div className="container" style={{ marginTop: "1%" }}>
                <div className="row">
                    {
                        card1.map((index1) => {
                            return (
                                <div className="col-md-12 col-md-6 col-lg-3 mt-5">
                                    <div className={`card ${index1.nameOfClass}`} >
                                        <img className={`card-img-top  ${index1.img}`} />
                                        <div className="card-body">
                                            <h6 className="card-title text-center">{index1.title}
                                            </h6>
                                            <div>

                                                <p className='text-center paragraph'>{index1.price}</p>
                                                <div className='ok' style={{display:"none"}}>
                                                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                                                        <div>
                                                            <h1 style={{ display: "flex" }}><IoMdLock />Select tools</h1>
                                                        </div>
                                                        <div>
                                                            <i class="fa-solid fa-eye"></i> Quick review
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div> */}
            <div className="container mt-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {card1.map((index1, idx) => (
                        <div className="col" key={idx}>
                            <div className={`card ${index1.nameOfClass}`}>
                                <img className={`card-img-top ${index1.img}`} />
                                <div className="card-body">
                                    <h6 className="card-title text-center">{index1.title}</h6>
                                    <div className="hover-content">
                                        <p className="text-center paragraph">{index1.price}</p>
                                        <div className="text-center extra-content">
                                            <div className="flex justify-around">
                                                <div>
                                                    <h1 className="flex"><IoMdLock />Select tools</h1>
                                                </div>
                                                <div>
                                                    <i className="fa-solid fa-eye"></i> Quick review
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Elvishbhaifoot/>
        </>
    )
}

export default Elvishbhai
