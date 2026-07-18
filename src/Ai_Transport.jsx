import Nav from "./Navbar";

//Background Image
import AiTrans from "./assets/Ai_In_Transportation.jpg";
import { motion, useInView  } from "framer-motion";
import { useEffect, useRef } from "react";

//Images
import Trans_1 from "./assets/Trans_1.jpg";
import Trans_2 from "./assets/Trans_2.jpg";
import Trans_3 from "./assets/Trans_3.jpg";
import Trans_4 from "./assets/Trans_4.jpg";
import Trans_5 from "./assets/Trans_5.jpg";
import Trans_6 from "./assets/Trans_6.jpg";
import Trans_7 from "./assets/Trans_7.jpg";
import Trans_8 from "./assets/Trans_8.jpg";

const Transport = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
    const imageRef = useRef(null);

    const isInView = useInView(imageRef, {
        amount: 0.4
    });
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),
        url(${AiTrans})`,
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
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
            }}>
                {/*First Point*/}
                <div className="row justify-content-around align-items-center mt-5"
                style={{
                minHeight: "100vh",
                scrollSnapAlign: "start"
                }}>
                    <div className="col-6 text-center border-end border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Trans_1}
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
                                Autonomous Vehicles: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is revolutionizing autonomous vehicles by enabling cars, buses, trucks, drones, and other transportation systems 
                                to operate with minimal or no human intervention. Using advanced technologies such as computer 
                                vision, machine learning, radar, LiDAR, GPS, and sensor fusion, AI continuously monitors the surrounding 
                                environment, identifies road signs, traffic signals, pedestrians, and nearby vehicles, and makes 
                                real-time driving decisions.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered autonomous vehicles improve transportation efficiency by optimizing routes, maintaining safe following distances, avoiding collisions, 
                                and responding instantly to unexpected obstacles. Deep learning algorithms process massive amounts of sensor data to recognize 
                                road conditions, predict the behavior of other road users, and execute actions such as lane changes, parking, overtaking, 
                                and emergency braking with remarkable precision.
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
                                Smart Traffic Management: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is transforming smart traffic management by enabling transportation authorities to monitor, 
                                analyze, and optimize traffic flow in real time. Using data collected from cameras, 
                                road sensors, GPS devices, connected vehicles, and traffic signals, AI continuously 
                                evaluates road conditions, vehicle density, and travel patterns. 
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered traffic management systems dynamically adjust traffic signal timings, detect accidents, identify traffic bottlenecks, and recommend alternative routes to minimize delays. 
                                Machine learning algorithms predict traffic congestion before it occurs by analyzing historical data, 
                                weather conditions, public events, and real-time vehicle movement. 
                                These systems also support emergency services by prioritizing ambulances, fire trucks, and police vehicles through 
                                intelligent traffic signal control, enabling faster response times during critical situations.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Trans_2}
                            alt="Image_2"
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
                            <img src={Trans_3}
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
                                Route Optimization: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is revolutionizing route optimization by enabling transportation systems to identify the fastest, 
                                safest, and most efficient routes in real time. Unlike traditional navigation systems that rely on static maps, 
                                AI continuously analyzes live traffic conditions, weather updates, road closures, construction zones, 
                                and vehicle locations to recommend optimal travel paths.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered route optimization systems use machine learning and predictive analytics to anticipate traffic congestion, 
                                estimate travel times, and dynamically adjust routes as conditions change. These systems consider factors such as fuel consumption, 
                                delivery schedules, road capacity, and vehicle type to generate the most effective routes for passenger and freight transportation.
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
                                Fleet Management:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is transforming fleet management by enabling organizations to monitor,
                                 coordinate, and optimize the operation of commercial vehicles in real time. Using GPS tracking, 
                                 IoT sensors, telematics, and machine learning, AI continuously collects and analyzes data related 
                                 to vehicle location, fuel consumption, driver behavior, traffic conditions, and vehicle performance.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered fleet management systems optimize vehicle scheduling, route planning, load distribution, 
                                and maintenance activities to maximize fleet productivity. Predictive analytics identify potential mechanical 
                                issues before they lead to breakdowns, enabling proactive maintenance and minimizing vehicle downtime.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Trans_4}
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
                            <img src={Trans_5}
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
                                Predictive Maintenance: 
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is revolutionizing predictive maintenance by enabling transportation organizations to 
                                detect potential equipment failures before they occur. Unlike traditional maintenance schedules that rely on fixed 
                                inspection intervals, AI continuously analyzes real-time data from sensors, vehicle diagnostics, and operational 
                                systems to assess the condition of engines, brakes, tires, batteries, and other critical components.
                            </p>
                            <p className="text-info text-center fs-5">
                                 AI-powered predictive maintenance systems use machine learning and data analytics to monitor vehicle performance, 
                                 evaluate historical maintenance records, and recognize patterns that indicate developing mechanical issues. 
                                 These systems can predict component failures, estimate the remaining useful life of parts, and recommend the optimal 
                                 time for repairs or replacements.
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
                                Public Transportation:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is transforming public transportation by making transit systems more efficient, reliable, 
                                and passenger-friendly. By analyzing data from buses, trains, metro systems, GPS devices, traffic sensors, 
                                and passenger demand, AI enables transportation authorities to optimize routes, schedules, and resource allocation in real time.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-powered public transportation systems use machine learning and predictive analytics to forecast passenger demand, 
                                adjust service frequency, and minimize overcrowding. Intelligent scheduling systems optimize vehicle deployment 
                                based on real-time traffic conditions and commuter patterns, while AI-powered monitoring systems detect operational 
                                issues and recommend immediate corrective actions. Additionally, AI enhances the passenger experience through 
                                real-time arrival predictions, automated ticketing, personalized travel recommendations, and smart navigation 
                                assistance.
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Trans_6}
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
                            <img src={Trans_7}
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
                                Driver Assistance Systems:
                            </h1>
                            <p className="text-info text-center fs-5">
                               Artificial Intelligence is transforming driver assistance systems by enhancing vehicle safety, improving driving performance, 
                               and reducing the risk of road accidents. AI-powered Advanced Driver Assistance Systems (ADAS) use cameras, radar, LiDAR, ultrasonic sensors, 
                               and computer vision to continuously monitor the vehicle's surroundings and provide real-time assistance to drivers.
                            </p>
                            <p className="text-info text-center fs-5">
                                AI-driven driver assistance systems offer a wide range of safety features, including lane departure warning, adaptive cruise control, 
                                automatic emergency braking, blind spot detection, traffic sign recognition, collision avoidance, and driver fatigue monitoring. 
                                Machine learning algorithms process sensor data in real time to detect potential hazards, predict the behavior of surrounding vehicles, 
                                and respond instantly to dangerous situations. 
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
                                Logistics and Delivery:
                            </h1>
                            <p className="text-info text-center fs-5">
                                Artificial Intelligence is revolutionizing logistics and delivery by enabling organizations to manage the movement of goods with greater speed, 
                                accuracy, and efficiency. By analyzing data from GPS systems, traffic networks, warehouses, weather forecasts, and customer demand, 
                                AI optimizes every stage of the supply chain. Intelligent systems continuously monitor shipments, coordinate transportation resources, 
                                and adapt delivery plans in real time, ensuring that products reach their destinations safely and on schedule.
                            </p>
                            <p className="text-info text-center fs-5">
                               AI-powered logistics and delivery systems use machine learning and predictive analytics to optimize delivery routes, manage warehouse operations, 
                               forecast demand, and allocate resources efficiently. These systems can prioritize deliveries, reduce empty vehicle trips, 
                               automate package sorting, and monitor shipment conditions throughout transit. 
                            </p>
                    </div>
                    <div className="col-6 text-center border-start border-secondary">
                        <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}>
                            <img src={Trans_8}
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
 
export default Transport;