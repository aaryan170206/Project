import Nav from "./Navbar";

//Background Image
import AiSec from "./assets/Ai_In_Security.jpg";
import { motion, useInView  } from "framer-motion";
import { useEffect, useRef } from "react";

//Images 
import Security_1 from "./assets/Security_1.jpg";
import Security_2 from "./assets/Security_2.jpg";
import Security_3 from "./assets/Security_3.jpg";
import Security_4 from "./assets/Security_4.jpg";
import Security_5 from "./assets/Security_5.jpg";
import Security_6 from "./assets/Security_6.jpg";
import Security_7 from "./assets/Security_7.jpg";
import Security_8 from "./assets/Security_8.jpg";

const Cyber = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const imageRef = useRef(null);

    const isInView = useInView(imageRef, {
        amount: 0.4
    });


    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url(${AiSec})`,
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


            {/*Actual Body of This Component*/}
            <div className="container"
            style={{
            height: "100vh",
            overflowY: "auto",
            scrollSnapType: "y mandatory",
            }}>
                {/*First Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_1}
                            alt="Image_1"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                 Threat Detection: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has transformed threat detection by enabling cybersecurity systems to 
                                identify malicious activities in real time. Unlike traditional security tools that rely on 
                                predefined signatures, AI continuously analyzes network traffic, user behavior, system logs, 
                                and device activity to detect suspicious patterns.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered threat detection can recognize various cyberattacks, including malware, ransomware, phishing attempts, 
                                distributed denial-of-service (DDoS) attacks, insider threats, and unauthorized access. Machine learning
                                 algorithms compare current activities with normal behavior, allowing them to detect anomalies that may indicate 
                                 a security breach.
                            </p>
                            <p className="text-info text-center fs-5">
                                Beyond identifying threats, AI assists security teams by prioritizing critical alerts, predicting potential attack vectors, 
                                and recommending appropriate response strategies.
                            </p>
                    </div>
                </div>

                {/*Second Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Malware Detection:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has significantly improved malware detection by identifying and preventing malicious software before 
                                it can compromise computer systems or networks. Unlike traditional antivirus programs that rely on known malware signatures. 
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered malware detection systems can identify various types of malicious software, including viruses, worms, trojans, ransomware, 
                                spyware, rootkits, and fileless malware. By continuously monitoring processes, network traffic, and application behavior, 
                                machine learning models detect unusual activities that may indicate the presence of malware.
                            </p>
                            <p className="text-info text-center fs-5">
                                Beyond detecting malware, AI assists cybersecurity teams by automatically isolating infected devices, blocking malicious processes, 
                                and recommending appropriate remediation measures.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_2}
                            alt="Image_3"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Third Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_3}
                            alt="Image_3"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Phishing Detection: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has become a powerful tool for detecting and preventing phishing attacks by identifying 
                                fraudulent emails, websites, and messages designed to steal sensitive information. Unlike traditional
                                 filtering systems that rely on predefined rules, AI analyzes email content, sender behavior, website characteristics. 
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered phishing detection systems can identify various forms of phishing, including email phishing, spear phishing, 
                                smishing (SMS phishing), vishing (voice phishing), and fake websites. Machine learning algorithms examine factors such as 
                                unusual language, spoofed domains, suspicious links, attachment behavior.
                            </p>
                            <p className="text-info text-center fs-5">
                               Beyond detecting phishing attempts, AI assists cybersecurity teams by automatically blocking malicious emails, 
                               flagging suspicious websites, and warning users before they interact with harmful content.
                            </p>  
                    </div>
                </div>
                {/*Fourth Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Intrusion Detection:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has significantly enhanced intrusion detection by enabling cybersecurity systems to 
                                identify unauthorized access and malicious activities within computer networks in real time. Unlike traditional 
                                intrusion detection systems that rely on predefined signatures and rules, AI continuously analyzes network traffic, 
                                user behavior, system logs, and device activities to detect suspicious patterns. 
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered intrusion detection systems can detect a wide range of security incidents, including unauthorized login attempts, 
                                privilege escalation, insider threats, brute-force attacks, network reconnaissance, and advanced persistent threats (APTs). 
                                By learning normal patterns of network and user behavior, machine learning algorithms quickly recognize anomalies that may indicate 
                                a security breach.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_4}
                            alt="Image_4"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
                {/*Fifth Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_5}
                            alt="Image_5"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Automated Incident Response: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has transformed incident response by enabling organizations to detect, 
                                analyze, and respond to cybersecurity incidents automatically. Unlike traditional approaches that rely heavily on manual investigation, 
                                AI continuously monitors security events, correlates data from multiple sources, and identifies potential threats in real time.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered incident response systems can automatically handle a wide range of security events, including malware infections, 
                                ransomware attacks, unauthorized access attempts, phishing incidents, data breaches, and network intrusions. By analyzing the severity 
                                and context of each incident, AI can isolate compromised devices, block malicious IP addresses, terminate suspicious processes, 
                                revoke unauthorized user access, and initiate predefined security workflows. This rapid response helps contain threats before they spread across the network.
                            </p>
                    </div>
                </div>

                {/*Sixth Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                User Behavior Analysis:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has revolutionized user behavior analysis by continuously monitoring and analyzing how users 
                                interact with computer systems, applications, and networks. Unlike traditional security methods that rely on predefined rules, 
                                AI learns the normal behavior patterns of individual users and devices over time.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered user behavior analysis can detect a wide range of suspicious activities, including compromised accounts, insider threats, 
                                unauthorized access attempts, privilege misuse, account takeovers, and credential theft.
                            </p>
                            <p className="text-info text-center fs-5">
                                Beyond detecting suspicious behavior, AI assists security teams by generating real-time alerts, assigning risk scores
                                 to users, and recommending appropriate response actions such as multi-factor authentication, session termination, or temporary 
                                 account suspension.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_6}
                            alt="Image_6"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Seventh Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_7}
                            alt="Image_7"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Vulnerability Management:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has significantly improved vulnerability management by helping organizations identify, assess, 
                                and prioritize security weaknesses before they can be exploited by cybercriminals. Unlike traditional methods 
                                that rely on periodic manual assessments, AI continuously scans networks, applications, operating systems, 
                                and connected devices to detect vulnerabilities in real time.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered vulnerability management systems can identify software flaws, outdated applications, misconfigured systems, 
                                insecure network settings, unpatched operating systems, and weaknesses in cloud environments. 
                            </p>
                            <p className="text-info text-center fs-5">
                                Beyond identifying vulnerabilities, AI assists cybersecurity teams by recommending appropriate remediation measures, automating patch management, 
                                verifying that vulnerabilities have been resolved, and continuously monitoring systems for newly discovered security flaws.
                            </p>
                    </div>
                </div>

                {/*Eightth Point*/}
                <div className="row align-items-center gy-5 py-5 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Security Monitoring:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has transformed security monitoring by providing continuous, real-time surveillance of an organization's 
                                digital infrastructure. Unlike traditional monitoring systems that depend on manual analysis and predefined rules, 
                                AI continuously examines network traffic, system logs, user activities. 
                            </p>
                            <p className="text-info text-center fs-5">
                               AI-powered security monitoring systems can detect a wide range of cyber threats, including malware infections, unauthorized access attempts, 
                               ransomware attacks, phishing activities, data exfiltration, insider threats, and unusual network behavior. 
                            </p>
                            <p className="text-info text-center fs-5">
                              Beyond detecting threats, AI assists cybersecurity teams by generating real-time alerts, prioritizing critical security events, 
                              and recommending appropriate response actions. It can also automate routine monitoring tasks, reduce false positives, 
                              and continuously adapt to emerging attack techniques through ongoing learning.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Security_8}
                            alt="Image_8"
                            style={{
                            width: "100%",
                            maxWidth: "420px",
                            aspectRatio: "1 / 1",
                            objectFit: "cover"}}
                            className="img-fluid rounded-circle img-thumbnail shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/*Body Conclusion*/}
        </div>
      </div>
    );
}
 
export default Cyber;