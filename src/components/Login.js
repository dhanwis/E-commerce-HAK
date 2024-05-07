import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

function Login() {
  const [mobileNumber, setMobileNumber] = useState(''); // State for mobile number input
  const [otp, setOtp] = useState(''); // State for OTP input
  const [otpSent, setOtpSent] = useState(false); // State to check if OTP has been sent

  const sendOTP = () => {
    // Function to send OTP - replace with actual logic for sending OTP
    console.log(`Sending OTP to ${mobileNumber}`);
    setOtpSent(true); // Change the state to reflect that OTP has been sent
  };

  const verifyOTP = () => {
    // Function to verify OTP - replace with actual logic for verifying OTP
    console.log(`Verifying OTP: ${otp}`);
    // Here, you'd typically perform OTP verification and handle success or failure
  };

  return (
    <div className="login-page"> {/* Add a container for styling */}
    <div className='login-front'>
    
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with </p>
			
    </div>
    <div className='login-side'>
      <h2>Login</h2>
      <div className="login-form">
        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="login-input" // Apply some styling
        />
        {otpSent ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="login-input" // Apply styling
            />
            <button onClick={verifyOTP} className="verify-otp-btn">Verify OTP</button>
          </>
        ) : (
          <button onClick={sendOTP} className="send-otp-btn">Send OTP</button>
        )}
      </div>
      </div>
    </div>
  );
}

export default Login;
