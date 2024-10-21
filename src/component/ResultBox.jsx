import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Result = ({Email,pdf, rules}) => {
  const navigate=useNavigate()

    const handleReset=()=>{
       navigate('/')
    }
    console.log(Email,pdf,rules);
   
  return (
    <>
        
                <div className='p-4 mt-10 mx-auto w-11/12 bg-white shadow-md border rounded-md h-fit max-h-2/3 overflow-y-auto'>    
                <div className='text-4xl mx-auto w-fit font-bold mb-4 '>
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
                    Confirmation
                    </div>

                <p className="text-3xl">The summary  of the document <strong>"{pdf}"</strong> will be sent to this email <strong>"{Email}"</strong></p>               
                <p className="text-3xl  mt-5">Rule set by the user</p>               
                 <div className='mt-3 mb-10 mx-auto h-fit max-h-[400px] bg-white overflow-y-auto rounded-md border shadow-md w-11/12'>
                    {/* show the rules */}
                    <pre className="whitespace-pre-wrap p-4 text-3xl">{rules || 'No rules set.'}</pre>

                 </div>
          </div>  
          <div className='mx-auto w-fit'>
            
           <button className=" p-3 mx-auto w-fit text-2xl border mt-10 text-gray-900 bg-white shadow-md focus:border-gray-300
            hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md  
            sm:text-hidden" onClick={handleReset} >
           
            <span className=" ml-1 sm:inline-block"> Sumrize the new doc with us </span>
            </button>
            </div>         


                 </>
  )
}

export default Result