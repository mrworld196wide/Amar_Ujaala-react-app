import React from 'react'
import loading from '../../src/loading.gif';
const Spinner= ()=>{
        return (
            <div className='text-center'>
                <img className="my-3" src={loading} alt="laoding" />
            </div>
        )
}
export default Spinner