import Nav from "./Navbar";
//Background Image
import Learn_1 from "./assets/Learn_1.jpg";

const Learn = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.4)),
        url(${Learn_1})`,
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
                    minWidth:"700px",
                    paddingTop:"60px"
                }}>
            {/*First Card*/}
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            width: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-secondary text-decoration-underline text-center">
                                            What is AI?
                                        </h1>
                                    </div>
                                    <div className="card-subtitle">
                                        <p className="text-center text-light fs-5">
                                            Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable 
                                            of performing tasks that typically require human intelligence. These tasks include learning, reasoning, 
                                            decision-making, language understanding, pattern recognition, and problem-solving.
                                        </p>
                                        <p className="text-light text-center fs-5">
                                            Unlike traditional software that follows fixed instructions, 
                                            AI systems continuously improve by learning from data and adapting to new situations.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/*Second Card*/}
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.2)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            width: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-secondary text-decoration-underline text-center">
                                            How AI Works
                                        </h1>
                                    </div>
                                    <div className="row justify-content-center my-3">
                                        <div className="col-auto">
                                            <div className="card"
                                            style={{
                                            background: "rgba(20, 0, 0, 0.4)",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "25px",
                                            width: "300px",
                                            minHeight: "100px",}}>
                                                <div className="card-title">
                                                    <h3 className="text-center text-light">
                                                        Data Collection
                                                    </h3>
                                                </div>
                                                <div className="card-subtitle">
                                                    <p className="text-center text-light p-3">
                                                        AI gathers information from images, text, videos, sensors, and databases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center my-3">
                                        <div className="col-auto">
                                            <div className="card"
                                            style={{
                                            background: "rgba(20, 0, 0, 0.4)",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "25px",
                                            width: "300px",
                                            minHeight: "100px",}}>
                                                <div className="card-title">
                                                    <h3 className="text-center text-light">
                                                        Learning
                                                    </h3>
                                                </div>
                                                <div className="card-subtitle">
                                                    <p className="text-center text-light p-3">
                                                        Machine learning algorithms analyze the collected data to discover patterns.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center my-3">
                                        <div className="col-auto">
                                            <div className="card"
                                            style={{
                                            background: "rgba(20, 0, 0, 0.4)",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "25px",
                                            width: "300px",
                                            minHeight: "100px",}}>
                                                <div className="card-title">
                                                    <h3 className="text-center text-light">
                                                        Decision Making
                                                    </h3>
                                                </div>
                                                <div className="card-subtitle">
                                                    <p className="text-center text-light p-3">
                                                        The AI predicts outcomes or makes recommendations based on its training.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center my-3">
                                        <div className="col-auto">
                                            <div className="card"
                                            style={{
                                            background: "rgba(20, 0, 0, 0.4)",
                                            backdropFilter: "blur(5px)",
                                            borderRadius: "25px",
                                            width: "300px",
                                            minHeight: "100px",}}>
                                                <div className="card-title">
                                                    <h3 className="text-center text-light">
                                                        Continuous Improvement
                                                    </h3>
                                                </div>
                                                <div className="card-subtitle">
                                                    <p className="text-center text-light p-3">
                                                        The more data AI receives, the more accurate it becomes over time.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/*Third Card*/}
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            width: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-secondary text-decoration-underline text-center">
                                            Types of AI
                                        </h1>
                                        <div className="row justify-content-center my-3">
                                            <div className="col-4">
                                                <div className="card"
                                                style={{
                                                background: "rgba(20, 0, 0, 0.2)",
                                                backdropFilter: "blur(5px)",
                                                borderRadius: "25px",
                                                width: "300px",
                                                minHeight: "170px",}}>
                                                    <div className="card-title">
                                                        <h3 className="text-center text-light">
                                                            Narrow AI
                                                        </h3>
                                                    </div>
                                                    <div className="card-subtitle">
                                                        <p className="text-center text-light p-3">
                                                            Designed for a single task.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="card"
                                                style={{
                                                background: "rgba(20, 0, 0, 0.2)",
                                                backdropFilter: "blur(5px)",
                                                borderRadius: "25px",
                                                width: "300px",
                                                minHeight: "10px",}}>
                                                    <div className="card-title">
                                                        <h3 className="text-center text-light">
                                                            General AI
                                                        </h3>
                                                    </div>
                                                    <div className="card-subtitle">
                                                        <p className="text-center text-light p-3">
                                                            A theoretical AI capable of performing any intellectual task a human can.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="card"
                                                style={{
                                                background: "rgba(20, 0, 0, 0.2)",
                                                backdropFilter: "blur(5px)",
                                                borderRadius: "25px",
                                                width: "300px",
                                                minHeight: "170px",}}>
                                                    <div className="card-title">
                                                        <h3 className="text-center text-light">
                                                            Super AI
                                                        </h3>
                                                    </div>
                                                    <div className="card-subtitle">
                                                        <p className="text-center text-light p-3">
                                                            A hypothetical intelligence exceeding human capabilities.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/*Fourth Card*/}
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            nimWidth: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-secondary text-decoration-underline text-center">
                                           Core AI Technologies
                                        </h1>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Machine Learning
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Deep Learning
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Natural Language Processing
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Computer Vision
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Robotics
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Speech Recognition
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Predictive Analytics
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Generative AI
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            {/*Fifth Point*/}
                    <div className="row justify-content-around mt-5">

{/*Benefits---------------------------------------------------------------------------------------------------------------------*/}
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            nimWidth: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-info text-decoration-underline text-center">
                                           Benefits
                                        </h1>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Faster Decision Making
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                               Increased Productivity
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Reduced Human Error
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Better Customer Experience
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Automation
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                               Improved Healthcare
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                               Safer Transportation
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                               Stronger Cybersecurity
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
{/*Challenges-----------------------------------------------------------------------------------------------------------------------*/}
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            nimWidth: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-warning text-decoration-underline text-center">
                                           Challenges
                                        </h1>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Data Privacy
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                               Bias in AI Models
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Job Displacement
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Security Risks
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                High Development Cost
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="row justify-content-around my-4">
                                        <div className="col-auto">
                                            <h4 className="text-center text-light border-bottom border-light">
                                                Ethical Concerns
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/*Sixth Card-------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="row justify-content-center mt-5">
                        <div className="col-auto">
                            <div className="card"
                            style={{
                            background: "rgba(20, 0, 0, 0.4)",
                            backdropFilter: "blur(5px)",
                            borderRadius: "25px",
                            width: "900px",
                            minHeight: "300px",}}>
                                <div className="card-body text-center">
                                    <div className="card-title">
                                        <h1 className="text-secondary text-decoration-underline text-center">
                                            The Future
                                        </h1>
                                    </div>
                                    <div className="card-subtitle">
                                        <p className="text-center text-light fs-5">
                                           Artificial Intelligence is expected to revolutionize every industry by enabling smarter automation, 
                                           personalized experiences, autonomous systems, intelligent robotics, and scientific breakthroughs.
                                        </p>
                                        <p className="text-light text-center fs-5">
                                           The future belongs to those who understand and responsibly harness AI.
                                    </p>
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
 
export default Learn;