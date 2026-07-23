import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const NewAcc = () => {
    const history = useHistory();
    const [verified, setVerified] = useState(false);
    const [timeLeft, setTimeLeft] = useState(() => {
    const expiry = Number(sessionStorage.getItem("otpExpiry"));

    if (!expiry) return 0;

    return Math.max(
        0,
        Math.ceil((expiry - Date.now()) / 1000)
    );
    });
    const [otp, setOtp] = useState("");
    const [sending, setSending] = useState(false);
    const email = sessionStorage.getItem("email");

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

    if (otp !== storedOTP) {
    Swal.fire({
    title: "Invalid OTP",
    text: "The OTP you entered is incorrect.",
    icon: "error",
    });
    return;
    }

    if (otp === storedOTP) {
       
    const pendingUser = JSON.parse(
    sessionStorage.getItem("pendingUser")
    );

    if (!pendingUser) {
    Swal.fire({
    title: "Session Expired",
    text: "Please sign up again.",
    icon: "warning",
    });
    return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
    (u) => u && u.email.trim() === pendingUser.email.trim()
    );

    if (existingUser) {
        Swal.fire({
        title: "Account Exists",
        text: "This email is already registered.",
        icon: "warning",
        });
        return;
    }

    users.push(pendingUser);

    localStorage.setItem("users", JSON.stringify(users));

    await sendSuccessMail();

    sessionStorage.removeItem("otp");
    sessionStorage.removeItem("otpExpiry");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("pendingUser");

    setVerified(true);

    await Swal.fire({
    title: "Account Created!",
    text: "Your account has been created successfully.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false,
    });
    history.push("/");
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
        Swal.fire({
        title: "Not Found",
        text: "The email could not br found.",
        icon: "warning",
        });
        return;
    }

    const newOTP = generateOTP();

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

        const expiry = Date.now() + 30000;

        sessionStorage.setItem("otp", newOTP);
        sessionStorage.setItem("otpExpiry", expiry);

        setTimeLeft(30);

        await Swal.fire({
        title: "OTP Sent",
        text: "A new OTP has been sent to your email.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
        });

    } catch (error) {
        Swal.fire({
        title: "Failed",
        text: "Unable to resend OTP.",
        icon: "error",
        });
        console.error(error);
    }
     finally {
    setSending(false);
    }
    };

    // Timer
    useEffect(() => {
    const timer = setInterval(() => {
        const expiry = Number(sessionStorage.getItem("otpExpiry"));

        if (!expiry) {
            setTimeLeft(0);
            return;
        }

        const remaining = Math.max(
            0,
            Math.ceil((expiry - Date.now()) / 1000)
        );

        setTimeLeft(remaining);

    }, 1000);

    return () => clearInterval(timer);
    }, []);


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

                                                        <p className="text-warning">
                                                        If you have multiple Email accounts, Please check the Email <strong>{email}</strong>
                                                        </p>

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