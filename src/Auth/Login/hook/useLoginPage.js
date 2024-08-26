import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { LoginInput } from "../utils/LoginInput";


const formSchema = z.object({
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
export const useLoginPage = () => {
  const [loading, setloading] = useState(false);
  const [isShow, setisShow] = useState(false);
  const [Email, setEmail] = useState();
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    

    // console.log(data);
    setloading(true)
    try {
      const res = await publicRequest.post('/loginuser', data)
      localStorage.setItem('token', res.data.token)
      toast({
            title: "✔️✔️✔️",
            description: "Welcome Back",
          });
        navigate('/Mainpage') 
    } catch (error) {
      console.log(error)
       if (error) {
        toast({
          title: "ERROR",
          description: 'Invalid Login Credentail',
        });
      }
    }
    finally {
      setloading(false)
    }
  }

 

  const handleCheckEmail = async () => {
    const email = form.watch('email');
    setEmail(email);
  
    if (!email) {
      toast({
        title: "Hello",
        description: 'Please Enter Your Email',
      });
    } else {
      try {
        console.log(email);
        const res = await publicRequest.post('/forgetPassword', { email });
        // If the request is successful, navigate to the ForgetPassword page
        localStorage.setItem('Keep', email);
        navigate('/ForgetPassword');
        

      } catch (error) {
        console.log(error);
        toast({
          title: "ERROR ❌❌❌",
          description: 'This Email does not belong to any account.',
        });
      }
    }
  };
  
  
  


  return {
    loading,
    form,
    onSubmit,
    handleCheckEmail,
    Email
  }
}