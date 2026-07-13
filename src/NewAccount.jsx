import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";

const NewAcc = () => {
    const [verified, setVerified] = useState(false);
    const history = useHistory();
    const [timeLeft, setTimeLeft] = useState(30);
    const [otp, setOtp] = useState("");
    const [sending, setSending] = useState(false);
    const email = sessionStorage.getItem("email");

   const handleNext = async () => {
    const storedOTP = sessionStorage.getItem("otp");

    if (otp === storedOTP) {
        alert("OTP verification successful");

        // Send account creation email
        await sendSuccessMail();
        history.push("/Home")

        sessionStorage.removeItem("otp");
        sessionStorage.removeItem("email");

    } else {
        alert("Invalid OTP");
    }
    };

    const sendSuccessMail = async () => {
        try {
            await emailjs.send(
                "service_53why4r",
                "template_umh12ro",
                {
                    to_email: email,
                },
                "id7N_gR3xELa_b3RL"
            );

        } catch (error) {
            console.error(error);
        }
    };

    const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
    };


    //Resend OTP button
    const resendOTP = async () => {
    const email = sessionStorage.getItem("email");

    if (!email) {
        alert("Email not found.");
        return;
    }

    const newOTP = generateOTP();

    sessionStorage.setItem("otp", newOTP);
    setOtp("");

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
        alert("New OTP has been sent.");

    } catch (error) {
        alert("Failed to resend OTP.");
        console.error(error);
    }
     finally {
    setSending(false);
    }
    };

    // Timer
    useEffect(() => {
            if (timeLeft === 0) return;

            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
            }, [timeLeft]);


    return (
        <div>
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
                                <h1 className="text-light">
                                    {verified ? "Account Created Successfully!" : "OTP"}
                                </h1>
                            </div>
                        

                            <div className="card-subtitle mt-3">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-auto">
                                            <p className="text-light">
                                                An OTP for cerating new account has been sent to:<br />
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
                                                    <div className="d-flex justify-content-center gap-3 mb-5">
                                                        <a
                                                        href="https://mail.google.com/mail/u/0/#inbox"
                                                        className="btn btn-success text-center align-content-center"
                                                        style={{ height: "40px" }}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        ><i className="bi bi-envelope-open-fill me-2"></i>
                                                            Open Gmail
                                                        </a>
                                                    </div>
                                                    <p className="text-white">
                                                        Time Remaining: {timeLeft}s
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
 
export default NewAcc;