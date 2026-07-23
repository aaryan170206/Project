import Nav from "./Navbar";

//Background Image
import AiHealth from "./assets/Ai_In_Health.jpg";
import { motion, useInView  } from "framer-motion";
import { useEffect, useRef } from "react";

//Images
import Health_1 from "./assets/Health_1.jpg";
import Health_2 from "./assets/Health_2.jpg";
import Health_3 from "./assets/Health_3.jpg";
import Health_4 from "./assets/Health_4.jpg";
import Health_5 from "./assets/Health_5.jpg";
import Health_6 from "./assets/Health_6.jpg";
import Health_7 from "./assets/Health_7.jpg";
import Health_8 from "./assets/Health_8.jpg";

const Health = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    
    const imageRef = useRef(null);

    const isInView = useInView(imageRef, {
        amount: 0.4
    });

    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${AiHealth})`,
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
            width: "100%",
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
            }}>
                {/*First Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100%",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_1}
                            alt="Image_1"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Disease Diagnosis: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is revolutionizing disease diagnosis by helping healthcare professionals identify illnesses more quickly and accurately than traditional methods. 
                                AI systems analyze large volumes of patient information, including medical histories, laboratory reports, genetic data, 
                                X-rays, CT scans, MRI images, and pathology slides.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI has demonstrated exceptional performance in diagnosing diseases such as breast cancer, 
                                lung cancer, diabetic retinopathy, Alzheimer's disease, heart disease, pneumonia, tuberculosis, 
                                and neurological disorders. Early detection significantly improves treatment success rates and increases the chances of patient recovery.
                            </p>
                            <p className="text-info text-center fs-5">
                                Beyond identifying diseases, AI also assists doctors in assessing disease severity, 
                                predicting disease progression, and recommending appropriate diagnostic tests. 
                                Although AI greatly enhances diagnostic accuracy and reduces the risk of human error. 
                            </p>
                    </div>
                </div>

                {/*Second Point*/}
                <div className="row justify-content-around align-items-center mt-5 "
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Medical Imaging: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Medical imaging is one of the most successful applications of Artificial Intelligence in healthcare.
                                 AI-powered systems analyze X-rays, CT scans, MRI scans,
                                  PET scans, ultrasound images, and mammograms with remarkable speed and precision. 
                            </p>
                            <p className="text-info text-center fs-5">
                                AI assists radiologists by automatically highlighting suspicious regions, measuring tumor size,
                                 comparing previous scans, and prioritizing urgent cases that require immediate attention.
                                  This reduces diagnostic delays and improves workflow efficiency in hospitals.
                            </p>
                            <p className="text-info text-center fs-5">
                                Furthermore, AI minimizes diagnostic errors caused by fatigue or oversight and enables healthcare providers to deliver faster, more accurate, 
                                and more consistent diagnoses, especially in emergency situations where every minute matters.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_2}
                            alt="Image_3"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Third Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary text-center">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_3}
                            alt="Image_3"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Robotic Surgery: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                AI-powered robotic surgery combines advanced robotics, computer vision, and artificial intelligence to assist surgeons in performing complex procedures with exceptional precision.
                                 These robotic systems translate the surgeon's hand movements into highly accurate micro-movements,
                                  reducing natural hand tremors and improving surgical control.
                            </p>
                            <p className="text-info text-center fs-5">
                                Minimally invasive robotic surgery requires only small incisions, 
                                resulting in less blood loss, reduced pain, lower infection risk, minimal scarring, and faster patient recovery. 
                                AI also provides real-time imaging, tissue recognition, and navigation assistance during operations,
                                 helping surgeons avoid critical blood vessels and nerves.
                            </p>
                            <p className="text-info text-center fs-5">
                                Modern robotic systems are widely used in cardiac surgery, neurosurgery, orthopedic procedures, urology, 
                                gynecology, and cancer surgeries, significantly improving patient safety and surgical outcomes.
                            </p>  
                    </div>
                </div>
                {/*Fourth Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Virtual Health Assistants:
                            </h1>
                            <p className="text-info text-center fs-5">
                                AI-powered virtual health assistants provide continuous healthcare support by interacting with patients through mobile applications,
                                 websites, and voice-enabled devices. Using Natural Language Processing (NLP), 
                                 these assistants understand human language, answer health-related questions, schedule appointments,
                                  send medication reminders, monitor symptoms, and provide lifestyle recommendations.
                            </p>
                            <p className="text-info text-center fs-5">
                                They help patients manage chronic illnesses such as diabetes, hypertension, asthma, and heart disease by tracking daily health data and encouraging healthy habits. 
                                Virtual assistants can also collect preliminary symptoms before a doctor's consultation, reducing consultation time and improving healthcare efficiency.
                            </p>
                            <p className="text-info text-center fs-5">
                                Although they cannot replace physicians, virtual health assistants improve patient engagement, increase healthcare accessibility, 
                                and provide immediate support, especially in remote or underserved regions.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_4}
                            alt="Image_4"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
                {/*Fifth Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary text-center">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_5}
                            alt="Image_5"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Patient Monitoring: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence has transformed patient monitoring by enabling continuous observation of patients both inside hospitals and at home.
                                 AI-powered wearable devices and medical sensors continuously measure vital signs such as heart rate,
                                 blood pressure, respiratory rate, oxygen saturation, blood glucose levels, and body temperature.
                            </p>
                            <p className="text-info text-center fs-5">
                                Machine learning algorithms analyze this real-time data to detect abnormal trends before they become life-threatening.
                                 When unusual patterns are identified, AI immediately alerts healthcare providers, allowing early intervention and reducing emergency hospital admissions.
                            </p>
                            <p className="text-info text-center fs-5">
                                Remote patient monitoring is particularly valuable for elderly individuals, post-surgery patients, 
                                and those with chronic diseases, enabling doctors to provide continuous care without requiring frequent hospital visits.
                            </p>
                    </div>
                </div>

                {/*Sixth Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Drug Discovery:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Traditional drug development often requires more than a decade of research and billions of dollars in investment. 
                                Artificial Intelligence significantly accelerates this process by analyzing enormous biological, chemical, 
                                and pharmaceutical datasets to identify promising drug candidates.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI predicts how different molecules interact with disease-causing proteins, evaluates drug toxicity, identifies potential side effects, 
                                and recommends the most effective compounds for laboratory testing. During the COVID-19 pandemic, 
                                AI played a crucial role in accelerating vaccine development and identifying potential treatments.
                            </p>
                            <p className="text-info text-center fs-5">
                                By reducing research time, lowering development costs, and improving the success rate of clinical trials, 
                                AI enables pharmaceutical companies to bring safer and more effective medicines to patients much faster than traditional methods.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_6}
                            alt="Image_6"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Seventh Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary text-center">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_7}
                            alt="Image_7"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-6 border-start border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Personalized Medicine:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Personalized medicine uses Artificial Intelligence to design healthcare treatments specifically for each individual rather than applying a standard treatment approach to everyone.
                                 AI analyzes genetic information, medical history, laboratory reports, environmental factors, lifestyle habits, and previous treatment responses to recommend personalized therapies.
                            </p>
                            <p className="text-info text-center fs-5">
                                This approach is particularly effective in cancer treatment,
                                 where AI helps oncologists identify the most suitable chemotherapy drugs or targeted therapies based on a patient's genetic profile.
                                 AI also predicts which medications are likely to be most effective while minimizing harmful side effects.
                            </p>
                            <p className="text-info text-center fs-5">
                                Personalized medicine improves treatment success, enhances patient satisfaction, 
                                reduces unnecessary medication, and supports the broader goal of precision healthcare.
                            </p>
                    </div>
                </div>

                {/*Eightth Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 border-end border-secondary">
                            <h1 className="text-center mb-4 fw-bolder"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Administrative Automation:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Administrative work consumes a significant portion of healthcare professionals' time. 
                                AI automates routine tasks such as appointment scheduling, 
                                patient registration, insurance verification, billing, 
                                electronic health record management, medical coding, report generation, and clinical documentation.
                            </p>
                            <p className="text-info text-center fs-5">
                               AI-powered automation reduces paperwork, minimizes human errors, 
                               accelerates administrative workflows, and improves communication between hospitals, laboratories,
                                pharmacies, and insurance providers. Intelligent scheduling systems also optimize hospital resources by reducing patient waiting times and improving staff utilization.
                            </p>
                            <p className="text-info text-center fs-5">
                              By handling repetitive administrative responsibilities,
                               AI allows doctors, nurses, and healthcare workers to dedicate more time to direct patient care,
                               ultimately improving both operational efficiency and the overall healthcare experience.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Health_8}
                            alt="Image_8"
                            style={{
                            width: "475px",
                            height: "475px",
                            objectFit: "cover",
                            }}
                            className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/*Body Conclusion*/}
        </div>
      </div>
    );
}
 
export default Health;