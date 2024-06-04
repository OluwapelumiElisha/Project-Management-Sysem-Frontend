import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";

export const useCreateProject = ()=>{
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    if(!title || !description){
        
        toast({
            title: "Hello",
            description: "Please fill all details",
          });
    }
    // const formData = new FormData();
    // formData.append("name", title);
    // formData.append("description", description);
    const data = {
        name: title,
        description
    }

    try {
        const res = await publicRequest.post('/createProject', data)
      console.log(res);
    } catch (error) {
        
    }
    // console.log('Title:', title);
    // console.log('Description:', description);
  };

    
    
//   const onSubmit = async (data) => {
//     if (!imageFile) return alert("Please Upload an Image");
//     const formData = new FormData();
//     formData.append("image", imageFile);
//     formData.append("userName", data.userName);
//     formData.append("email", data.email);
//     formData.append("password", data.password);

//     console.log(formData);
//     setloading(true)
//     try {
//       const res = await publicRequest.post('/signUpuser', formData)
//       console.log(res);
//       localStorage.setItem('Email', `${res?.data?.email}`)
//       toast({
//             title: "✔️✔️✔️",
//             description: `${res?.data?.userName} Please Verify Your Email.`,
//           });
//         navigate('/Otp') 
//     } catch (error) {
//       console.log(error)
//        if (error?.response?.data?.error) {
//         toast({
//           title: `Hello ${data?.userName}`,
//           description: 'User Name or Email Already Exit',
//         });
//       }
//     }
   
//     finally {
//       setloading(false)
//     }
//   }
  return {
    handleSubmit,
    title,
    setTitle,
    description, 
    setDescription
  }
}