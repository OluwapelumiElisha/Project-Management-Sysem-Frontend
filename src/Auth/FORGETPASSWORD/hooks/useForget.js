
import { toast } from "@/components/ui/use-toast";
import { publicRequest } from "@/Shared/API/Request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const formSchema = z.object({
  
  password: z
    .string()
    // .min(6, "Password must be at least 6 characters")
    .max(20)
    .nonempty("Password is required"),
});
export const useForget = () => {
  const [loading, setloading] = useState(false);
  const [isShow, setisShow] = useState(false);
  const [Email, setEmail] = useState();
  const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  console.log(form.formState.errors);

  const onSubmit = async (data) => {
    
    console.log(data.password);
    let storedEmail = localStorage.getItem('Keep');
    console.log(storedEmail); 
    let data1 = {
        otps : data.password,
        email : storedEmail

    }
   

    try {
        const res = await publicRequest.post('/forgetPassOtp', data1)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    }
   
  

  
  


  return {
    form,
    onSubmit,
    
  }
}