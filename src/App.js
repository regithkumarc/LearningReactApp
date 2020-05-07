import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './login';
import Employee from './employee';

function App() {
  return (
    <div className="App">
      {/* <Welcome name = "regith"></Welcome> */}
      <Login></Login>
      <Employee></Employee>
    </div>
  );
}

export default App;
