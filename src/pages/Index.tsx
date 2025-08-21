import React, { useState } from 'react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupStep1 } from '@/components/auth/SignupStep1';
import { SignupStep2 } from '@/components/auth/SignupStep2';
import { SignupStep3 } from '@/components/auth/SignupStep3';

type AuthStep = 'login' | 'signup-step1' | 'signup-step2' | 'signup-step3';

interface SignupData {
  fullName: string;
  email: string;
  verificationCode?: string;
  password?: string;
  confirmPassword?: string;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('login');
  const [signupData, setSignupData] = useState<SignupData>({
    fullName: '',
    email: ''
  });

  const handleSwitchToSignup = () => {
    setCurrentStep('signup-step1');
  };

  const handleSwitchToLogin = () => {
    setCurrentStep('login');
    setSignupData({ fullName: '', email: '' });
  };

  const handleSignupStep1Complete = (data: { fullName: string; email: string }) => {
    setSignupData(prev => ({ ...prev, ...data }));
    setCurrentStep('signup-step2');
  };

  const handleVerificationComplete = (code: string) => {
    setSignupData(prev => ({ ...prev, verificationCode: code }));
    setCurrentStep('signup-step3');
  };

  const handleSignupComplete = (passwords: { password: string; confirmPassword: string }) => {
    setSignupData(prev => ({ ...prev, ...passwords }));
    console.log('Account created successfully:', { ...signupData, ...passwords });
    // Here you would typically make an API call to create the account
    // For now, we'll just redirect to login
    setCurrentStep('login');
    setSignupData({ fullName: '', email: '' });
  };

  const handleCancelVerification = () => {
    setCurrentStep('signup-step1');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'login':
        return <LoginForm onSwitchToSignup={handleSwitchToSignup} />;
      
      case 'signup-step1':
        return (
          <SignupStep1
            onNext={handleSignupStep1Complete}
            onSwitchToLogin={handleSwitchToLogin}
          />
        );
      
      case 'signup-step2':
        return (
          <SignupStep2
            email={signupData.email}
            onNext={handleVerificationComplete}
            onCancel={handleCancelVerification}
          />
        );
      
      case 'signup-step3':
        return (
          <SignupStep3
            onComplete={handleSignupComplete}
            onSwitchToLogin={handleSwitchToLogin}
          />
        );
      
      default:
        return <LoginForm onSwitchToSignup={handleSwitchToSignup} />;
    }
  };

  return (
    <main className="min-h-screen">
      <AuthLayout>
        {renderCurrentStep()}
      </AuthLayout>
    </main>
  );
};

export default Index;
