import GenericForminput from "@/Shared/GenericFormInput";
import { signUpinputs } from "../utils/signUpinputs";
import { Form } from "@/components/ui/form";
import { useSignUp } from "../hooks/useSignUp";
import { Button } from "@/components/ui/button";
import google from '/src/assets/google.png'
import facebook from '/src/assets/facebook.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import eye from '@/assets/eye_660383.png';
import hidden from '@/assets/hidden_2355322.png';

const SignupForm = () => {
  const { onSubmit, form, loading, handleChange } = useSignUp()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div>

      <div className='bg-black-400   w-[100%]'>
        <div className=' w-[80%] lg:w-[70%] md:w-[80%] sm:w-[80%]  h-[400px] m-auto mt-16 lg:ms-32 md:ms-18 sm:ms-14 ' >
          <h1 className='lg:text-2xl font-bold md:text-2xl sm:text-2xl text-xl'>Sign Up for an Account</h1> <br />
          <div >
            <Form {...form}>
              <div className="">
                <label htmlFor="">Profile picture</label> <br />
                <input
                  type="file"
                  onChange={handleChange}
                  placeholder="Enter your text"
                  className="px-4 py-2 w-44 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {signUpinputs.map((elem, i) => (
                  <div key={i + elem.name} className="relative">
                    <GenericForminput
                      form={form}
                      {...elem}
                      type={elem.name === 'password' && isPasswordVisible ? 'text' : elem.type}
                    />
                    {elem.name === 'password' && (
                      <p onClick={togglePasswordVisibility} className="absolute right-2 top-2 cursor-pointer text-sm text-blue-500">
                        {isPasswordVisible ? <img src={eye} className="w-6 h-6" alt="Show" /> :
                          <img src={hidden} className="w-6 h-6" alt="Hide" />}
                      </p>
                    )}
                  </div>
                  // <GenericForminput  form={form} {...elem} 
                  // type={elem.name === 'password' && isPasswordVisible ? 'text' : elem.type}
                  // />
                ))}
                <p className="float-right -mt-10 me-2">show</p>
                <p className="mb-3 text-sm">Your password must have at least 6 characters</p>
                <div className="flex items-center justify-center ">
                  <Button className=' w-full bg-red-600 p-3' disabled={loading} type="submit">
                    {loading ? "loading..." : "Sign Up"}
                  </Button>
                </div>

              </form>
            </Form>
          </div>
          <div className="flex items-center justify-center mt-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className=" text-gray-500">or sign up with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="lg:flex items-center justify-center md:flex items-center justify-center  sm:flex items-center justify-center block items-center m-auto w-[80%] mt-4">
            <img src={google} alt="" />
            <img className="lg:ps-2 md:ps-2 sm:ps-2 ps-0" src={facebook} alt="" />
          </div>
          <div className="flex items-center justify-center mt-4">
            <p>Already have an Account?</p>
            <Link to={'/Login'}><p className="text-red-600 font-bold cursor-pointer ps-2">Login</p></Link>
          </div>
        </div>

      </div>

    </div>
  );
}

export default SignupForm;

