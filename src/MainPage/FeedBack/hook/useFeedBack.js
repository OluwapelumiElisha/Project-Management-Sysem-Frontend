import { zodResolver } from "@hookform/resolvers/zod";
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
    const onSubmit = async (data) => {
      console.log(data);
    }

    return{
        onSubmit,
        form,
        // rating
    }
  }