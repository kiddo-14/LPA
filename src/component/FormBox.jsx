import React, { useEffect, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist/webpack';
import { useNavigate } from 'react-router-dom';
import 'pdfjs-dist/webpack'; 

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const FormBox = ({ Email, setEmail, setPdfName,  rules, setRules }) => {


  useEffect(()=>{
       setEmail('');
       setPdfName(null);
       setRules('');
  },[])
  const [pdfError, setPdfError] = useState('');
  const [isPdfValid, setIsPdfValid] = useState(false); 
  const navigate=useNavigate()

  const handleFileChange = (e) => {
    const file =e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async function () {
        const typedArray = new Uint8Array(this.result);
        try {
          const pdf = await pdfjsLib.getDocument(typedArray).promise;
          const numPages = pdf.numPages;
          console.log(numPages);
          if (numPages >= 20) {
            setPdfError('The PDF file contains more than 20 pages. Please upload a shorter document.');
            setPdfName('');
            setIsPdfValid(false); 
          } else {
            setPdfError('');
            setPdfName(file.name);
            setIsPdfValid(true); 
          }
        } catch (error) {
          setPdfError('Error reading the PDF file. Please upload a valid PDF.');
          setIsPdfValid(false); 
          console.error('Error loading PDF:', error);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleChange = (e) => {
    setRules(e.target.value);
  };

  const handleResult = () => {
   navigate('/result');
  };

  // Check if the button should be disabled
  const isButtonDisabled = !Email || !isPdfValid || rules.length === 0;

  return (
    <>
      <form className="relative mt-5 p-2 w-full overflow-y-auto">
        <div className="lg:flex lg:justify-between w-full">
          <div className="ml-4 h-20 flex items-center justify-between lg:w-1/3 p-2 ">
            <label htmlFor="input-group-1" className="block mb-2 ml-4  font-medium text-gray-900 md:text-3xl dark:text-white">
              Enter Email
            </label>
            <div className="relative w-8/12">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                value={Email}
                className="bg-white border shadow-md border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@kanerika.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-3 ml-10 lg:w-2/3 flex flex-col lg:ml-20">
          <div className='flex ml-10 w-11/12 justify-start items-center'>

            <label className="block mb-2 w-1/3 md:text-3xl font-medium text-gray-900 dark:text-white" htmlFor="large_size">
              Upload file input
            </label>
            <input
              className="block shadow-md md:ml-14 lg:mr-32 p-3 w-3/4 text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-black-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="large_size"
              type="file"
              onChange={handleFileChange}
              />
              </div>
            {/* Display PDF error message if any */}
        {pdfError && <div className=" mt-1 ml-96 text-red-500 w-fit">{pdfError}</div>}
          </div>
        </div>

        

        <div className="flex max-w-screen w-full mt-[-10px] flex-col relative p-4">
          <div className="flex mb-4">
            <span className="ml-3 text-4xl font-medium font-kanerika">Rules Here...</span>
          </div>

          {/* Scrollable Textarea Container */}
          <div className="mt-2 mx-auto w-11/12 p-6 rounded-lg bg-white border shadow-xl">
            <textarea
              value={rules}
              onChange={handleChange}
              placeholder="Type your rules here..."
              className="w-full h-[500px] p-2 focus:border-2 focus:border-blue-500 rounded focus:outline-none resize-none overflow-y-auto text-2xl"
              style={{
                overflowY: rules.length > 0 ? 'auto' : 'hidden',
              }}
            />
          </div>

          {/* Button to Generate Summary */}
          <button
            className={`p-3 w-96 text-2xl border mx-auto mt-8 text-gray-900 bg-white focus:border-gray-300 hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md shadow-md ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleResult}
            disabled={isButtonDisabled} // Disable the button based on conditions
          >
            <span className="ml-1 sm:inline-block">Generate the Summary</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default FormBox;
