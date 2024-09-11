"use client";

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>カウント:{count}</p>
      <p><button onClick={handleIncrement} className='bg-green-300'>プラスボタン</button></p>
      <button onClick={handleDecrement} className='bg-green-300'>マイナスボタン</button>
    </div>
  );
}

export default Counter;