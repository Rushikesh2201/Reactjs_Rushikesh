
import "./components/css/App.css";
import "./components/css/call.css";
import React from "react";
import MonthlyReport from "./components/Pages/MonthlyReport/main";
import Call from "./components/Pages/CallDetails/main";
import { Routes, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

export default function App(){
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   <BrowserRouter>
   <Routes>
     {/* <App /> */}
    {/* <Call />  */}
   
    <Route path = "/" element = {<MonthlyReport />} />
     <Route path = "call" element = {<Call />} />
   </Routes>
    </BrowserRouter>
); 
}
// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <MonthlyReport />
//       </div>
//     );
//   }
// }

//export default App;


