import { useState } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Pass = () => {
    const history = useHistory();

    //Check Email
    const [email, setEmail] = useState("");
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    //OTP Generation
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
        };

    //OTP sent
    const sendOTP = async () => {
    const newOTP = generateOTP();

    sessionStorage.setItem("otp", newOTP);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("otpExpiry", Date.now() + 30000); // expires in 30 seconds

    try {
        await emailjs.send(
            "service_rrmctpu",//Service Id/Type
            "template_a8d6z0l",//Template
            {
                to_email: email,
                otp: newOTP,
            },
            "QzHWrAFuYYzwk8GRQ" //Public Key
        );

        alert("OTP sent successfully!");
        return true;

    } catch (error) {
        alert("Failed to send OTP");
        return false;
    }
    };


    const handleNext = async () => {
    if (!isEmailValid) {
        alert("Enter a valid email.");
        return;
    }

    // Check if the email exists
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((u) => u.email === email);

    if (!user) {
        alert("No account exists with this email.");
        return;
    }

    const success = await sendOTP();

    if (success) {
        history.push("/Confirm");
    }
    };

    
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center align-items-around">
                <div className="col-auto">
                    <div className="card my-5"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                    height:"550px",
                    width:"600px",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderRadius: "15px"}}>
                        <div className="card-body text-center">
                            <div className="card-title">
                                <h1 className="text-light">Password Reset</h1>
                            </div>

                            <div className="card-subtitle mt-3">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <p className="text-light">
                                                Enter the registered email:
                                            </p>
                                            <input
                                            className="text-center"
                                            type="email"
                                            placeholder="Registered Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <button
                                    className="btn btn-info my-4"
                                    type="button"
                                    onClick={handleNext}
                                    >
                                        Send OTP
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default Pass;