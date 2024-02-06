import React, { useState } from 'react'
import OtpFields from './OtpFields';

export const Form = () => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [showOtpField, setShowOtpField] = useState(false);

    const handlePhoneNumberSubmit  = e => {
        e.preventDefault();
        const regax =/^[0-9]/g;
        if(phoneNumber.length < 10 || !regax.test(phoneNumber)){
            alert('Invalid phone number');
            return
        }
        setShowOtpField(true);
        
    };

    const onOtpSubmit = e => {
        console.log("Code sent successfully")
    }
  return (
    <div>
        {
            !showOtpField ? (
                <form onSubmit={handlePhoneNumberSubmit}>
                <input 
                    type='text'
                    name="phone"
                    placeholder='Enter Phone Number'
                    className='input-group'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button className='btn'>Submit</button>
            </form>
            ) : 
            <div>
                <p className='mt-4'>Enter OTP sent to {phoneNumber}</p>
                <OtpFields onOtpSubmit={onOtpSubmit} />
            </div>
     
        }

    </div>
  )
}
