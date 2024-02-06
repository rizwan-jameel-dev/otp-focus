import React, { useEffect, useRef, useState } from "react";

const OtpFields = ({onOtpSubmit}) => {

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
	// allow only numbers ;
    if(isNaN(value)) return ;
    const optValue = [...otp];
	optValue[index] = value.substring(value.length - 1);
	setOtp(optValue);
	const combinedOtp = optValue.join("");

	if(combinedOtp.length == 4) {
		onOtpSubmit();
		console.log(combinedOtp ,"check combined");
	}

	// for focus on the next element
	if(value && index < optValue.length - 1 && inputRef.current[index + 1] ){
		inputRef.current[index + 1].focus();
	}
  };


//   click on backspace button and go to previous element if its value not exist
  const handlekeyDown = (e,index) => {
	if(e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]){
		inputRef.current[index - 1].focus();
	}
  };

  const handleClick = (e,index)  => {
	inputRef.current[index].setSelectionRange(1,1);
	// optional
	if(index > 0 && !otp[index -1]){
		inputRef.current[otp.indexOf('')].focus();
	}
  }
  return (
    <div>
      {otp.map((item, index) => {
        return (
          <input
            type="text"
            value={item}
            className="otp-input"
            ref={(input) => (inputRef.current[index] = input)}
            key={index}
			onChange={(e) => handleChange(e, index)}
			onKeyDown={(e)=>handlekeyDown(e,index)}
			onClick={(e) => handleClick(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpFields;
