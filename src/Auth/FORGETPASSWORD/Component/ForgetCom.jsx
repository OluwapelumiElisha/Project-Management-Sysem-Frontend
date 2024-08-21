import { useLoginPage } from '@/Auth/Login/hook/useLoginPage';
import React from 'react'
import { Link } from 'react-router-dom'
import verify from '@/assets/004.png'
import GenericForminput from '@/Shared/GenericFormInput';
import { Form } from '@/components/ui/form';
import { useForget } from '../hooks/useForget';
import { ForgetLogin } from '../utils/ForgetLogin';
import { Button } from '@/components/ui/button';

const ForgetCom = () => {
  const {form, onSubmit} = useForget()
  return (
    <div className='bg-black-400 w-[100%] md:w-[45%] lg:w-[50%]'>
      <div className='w-[380%] lg:w-[150%] md:w-[180%] sm:w-[100%] h-[400px] m-auto mt-32 lg:ms-36 md:ms-18 sm:ms-14'>
        <div className='ms-28'>
          <img src={verify} alt="Verify Email" />
        </div>
      <h1 className='lg:text-2xl font-bold md:text-2xl sm:text-2xl text-xl ms-28'>Verify your Email</h1> 
      <p className="mt-2  text-center">Thank you, check your email for instructions to reset your<br />
      <span className="block text-center">password.</span></p> <br />
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {ForgetLogin.map((elem, i) => (
              <div key={i + elem.name} className="relative mb-4">
                <GenericForminput
                  form={form}
                  {...elem}
                  type={elem.type}
                />
               
              </div>
            ))}
            
            <div className="flex items-center justify-center">
              <Button className='w-full bg-red-600 p-3'  type="submit">
                {/* {loading ? "Verifying..." : "Verify"} */}
                Verify
              </Button>
            </div>
          </form>
        </Form>
      </div>
      
     
      <div className="flex items-center justify-center mt-4">
        <p>Don't have an account?</p>
        <Link to={'/'}>
          <p className="text-red-600 font-bold cursor-pointer pl-2">Sign Up</p>
        </Link>
      </div>
    </div>
  </div>
    
  )
}

export default ForgetCom
