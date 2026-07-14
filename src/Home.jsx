const Home = () => {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <div className="card"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.25)",
                                        height:"550px",
                                        width:"600px",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        borderRadius: "15px"}}>
                        <div className="card-title text-center mt-5">
                            <h1 className="text-light">Welcome to home page</h1>
                        </div>
                        <div className="card-subtitle text-center mx-4">
                            <p className="text-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore amet consectetur beatae, voluptas recusandae, natus neque veniam libero corporis ex doloremque quidem ratione, tempore et sed qui tempora. Eaque, similique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Home;