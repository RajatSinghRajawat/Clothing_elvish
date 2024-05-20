import React from 'react'
import { IoMdLock } from "react-icons/io";
import Elvishbhainav from './Elvishbhainav';


const Elvishbhhaitshirt = () => {
    const card1 = [

        {
            img: "img12",
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
        <Elvishbhainav/>

            <div className='backgrountshirt'>
            <h1 className='' style={{fontSize:"60px",fontWeight:"900",paddingTop:"7%"}}>T-Shirts</h1>
            </div>
            <div>
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand">
                            
                        <button className='border-solid border-2 border-white  bg-white shadow-lg p-2'><i class="fa-solid fa-sliders"></i>Hide Filter</button>
                        </a>
                        <form className="d-flex" role="search">
                        
                                <button className=" border-white  bg-white shadow-lg p-2" type="submit">Show all 2 results</button>
                                <button className=" border-white  bg-white shadow-lg p-2 ms-3" type="submit">Defult Shorting</button>
                        </form>
                    </div>
                </nav>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-2 mt-[5%]">
                    <h1>Filter by price</h1>
                    <input type="range" style={{width:"200px"}} />
                    <div className='d-flex align-middle'>
                        <h1 className='pt-2'>Price: ₹790 — ₹800</h1>
                        <button className='btn btn-primary bg-blue-500 rounded-md'>Filter</button>


                    </div>
                    <h2>Product Categories</h2>


                    <div className='d-flex mt-5 border-solid border-4 bottom-2 border-b-black'>
                        <h1><strong>Hoodeies &Tshirst</strong></h1>
                        <h1 className=' ms-[27%]  w-6 h-6 border-solid border-2 border-slate-500 rounded-xl p-0.3 hover:bg-violet-200 active:bg-white '>10</h1>
                    </div>
                    <div className='d-flex mt-2 border-solid border-4 bottom-2 border-b-black'>
                        <h1><strong>T-shirst</strong></h1>
                        <h1 className=' ms-[62%]  w-6 h-6 border-solid border-2 border-slate-500 rounded-xl p-1 pb-0.5 hover:bg-violet-200 active:bg-white '>5</h1>
                    </div>
                    <div className='d-flex mt-5 border-solid border-4 bottom-2 border-b-black w-auto'>
                        <h1><strong>Uncatograzied</strong></h1>
                        <h1 className=' ms-[41%]  w-6 h-6 border-solid border-2 border-slate-500 rounded-xl p-0.3 hover:bg-violet-200 active:bg-white '>10</h1>
                    </div>
                    </div>
                    {
                        card1.map((index) => {
                            return (
                                <div className="col-md-12 col-md-6 col-lg-3 mt-[5%]">
                                    <div className={`card ${index.nameOfClass}`} >
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
                    <div className="col-lg-3">

                    </div>
                    <div className="col-lg-3">

                    </div>
                </div>
            </div>

        </>
    )
}

export default Elvishbhhaitshirt
