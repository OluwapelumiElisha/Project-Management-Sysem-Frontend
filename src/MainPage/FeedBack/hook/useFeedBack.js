import { UserRequest } from "@/Shared/API/Request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    textfield: z.enum(["bug", "suggestion", "others"]).optional(),
    feedback: z.string().min(2),
  });



  export const useFeedBack = () => {
    const form = useForm({
      resolver: zodResolver(formSchema),
    });
    // console.log(form.formState.errors);

    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };
    const [rating, setRating] = useState(4);
    const onSubmit = async (data) => {
      console.log(data, rating);
      // const data1 = {
      //   data,
      //   rating
      // }
      const res = await UserRequest().post('/feedBack', data)
      
    }

    return{
        onSubmit,
        form,
        rating,
        handleRatingChange,
        setRating
    }
  }