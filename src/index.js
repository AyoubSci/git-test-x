import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstPage from './FirstPage';
import RegisterPage from './RegisterPage';
import DashboardPage from './DashboardPage';
import '@fortawesome/fontawesome-free/css/all.css';
import ThirdPage from './ThirdPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    


    {/*     <FirstPage/>

            <RegisterPage/>     */}
            
            <ThirdPage/> {/* The main dashboardpage */}
                         {/* still uncompleted      */}



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


