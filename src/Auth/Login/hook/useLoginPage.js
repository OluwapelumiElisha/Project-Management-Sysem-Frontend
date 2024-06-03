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
      console.log(res);
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

  
  


  return {
    loading,
    form,
    onSubmit,
  }
}