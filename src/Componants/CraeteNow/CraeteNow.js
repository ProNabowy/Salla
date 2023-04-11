const CraeteNow = () => {
    return(
        <div className="bg-white createNow section-padding" data-aos="fade-in">

            <div className="container p-4" style={{"backgroundColor": "#fcfcfc" , "borderRadius": "20px"}}>

                <div className="createNow-ui d-flex p-5 justify-content-between align-items-center" style={{"background": "var(--main-color)" , "borderRadius": "20px"}}>

                    <div style={{"color": "var(--dark-color)"}}>
                        <h1 className="mb-3 fw-bolder">امتلك متجراً احترافياً في سلة</h1>
                        <h5 className="fw-bold">أنشئ متجرك الآن بأدوات مرنة وحلول متكاملة تساعدك في كل خطوة نحو نمو مبيعاتك وتسويق منتجاتك</h5>
                    </div>

                    <button className="main-btn p-2 pe-4 ps-4"><span className="circleIcone"><i className="fa-solid fa-plus"></i></span> انشئ متجرك مجانا</button>

                </div>

            </div>

        </div>
    )
}

export default CraeteNow;