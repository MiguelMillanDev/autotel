'use client';

import Modal from "./Modal";
import { useState, useEffect, useRef } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (loginModal.isOpen && emailRef.current) {
            emailRef.current.focus();
        }
        console.log("LoginModal isOpen state:", loginModal.isOpen);
    }, [loginModal.isOpen]);

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const submitLogin = () => {
        let validationErrors = [];
        if (email === '' || password === '') {
            validationErrors.push('Email and password are required');
        } else if (!validateEmail(email)) {
            validationErrors.push('Invalid email format');
        } else if (password.length < 6) {
            validationErrors.push('Password must be at least 6 characters long');
        }

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
        } else {
            console.log('Email:', email, 'Password:', password);
            setErrors([]);
            setIsSubmitting(true);
            // Simulate an API call
            setTimeout(() => {
                setIsSubmitting(false);
                loginModal.close();
            }, 1000);
        }
    };

    return (
        <Modal isOpen={loginModal.isOpen} close={loginModal.close} label="Log in" content={
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submitLogin(); }}>
                <input 
                    ref={emailRef}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors([]);
                    }} 
                    placeholder="Your e-mail address" 
                    type="email" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />
                <input 
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors([]);
                    }} 
                    placeholder="Your password" 
                    type="password" 
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" 
                />
                {errors.map((error, index) => (
                    <div key={`error_${index}`} className="p-5 bg-red-500 text-white rounded-xl opacity-80">
                        {error}
                    </div>
                ))}
                <CustomButton label="Submit" onClick={submitLogin} disabled={isSubmitting} />
            </form>
        } />
    );
};

export default LoginModal;
