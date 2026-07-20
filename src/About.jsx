import Nav from "./Navbar";

//Background Image
import Home_1 from "./assets/Home_1.jpg";

//Internal Images
import About_1 from "./assets/About_1.jpg";
import About_2 from "./assets/About_2.jpg";
import About_3 from "./assets/About_3.jpg";
import About_4 from "./assets/About_4.jpg";
import About_5 from "./assets/About_5.jpg";
import About_6 from "./assets/About_6.jpg";
import About_7 from "./assets/About_7.jpg";

const About = () => {
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),
        url(${Home_1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",}}>
            <div
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                minHeight: "100vh",}}>
                <Nav />
                <div className="container"
                style={{
                    minHeight:"500px",
                    minWidth:"700px",
                    paddingTop:"60px"
                }}>
                    <div className="row justify-content-center"
                    style={{paddingTop:"20px"}}>
                        <div className="col-12">
                            <h1 className="text-info text-decoration-underline text-center mt-5">Why Artificial Intelligence Matters</h1>
                            <p className="text-center text-light fs-5">
                                Artificial Intelligence is more than just a technological breakthrough—it is transforming the way we 
                                solve problems, make decisions, and interact with the world around us. From improving healthcare outcomes 
                                and strengthening cybersecurity to optimizing transportation and enabling sustainable agriculture, 
                                AI has become a driving force behind innovation.
                            </p>
                            <p className="text-light text-center fs-5">
                                As businesses and communities continue to embrace intelligent technologies, 
                                understanding AI is no longer optional—it's an essential skill for navigating the future.
                            </p>
                        </div>
                        <div className="col-6 text-center mb-5 mt-5">
                            <img src={About_1}
                            alt="Image_1"
                            style={{
                                width: "400px",
                                height: "300px",
                                }}
                                className="border border-light border-2"/>
                        </div>
                        <div className="col-6 text-center mb-5 mt-5">
                            <img src={About_2}
                            alt="Image_2"
                            style={{
                                width: "400px",
                                height: "300px",
                                }}
                                className="border border-light border-2"/>
                        </div>
                    </div>
                        

                    <div className="row justify-content-center mt-5">
                        <div className="col-12">
                            <h1 className="text-info text-decoration-underline text-center mt-5">Our Commitment</h1>
                        </div>
                        <p className="text-light text-center fs-5">
                            We are committed to delivering content that is informative, reliable, and accessible to learners of all backgrounds. 
                            Every topic presented on this platform is designed to simplify complex concepts while maintaining technical accuracy.
                        </p>
                        <p className="text-light text-center fs-5">
                            Our commitment extends beyond education. We strive to create an engaging environment where curiosity is encouraged,
                             innovation is celebrated, and learning never stops.
                        </p>
                    </div>

                    <div className="row justify-content-around mt-5">
                        <div className="col-12">
                            <h1 className="text-info text-decoration-underline text-center mt-5">Innovation Through Knowledge</h1>
                        </div>
                        <p className="text-light text-center fs-5">
                            We are committed to delivering content that is informative, reliable, and accessible to learners of all backgrounds. 
                            Every topic presented on this platform is designed to simplify complex concepts while maintaining technical accuracy.
                        </p>
                        <p className="text-light text-center fs-5">
                            Our commitment extends beyond education. We strive to create an engaging environment where curiosity is encouraged,
                             innovation is celebrated, and learning never stops.
                        </p>
                        <div className="col-3 text-center mb-5 mt-5">
                            <img src={About_3}
                            alt="Image_3"
                            style={{
                                width: "400px",
                                height: "300px",
                                }}
                                className="border border-light border-2"/>
                        </div>
                        <div className="col-3 text-center mb-5 mt-5">
                            <img src={About_4}
                            alt="Image_4"
                            style={{
                                width: "400px",
                                height: "300px",
                                }}
                                className="border border-light border-2"/>
                        </div>
                        <div className="col-3 text-center mb-5 mt-5">
                            <img src={About_5}
                            alt="Image_5"
                            style={{
                                width: "400px",
                                height: "300px",
                                }}
                                className="border border-light border-2"/>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-5">
                        <div className="col-12">
                            <h1 className="text-info text-decoration-underline text-center mt-5">Our Values</h1>
                        </div>
                        <div className="col-5 border-bottom border-light">
                                <h2 className="text-center text-info">
                                    Curiosity
                                </h2>
                                <p className="text-center text-light fs-5">
                                    Every great innovation begins with a question. We encourage exploration, creativity, 
                                    and a passion for learning.
                                </p>
                        </div>
                        <div className="col-5 border-bottom border-light">
                                <h2 className="text-center text-info">
                                    Excellence
                                </h2>
                                <p className="text-center text-light fs-5">
                                    We strive to deliver high-quality content that is accurate, engaging, and meaningful.
                                </p>
                        </div>
                        <div className="col-5 border-bottom border-light">
                                <h2 className="text-center text-info">
                                    Collaboration
                                </h2>
                                <p className="text-center text-light fs-5">
                                    The future of Artificial Intelligence depends on collaboration between researchers, 
                                    developers, educators, businesses, and communities.
                                </p>
                        </div>
                        <div className="col-5 border-bottom border-light">
                                <h2 className="text-center text-info">
                                    Integrity
                                </h2>
                                <p className="text-center text-light fs-5">
                                    Trust is essential in technology. We promote responsible innovation 
                                    through transparency, accuracy, and ethical practices.
                                </p>
                        </div>
                    </div>

                    <div className="row justify-content-between mt-5">
                        <div className="col-12">
                            <h1 className="text-info text-decoration-underline text-center mt-5">Be Part of the Journey</h1>
                        </div>
                        <div className="col-12">
                            <p className="text-center text-light fs-5">
                                The future isn't something we simply wait for—it's something we create.
                            </p>
                            <p className="text-center text-light fs-5">
                                Whether your goal is to learn, innovate, research, or simply stay informed, AI & Automation 
                                invites you to become part of a community that embraces technology with curiosity and purpose.
                            </p>
                            <p className="text-center text-light fs-5">
                                Together, we can explore the limitless possibilities of Artificial Intelligence and build a smarter, more connected world.
                            </p>
                        </div>
                        <div className="col-12 text-center mt-5 border-bottom border-light mb-5">
                            <img src={About_7}
                            alt="Image_7"
                            style={{
                                width: "400px",
                                height: "250px",
                                }}
                                className="border border-light border-2 mb-5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;