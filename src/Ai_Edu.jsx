import Nav from "./Navbar";

//Background Image
import AiEdu from "./assets/Ai_In_Education.jpg";
import { motion, useInView  } from "framer-motion";
import { useEffect, useRef } from "react";

//Images
import Edu_1 from "./assets/Edu_1.jpg";
import Edu_2 from "./assets/Edu_2.jpg";
import Edu_3 from "./assets/Edu_3.jpg";
import Edu_4 from "./assets/Edu_4.jpg";
import Edu_5 from "./assets/Edu_5.jpg";
import Edu_6 from "./assets/Edu_6.jpg";
import Edu_7 from "./assets/Edu_7.jpg";
import Edu_8 from "./assets/Edu_8.jpg";

const Education = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
}, []);
    
    const imageRef = useRef(null);

    const isInView = useInView(imageRef, {
        amount: 0.4
    });
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${AiEdu})`,
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
            <div className="container py-4"
            style={{
            height: "100vh",
            overflowY: "auto",
            scrollSnapType: "y mandatory",
            scrollBehavior: "smooth",
            }}>
                {/*First Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_1}
                            alt="Image_1"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Personalized Learning: 
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                               Artificial Intelligence is transforming personalized learning by tailoring educational experiences to the individual needs, abilities, 
                               and learning pace of each student. Unlike traditional classroom instruction, where all learners follow the same curriculum and teaching methods, 
                               AI-powered learning platforms analyze student performance, learning preferences, strengths, and areas for improvement to deliver customized educational content.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered personalized learning systems use machine learning, learning analytics, and adaptive algorithms to monitor student progress in real time. Based on quiz results, 
                                assignments, learning behavior, and knowledge gaps, these systems automatically adjust lesson difficulty, recommend additional study materials, 
                                and provide targeted exercises that suit each learner's needs. Intelligent tutoring systems also offer instant feedback, answer questions. 
                            </p>
                    </div>
                </div>

                {/*Second Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                AI Tutors and Virtual Assistants: 
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                               Artificial Intelligence is transforming education through AI tutors and virtual assistants that provide students with personalized academic support anytime and anywhere. 
                               Unlike traditional tutoring, which may be limited by availability and scheduling, AI-powered tutors offer instant assistance, explain complex concepts, answer questions, 
                               and guide learners through lessons at their own pace. By delivering interactive and customized learning experiences, these intelligent systems help students build confidence, 
                               improve understanding, and remain engaged throughout their educational journey.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI tutors and virtual assistants use natural language processing, machine learning, and learning analytics to understand student queries and provide accurate, context-aware responses. 
                                They can assist with homework, generate practice questions, recommend study materials, and offer step-by-step explanations for difficult topics.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_2}
                            alt="Image_2"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Third Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_3}
                            alt="Image_3"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Automated Grading: 
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming automated grading by enabling educational institutions to evaluate student assessments quickly, 
                                accurately, and consistently. Traditional grading methods often require significant time and effort from educators, 
                                particularly when assessing large numbers of assignments and examinations. 
                                AI-powered grading systems use machine learning and natural language processing to assess objective tests, essays, 
                                coding assignments, and other academic submissions, providing timely results while maintaining fairness and reducing human error.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered automated grading systems analyze student responses using predefined evaluation criteria, language models, 
                                and pattern recognition algorithms to assess accuracy, structure, grammar, reasoning, and overall quality.
                            </p>
                    </div>
                </div>
                {/*Fourth Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Adaptive Learning Platforms:
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming adaptive learning platforms by delivering personalized educational experiences that continuously adjust to the unique needs 
                                and progress of each student. Unlike traditional learning systems that provide the same content to every learner, AI-powered adaptive platforms analyze individual 
                                performance, learning pace, strengths, and weaknesses to create customized learning paths.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered adaptive learning platforms use machine learning, learning analytics, and predictive algorithms to monitor student interactions, quiz results, assignments, 
                                and study habits in real time. Based on this analysis, the platform automatically modifies lesson difficulty, recommends targeted learning resources, 
                                and provides personalized practice exercises to address knowledge gaps.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_4}
                            alt="Image_4"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
                {/*Fifth Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_5}
                            alt="Image_5"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Content Creation: 
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming content creation in education by enabling educators to develop high-quality learning materials quickly and efficiently. 
                                Traditionally, creating lesson plans, presentations, quizzes, assignments, and educational resources required significant time and effort. 
                                AI-powered content creation tools use machine learning and natural language processing to generate customized educational content that aligns with curriculum requirements, 
                                learning objectives, and the needs of diverse student groups, allowing teachers to focus more on instruction and student engagement.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered content creation systems analyze educational standards, subject matter, and learner performance to produce personalized study materials, interactive lessons, 
                                practice questions, summaries, and multimedia content. These intelligent tools can automatically adapt content based on students' learning levels, 
                                recommend supplementary resources, and generate assessments that reinforce key concepts.
                            </p>
                    </div>
                </div>

                {/*Sixth Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0border-end border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Language Learning:
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming language learning by providing personalized, interactive, and immersive experiences that help learners develop reading, writing, 
                                listening, and speaking skills more effectively. Unlike traditional language instruction, which often follows a standardized approach, 
                                AI-powered language learning platforms adapt lessons to individual proficiency levels, learning styles, and progress. 
                                This personalized guidance enables learners to build confidence, improve communication skills, and achieve language fluency at their own pace.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered language learning systems use natural language processing, speech recognition, and machine learning to evaluate pronunciation, grammar, 
                                vocabulary, and sentence structure in real time. These intelligent platforms provide instant feedback, interactive conversations, personalized practice exercises.
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_6}
                            alt="Image_6"
                            style={{
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>

                {/*Seventh Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_7}
                            alt="Image_7"
                            style={{
                            width:"100%",
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                    <div className="col-12 col-lg-6 border-start border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Student Performance Analytics:
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming student performance analytics by enabling educational institutions to monitor, 
                                evaluate, and improve academic outcomes through data-driven insights. Traditional methods of assessing student performance often rely on periodic 
                                examinations and manual analysis, which may not accurately reflect a student's overall progress.
                                AI-powered analytics systems continuously analyze academic records, attendance, assessments, classroom participation, and learning behaviors to provide 
                                a comprehensive understanding of each student's performance and learning needs.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                                AI-powered student performance analytics systems use machine learning and predictive analytics to identify learning patterns, detect knowledge gaps, 
                                and forecast future academic performance. By analyzing real-time data from quizzes, assignments, examinations, and online learning platforms. 
                            </p>
                    </div>
                </div>

                {/*Eightth Point*/}
                <div className="row justify-content-center align-items-center gy-5 py-5 mx-0 border-bottom border-secondary border-4"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0 border-end border-secondary">
                            <h1 className="display-6 text-center fw-bold mb-4"
                            style={{
                                color:"#f4d03f"
                            }}>
                                Administrative Automation:
                            </h1>
                            <p className="text-info text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming administrative automation in education by streamlining routine institutional tasks and improving the efficiency of academic management. 
                                Traditional administrative processes such as student admissions, attendance tracking, timetable scheduling, fee management, record maintenance, and communication 
                                often require significant manual effort and time. AI-powered automation systems intelligently manage these repetitive tasks, allowing educational institutions to operate more 
                                efficiently while enabling administrators and educators to focus on delivering high-quality education and student support.
                            </p>
                            <p className="text-info text-center px-3 px-lg-4">
                               AI-powered administrative automation systems use machine learning, natural language processing, and intelligent workflow automation to process student records, manage enrollment, 
                               schedule classes, generate reports, and respond to routine inquiries. These systems can automatically verify documents, monitor attendance. 
                            </p>
                    </div>
                    <div className="col-12 col-lg-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Edu_8}
                            alt="Image_8"
                            style={{
                            width:"100%",
                            maxWidth:"350px",
                            aspectRatio:"1 / 1",
                            objectFit:"cover",
                            }}
                            className="img-thumbnail img-fluid rounded-circle shadow border border-info border-5"/>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/*Body Conclusion*/}
        </div>
      </div>
    );
}
 
export default Education;