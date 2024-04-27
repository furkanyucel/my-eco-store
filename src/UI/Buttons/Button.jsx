import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='bg-green-500 hover:bg-green-600 choosed:bg-orange-500 hover:border-transparent text-white py-2 px-4 rounded mx-1 my-6'>
      {children}
    </button>
  );
}

export default Button;
