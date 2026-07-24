import Nav from "./Navbar";
import { useRef, useEffect, useState } from "react";
import { motion, useInView  } from "framer-motion";

//Background Image
import AiDefence from "./assets/Ai_In_Defence.jpg";

//Aarows
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//Images
import Defence_1 from "./assets/Defence_1.jpg";
import Defence_2 from "./assets/Defence_2.jpg";
import Defence_3 from "./assets/Defence_3.jpg";
import Defence_4 from "./assets/Defence_4.jpg";
import Defence_5 from "./assets/Defence_5.jpg";
import Defence_6 from "./assets/Defence_6.jpg";
import Defence_7 from "./assets/Defence_7.jpg";
import Defence_8 from "./assets/Defence_8.jpg";

const Defence = () => {
    
    const scrollRef = useRef(null);
    const autoScroll = useRef(true);
    const idleTimer = useRef(null);

    //Scrool/Click Right
    const scrollNext = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
    });
    };

    //Scroll/Click Left
    const scrollPrevious = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;

    const previousPosition = Math.max(
        container.scrollLeft - container.clientWidth,
        0
    );

    container.scrollTo({
        left: previousPosition,
        behavior: "smooth",
    });
    };

    //10 Sec Pause
    const pauseAutoScroll = () => {
    autoScroll.current = false;

    clearTimeout(idleTimer.current);

    idleTimer.current = setTimeout(() => {
        autoScroll.current = true;
    }, 10000); // Resume after 10 seconds
    };

    //Auto Scroll After 12 Sec
    useEffect(() => {
    const interval = setInterval(() => {

        if (!autoScroll.current) return;

        if (!scrollRef.current) return;

        const container = scrollRef.current;

        const nextPosition =
            container.scrollLeft + container.clientWidth;

        if (
            nextPosition >=
            container.scrollWidth - container.clientWidth
        ) {
            container.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        } else {
            container.scrollTo({
                left: nextPosition,
                behavior: "smooth",
            });
        }

    }, 12000);

    return () => clearInterval(interval);

    }, []);

    useEffect(() => {
    return () => {
        clearTimeout(idleTimer.current);
    };
    }, []);

    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url(${AiDefence})`,
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
                
                {/*Right Arrow*/}
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 15, 0] }}
                transition={{
                duration: 1,
                repeat: Infinity,
                }}
                onClick={() => {
                    pauseAutoScroll();
                    scrollNext();
                }}
                style={{
                position: "fixed",
                right: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                color: "#ffffff",
                cursor: "pointer",
                }}
                className="d-none d-lg-block">
                    <FaArrowRight size={40} />
                </motion.div>

                {/*Left Arrow*/}
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 15, 0] }}
                transition={{
                duration: 1,
                repeat: Infinity,
                }}
                onClick={() => {
                    pauseAutoScroll();
                    scrollPrevious();
                }}
                style={{
                position: "fixed",
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                color: "#ffffff",
                cursor: "pointer",
                }}
                className="d-none d-lg-block">
                    <FaArrowLeft size={40} />
                </motion.div>


            {/*Actual Body of This Component*/}
                <div ref={scrollRef}
                onScroll={pauseAutoScroll}
                className="d-flex"
                style={{
                height: "100vh",
                overflowX: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",}}>
                    {/*First Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_1}
                                alt="Image_1"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Surveillance and Reconnaissance: 
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                Artificial Intelligence has significantly enhanced surveillance and reconnaissance by enabling the continuous collection, 
                                monitoring, and analysis of information from digital and physical environments. 
                                AI-powered systems process data from surveillance cameras, drones, satellites, sensors, 
                                communication networks, and cybersecurity platforms to identify unusual activities and potential security threats in real time. 
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                 AI-driven surveillance and reconnaissance systems can detect unauthorized access, suspicious movements, hostile activities, 
                                 cyber intrusions, and emerging security risks by recognizing patterns and identifying anomalies. Computer vision, machine learning, 
                                 and data analytics allow AI to monitor critical infrastructure, border regions, public spaces, and corporate networks 
                                 while minimizing human intervention.  
                            </p>
                        </div>
                    </div>
                    
                    {/*Second Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_2}
                                alt="Image_2"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Intelligence Analysis: 
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                Artificial Intelligence has revolutionized intelligence analysis by enabling the rapid collection, processing, 
                                and interpretation of vast amounts of information from multiple sources. Unlike traditional analytical methods 
                                that require significant manual effort, AI can examine data from surveillance systems, satellite imagery, 
                                communication networks, social media, cyber intelligence, sensors, and public records in real time.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-powered intelligence analysis systems can identify potential threats, monitor adversarial activities, 
                                detect suspicious communication patterns, assess geopolitical developments, and uncover hidden connections 
                                between individuals, organizations, or events. Machine learning and natural language processing enable AI 
                                to analyze structured and unstructured data, summarize large volumes of information, and recognize anomalies 
                                that might otherwise go unnoticed.  
                            </p>
                        </div>
                    </div>

                    {/*Third Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_3}
                                alt="Image_3"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Autonomous Vehicles:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                Artificial Intelligence has transformed autonomous vehicles by enabling them to perceive their surroundings, make intelligent 
                                decisions, and navigate with minimal or no human intervention. AI-powered systems integrate data from cameras, radar, 
                                LiDAR, GPS, and various sensors to continuously monitor road conditions, traffic patterns, pedestrians, 
                                and nearby vehicles in real time.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-driven autonomous vehicles can perform a wide range of tasks, including lane keeping, obstacle detection, 
                                adaptive cruise control, traffic sign recognition, route planning, collision avoidance, automatic parking, 
                                and emergency braking. Machine learning and computer vision algorithms analyze sensor data to identify road hazards, 
                                predict the movements of other vehicles and pedestrians, and respond appropriately within milliseconds.  
                            </p>
                        </div>
                    </div>

                    {/*Fourth Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_4}
                                alt="Image_4"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Cyber Defence:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                Artificial Intelligence has become a vital component of modern cyber defence by enabling organizations to detect, prevent, 
                                and respond to cyber threats with greater speed and accuracy. Unlike traditional security systems that rely primarily on predefined rules, 
                                AI continuously monitors networks, devices, applications, and user activities to identify suspicious behavior in real time.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                              AI-powered cyber defence systems can protect against a wide range of threats, including malware, ransomware, phishing attacks, 
                              distributed denial-of-service (DDoS) attacks, insider threats, unauthorized access, and advanced persistent threats (APTs). 
                              Using machine learning, behavioral analysis, and threat intelligence, AI identifies unusual patterns, detects vulnerabilities, 
                              blocks malicious activities, and isolates compromised systems before attacks can spread. 
                            </p>
                        </div>
                    </div>

                    {/*Fifth Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_5}
                                alt="Image_5"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Predictive Maintenance:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                               Artificial Intelligence has transformed predictive maintenance by enabling organizations to monitor the health and performance of equipment 
                               continuously and identify potential failures before they occur. Unlike traditional maintenance approaches that rely on fixed schedules or reactive 
                               repairs, AI analyzes data from sensors, machines, and operational systems in real time to detect early signs of wear, malfunction, or degradation.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-powered predictive maintenance systems can monitor a wide range of industrial assets, including manufacturing equipment, power plants, 
                                transportation systems, aircraft, vehicles, and critical infrastructure. Machine learning algorithms analyze factors such as 
                                temperature, vibration, pressure, noise, energy consumption, and historical maintenance records to identify abnormal operating 
                                conditions and predict the remaining useful life of components.
                            </p>
                        </div>
                    </div>

                    {/*Sixth Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_6}
                                alt="Image_6"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Logistics and Supply Chain:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                 Artificial Intelligence has transformed logistics and supply chain management by enabling organizations to optimize the movement 
                                 of goods, improve operational efficiency, and make data-driven decisions in real time. Unlike traditional supply chain 
                                 systems that rely heavily on manual planning and historical data, AI continuously analyzes information from warehouses, 
                                 transportation networks, suppliers, customers, and market trends to predict demand, identify potential disruptions, 
                                 and streamline logistics operations. This results in faster deliveries, lower costs, and improved customer satisfaction.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-powered logistics and supply chain systems can optimize inventory management, demand forecasting, warehouse operations, 
                                transportation planning, route optimization, supplier management, and order fulfillment.
                            </p>
                        </div>
                    </div>

                    {/*Seventh Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_7}
                                alt="Image_7"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Decision Support Systems:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                 Artificial Intelligence has significantly enhanced Decision Support Systems (DSS) by enabling organizations to analyze vast amounts 
                                 of data and make informed decisions with greater speed and accuracy. Unlike traditional decision-making methods 
                                 that rely primarily on historical reports and manual analysis, AI continuously processes 
                                 real-time information from multiple sources, identifies meaningful patterns, and generates actionable insights.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-powered Decision Support Systems can assist in a wide range of applications, including financial planning, 
                                healthcare diagnosis, military operations, supply chain management, risk assessment, disaster response, and business 
                                strategy. Machine learning, predictive analytics, and data mining techniques evaluate historical trends, 
                                current conditions, and potential future scenarios to recommend the most effective course of action.
                            </p>
                        </div>
                    </div>

                    {/*Eighth Point*/}
                    <div className="row justify-content-center align-items-center py-5 px-3 px-lg-0 defence-slide g-0"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Defence_8}
                                alt="Image_8"
                                style={{
                                width:"100%",
                                maxWidth:"420px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover"
                                }}
                                className="defence-img w-75 img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3"
                        style={{
                        height:"100%",
                        maxHeight:"600px",
                        maxWidth: "700px"
                        }}>
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Training and Simulation:
                            </h1>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                 Artificial Intelligence has transformed training and simulation by creating realistic, adaptive, and immersive learning environments 
                                 for military personnel, emergency responders, pilots, healthcare professionals, and industrial workers. 
                                 Unlike traditional training methods that rely on fixed scenarios, AI-powered simulation systems continuously 
                                 adapt to a trainee's performance, skill level, and decision-making abilities.
                            </p>
                            <p className="defence-text text-light text-center px-3 px-lg-4"
                            style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            lineHeight: "1.8",
                            }}>
                                AI-driven training and simulation systems can replicate a wide range of operational scenarios, including combat missions, disaster response, 
                                medical emergencies, cybersecurity incidents, aviation operations, and industrial safety procedures. Machine learning, 
                                computer vision, and virtual or augmented reality technologies analyze trainee actions in real time, provide immediate 
                                feedback, adjust scenario complexity, and introduce unpredictable challenges that closely resemble real-world conditions.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Body End*/}

            </div>
        </div>
    );
}
 
export default Defence;