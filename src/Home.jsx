import { motion } from "framer-motion";
import Nav from "./Navbar";

//Background Image
import Home_1 from "./assets/Home_1.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    },[]);

    return (
       <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),
        url(${Home_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",}}>
            
        {/*Increace Opcacity*/}
            <div
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.0)",
                minHeight: "100vh",}}>
                <Nav />

                <div className="container" 
                    style={{
                        minHeight:"500px",
                        minWidth:"700px",
                        paddingTop:"100px"
                    }}>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <motion.div className="card my-5 border border-light border-opacity-25 shadow-lg"
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            style={{
                            background: "rgba(20, 0, 0, 0.0)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(18px)",
                            borderRadius: "25px",
                            width: "1300px",
                            minHeight: "550px",
                            boxShadow: "0 15px 40px rgba(0,0,0,0.0)",
                            overflow: "hidden",
                            }}>

                                <div className="card-body d-flex flex-column justify-content-center align-items-center p-5">

                                    <h1
                                    className="text-light fw-bold mb-4"
                                    style={{
                                    fontSize: "3rem",
                                    letterSpacing: "1px",
                                    textShadow: "2px 2px 10px rgba(0,0,0,0.5)",}}>
                                        Welcome to AI & Automation
                                    </h1>

                                    <p
                                    className="text-light text-center fs-5">
                                        Artificial Intelligence is revolutionizing the world at an unprecedented pace. 
                                        From improving healthcare and securing digital systems to optimizing transportation and transforming education, 
                                        AI is redefining the way we solve problems, make decisions, and drive innovation.
                                    </p>
                                    <p
                                    className="text-light text-center fs-5">
                                        At AI & Automation, we bring together knowledge, technology, and real-world applications to help you explore how 
                                        Artificial Intelligence is reshaping industries across the globe. Whether you're a student, professional, researcher, 
                                        or simply curious about emerging technologies, our platform is designed to make AI accessible, engaging, and inspiring. 
                                    </p>
                                    <p className="text-light text-center fs-4"
                                    style={{ fontStyle: "italic" }}>
                                        Discover the technology that's building tomorrow—today.
                                    </p>
                                    <Link to="/Learn" className="btn btn-outline-light rounded-pill">Learn More</Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="container border border-light border-opacity-25 shadow-lg mb-5" 
                style={{
                background: "rgba(20, 0, 0, 0.0)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(18px)",
                borderRadius: "25px",
                width: "1300px",
                minHeight: "300px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.0)",
                overflow: "hidden",
                }}>
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <h1 className="text-light">
                                Explore the World of Artificial Intelligence
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="text-light fs-5">
                                Artificial Intelligence is no longer limited to science fiction. It powers virtual assistants, 
                                recommendation systems, autonomous vehicles, fraud detection, medical diagnosis, smart agriculture, 
                                intelligent robotics, and countless innovations that influence our daily lives.
                            </p>
                            <p className="text-light fs-5">
                                Through this platform, you'll discover how AI works, where it's applied, 
                                and why it has become one of the most influential technologies of the 21st century.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container border border-light border-opacity-25 shadow-lg mb-5" 
                style={{
                background: "rgba(20, 0, 0, 0.0)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(18px)",
                borderRadius: "25px",
                width: "1300px",
                minHeight: "300px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.0)",
                overflow: "hidden",
                }}>
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <h1 className="text-light">
                               Why Choose AI & Automation?
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="text-light fs-5 text-center">
                                Our platform is designed to make learning Artificial Intelligence simple, practical, 
                                and engaging.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                -Easy-to-understand explanations for beginners.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                -Real-world examples from multiple industries.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                -Interactive content with modern design and animations.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                -Industry-focused insights rather than abstract theory.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                -Continuously expanding content that evolves with the latest AI advancements.
                            </p>
                            <p className="text-light fs-5 text-center">
                                Whether you're exploring AI for the first time or expanding your technical knowledge, 
                                our goal is to provide an enjoyable and meaningful learning experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container border border-light border-opacity-25 shadow-lg" 
                style={{
                background: "rgba(20, 0, 0, 0.0)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(18px)",
                borderRadius: "25px",
                width: "1300px",
                minHeight: "300px",
                boxShadow: "0 15px 40px rgba(0,0,0,0.0)",
                overflow: "hidden",
                }}>
                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <h1 className="text-light text-center">
                              Join the AI Revolution
                            </h1>
                        </div>
                        <div className="col-12">
                            <p className="text-light fs-5 text-center">
                                The future belongs to those who embrace innovation.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                Whether you're here to learn, explore, research, or simply satisfy your curiosity, 
                                AI & Automation welcomes you to discover the incredible possibilities of intelligent technology.
                            </p>
                            <p className="text-light fs-5 fw-bold text-center my-3">
                                Together, let's explore how Artificial Intelligence is transforming industries, 
                                empowering people, and building a smarter, more connected world.
                            </p>
                            <p className="text-light fs-3 fw-bold text-center my-3">
                               Explore • Learn • Innovate • Shape the Future
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Home;