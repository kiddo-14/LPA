// import React from 'react'
// import { useState } from 'react';
// const RuleBox = ({setResult}) => {
//     const [rules, setRules] = useState([]); // State to store rules
//     const [showModal, setShowModal] = useState(false); // State to handle modal visibility
//     const [newRule, setNewRule] = useState(''); // State to handle new rule input
  
//     const handleAddRule = () => {
//       if (newRule.trim() !== '') {
//         setRules([newRule,...rules]); // Add the new rule to the rules list
//         setNewRule(''); // Clear the input field
//         setShowModal(false); // Close the modal
//       }
//     };
//     const handleResult=()=>{
//         setResult(true);
//     }
  
//     return (
//       <div className="flex max-w-screen w-full flex-col relative p-4">
//         <div className='flex '>
//           <button
//             onClick={() => setShowModal(true)}
//             className="flex items-center px-4 py-2 mb-4 w-fit bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
//           >
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//             </svg>
//             <span className="ml-3">Add Rule</span>
//           </button>
//           <span className='ml-3 text-4xl'>Set Your New Rules Here...</span>
//         </div>
  
//         {/* Scrollable Card Container */}
//         <div className="ml-32 w-11/12 p-6 rounded-lg bg-gray-100 shadow-xl">
//           <div
//             className={`overflow-y-auto bg-gray-100 p-4 flex flex-wrap transition-all duration-300 ${
//               rules.length > 0 ? 'h-auto max-h-[500px]' : 'h-80'
//             }`}
//           >
//           {rules.map((rule, index) => (
//   <div
//     key={index}
//     className="bg-white text-xl w-full max-w-[300px] p-3 mb-2 mr-2 rounded shadow-md border-b break-words"
//   >
//     {rule}
//   </div>
// ))}

//           </div>
//         </div>
  
//         {/* Modal for Adding a New Rule */}
//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
//               <h2 className="text-lg font-semibold mb-4">Add your New Rule</h2>
//               <input
//                 type="text"
//                 className="w-full border-b-2 border-blue-500 focus:outline-none focus:ring-0 mb-4 p-1"
//                 placeholder="Type your rule here..."
//                 value={newRule}
//                 onChange={(e) => setNewRule(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleAddRule()}
//                 autoFocus
//               />
//               <button
//                 onClick={handleAddRule}
//                 className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
//               >
//                 Add Rule
//               </button>
//             </div>
//           </div>
//         )}
//         {/* Button */}
        
//          <button className=" p-3 w-96 text-2xl border mx-auto mt-10 text-gray-900 bg-white focus:border-gray-300
//             hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full  
//              sm:text-hidden" onClick={handleResult} >
           
//             <span className="hidden ml-1 sm:inline-block"> Genrate the Summary </span>
//             </button>
//       </div>
//     );
  
// }

// export default RuleBox






const RuleBox = ({ setResult }) => {
  
  return (
   <></>
  );
};

export default RuleBox;
 