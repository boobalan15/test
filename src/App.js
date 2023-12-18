
// import './App.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

// import ThreeFlexboxesRow from './ThreeFlexboxesRow.js';
// import TwoColumnContainer from './TwoColumnContainer.js';
// import Benefits from './Benefits.js';
// import Footer from './footer.js';

// // import  {NavBar } from './NavBar/index.js';
// import { Home } from './Home';
// import { Payment } from './Payment';
// import Header from './Header.js';



// function App() {
//   return (
//     <div >
//       {/* <NavBar /> */}
//       <Header/>
     
//       <Home />
//       <ThreeFlexboxesRow />
//       <TwoColumnContainer />
//       <Benefits />
//       <Footer />
//       <Payment />
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";
import Products from './product.js';
import Landing from './Landing.js';

function App() {
    return (
        <Routes>
            <Route >


                <Route index element={<Landing/>} />
                <Route path="Products" element={<Products/>} />

            </Route>
        </Routes>
    )
}
export default App;