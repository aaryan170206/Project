import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <div className="container" 
                style={{
                    minHeight:"500px",
                    minWidth:"700px",
                    paddingTop:"60px"
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
            </div>
        </div>

    );
}
 
export default Home;