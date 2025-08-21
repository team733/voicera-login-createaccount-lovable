import React, { useState } from 'react';

interface SignupStep1Props {
  onNext: (data: { fullName: string; email: string }) => void;
  onSwitchToLogin: () => void;
}

export const SignupStep1: React.FC<SignupStep1Props> = ({ onNext, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      onNext(formData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="justify-center items-stretch border flex flex-col bg-white mt-[167px] p-8 rounded-[28px] border-2 border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center flex flex-col items-center max-md:max-w-full">
        <h2 className="text-black text-[32px] font-semibold leading-none tracking-[-0.19px]">
          Create an Account
        </h2>
        <p className="text-neutral-500 text-center text-xl font-medium leading-[1.2] tracking-[-0.12px] mt-2 max-md:max-w-full">
          Get started with your Voicera AI dashboard in minutes.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
        <div className="w-full text-lg leading-loose max-md:max-w-full">
          <div className="w-full font-medium max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label htmlFor="fullName" className="text-black">
                Full name
              </label>
              <div className="items-center border flex w-full gap-2.5 text-gray-500 mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name..."
                  className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                  required
                />
              </div>
            </div>
            
            <div className="w-full mt-5 max-md:max-w-full">
              <label htmlFor="email" className="text-black">
                Business email
              </label>
              <div className="items-center border flex w-full gap-2.5 text-gray-500 mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your business email..."
                  className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                  required
                />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="justify-center items-center flex w-full gap-2.5 text-white font-semibold whitespace-nowrap bg-black mt-12 px-5 py-4 rounded-xl max-md:max-w-full max-md:mt-10 hover:bg-gray-800 transition-colors"
          >
            Continue
          </button>
        </div>
        
        <p className="text-black text-center text-2xl font-medium leading-none tracking-[-0.14px] self-center mt-7">
          <span className="font-normal text-gray-500">Already have an account?</span>{' '}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};
