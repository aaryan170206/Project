import Nav from "./Navbar";
import { useEffect, useState } from "react";
import { AnimatePresence,motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";



//Background Image
import Contact_1 from "./assets/Contact_1.jpg";

const Contact = () => {
    const [loading, setLoading] = useState(false);

    

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
        alert("Please fill all the fields.");
        return;
    }

    if (!isEmailValid) {
        alert("Please enter a valid email.");
        return;
    }

    const contactData = {
        id: Date.now(),
        name,
        email,
        subject,
        message,
        submittedOn: new Date().toLocaleString(),
    };

    const messages =
        JSON.parse(localStorage.getItem("contactMessages")) || [];

    messages.push(contactData);

    localStorage.setItem(
        "contactMessages",
        JSON.stringify(messages)
    );

   const templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message,
};
    setLoading(true);

    emailjs
    .send(
        "service_zr2rtem",
        "template_d3v2x3b",
        templateParams,
        "iu-xECPXeoZmlGogI"
    )
    .then(() => {
        alert("Message sent successfully! A confirmation email has been sent.");

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    })
    .catch((error) => {
        console.log(error);
        alert("Message saved, but confirmation email failed.");
    })
    .finally(() => {
        setLoading(false);
    });
    };
//Refresh From Top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    },[]);


//Form Data
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [subject, setSubject] = useState("");
const [message, setMessage] = useState("");

//Valid Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isEmailValid = emailRegex.test(email);

