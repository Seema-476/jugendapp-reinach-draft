import React,{useState,useEffect} from 'react'
import Heading from '../common/Heading'

const Table = () => {
    const [table, setTable] = useState([]);
// table
    useEffect(() => {
        const number = 2;
        const result = [];
        for (let i = 1; i <= 10; i++) {
            result.push(`${ number } * ${ i } = ${ number * i}`);
        }
        setTable(result);
    }, []);
  return (
      <div className='bg-sky-blue'>
          <div className='container'>
              <Heading text="Table" ClassStyle="pt-5" />
              <div className=" text-center pt-5 text-base font-medium text-gray">
                  {table.map((line, index) => (
                      <p key={index} className="text-2xl">{line}</p>
                  ))}
              </div>
          </div>
     </div>
  )
}

export default Table
