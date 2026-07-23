import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Confirm = () => {

    const history = useHistory();
    const [timeLeft, setTimeLeft] = useState(() => {
    const expiry = Number(sessionStorage.getItem("otpExpiry"));

    if (!expiry) return 0;

    return Math.max(
        0,
        Math.ceil((expiry - Date.now()) / 1000)
    );
    });

    //OTP Check Storage
    const [otp, setOtp] = useState("");

    //Resend OTP
    const [sending, setSending] = useState(false);

    //Email From Previous Component
    const email = sessionStorage.getItem("email");

    //OTP Verification
    const handleNext = async () => {
    const storedOTP = sessionStorage.getItem("otp");
    const expiry = Number(sessionStorage.getItem("otpExpiry"));

    if (Date.now() > expiry) {
        await Swal.fire({
        title: "OTP Expired",
        text: "Please request a new OTP.",
        icon: "warning",
        });
        return;
    }

    if (otp === storedOTP) {
       await Swal.fire({
        title: "Verified!",
        text: "OTP verification successful.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
    });

    history.push("/Confirm/NewPass");
    } else {
        Swal.fire({
        title: "Invalid OTP",
        text: "The OTP you entered is incorrect.",
        icon: "error",
        });
    }
    };


    //Resend OTP button
    const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
    };
    const resendOTP = async () => {
    const email = sessionStorage.getItem("email");

    if (!email) {
       Swal.fire({
        title: "Email Not Found",
        text: "Please restart the password reset process.",
        icon: "warning",
        });
        return;
    }

    const newOTP = generateOTP();

    sessionStorage.setItem("otp", newOTP);
    sessionStorage.setItem("otpExpiry", Date.now() + 30000); // expires in 30 seconds

    setSending(true);
    try {
        await emailjs.send(
            "service_rrmctpu",
            "template_a8d6z0l",
            {
                to_email: email,
                otp: newOTP,
            },
            "QzHWrAFuYYzwk8GRQ"
        );

        setTimeLeft(30);
        await Swal.fire({
        title: "OTP Sent!",
        text: "A new OTP has been sent to your email.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        });

    } catch (error) {
        Swal.fire({
        title: "Failed",
        text: "Unable to resend OTP. Please try again.",
        icon: "error",
        });
    }
     finally {
    setSending(false);
    }
    };

    // Timer
    useEffect(() => {
    const interval = setInterval(() => {
        const expiry = Number(sessionStorage.getItem("otpExpiry"));

        if (!expiry) {
            setTimeLeft(0);
            clearInterval(interval);
            return;
        }

        const remaining = Math.max(
            0,
            Math.ceil((expiry - Date.now()) / 1000)
        );

        setTimeLeft(remaining);

        if (remaining === 0) {
            clearInterval(interval);
        }

    }, 1000);

    return () => clearInterval(interval);

    }, []);


    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center">
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
                                <h1 className="text-light">OTP</h1>
                            </div>
                        
                            <div className="card-subtitle mt-3">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <p className="text-light">
                                                An OTP for Password Reset has been sent to:<br />
                                                <strong>{email}</strong>
                                            </p>
                                            <input
                                                type="text"
                                                maxLength={6}
                                                value={otp}
                                                onChange={(e) =>
                                                    setOtp(e.target.value.replace(/\D/g, ""))
                                                }
                                            />

                                            <button
                                            type="button"
                                            className="btn btn-info my-5"
                                            onClick={handleNext}
                                            disabled={otp.length !== 6}>
                                                Check
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            {timeLeft === 0 ? (
                                                    <p>
                                                        <button
                                                        type="button"
                                                        className="btn btn-warning mx-5"
                                                        onClick={resendOTP}
                                                        disabled={sending}>
                                                            {sending ? "Sending..." : "Resend OTP"}
                                                        </button>
                                                    </p>
                                                ) : (
                                                    <>
                                                    <p className="text-white">
                                                        Time Remaining: {timeLeft}s
                                                    </p>

                                                    <p className="text-warning">
                                                        If you have multiple Email accounts, Please check the Email <strong>{email}</strong>
                                                    </p>

                                                    </>
                                                )}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Confirm;