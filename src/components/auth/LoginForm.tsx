import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="justify-center items-stretch border flex flex-col bg-white mt-[141px] p-8 rounded-[28px] border-2 border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center flex flex-col items-center">
        <h2 className="text-black text-[32px] font-semibold leading-none tracking-[-0.19px]">
          Welcome to Voicera AI
        </h2>
        <p className="text-neutral-500 text-center text-xl font-medium leading-[1.2] tracking-[-0.12px] mt-2">
          Please enter your details to sign in
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
        <div className="w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full font-medium max-md:max-w-full">
              <div className="w-full text-lg leading-loose max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  <label htmlFor="email" className="text-black">
                    Email
                  </label>
                  <div className="items-center border flex w-full gap-2.5 text-gray-500 mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email..."
                      className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                      required
                    />
                  </div>
                </div>
                
                <div className="w-full mt-5 max-md:max-w-full">
                  <label htmlFor="password" className="text-black">
                    Password
                  </label>
                  <div className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                      required
                    />
                    <Eye className="aspect-[1] w-6 self-stretch shrink-0 my-auto" />
                  </div>
                </div>
              </div>
              
              <div className="flex w-full items-center gap-[40px_100px] text-xl text-black text-center tracking-[-0.12px] leading-[1.2] justify-between flex-wrap mt-7 max-md:max-w-full">
                <div className="self-stretch flex items-center gap-3 justify-center my-auto">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                    className="aspect-[1/1] border self-stretch flex w-5 shrink-0 h-5 my-auto rounded-sm border-2 border-solid"
                  />
                  <label htmlFor="rememberMe" className="text-black self-stretch my-auto cursor-pointer">
                    Remember me
                  </label>
                </div>
                <button type="button" className="text-black underline decoration-solid decoration-auto underline-offset-auto underline self-stretch my-auto">
                  Forgot password?
                </button>
              </div>
            </div>
            
            <button
              type="submit"
              className="justify-center items-center flex w-full gap-2.5 text-lg text-white font-semibold whitespace-nowrap leading-loose bg-black mt-12 px-5 py-4 rounded-xl max-md:max-w-full max-md:mt-10 hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </div>
        </div>
        
        <p className="text-black text-center text-xl font-medium leading-[1.2] tracking-[-0.12px] self-center mt-7">
          <span className="font-normal text-gray-500">Don't have an account?</span>{' '}
          <button
            type="button"
            onClick={onSwitchToSignup}
            className="font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};
