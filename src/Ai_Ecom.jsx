import Nav from "./Navbar";
import { useRef, useEffect, useState } from "react";
import { motion, useInView  } from "framer-motion";

//Background Image
import AiEcom from "./assets/Ai_In_Ecom.jpg";

//Aarows
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//Images
import Ecom_1 from "./assets/Ecom_1.jpg";
import Ecom_2 from "./assets/Ecom_2.jpg";
import Ecom_3 from "./assets/Ecom_3.jpg";
import Ecom_4 from "./assets/Ecom_4.jpg";
import Ecom_5 from "./assets/Ecom_5.jpg";
import Ecom_6 from "./assets/Ecom_6.jpg";
import Ecom_7 from "./assets/Ecom_7.jpg";
import Ecom_8 from "./assets/Ecom_8.jpg";

const Ecom = () => {
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
        url(${AiEcom})`,
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
                className="d-none d-lg-block"
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
                className="d-none d-lg-block"
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
                overflowX: "auto",
                overflowY: "hidden",
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
                }}>
                    {/*First Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_1}
                                alt="Image_1"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Personalized Recommendations: 
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                Artificial Intelligence has transformed personalized recommendations by enabling e-commerce platforms 
                                to deliver products and services tailored to individual customer preferences. By analyzing browsing history, 
                                purchase behavior, search queries, demographic information, and user interactions, AI identifies patterns that 
                                help businesses understand customer interests.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                AI-powered recommendation systems use machine learning and predictive analytics to recommend products based on a customer's 
                                previous purchases, similar user preferences, seasonal trends, and real-time shopping behavior. 
                                These systems display personalized product recommendations on homepages, product pages, shopping carts, 
                                and email campaigns, encouraging customers to discover items that match their needs.
                            </p>
                        </div>
                    </div>
                    
                    {/*Second Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_2}
                                alt="Image_2"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                AI Chatbots and Virtual Assistants: 
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                Artificial Intelligence is revolutionizing e-commerce through AI-powered chatbots and virtual assistants that provide instant, 
                                personalized, and 24/7 customer support. Using Natural Language Processing (NLP) 
                                and machine learning, these intelligent systems understand customer inquiries, answer questions, 
                                and assist shoppers throughout their purchasing journey. Whether integrated into websites,
                                 mobile applications, or messaging platforms.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                               AI-powered chatbots assist customers with product recommendations, order tracking, payment inquiries, 
                               return and refund requests, and frequently asked questions. They can guide users through the purchasing process, 
                               provide personalized shopping suggestions based on customer preferences, and notify buyers about promotions, 
                               discounts, and product availability.
                            </p>
                        </div>
                    </div>

                    {/*Third Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_3}
                                alt="Image_3"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Visual Search:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                               Artificial Intelligence is transforming e-commerce through visual search by allowing customers to search 
                               for products using images instead of text. Using computer vision, deep learning, and image recognition technologies, 
                               AI analyzes uploaded photographs or screenshots to identify product features such as color, shape, pattern, and style.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                               AI-powered visual search systems help customers discover products even when they do not know the product name or 
                               appropriate search keywords. By comparing uploaded images with extensive product catalogs, these systems recommend 
                               visually similar items across categories such as fashion, furniture, electronics, and home décor.
                            </p>
                        </div>
                    </div>

                    {/*Fourth Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_4}
                                alt="Image_4"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Inventory Management:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                Artificial Intelligence is transforming inventory management by enabling e-commerce businesses to monitor, organize, 
                                and optimize stock levels with greater accuracy and efficiency. Unlike traditional inventory systems that rely on 
                                manual tracking and fixed reorder schedules, AI continuously analyzes sales data, customer demand, seasonal trends, 
                                and supplier information to maintain optimal inventory levels.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                              AI-powered inventory management systems use machine learning and predictive analytics to forecast product demand, 
                              automate stock replenishment, and identify slow-moving or high-demand items. By analyzing historical sales 
                              patterns and real-time purchasing behavior, AI recommends appropriate inventory levels, optimizes warehouse 
                              storage, and improves supply chain coordination. 
                            </p>
                        </div>
                    </div>

                    {/*Fifth Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_5}
                                alt="Image_5"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Dynamic Pricing:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                               Artificial Intelligence is revolutionizing dynamic pricing by enabling e-commerce businesses to adjust product prices in real time based on changing
                                market conditions and customer demand. Unlike traditional pricing strategies that rely on fixed prices or 
                                periodic updates, AI continuously analyzes factors such as demand fluctuations, competitor pricing, inventory 
                                levels, seasonal trends, customer behavior, and market conditions.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                AI-powered dynamic pricing systems use machine learning and predictive analytics to recommend optimal prices for products at any given time. 
                                These systems evaluate historical sales data, customer purchasing patterns, promotional campaigns, and competitor activities 
                                to maximize revenue without compromising customer satisfaction.
                            </p>
                        </div>
                    </div>

                    {/*Sixth Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_6}
                                alt="Image_6"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Fraud Detection:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                 Artificial Intelligence is transforming fraud detection in e-commerce by enabling businesses to identify and prevent fraudulent 
                                 activities in real time. As online transactions continue to grow, cybercriminals employ increasingly sophisticated 
                                 techniques such as payment fraud, account takeovers, identity theft, and fake transactions. AI-powered fraud detection 
                                 systems continuously analyze transaction data, customer behavior, device information, and login patterns to identify 
                                 suspicious activities before they result in financial losses.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                AI-powered fraud detection systems use machine learning, behavioral analytics, and anomaly detection to distinguish legitimate customer 
                                activities from potentially fraudulent behavior. These systems evaluate multiple risk factors, 
                                including transaction value, purchase history, geographic location, IP address, device fingerprint, 
                                and payment methods, to detect unusual patterns.
                            </p>
                        </div>
                    </div>

                    {/*Seventh Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_7}
                                alt="Image_7"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Warehouse Automation:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                 Artificial Intelligence is transforming warehouse automation by enabling e-commerce businesses to streamline storage, 
                                 inventory handling, and order fulfillment with greater speed and accuracy. Unlike traditional warehouses that rely 
                                 heavily on manual labor, AI-powered systems use robotics, computer vision, machine learning,
                                  and IoT sensors to automate routine operations. These intelligent systems continuously monitor warehouse activities, 
                                  optimize workflows, and coordinate the movement of goods, helping businesses process large volumes of 
                                  orders efficiently while reducing operational costs.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                AI-powered warehouse automation systems assist with inventory management, product picking, sorting, packing, and shipment 
                                preparation. Autonomous mobile robots (AMRs) and robotic arms transport goods, retrieve products from storage locations, 
                                and prepare customer orders with remarkable precision.
                            </p>
                        </div>
                    </div>

                    {/*Eighth Point*/}
                    <div className="row justify-content-center align-items-center mx-0 ecommerce-slide"
                    style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    height: "auto",
                    padding: "60px 15px",
                    scrollSnapAlign: "start",
                    }}>
                        <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Ecom_8}
                                alt="Image_8"
                                style={{
                                width:"100%",
                                maxWidth:"380px",
                                aspectRatio:"1 / 1",
                                objectFit:"cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-5 mx-auto px-3">
                            <h1 className="display-6 display-lg-5 text-center text-warning fw-bold">
                                Demand Forecasting:
                            </h1>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                 Artificial Intelligence is revolutionizing demand forecasting by enabling e-commerce businesses to accurately predict future customer 
                                 demand and make data-driven business decisions. Unlike traditional forecasting methods that rely primarily on historical sales data,
                                  AI continuously analyzes a wide range of factors, including customer purchasing behavior, seasonal trends, market conditions, promotional 
                                  campaigns, economic indicators, and emerging consumer preferences.
                            </p>
                            <p className="finance-text text-light text-center px-3 px-lg-4">
                                AI-powered demand forecasting systems use machine learning and predictive analytics to identify patterns in sales data and generate highly 
                                accurate demand predictions for individual products and product categories. These systems help businesses optimize inventory levels, 
                                plan procurement, allocate warehouse space, and coordinate supply chain operations to meet expected demand.
                            </p>
                        </div>
                    </div>
                </div>

                {/*Body End*/}

            </div>
        </div>
    );
}
 
export default Ecom;