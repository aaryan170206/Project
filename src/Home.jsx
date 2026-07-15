import AiFinance from "./assets/Ai_In_Finance.jpg";
import AiFood from "./assets/Ai_Food.jpg";
import AiHealth from "./assets/Ai_In_Health.jpg";
import AiDefence from "./assets/Ai_In_Defence.jpg";
import Background from "./assets/Background.jpg";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <div className="container" 
                style={{
                    minHeight:"500px",
                    minWidth:"700px"
                }}>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <motion.div className="card my-5 border border-light border-opacity-25 shadow-lg"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                        background: "rgba(20, 20, 20, 0.45)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        borderRadius: "25px",
                        width: "900px",
                        minHeight: "550px",
                        boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
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
                                className="text-light text-center"
                                style={{
                                fontSize: "1.15rem",
                                lineHeight: "2",
                                maxWidth: "760px",
                                color: "#e8e8e8",}}>
                                Artificial Intelligence (AI) and automation are transforming the way
                                people live, work, and solve problems. AI enables computers and machines
                                to learn from data, recognize patterns, make decisions, and perform tasks
                                that traditionally required human intelligence. Automation complements AI
                                by using technology to carry out repetitive or rule-based tasks with
                                minimal human intervention. Together, they improve efficiency, accuracy,
                                and productivity across industries such as healthcare, finance,
                                manufacturing, education, and transportation.
                                </p>

                                <motion.a
                                href="#image"
                                className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}>
                                    Learn More →
                                </motion.a>

                            </div>
                        </motion.div>
                    </div>
                </div>

                {/*Main Image*/}
                <section id="image">
                <div className="row g-4 justify-content-center align-items-center">
                    <div className="col-auto">
                        <motion.div
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}>

                             {/*Background Image*/}
                            <div className="card mt-4  border border-5 border-secondary my-5"
                            style={{
                            backgroundImage: `url(${Background})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "550px",
                            minWidth: "900px",
                            borderRadius: "15px",
                            overflow: "hidden",
                            }}>
                                <div
                                style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                minHeight: "550px",
                                borderRadius: "15px",}}>

                                    <div className="row g-4 justify-content-center align-items-center"
                                    style={{ minHeight: "650px" }}>
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.a
                                            href="#Helth"
                                            type="button"
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>
                                                <img src={AiHealth}
                                                alt="Health"
                                                height="100" width="200"
                                                className="border border-danger rounded border-3"/>

                                                <p className="mt-2 text-white fw-bold mb-0">
                                                    AI In Health
                                                </p>
                                            </motion.a>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">  
                                            <motion.button
                                            type="button"
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}>

                                                <img src={AiFinance} 
                                                alt="Finance.jpg" 
                                                height="100px" width="200px"
                                                className="border border-danger rounded border-3"/>

                                                <p className="mt-2 text-light fw-bold mb-0">
                                                    AI In Finance
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            type="button"
                                            className="btn p-0 border-0 bg-transparent m-5"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                            console.log("AI Defence clicked");}}>

                                                <img src={AiFood} alt="Food.jpg" 
                                                height="100px" 
                                                width="200px"
                                                className="m-5 border border-danger rounded border-3"/>

                                                <p className="mt-2 text-light fw-bold mb-0">
                                                    AI In Food
                                                </p>
                                            </motion.button>
                                        </div>
                                    
                                        <div className="col-md-3 d-flex justify-content-center">
                                            <motion.button
                                            type="button"
                                            className="btn p-0 border-0 bg-transparent"
                                            whileHover={{ scale: 1.25 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                            console.log("AI Defence clicked");}}>

                                                <img src={AiDefence}
                                                alt="AI Defence"
                                                height="100"
                                                width="200"
                                                className="m-5 border border-danger rounded border-3"/>

                                                <p className="mt-2 text-light fw-bold mb-0">
                                                    AI In Defence
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

                {/*Ai Health*/}
                <section id="Helth">
                    <div className="card mt-4 border border-5 border-secondary my-5"
                        style={{
                        backgroundImage: `url(${AiHealth})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "550px",
                        minWidth: "900px",
                        borderRadius: "15px",
                        overflow: "hidden"}}>
                        <div style={{
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            minHeight: "550px",
                            borderRadius: "15px"}}>
                            <div className="card-body">
                                <motion.a 
                                    href="#image"
                                    className="btn btn-outline-light btn-lg px-5 mt-4 rounded-pill shadow"
                                    >
                                        <i className="bi bi-arrow-up-square"></i> Go Back
                                    </motion.a>
                                <div className="card-title text-center">
                                    <h1 className="text-light">Health</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}
 
export default Home;