'use client';

import Modal from "./Modal";
import { useState, useEffect, useRef } from "react";
import useSignupModal from "@/app/hooks/useSingupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (signupModal.isOpen && emailRef.current) {
            emailRef.current.focus();
        }
        console.log("SignupModal isOpen state:", signupModal.isOpen);
    }, [signupModal.isOpen]);

    const submitSignup = () => {
        // Añade tu lógica de registro aquí
        console.log('Email:', email, 'Password1:', password1, 'Password2:', password2);
        signupModal.close();
    };

    return (
        <Modal isOpen={signupModal.isOpen} close={signupModal.close} label="Sign up" content={
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submitSignup(); }}>
                <input 
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your e-mail address" 
                    type="email" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />
                <input 
                    onChange={(e) => setPassword1(e.target.value)} 
                    placeholder="Your password" 
                    type="password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />
                <input 
                    onChange={(e) => setPassword2(e.target.value)} 
                    placeholder="Repeat password" 
                    type="password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />
                {errors.map((error, index) => (
                    <div key={`error_${index}`} className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                        {error}
                    </div>
                ))}
                <CustomButton label="Submit" onClick={submitSignup} disabled={isSubmitting} />
            </form>
        } />
    );
};

export default SignupModal;
