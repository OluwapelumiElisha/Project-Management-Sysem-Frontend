import { UserRequest, publicRequest } from "@/Shared/API/Request";

export const useCreatedProject = () =>{

  const handleGet = async() => {
    
    alert()
    try {
        const res = await UserRequest().get('/getUserProject')
      console.log(res,'hsjsjh');
      console.log('hhhhhh');
    } catch (error) {
        console.log(error);
    }
   }

   return{
    handleGet
   }

}