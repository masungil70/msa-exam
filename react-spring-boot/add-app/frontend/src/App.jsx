import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // App.css 파일을 import 합니다.

function App() {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const [result, setResult] = useState(null);

  const add = async () => {
    try {
      const response = await axios.get(`/api/add`, {
        params: {
          a: num1,
          b: num2
        }
      });
      setResult(response.data.result);
    } catch (error) {
      console.error("Error adding numbers:", error);
      setResult("Error");
    }
  };

  return (
    <div id="app">
      <h1>React 기본 앱</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="숫자 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="숫자 2"
      />
      <button onClick={add}>더하기</button>
      {result !== null && <p>결과: {result}</p>}
    </div>
  );
}

export default App;