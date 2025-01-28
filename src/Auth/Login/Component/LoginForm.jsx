
import GenericForminput from "@/Shared/GenericFormInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import google from '/src/assets/google.png';
import facebook from '/src/assets/facebook.png';
import { Link, useNavigate } from "react-router-dom";
import { useLoginPage } from "../hook/useLoginPage";
import { LoginInput } from "../utils/LoginInput";
import { useState } from "react";
import eye from '@/assets/eye_660383.png';
import hidden from '@/assets/hidden_2355322.png';
// import { data } from "autoprefixer";

const LoginForm = () => {
  const { onSubmit, form, loading, handleCheckEmail } = useLoginPage();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
 
  return (
    <div className='bg-black-400 w-[100%] md:w-[45%] lg:w-[50%]'>
      <div className='w-[80%] lg:w-[55%] md:w-[80%] sm:w-[80%] h-[400px] m-auto mt-24 lg:ms-32 md:ms-18 sm:ms-14'>
        <h1 className='lg:text-2xl font-bold md:text-2xl sm:text-2xl text-xl'>Sign in to your Account</h1> 
        <p className="mt-2">Welcome back! Please enter your details.</p> <br />
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {LoginInput.map((elem, i) => (
                <div key={i + elem.name} className="relative mb-4">
                  <GenericForminput
                    form={form}
                    {...elem}
                    type={elem.name === 'password' && isPasswordVisible ? 'text' : elem.type}
                  />
                 
                  {elem.name === 'password' && (
                    <span onClick={togglePasswordVisibility} className="absolute right-2 top-2 cursor-pointer text-sm text-blue-500">
                      {isPasswordVisible ? 
                        <img src={eye} className="w-6 h-6" alt="Show" /> : 
                        <img src={hidden} className="w-6 h-6" alt="Hide" />
                      }
                    </span>
                  )}
                </div>
              ))}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-sm">Remember me</label>
                </div>
      
                {/* <Link to={'/ForgetPassword'}> */}
        <p
          // onClick={() => {
          //   const email = form.watch('email');
          //   console.log(email); // Logs the value of the email input field
          //   if (email == null) {
              
          //   }else{
          //     navigate('/ForgetPassword')
          //   }
          // }}
          onClick={handleCheckEmail}
          className="cursor-pointer text-red-600 font-bold"
        >
          Forgot Password?
        </p>
      {/* </Link> */}

           
              </div>
              <div className="flex items-center justify-center">
                <Button className='w-full bg-red-600 p-3' disabled={loading} type="submit">
                  {loading ? "Loading..." : "Sign in"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="text-gray-500 mx-2">or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="lg:flex items-center justify-center md:flex items-center justify-center  sm:flex items-center justify-center block items-center m-auto w-[80%] mt-4">
          <img src={google} alt="Google" className="cursor-pointer" />
          <img src={facebook} alt="Facebook" className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-center mt-4">
          <p>Don't have an account?</p>
          <Link to={'/SignUp'}>
            <p className="text-red-600 font-bold cursor-pointer pl-2 ">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
