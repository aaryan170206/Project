import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const NewPass = () => {
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showPasswordWarning, setShowPasswordWarning] = useState(false);

    //Password Validation
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isStrongPassword =
        hasMinLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialChar;

    //Strength Bar
    const isPasswordMatch = password === confirmPassword;
    const strength =
    (hasMinLength ? 20 : 0) +
    (hasUpperCase ? 20 : 0) +
    (hasLowerCase ? 20 : 0) +
    (hasNumber ? 20 : 0) +
    (hasSpecialChar ? 20 : 0);

    let strengthText = "";
    let strengthColor = "";

    if (strength === 0) {
        strengthText = "";
    } else if (strength <= 40) {
        strengthText = "Weak";
        strengthColor = "bg-danger";
    } else if (strength <= 60) {
        strengthText = "Medium";
        strengthColor = "bg-warning";
    } else if (strength <= 80) {
        strengthText = "Strong";
        strengthColor = "bg-info";
    } else {
        strengthText = "Very Strong";
        strengthColor = "bg-success";
    }

    const email = sessionStorage.getItem("email");

    const sendConfirmationMail = async () => {
    if (!email) {
    Swal.fire({
    title: "Email Not Found",
    text: "Please restart the password reset process.",
    icon: "warning",
    });
    return;
    
}
    try {
        await emailjs.send(
            "service_53why4r",
            "template_s5ttywn",
            {
                to_email: email,
            },
            "id7N_gR3xELa_b3RL"
        );

        return true;
    } catch (error) {
        console.error(error);
        Swal.fire({
        title: "Failed",
        text: "Unable to send the confirmation email.",
        icon: "error",
        });
        return false;
    }
    };

    const handleSubmit = async () => {
    if (password.trim() === "" || confirmPassword.trim() === "") {
        Swal.fire({
        title: "Incomplete Form",
        text: "Please fill in both password fields.",
        icon: "warning",
        });
        return;
    }
    if (password !== confirmPassword) {
        Swal.fire({
        title: "Passwords Don't Match",
        text: "Please enter the same password in both fields.",
        icon: "warning",
        });
    return;
    }

    if (!isStrongPassword) {
        Swal.fire({
        title: "Weak Password",
        text: "Please create a stronger password.",
        icon: "warning",
        });
        return;
    }
     setLoading(true);
     try {
    //Password Change & Correct Email Access
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const index = users.findIndex(
            (user) =>
            user &&
            user.email.trim() === email.trim()
        );

        if (index === -1) {
        Swal.fire({
            title: "User Not Found",
            text: "Unable to locate this account.",
            icon: "error",
            });
            return;
        }
        
        if (users[index].password === password) {
            Swal.fire({
            title: "Choose a Different Password",
            text: "Your new password cannot be the same as your current password.",
            icon: "warning",
            });
        return;
        }

        users[index].password = password;

        localStorage.setItem("users", JSON.stringify(users));

        const success = await sendConfirmationMail();
     
        //Password Change Mail & Redirecting
        if (success) {
        await Swal.fire({
            title: "Password Updated!",
            text: "Your password has been changed successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
            });

            sessionStorage.removeItem("otp");
            sessionStorage.removeItem("email");

            history.push("/");

        }
    }
    finally {
        setLoading(false);
    }
    };

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row justify-content-center align-content-center">
            <div className="col-auto align-content-center">
                <div className="card"
                style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                minHeight: "550px",
                width:"600px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "15px"}}>
                    <div className="card-body text-center text-light">
                        <div className="card-title my-3">
                            <h2>New Password</h2>
                        </div>

                        <div className="card-subtitle">
                            <h5>Enter a new password for this account</h5>
                        </div>

                        <form className="my-5">
                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <label className="d-block">Password</label>
                                    <div className="input-group">
                                        <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        className="form-control bg-light text-dark"
                                        placeholder="New Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => setShowPasswordWarning(true)}
                                        onBlur={() => setShowPasswordWarning(false)}/>

                                        <span
                                            className="input-group-text bg-light text-dark"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                        {password.length > 0 && document.activeElement?.name === "password" && (
                                            <div
                                            className="mt-3 p-3 rounded"
                                            style={{
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.15)"}}>
                                                <small className="text-warning fw-bold d-block mb-2">
                                                    Password must contain:
                                                </small>

                                                <div className={hasMinLength ? "text-success" : "text-danger"}>
                                                    {hasMinLength ? "✅" : "❌"} At least 8 characters
                                                </div>

                                                <div className={hasUpperCase ? "text-success" : "text-danger"}>
                                                    {hasUpperCase ? "✅" : "❌"} One uppercase letter
                                                </div>

                                                <div className={hasLowerCase ? "text-success" : "text-danger"}>
                                                    {hasLowerCase ? "✅" : "❌"} One lowercase letter
                                                </div>

                                                <div className={hasNumber ? "text-success" : "text-danger"}>
                                                    {hasNumber ? "✅" : "❌"} One number
                                                </div>

                                                <div className={hasSpecialChar ? "text-success" : "text-danger"}>
                                                    {hasSpecialChar ? "✅" : "❌"} One special character
                                                </div>
                                            </div>
                                        )}
                                        {password && (
                                            <>
                                            <div className="progress mt-2" style={{ height: "8px" }}>
                                                <div
                                                    className={`progress-bar ${strengthColor}`}
                                                    role="progressbar"
                                                    style={{ width: `${strength}%` }}
                                                ></div>
                                            </div>

                                            <small className="text-light">
                                                Password Strength: <strong>{strengthText}</strong>
                                            </small>
                                            </>
                                        )}
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-auto">
                                    <label className="d-block mt-5">Confirm Password</label>
                                    <div className="input-group">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            placeholder="Confirm New Password"
                                            className="form-control bg-light text-dark"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}/>

                                        <span
                                            className="input-group-text bg-light text-dark"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {confirmPassword !== "" && (
                                password === confirmPassword ? (
                                    <p className="text-success mt-2">
                                        Passwords match
                                    </p>
                                ) : (
                                    <p className="text-danger mt-2">
                                        Passwords do not match
                                    </p>
                                )
                            )}

                            {confirmPassword !== "" && isPasswordMatch && (
                                <p className={isStrongPassword ? "text-info" : "text-warning"}>
                                    {isStrongPassword
                                        ? "Password is strong."
                                        : "Password is too weak."}
                                </p>
                            )}

                            <div className="row justify-content-center mt-5">
                                <div className="col-auto">
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="btn rounded-pill px-5 py-2 fw-bold shadow"
                                        style={{
                                            background: loading
                                                ? "#6c757d"
                                                : "linear-gradient(135deg, #00c6ff, #0072ff)",
                                            color: "#fff",
                                            border: "none",
                                            transition: "all .3s ease",
                                            minWidth: "190px",}}>
                                        {loading ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                ></span>
                                                Updating...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-shield-lock-fill me-2"></i>
                                                Update Password
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default NewPass;