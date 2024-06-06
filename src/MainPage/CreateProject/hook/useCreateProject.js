import { UserRequest, publicRequest } from "@/Shared/API/Request";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useCreateProject = ()=>{
    const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {currentUser } = useCurrentUser()
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    setloading(true)
    if(!title || !description){
        
        toast({
            title: "Hello",
            description: "Please fill all details",
          });
    }
    const data = {
        name: title,
        description
    }
    
    try {
        const res = await UserRequest().post('/createProject', data)
      console.log(res);
      toast({
        title: "✔️✔️✔️",
        description: "Project Created Successfully",
      });
      navigate("/Mainpage/ProjectCreated")
    } catch (error) {
        console.log(error);
        if (error?.response?.data?.error) {
          toast({
            title: `Hello ${currentUser?.userName}`,
            description: 'There is already Project Title',
          });
        }
    }
    finally{
    setloading(false)
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
    setDescription,
    loading

  }
}