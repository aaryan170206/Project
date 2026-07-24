import Nav from "./Navbar";

//Background Image
import Services_1 from "./assets/Services_1.jpg";

import AiFinance from "./assets/Ai_In_Finance.jpg";
import AiSec from "./assets/Ai_In_Security.jpg";
import AiHealth from "./assets/Ai_In_Health.jpg";
import AiDefence from "./assets/Ai_In_Defence.jpg";
import AiTrans from "./assets/Ai_In_Transportation.jpg";
import AiEcom from "./assets/Ai_In_Ecom.jpg";
import Background from "./assets/Background.jpg";
import AiAggri from "./assets/Ai_In_Aggri.jpg";
import AiEdu from "./assets/Ai_In_Education.jpg";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant" // or simply remove this line
        });
    },[]);

    const history = useHistory();

    const openPage = (path) => {
        history.push(path);
    };

    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
    };
    
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${Services_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100%",}}>
            
        {/*Increace Opcacity*/}
        <div
        style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            minHeight: "100vh",}}>
             <Nav />

        <section id="Image">
                <div className="row g-4 justify-content-center align-items-center"
                style={{paddingTop:"60px"}}>
                    <div className="col-auto">
                        <motion.div
                        initial={{ y: 500, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>

                             {/*Background Image*/}
                            <div className="card border border-5 border-secondary my-5"
                            style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "1300px",
                            borderRadius: "15px",
                            overflow: "hidden",}}>
                                <div
                                style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "500px",
                                borderRadius: "15px",}}>

{/*First Row-----------------------------------------------------------------------------------------*/}
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Health")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiHealth}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Health
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">  
                                            <motion.button
                                            onClick={() => scrollToSection("Finance")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>

                                                <img src={AiFinance} 
                                                alt="Finance.jpg" 
                                                height="100px" width="200px"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-light fw-bold mb-0">
                                                    AI In Finance
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Security")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiSec}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Cyber Security
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Defence")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiDefence}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Defence
                                                </p>
                                            </motion.button>
                                        </div>
                                    </div>

{/*Second Row-----------------------------------------------------------------------------------------*/}
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Transport")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiTrans}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Transport
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">  
                                            <motion.button
                                            onClick={() => scrollToSection("Ecom")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>

                                                <img src={AiEcom} 
                                                alt="Finance.jpg" 
                                                height="100px" width="200px"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-light fw-bold mb-0">
                                                    AI In E-Commerce
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Agriculture")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiAggri}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Agriculture
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            onClick={() => scrollToSection("Education")}
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiEdu}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="text-white fw-bold mb-0">
                                                    AI In Education
                                                </p>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

{/*Main Body - First Row----------------------------------------------------------------------------------------------*/}
        {/*Ai Health*/}
        <section id="Health"
        className="my-5">
        <>
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiHealth})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "550px",
                            width: "100%",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>

                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Health</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming healthcare by helping medical professionals diagnose diseases, improve patient care, automate routine tasks, and accelerate medical research. Rather than replacing doctors, AI serves as a powerful tool that supports faster and more accurate decision-making.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Health")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div> 
                </div>
            </div>
        </>
        </section>

        {/*Ai Finance*/}
        <section id="Finance"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiFinance})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Finance</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is revolutionizing the financial industry by improving security, automating routine processes, detecting fraud, and helping individuals and businesses make smarter financial decisions. AI analyzes massive amounts of financial data in real time, enabling faster and more accurate decision-making.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Finance")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/*Ai CS*/}
        <section id="Security"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiSec})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Cyber Security</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming cybersecurity by detecting threats, preventing cyberattacks, and automating security operations. AI can analyze vast amounts of network and system data in real time, helping organizations identify and respond to threats much faster than traditional methods.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Security")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/*Ai Defence*/}
        <section id="Defence"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiDefence})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Defence</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming modern defence by enhancing surveillance, improving decision-making, strengthening cybersecurity, and supporting military operations. AI processes large volumes of data from sensors, satellites, drones, and communication systems, helping defence personnel respond more quickly and accurately to potential threats.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Defence")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

{/*Main Body - Second Row----------------------------------------------------------------------------------------------*/}
        {/*Ai Transport*/}
        <section id="Transport"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiTrans})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Transportation</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming the transportation industry by making travel safer, faster, and more efficient. AI analyzes real-time data from vehicles, traffic systems, sensors, and GPS devices to optimize routes, reduce congestion, and improve overall transportation services.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Transport")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/*Ai Ecom*/}
        <section id="Ecom"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiEcom})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In E-Commerce</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming the e-commerce industry by enhancing customer experiences, automating business operations, and improving sales. AI analyzes customer behavior, purchase history, and market trends to deliver personalized shopping experiences and help businesses operate more efficiently.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Ecom")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/*Ai Aggriculture*/}
        <section id="Agriculture"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiAggri})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Agriculture</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming agriculture by helping farmers increase crop yields, reduce costs, and use resources more efficiently. AI analyzes data from drones, satellites, sensors, and weather forecasts to support better farming decisions and promote sustainable agricultural practices.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Agriculture")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/*Ai Education*/}
        <section id="Education"
        className="my-5">
            <div className="row g-4 justify-content-center align-items-center"
            style={{paddingTop:"60px"}}>
                <div className="col-auto">
                    <motion.div
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}>
                        <div className="card mt-4 border border-5 border-secondary mt-5 mb-5"
                            style={{
                            backgroundImage: `url(${AiEdu})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            width: "100%",
                            minHeight: "550px",
                            maxWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden"}}>
                            <div style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px"}}>
                                <div className="card-body">
                                    <motion.button 
                                    onClick={() => scrollToSection("Image")}
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow">
                                        <i className="bi bi-arrow-up-square"></i>
                                    </motion.button>
                                    <div className="card-title text-center">
                                        <h1 className="text-light">AI In Education</h1>
                                    </div>
                                    <div className="card-subtitle text-center">
                                        <p className="text-light mt-5">Artificial Intelligence (AI) is transforming education by creating personalized learning experiences, automating administrative tasks, and improving teaching methods. AI helps students learn at their own pace while assisting teachers with grading, lesson planning, and student performance analysis.</p>
                                    </div>
                                    <div className="card-subtitle text-center"
                                    style={{paddingTop:"100px"}}>
                                        <button className="btn btn-outline-light rounded-pill"
                                        onClick={() => openPage("/Education")}>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </div>
        </div>
    );
}
 
export default Services;