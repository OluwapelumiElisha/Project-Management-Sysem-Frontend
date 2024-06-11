import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useCreateProject } from '../hook/useCreateProject';
// import { PlusIcon } from '@heroicons/react/solid';
import '/src/App.css'
import { PlusIcon } from 'lucide-react';
const FormComponent = () => {
  const {handleSubmit, title, setTitle, description, setDescription, loading, addInputField, inputFields, logValues, setInputFields } = useCreateProject();
  
  return (
    <div class="bg">
      <h3 className='rounded-lg shadow-md w-[60%] m-auto flex item-center justify-center mt-0 text-2xl font-bold text-red-500 mb-2'>CREATE PROJECT</h3>
      <div className="w-[95%] mx-auto -mt-2 p-6  rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
            <label htmlFor="title" className="block text-xl text-black font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label htmlFor="description" className="block text-xl  text-black font-bold mb-2">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the description"
              rows="4"
            ></textarea>
          </div>
        </div>
       
        <div className="flex justify-center">
         
          <Button className=' px-4 py-2 bg-red-600 p-3' disabled={loading} type="submit">
                    {loading ? "Creating..." : "Create Project"}
                  </Button>
        </div>
      </form>
      
    </div>
    </div>
    
  );
};

export default FormComponent;








// import React, { useState } from 'react';

// function Create() {
 

//   return (
//     <>

//     <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
//     <div class="container px-6 py-8 mx-auto">


//         <div class="flex flex-col mt-8">
//             <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
//                 <div
//                     class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
//                     <table class="min-w-full">
//                         <thead>
//                             <tr>
//                                 <th
//                                     class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
//                                     Name</th>
//                                 <th
//                                     class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
//                                     Title</th>
//                                 <th
//                                     class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
//                                     Status</th>
//                                 <th
//                                     class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
//                                     Role</th>
//                                 <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
//                             </tr>
//                         </thead>

//                         <tbody class="bg-white">
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="flex items-center">
//                                         <div class="flex-shrink-0 w-10 h-10">
//                                             <img class="w-10 h-10 rounded-full"
//                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
//                                                 alt=""/>
//                                         </div>

//                                         <div class="ml-4">
//                                             <div class="text-sm font-medium leading-5 text-gray-900">John Doe
//                                             </div>
//                                             <div class="text-sm leading-5 text-gray-500">john@example.com</div>
//                                         </div>
//                                     </div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <div class="text-sm leading-5 text-gray-900">Software Engineer</div>
//                                     <div class="text-sm leading-5 text-gray-500">Web dev</div>
//                                 </td>

//                                 <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
//                                     <span
//                                         class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">Active</span>
//                                 </td>

//                                 <td
//                                     class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
//                                     Owner</td>

//                                 <td
//                                     class="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
//                                     <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     </div>
    
// </main>
// </>
//   );
// }

// export default Create;




// import React, { useState } from 'react';

// const DynamicInputFields = () => {
//   const [inputFields, setInputFields] = useState(['']);

//   const addInputField = () => {
//     setInputFields([...inputFields, '']);
//   };

//   const handleInputChange = (index, value) => {
//     const newInputFields = [...inputFields];
//     newInputFields[index] = value;
//     setInputFields(newInputFields);
//   };

//   const logInputValues = () => {
//     console.log('Input Values:', inputFields);
//     inputFields.map((el)=>{
//         console.log(el);
//     })
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       {inputFields.map((input, index) => (
//         <div key={index} className="flex items-center mb-2 w-full max-w-md">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => handleInputChange(index, e.target.value)}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder={`Input ${index + 1}`}
//           />
//           <button
//             type="button"
//             onClick={addInputField}
//             className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             &#x1F50C; {/* Unicode character for plug icon */}
//           </button>
//         </div>
//       ))}
//       <button
//         type="button"
//         onClick={logInputValues}
//         className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//       >
//         Log Input Values
//       </button>
//     </div>
//   );
// };

// export default DynamicInputFields;
