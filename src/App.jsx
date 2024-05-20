import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Elvishbhainav from './Elvishyadav/Elvishbhainav'
import Elvishbhai from './Elvishyadav/Elvishbhai'
import Elvishbhaifoot from './Elvishyadav/Elvishbhaifoot'
import Elvishbhhaitshirt from './Elvishyadav/Elvishbhhaitshirt'
import Elvishbhaiabout from './Elvishyadav/Elvishbhaiabout'
import Elvishbhaicontact from './Elvishyadav/Elvishbhaicontact'
import Elvishlogin from './Elvishyadav/Elvishlogin'
import Elvishbhaihoddies from './Elvishyadav/Elvishbhaihoddies'
import ElvishBhaiperimage from './Elvishyadav/ElvishBhaiperimage'


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Elvishbhai />} />
                    <Route path='/about' element={<Elvishbhaiabout />} />
                    <Route path='/contact' element={<Elvishbhaicontact />} />
                    <Route path='/hoddies' element={<Elvishbhaihoddies />} />
                    <Route path='/tshirt' element={<Elvishbhhaitshirt />} />
                    <Route path='/login' element={<Elvishlogin />} />
                    <Route path='/per' element={<ElvishBhaiperimage />} />
                    
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App