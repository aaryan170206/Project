import Nav from "./Navbar";
import { useRef } from "react";
import { motion, useInView  } from "framer-motion";

//Background Image
import AiFinance from "./assets/Ai_In_Finance.jpg";

//Aarows
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

//Images
import Finance_1 from "./assets/Finance_1.jpg";
import Finance_2 from "./assets/Finance_2.jpg";
import Finance_3 from "./assets/Finance_3.jpg";
import Finance_4 from "./assets/Finance_4.jpg";
import Finance_5 from "./assets/Finance_5.jpg";
import Finance_6 from "./assets/Finance_6.jpg";
import Finance_7 from "./assets/Finance_7.jpg";
import Finance_8 from "./assets/Finance_8.jpg";

    
const Finance = () => {
    //Scroll/Click Right
    const scrollRef = useRef(null);
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
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url(${AiFinance})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        width: "100%",}}>

        {/*Increace Opcacity*/}
            <div
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                minHeight: "100vh",
                width: "100%",}}>

                <Nav />
                
                {/*Left Arrow*/}
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 15, 0] }}
                transition={{
                duration: 1,
                repeat: Infinity,
                }}
                onClick={scrollNext}
                style={{
                position: "fixed",
                right: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                color: "#ffffff",
                cursor: "pointer",
                }}
                className="d-none d-md-block">
                    <FaArrowRight size={40} />
                </motion.div>

                {/*Right Arrow*/}
                <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 15, 0] }}
                transition={{
                duration: 1,
                repeat: Infinity,
                }}
                onClick={scrollPrevious}
                style={{
                position: "fixed",
                left: "30px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1000,
                color: "#ffffff",
                cursor: "pointer",
                }}
                className="d-none d-md-block">
                    <FaArrowLeft size={40} />
                </motion.div>


            {/*Actual Body of This Component*/}
                <div ref={scrollRef}
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
                    width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_1}
                                alt="Image_1"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Fraud Detection: 
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Artificial Intelligence has become a powerful tool in detecting and preventing financial fraud
                                 by continuously monitoring transactions and identifying suspicious activities in real time.
                                  Unlike traditional rule-based systems, AI uses machine learning algorithms to analyze
                                   millions of transactions, recognize hidden patterns, and detect unusual behavior that may
                                    indicate fraudulent activity.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                AI can identify various types of fraud, including credit card fraud, insurance fraud, identity 
                                theft, money laundering, online payment fraud, and cyberattacks. By comparing current 
                                transactions with a customer's normal spending habits, AI can quickly detect anomalies such as 
                                unusually large purchases, transactions from unfamiliar locations, or multiple failed login 
                                attempts. When suspicious activity is detected, the system can immediately flag the transaction, 
                                block it temporarily, or notify the customer and financial institution for further verification.
                                   
                            </p>
                        </div>
                    </div>
                    
                    {/*Second Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_2}
                                alt="Image_2"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Algorithmic Trading: 
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Algorithmic Trading, also known as Algo Trading, is the use of Artificial Intelligence and 
                                computer algorithms to automatically execute financial trades based on predefined rules and 
                                real-time market data. AI-powered trading systems continuously analyze stock prices, market trends, 
                                trading volumes, economic indicators, and historical data to identify profitable trading opportunities 
                                within milliseconds.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Machine learning algorithms can recognize complex market patterns, predict short-term price movements, 
                                and adapt their strategies based on changing market conditions. AI can execute thousands of trades in a fraction of 
                                a second while minimizing human emotions such as fear and greed, which often lead to poor investment decisions. 
                                High-frequency trading (HFT), quantitative trading, and automated portfolio management are some of the most common 
                                applications of AI in modern financial markets.   
                            </p>
                        </div>
                    </div>

                    {/*Third Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_3}
                                alt="Image_3"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Loan Approval:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Artificial Intelligence is transforming the loan approval process by enabling banks and financial 
                                institutions to evaluate loan applications more quickly, accurately, and fairly. Instead of relying solely on 
                                traditional credit scores, AI analyzes a wide range of factors, including an applicant's income, employment history, 
                                spending habits, repayment records, existing debts, credit history, and even transaction patterns. This comprehensive 
                                analysis allows lenders to make well-informed lending decisions while significantly reducing the time required to 
                                process applications.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Machine learning algorithms assess the likelihood of loan repayment by identifying patterns in historical lending data and 
                                predicting the creditworthiness of borrowers. AI can also detect inconsistencies, forged documents, or fraudulent information 
                                submitted during the application process, helping financial institutions minimize lending risks and financial losses.  
                            </p>
                        </div>
                    </div>

                    {/*Fourth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_4}
                                alt="Image_4"
                                style={{
                               width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Customer Service:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Artificial Intelligence is transforming customer service in the financial sector by providing fast,
                                 personalized, and round-the-clock support through AI-powered chatbots, virtual assistants, and intelligent 
                                 customer support systems. These systems use Natural Language Processing (NLP) and machine learning to understand 
                                 customer queries, provide accurate responses, and assist with a wide range of banking services, including 
                                 account inquiries.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                               AI continuously analyzes customer interactions and financial data to deliver personalized recommendations and proactive support. 
                               It can suggest suitable banking products such as savings accounts, loans, insurance plans, or investment opportunities based on 
                               a customer's financial behavior and preferences. AI also assists in detecting customer dissatisfaction by analyzing conversation 
                               patterns and sentiment, allowing complex issues to be quickly transferred to human representatives for effective resolution. 
                            </p>
                        </div>
                    </div>

                    {/*Fifth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_5}
                                alt="Image_5"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Personal Finance Management:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Artificial Intelligence is transforming personal finance management by helping individuals monitor their income, expenses, 
                                savings, investments, and financial goals more effectively. AI-powered financial applications automatically analyze banking 
                                transactions, categorize spending patterns, create personalized budgets, and provide real-time insights into a user's financial health.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                               Machine learning algorithms study a user's financial behavior to deliver personalized recommendations for budgeting, saving, investing, and 
                               debt management. AI can send alerts for upcoming bill payments, detect unusual spending habits, forecast future expenses, and suggest practical 
                               ways to reduce unnecessary costs. It also helps users set and track financial goals, such as purchasing a home, funding education, planning for 
                               retirement, or building an emergency savings fund, by offering customized strategies based on their income and spending habits. 
                            </p>
                        </div>
                    </div>

                    {/*Sixth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_6}
                                alt="Image_6"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Risk Management:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                 Artificial Intelligence is playing a vital role in financial risk management by helping banks, 
                                 insurance companies, investment firms, and other financial institutions identify, assess, and mitigate 
                                 potential risks more accurately and efficiently. AI-powered systems analyze vast amounts of financial 
                                 data, market trends, customer transactions, economic indicators, and historical records to detect 
                                 patterns that may indicate credit risk, market risk, operational risk, or liquidity risk.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                              Machine learning algorithms continuously monitor financial markets and customer activities in real time, 
                              allowing institutions to identify unusual behavior, predict market fluctuations, and evaluate the likelihood of 
                              loan defaults or investment losses. AI can perform stress testing, simulate different economic scenarios, and forecast 
                              the potential impact of changing interest rates, inflation, or geopolitical events on financial portfolios.
                            </p>
                        </div>
                    </div>

                    {/*Seventh Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_7}
                                alt="Image_7"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Investment Advisory:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                 Artificial Intelligence is transforming investment advisory services by helping individuals and financial 
                                 institutions make informed investment decisions based on data-driven analysis. AI-powered advisory systems, 
                                 often known as robo-advisors, analyze vast amounts of financial information, including market trends, historical 
                                 stock performance, economic indicators, company fundamentals, and global news.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                AI continuously monitors financial markets in real time and adjusts investment strategies as market conditions change. 
                                It can recommend diversified portfolios consisting of stocks, bonds, mutual funds, exchange-traded funds (ETFs), 
                                and other financial assets to maximize potential returns while minimizing risk. 
                            </p>
                        </div>
                    </div>

                    {/*Eighth Point*/}
                    <div className="row justify-content-center align-items-center"
                    style={{
                        width: "100%",
                    maxWidth: "100vw",
                    height: "100vh",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                    }}>
                        <div className="col-6 text-center">
                            <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                                <img src={Finance_8}
                                alt="Image_8"
                                style={{
                                width: "100%",
                                maxWidth: "420px",
                                aspectRatio: "1 / 1",
                                height: "auto",
                                objectFit: "cover",
                                }}
                                className="img-thumbnail rounded-circle shadow border border-info border-5"/>
                            </motion.div>
                        </div>
                        <div className="col-12 col-lg-6"
                        style={{
                        maxWidth: "700px"
                        }}>
                            <h1 className="text-center text-warning fw-bolder fs-2 fs-md-1">
                                Process Automation:
                            </h1>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                 Artificial Intelligence is revolutionizing process automation by streamlining repetitive and time-consuming 
                                 tasks across banking, insurance, and financial institutions. AI-powered automation systems can handle 
                                 activities such as data entry, document verification, invoice processing, customer onboarding, account 
                                 management, compliance checks, and transaction processing with minimal human intervention.
                            </p>
                            <p className="finance-text text-light text-center fs-6 fs-md-6">
                                Machine learning and Robotic Process Automation (RPA) work together to analyze business workflows, identify 
                                repetitive tasks, and execute them efficiently. AI can extract information from forms, contracts, 
                                and financial documents, verify customer identities, process loan applications, reconcile accounts, 
                                and generate reports within seconds. 
                            </p>
                        </div>
                    </div>
                </div>

                {/*Body End*/}

            </div>
        </div>
    );
}
 
export default Finance;