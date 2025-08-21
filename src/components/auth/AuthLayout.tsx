import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="items-center self-stretch flex min-w-60 flex-col overflow-hidden w-full bg-gray-50 min-h-screen pt-16 pb-[252px] px-20 max-md:pb-[100px] max-md:px-5">
      <div className="flex w-[600px] max-w-full flex-col items-stretch">
        <header>
          <h1 className="text-black text-4xl font-semibold leading-none tracking-[-0.22px] text-center self-center">
            Voicera AI
          </h1>
        </header>
        {children}
      </div>
    </div>
  );
};
