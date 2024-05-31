import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const formSchema = z.object({
  userName: z.string().nonempty("User Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(20)
    .nonempty("Password is required"),
});
export const useSignUp = () => {
  const [loading, setloading] = useState(false);
  const [imageFile, setimageFile] = useState();
  const navigate = useNavigate()
//   const { currentUser } = useCurrentUser()


//   useEffect(() => {
//     if (currentUser?.email) {
//       navigate("/about");
//     }
//   }, [currentUser]);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    if (!imageFile) return alert("Please Upload an Image");
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("userName", data.userName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    console.log(formData);
    setloading(true)
    try {
      const res = await publicRequest.post('/signUpuser', formData)
      console.log(res);
      localStorage.setItem('Email', `${res?.data?.email}`)
      toast({
            title: "✔️✔️✔️",
            description: `${res?.data?.userName} Please Verify Your Email.`,
          });
        navigate('/Otp') 
    } catch (error) {
      console.log(error)
       if (error?.response?.data?.error) {
        toast({
          title: `Hello ${data?.userName}`,
          description: 'User Name or Email Already Exit',
        });
      }
    }
   
    finally {
      setloading(false)
    }
  }

  
  function handleChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      setimageFile(file);
      reader.readAsDataURL(file);
      
    }
  }


  return {
    loading,
    form,
    onSubmit,
    handleChange
  }
}