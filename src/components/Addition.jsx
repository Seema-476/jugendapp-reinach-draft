import React, { useState, useEffect } from 'react'
import Heading from '../common/Heading'

const Addition = () => {
        const [addition, setAddition] = useState(0);
    useEffect(() => {
        function numbersAdd(num1, num2) {
            return num1 + num2;
        }
        let result = numbersAdd(8, 18);
        setAddition(result);
    }, []);
  return (
      <div className='bg-sky-blue'>
          <div className='container'>
              <div className='py-5'>
                  <Heading classStyle={'text-center'} text={'Addition'} />
                  <p id="result" className='font-normal text-3xl text-gray pt-5 text-center '>{addition}</p>
              </div>
          </div>
     </div>
  )
}

export default Addition