import GenericForminput from "@/Shared/GenericFormInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import left from '/src/assets/left_10933550 (1).png'
import facebook from '/src/assets/facebook.png'
import { otpInputs } from "../utils/otpInputs";
import { useOtp } from "../hook/useOtp";
import { Link } from "react-router-dom";
const OtpForm = () => {
  const { onSubmit, form, loading, } = useOtp()
  return (
    <div >
       <Link to={'/'}><img className="w-[12%] mt-8 ms-14 cursor-pointer" src={left} alt="" /></Link> 
     <div>

     </div>
    <div className='bg-black-400   w-[100%]'>
          <div className=' w-[80%] lg:w-[70%] md:w-[80%] sm:w-[80%]  h-[400px] m-auto mt-20 lg:ms-36 md:ms-18 sm:ms-14 ' >
            <h1 className='lg:text-2xl font-bold md:text-2xl sm:text-2xl text-xl'>Verify your Email</h1> <br />
            <p>Thank you, Please Check your Email OTP been sent.</p>
            <div >
      <Form {...form}>
      
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {otpInputs.map((elem, i) => (
            <GenericForminput  key={i + elem.name} form={form} {...elem} />
          ))} <br />
          {/* <p className="float-right -mt-10 me-2">show</p> */}
        {/* <p className="mb-3 text-sm">Your password must have at least 6 characters</p> */}
        <div className="flex items-center justify-center ">
          <Button className=' w-full bg-red-600 p-3' disabled={loading} type="submit">
            {loading ? "Verifying..." : "Verify"}
          </Button>
        </div>
          
        </form>
      </Form>
    </div>
    
    <div className="flex items-center justify-center mt-4">
      <p>Already have an Account?</p>
      <Link to={'/'}>  <p on className="text-red-600 font-bold cursor-pointer ps-2">Login</p></Link>
     
    </div>
          </div>
     
    </div>
    
    </div>
  );
}

export default OtpForm;




















