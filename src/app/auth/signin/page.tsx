import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Chamber | Login",
  description: "This is Next.js Signin Page TailAdmin Dashboard Template",
};

const SignIn: React.FC = () => {
  return (
    <>
    <div className="w-full h-full">
     <div className="flex flex-wrap items-center justify-center xl:py-7 xl:border-l-2">
       <div className="flex rounded-2xl w-full sm:mt-10 bg-gray drop-shadow-xl xl:w-1/2">
         <div className="w-full h-screen sm:h-full border-stroke xl:w-1/2 xl:border-l-2">
           <div className="w-full  xl:py-0 sm:py-6">
             <div className="ml-5 mt-3 items-center flex flex-col">
             <Image src='/images/logo.png' width={300} height={400} alt="logo" className="flex flex-auto justify-center items-center"/>
               <span className="text-2xl text-center font-semibold font-Poppins">Welcome to Chamber</span>
               <span className="font-light text-center">{'let login to get started using chamber apps'}</span>
             </div>
           </div>
             <div className="py-5 px-5 flex flex-col items-center">
             <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs mb-4 h-12" />
             <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs h-12" />
             </div>
             
             <div className="flex items-center justify-center">
              <Link href="/">
              <button
                 type="submit"
                 className="w-40 rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
               >
                 Sign in
               </button>
              </Link>
               
             </div>
             <p className="mt-3 text-center text-sm text-gray-500">
             Not a member?{' '}
             <a href="/auth/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
               Sign up
             </a>
            </p>
 
         </div>
         <div className="xl:w-1/2 h-full border-l-2 bg-cover xl:block hidden">
           <img src="/images/form.jpg" className="" width={500} height={700} alt="" />
         </div>
       </div>
     </div>
    </div>
   </>
  );
};

export default SignIn;
