import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface SignupStep3Props {
  onComplete: (passwords: { password: string; confirmPassword: string }) => void;
  onSwitchToLogin: () => void;
}

export const SignupStep3: React.FC<SignupStep3Props> = ({ onComplete, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.confirmPassword && formData.password === formData.confirmPassword) {
      onComplete(formData);
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
    <div className="justify-center items-stretch border flex flex-col bg-white mt-[155px] p-8 rounded-[28px] border-2 border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <h2 className="text-black text-[32px] font-semibold leading-none tracking-[-0.19px] self-center">
          Create your password
        </h2>
        <p className="text-neutral-500 text-center text-xl font-medium leading-6 tracking-[-0.12px] mt-2 max-md:max-w-full">
          Secure your account with a strong password to keep your information safe.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch mt-12 max-md:max-w-full max-md:mt-10">
        <div className="w-full text-lg leading-loose max-md:max-w-full">
          <div className="w-full font-medium max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <div className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create your password"
                  className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="aspect-[1] w-6 self-stretch shrink-0 my-auto" />
                  ) : (
                    <Eye className="aspect-[1] w-6 self-stretch shrink-0 my-auto" />
                  )}
                </button>
              </div>
            </div>
            
            <div className="w-full mt-5 max-md:max-w-full">
              <label htmlFor="confirmPassword" className="text-black">
                Confirm Password
              </label>
              <div className="justify-between items-center border flex w-full gap-[40px_100px] text-gray-500 flex-wrap mt-3 p-4 rounded-xl border-2 border-solid max-md:max-w-full">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  className="text-gray-500 self-stretch my-auto bg-transparent border-none outline-none flex-1"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="aspect-[1] w-6 self-stretch shrink-0 my-auto" />
                  ) : (
                    <Eye className="aspect-[1] w-6 self-stretch shrink-0 my-auto" />
                  )}
                </button>
              </div>
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
              )}
            </div>
          </div>
          
          <button
            type="submit"
            disabled={!formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword}
            className="justify-center items-center flex w-full gap-2.5 text-white font-semibold bg-black mt-12 px-5 py-4 rounded-xl max-md:max-w-full max-md:mt-10 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Account
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
