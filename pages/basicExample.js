import React from "react";

function Login() {
  const [counter, setCounter] = React.useState(0);

  //Arrow function :D
  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div align="center">
      <h1>Contador :D</h1>
      {/* Assim executamos a arrow function: 
      Caso fosse uma função normal, faríamos assim:
        onClick={() => handleCounter}
      */}
      <button onClick={handleCounter}>{counter}</button>
    </div>
  );
}

export default Login;
