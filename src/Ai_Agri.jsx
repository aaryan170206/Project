import Nav from "./Navbar";
import { useRef, useEffect, useState } from "react";
import { motion, useInView  } from "framer-motion";

//Background Image
import AiAgri from "./assets/Ai_In_Aggri.jpg";

//Aarows
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//Images
import Agri_1 from "./assets/Agri_1.jpg";
import Agri_2 from "./assets/Agri_2.jpg";
import Agri_3 from "./assets/Agri_3.jpg";
import Agri_4 from "./assets/Agri_4.jpg";
import Agri_5 from "./assets/Agri_5.jpg";
import Agri_6 from "./assets/Agri_6.jpg";
import Agri_7 from "./assets/Agri_7.jpg";
import Agri_8 from "./assets/Agri_8.jpg";


const Agriculture = () => {

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
        url(${AiAgri})`,
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
                >
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
                >
                    <FaArrowLeft size={40} />
                </motion.div>


            {/*Actual Body of This Component*/}
                <div ref={scrollRef}
                onScroll={pauseAutoScroll}
                className="d-flex"
                style={{
                height: "100vh",
                overflowX: "scroll",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                }}>
                    {/*First Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_1}
                                alt="Image_1"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Precision Farming: 
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                Artificial Intelligence is transforming precision farming by enabling farmers to monitor, analyze, and manage agricultural 
                                activities with exceptional accuracy. Unlike traditional farming methods that apply resources uniformly across entire fields, 
                                AI uses data from satellites, drones, IoT sensors, GPS systems, and weather stations to assess the unique conditions of different 
                                areas within a farm.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                                AI-powered precision farming systems use machine learning, computer vision, and predictive analytics to monitor soil health, 
                                crop growth, weather conditions, and pest activity in real time. These systems identify variations in soil moisture, nutrient 
                                levels, and plant health, enabling targeted irrigation, fertilization, and pest control. AI also provides recommendations 
                                on the optimal time for planting, harvesting, and applying agricultural inputs, helping farmers maximize crop yields while 
                                reducing operational costs and environmental impact.
                            </p>
                        </div>
                    </div>
                    
                    {/*Second Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_2}
                                alt="Image_2"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Smart Irrigation: 
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                Artificial Intelligence is transforming smart irrigation by enabling farmers to manage water resources more efficiently and sustainably. 
                                Unlike traditional irrigation methods that rely on fixed schedules, AI-powered smart irrigation systems 
                                continuously analyze data from soil moisture sensors, weather forecasts, satellite imagery, 
                                and IoT devices to determine the precise water requirements of crops. This intelligent approach ensures 
                                that crops receive the right amount of water at the right time, improving growth while minimizing water wastage.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                               AI-powered smart irrigation systems use machine learning and predictive analytics to monitor soil conditions, rainfall patterns, 
                               temperature, humidity, and crop growth in real time. Based on this analysis, the system automatically adjusts irrigation schedules 
                               and water distribution according to the specific needs of different crops and field conditions.
                            </p>
                        </div>
                    </div>

                    {/*Third Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_3}
                                alt="Image_3"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Crop Disease Detection:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                               Artificial Intelligence is revolutionizing crop disease detection by enabling farmers to identify plant diseases quickly and accurately before they 
                               spread across fields. Traditional methods often rely on manual inspection, which can be time-consuming and may fail to detect diseases in their early stages.
                                AI-powered systems use computer vision, machine learning, drones, satellite imagery, and smartphone cameras to analyze crop health 
                                in real time, allowing farmers to take timely corrective actions and minimize crop losses.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                               AI-powered crop disease detection systems analyze images of leaves, stems, fruits, and other plant parts to identify symptoms of fungal, bacterial, viral, 
                               and pest-related diseases. Machine learning algorithms compare visual patterns with extensive agricultural databases to diagnose diseases with high accuracy 
                               and recommend appropriate treatments.
                            </p>
                        </div>
                    </div>

                    {/*Fourth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_4}
                                alt="Image_4"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Weather Forecasting:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                Artificial Intelligence is transforming weather forecasting in agriculture by providing farmers with highly accurate 
                                and timely weather predictions that support informed decision-making throughout the crop cycle. 
                                Unlike traditional forecasting methods, AI analyzes vast amounts of data from satellites, weather stations, 
                                IoT sensors, radar systems, and historical climate records to predict changes in temperature, rainfall, 
                                humidity, wind speed, and other environmental conditions.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                              AI-powered weather forecasting systems use machine learning and predictive analytics to generate localized forecasts 
                              tailored to specific farms and regions. By continuously monitoring weather patterns and environmental conditions, 
                              these systems provide early warnings for extreme events such as droughts, floods, storms, heatwaves, and frost.
                            </p>
                        </div>
                    </div>

                    {/*Fifth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_5}
                                alt="Image_5"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Autonomous Farming Equipment:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                               Artificial Intelligence is revolutionizing autonomous farming equipment by enabling agricultural machines to perform farming operations with minimal 
                               or no human intervention. Using technologies such as computer vision, machine learning, GPS, IoT sensors, and robotics, AI-powered tractors, 
                               harvesters, seeders, sprayers, and drones can navigate fields, detect obstacles, and carry out farming tasks with exceptional precision. 
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                                AI-powered autonomous farming equipment continuously analyzes real-time data on soil conditions, crop health, terrain, and weather to make intelligent 
                                operational decisions. These machines can automatically perform tasks such as planting seeds, applying fertilizers and pesticides, 
                                irrigating crops, removing weeds, and harvesting produce with high accuracy.
                            </p>
                        </div>
                    </div>

                    {/*Sixth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_6}
                                alt="Image_6"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Yield Prediction:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                 Artificial Intelligence is transforming yield prediction by enabling farmers to accurately estimate crop production before harvest. 
                                 Unlike traditional forecasting methods that rely on manual observations and historical averages, 
                                 AI analyzes data from satellites, drones, IoT sensors, weather stations, soil conditions, 
                                 and crop growth patterns to predict expected yields with high accuracy.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                                AI-powered yield prediction systems use machine learning and predictive analytics to evaluate factors such as rainfall, temperature, soil fertility, irrigation, 
                                pest activity, crop health, and historical production data. By continuously monitoring these variables throughout the growing season, AI identifies 
                                trends that influence crop development and provides early estimates of expected yields. Farmers can use these predictions to optimize 
                                fertilizer application, adjust irrigation schedules, plan labor requirements.
                            </p>
                        </div>
                    </div>

                    {/*Seventh Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_7}
                                alt="Image_7"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Livestock Monitoring:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                 Artificial Intelligence is transforming livestock monitoring by enabling farmers to continuously track the health, behavior, 
                                 and productivity of animals in real time. Traditional livestock management often depends on manual observation, 
                                 which can be time-consuming and may delay the detection of health issues. AI-powered systems use wearable sensors, 
                                 smart cameras, drones, IoT devices, and computer vision to monitor livestock continuously, 
                                 allowing farmers to identify potential problems early and ensure better animal welfare.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                                AI-powered livestock monitoring systems analyze data such as body temperature, heart rate, movement patterns, feeding habits, 
                                milk production, and behavioral changes to assess the overall health of animals. Machine learning algorithms can detect signs 
                                of illness, stress, injury, or reproductive cycles at an early stage and immediately alert farmers for timely intervention.
                            </p>
                        </div>
                    </div>

                    {/*Eighth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                    minWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Agri_8}
                                alt="Image_8"
                                style={{
                                width: "475px",
                                height: "475px",
                                objectFit: "cover",
                                transform: "translateY(30px)", 
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-5 me-5"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder">
                                Supply Chain Optimization:
                            </h1>
                            <p className="agri-text text-light text-center fs-5">
                                 Artificial Intelligence is transforming supply chain optimization in agriculture by improving the efficiency of moving agricultural products 
                                 from farms to consumers. Traditional agricultural supply chains often face challenges such as transportation delays, 
                                 inventory shortages, product spoilage, and fluctuating market demand.
                            </p>
                            <p className="agri-text text-light text-center fs-5">
                                AI-powered supply chain optimization systems use machine learning and predictive analytics to forecast demand, optimize inventory levels, 
                                plan transportation routes, and coordinate logistics across the agricultural value chain. These systems continuously monitor factors 
                                such as harvest schedules, storage capacity, traffic conditions, fuel costs, and weather patterns to recommend the most efficient 
                                distribution strategies. By automating decision-making and improving coordination among farmers, distributors, retailers, and logistics 
                                providers.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Body End*/}

            </div>
        </div>
    );
}
 
export default Agriculture;