//FAQs Question & Answers
    const faqs = [
    {
        question: "Who can use this website?",
        answer: "This website is designed for students, professionals, researchers, and anyone interested in learning about Artificial Intelligence and Automation. Whether you're just starting out or looking to expand your knowledge, you'll find resources suited to different experience levels."
    },
    {
        question: "Is this website free?",
        answer: "Yes. This website is completely free to use. All learning resources and educational content are available without any subscription or registration fees."
    },
    {
        question: "Can beginners learn here?",
        answer: "Absolutely! The content is written in a simple and structured manner, making it suitable for beginners while also providing valuable insights for intermediate and advanced learners."
    },
    {
        question: "How often is content updated?",
        answer: "The website is updated whenever new topics, technologies, or improvements are added. Our goal is to keep the information relevant and aligned with the latest developments in AI and Automation."
    },
    {
        question: "Can I suggest new topics?",
        answer: "Yes! We welcome suggestions and feedback from our visitors. If there's a topic you'd like to see covered, you can share your ideas through the Contact page."
    },
    {
        question: "How can I contact the developer?",
        answer: "You can reach the developer by using the Contact page, where you'll find a contact form along with the developer's email address and other contact details."
    },
    {
        question: "Do I need programming knowledge to understand the content?",
        answer: "No. Most topics are explained in an easy-to-understand manner with a focus on concepts and real-world applications. Basic programming knowledge can be helpful for advanced topics but is not required."
    },
    {
        question: "Can I use this website for academic learning?",
        answer: "Yes. The website serves as an educational resource for students and learners who want to understand AI concepts, explore practical applications, and gain foundational knowledge."
    }
    ];

    const repeatedFaqs = [...faqs, ...faqs];
    
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${Contact_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",}}>
            
            {/*Increace Opcacity*/}
            <div
            style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            minHeight: "100vh",}}>
            <Nav />

            <div className="container"
            style={{
            minHeight:"500px",
            minWidth:"500px",
            paddingTop:"80px"
            }}>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h1 className="contact-text text-info">
                            Get in Touch
                        </h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h4 className="contact-text text-light">
                            Have a question, suggestion, or idea? We'd love to hear from you!
                        </h4>
                    </div>
                    <div className="col-auto">
                        <p className="contact-text text-light">
                            At AI & Automation, we believe that innovation grows through collaboration. 
                            Whether you're a student eager to learn about Artificial Intelligence, 
                            a professional looking for insights, a researcher interested in emerging technologies, 
                            or simply someone curious about the future of AI, we're here to help.
                        </p>
                        <p className="contact-text text-light">
                            Feel free to reach out with your questions, feedback, or collaboration opportunities. 
                            Every message helps us improve and create a better learning experience for everyone.
                        </p>
                    </div>
                </div>
            </div>
{/*FAQS------------------------------------------------------------*/}
            <div className="faq-marquee">
                <h1 className="contact-text text-info text-center"
                style={{marginBottom:"60px"}}>Frequently Asked Questions:</h1>
                <motion.div
                    className="faq-track"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity
                    }}>
                    {repeatedFaqs.map((faq, index) => (
                        <div className="faq-card" key={index}>
                            <h4>{faq.question}</h4>
                            <p>🤖 {faq.answer}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

{/*Contact------------------------------------------------------------*/}
            <div className="row justify-content-center">
                <div className="col-auto">
                    <h1 className="contact-text text-info my-4">
                        Have any Quarry?
                    </h1>
                </div>
            </div>

            <div
            style={{
            background: "rgba(0, 0, 50, 0.9)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(18px)",
            minHeight: "5px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.0)",
            overflow: "hidden",
            }}>
                <div className="row justify-content-center my-4">
{/*Left Column--------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="col-5 mt-4 mx-2"
                    style={{
                    marginTop:"100px",
                    background: "rgba(11, 11, 90, 0.9)",
                    borderRadius: "25px",
                    backdropFilter: "blur(50px)",
                    WebkitBackdropFilter: "blur(18px)",
                    minHeight: "5px",
                    boxShadow: "0 15px 40px rgba(143, 188, 143,0.5)",
                    overflow: "hidden",
                    }}>
                        <form
                        className="text-center" onSubmit={handleSubmit}>
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <h1 className="contact-text text-light mt-3">
                                        Send Us a Message
                                    </h1>
                                </div>
                            </div>

                            <div className="row justify-content-center align-content-center my-2">
                                <div className="col-auto border-3 border-bottom border-light">
                                    <label className="text-light d-block text-start">
                                        Name
                                    </label>
                                    <input type="text"
                                    disabled={loading}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    className="text-light custom-input mb-1"
                                    style={{
                                        width:"300px",
                                        height:"45px",
                                        background:"rgba(11, 11, 69, 0.0)",
                                        border:"none"  
                                    }}/>
                                    
                                </div>
                            </div>

                            <div className="row justify-content-center align-content-center mx-5 my-2">
                                <div className="col-auto border-3 border-bottom border-light"> 
                                     <label className="text-light d-block text-start">
                                        Email
                                    </label>  
                                    <input type="email"
                                    disabled={loading}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="text-light custom-input mb-1" 
                                    style={{
                                    width:"300px",
                                    height:"45px",
                                    background:"rgba(11, 11, 69, 0.0)",
                                    border:"none"  
                                    }}/>
                                </div>
                                {/*Vaild Email*/}
                                {!isEmailValid && email !== "" && (
                                    <p className="text-danger">Please enter a valid email address.</p>
                                )}
                            </div>

                            <div className="row justify-content-center align-content-center mx-5 my-2">
                                <div className="col-auto border-3 border-bottom border-light"> 
                                     <label className="text-light d-block text-start">
                                        Subject
                                    </label>  
                                    <select
                                    disabled={loading}
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="text-light custom-input mb-1"
                                    style={{
                                        width: "300px",
                                        height: "45px",
                                        background:"rgba(11, 11, 69, 0.0)",
                                        border:"none" 
                                    }}>
                                        <option value=""></option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="Technical Support">Technical Support</option>
                                        <option value="Feedback">Feedback</option>
                                        <option value="AI Topic Suggestion">AI Topic Suggestion</option>
                                        <option value="Bug Report">Bug Report</option>
                                        <option value="Collaboration">Collaboration</option>
                                        <option value="Business Inquiry">Business Inquiry</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row justify-content-center align-content-center my-2">
                                <div className="col-auto border-3 border-bottom border-light"> 
                                     <label className="text-light d-block text-start">
                                        Message
                                    </label>  
                                    <textarea
                                    disabled={loading}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="text-light custom-input mb-1"
                                    rows={2}
                                    style={{
                                        width: "300px",
                                        resize: "vertical",
                                        background:"rgba(11, 11, 69, 0.0)",
                                        border:"none" 
                                    }}
                                    />
                                </div>
                            </div>

                            <div className="row justify-content-center align-content-center my-2">
                                <div className="col-auto">   
                                    <button
                                    type="submit"
                                    disabled={loading}
                                    className="btn btn-outline-light rounded-pill px-4 my-3">
                                        {loading ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                ></span>
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

{/*Right Column--------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="col-5 mt-4 mx-2"
                    style={{
                        borderRadius: "25px",
                        marginTop:"200px"}}>
                        <h1 className="cont-text text-center my-3 text-light">
                            Contact Information
                        </h1>

                        <div className="row mb-4">
                            <div className="col-4 text-end">
                                <p className="cont-text mb-0 fs-5 text-light">
                                    E-Mail:
                                </p>
                            </div>
                             <div className="col-8 text-start">
                                <a
                                href="mailto:aaryanverma170206@gmail.com"
                                className="cont-text text-decoration-none text-light align-middle">
                                    aaryanverma170206@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-4 text-end">
                                <p className="cont-text mb-0 fs-5 text-light">
                                    Phone:
                                </p>
                            </div>
                            <div className="col-8 text-start">
                                <p className="cont-text mb-0 text-light align-middle my-1">
                                    +91 7973 72 3797
                                </p>
                            </div>
                        </div>

                         <div className="row mb-4">
                            <div className="col-4 text-end">
                                <p className="cont-text mb-0 fs-5 text-light">
                                   Active:
                                </p>
                            </div>
                            <div className="col-8 text-start">
                                <p className="cont-text mb-0 text-light align-middle my-1">
                                    Monday – Friday
                                </p>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-4 text-end">
                                <p className="cont-text mb-0 fs-5 text-light">
                                    Hours:
                                </p>
                                
                            </div>
                             <div className="col-8 text-start">
                                 <p className="cont-text mb-0 text-light align-middle my-1">
                                    9:00 AM – 6:00 PM (IST)
                                </p>
                            </div>
                                <div className="row mt-5">
                                    <div className="col-12 text-center">
                                        <h3 className="text-light">Follow for regular updates</h3>

                                        <div className="mt-3">
                                            <a href="https://www.facebook.com/" className="mx-2 fs-3"
                                            style={{color:"rgb(24, 119, 242)" }}>
                                                <FontAwesomeIcon icon={faFacebook} />
                                            </a>

                                            <a href="https://www.linkedin.com/feed/" className="mx-2 fs-3"
                                            style={{color:"rgb(0, 102, 194)" }}>
                                                <FontAwesomeIcon icon={faLinkedinIn} />
                                            </a>

                                            <a href="https://instagram.com/aaryan170206/" className="mx-2 fs-3 text-light"
                                            style={{
                                            background: "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
                                            borderRadius: "50px",
                                            }}>
                                                <FontAwesomeIcon icon={faInstagram} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Contact;