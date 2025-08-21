import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface SignupStep2Props {
  email: string;
  onNext: (code: string) => void;
  onCancel: () => void;
}

export const SignupStep2: React.FC<SignupStep2Props> = ({ email, onNext, onCancel }) => {
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 6) {
      onNext(code);
    }
  };

  const handleResend = () => {
    setCountdown(30);
    console.log('Resending verification code...');
  };

  return (
    <div className="justify-center items-stretch border bg-white relative flex flex-col mt-[267px] py-5 rounded-2xl border-2 border-solid max-md:max-w-full max-md:mt-10">
      <button
        onClick={onCancel}
        className="absolute z-10 right-5 top-5 p-1 hover:bg-gray-100 rounded"
        aria-label="Close verification dialog"
      >
        <X className="aspect-[1] w-4 h-4" />
      </button>
      
      <div className="z-0 flex w-full flex-col items-stretch px-5 max-md:max-w-full">
        <h2 className="text-black text-2xl font-semibold leading-none tracking-[-0.14px] self-center">
          Verify your identity
        </h2>
        <p className="text-neutral-500 text-center text-base font-medium leading-5 tracking-[-0.1px] mt-2 max-md:max-w-full">
          We've sent a 6-digit verification code to{' '}
          <span className="font-bold">{email}</span>. Enter it below to verify your identity.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="z-0 flex w-full flex-col items-stretch justify-center mt-6 px-5 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="flex w-full flex-col items-stretch text-lg justify-center max-md:max-w-full">
            <label htmlFor="verificationCode" className="text-black font-semibold leading-loose">
              Enter Code
            </label>
            <div className="items-center border flex min-h-[52px] w-full gap-2.5 text-gray-500 font-medium leading-none mt-3 px-4 py-[15px] rounded-xl border-2 border-solid max-md:max-w-full">
              <input
                type="text"
                id="verificationCode"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter the 6 digits code"
                className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                maxLength={6}
                required
              />
            </div>
          </div>
          
          <p className="text-neutral-500 text-center text-base font-medium leading-none tracking-[-0.1px] self-center mt-4">
            Didn't receive the code?{' '}
            {countdown > 0 ? (
              <>
                Resend in <span className="font-bold text-black">{countdown}s</span>
              </>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="font-bold text-black hover:underline"
              >
                Resend
              </button>
            )}
          </p>
        </div>
        
        <div className="flex w-full gap-3 text-lg font-semibold leading-loose flex-wrap mt-8 max-md:max-w-full">
          <button
            type="button"
            onClick={onCancel}
            className="justify-center items-center flex min-w-60 gap-2.5 text-gray-500 whitespace-nowrap flex-1 shrink basis-[0%] bg-gray-100 px-5 py-4 rounded-xl hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={code.length !== 6}
            className="justify-center items-center flex min-w-60 gap-2.5 text-white flex-1 shrink basis-[0%] bg-black px-5 py-4 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify & Continue
          </button>
        </div>
      </form>
    </div>
  );
};
