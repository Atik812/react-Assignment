
import './App.css'
import FooterTabs from './components/Footer'
import Navbar from './components/Navbar'

import Toolbar from './components/Toolbar'

import TableSheet from './Table/TableSheet'



function App() {


  return (
    <>
     <Navbar/>
     <Toolbar/>
     {/* <TopTabBar/> */}
     {/* <SpreadSheet/> */}
     {/* <SpreadsheetView/> */}
     <TableSheet/>
     <FooterTabs/>
      {/* <div className="min-h-screen bg-gray-50">
       <Toolbar/>
      </div> */}
    </>
  )
}

export default App
