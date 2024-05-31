import { publicRequest } from "@/Shared/API/Request";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const formSchema = z.object({
  otps: z.string().nonempty("User Name is required"),
 
});
export const useOtp = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    const valuess = localStorage.getItem('Email');
    const otps = data.otps
    const email = valuess
    const data1 = {
        otps,
        email
      };
      setloading(true)
    try {
      const res = await publicRequest.post('/verifyotp', data1)
      console.log(res);
      toast({
            title: "✔️✔️✔️",
            description: "OTP Verified, Please Login",
          });

        navigate('/Login') 
        localStorage.removeItem("Email");
    } catch (error) {
      console.log(error)
       if (error?.response?.data) {
        toast({
          title: "❌❌❌",
          description: 'Account Record not found or Already verify, Sign up or log in',
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