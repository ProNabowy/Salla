const LandingPage = _ => {
    return(
        <div  className="container landing text-center mb-5 section-padding mt-5">

            <div data-aos="fade-up" data-aos-duration="2000">
            <div style={{"width": "50%" , "margin": "0 auto", "color": "var(--dark-color)"}} className="w-sm-100">

            <h1 className="mb-5 fw-bolder">سله.. تجاريه ذكيه وسهله</h1>

            <p style={{"lineHeight": "2.3"}} className="fw-bold">أنشئ متجرك الإلكتروني في دقائق، واربط منتجاتك بمجموعة متكاملة من الحلول الرقميَّة الذكيَّة للمدفوعات، والشحن، وإدارة المخزون، والتسويق، بكل سهولة؛ لأن نجاحك لا يحتاج إلى تعقيد.</p>

            </div>

            <div className="btns mt-5 d-flex justify-content-between align-items-center m-auto mb-5" style={{"width": "fit-content"}}> 

                <button className="main-btn p-3 pe-5 ps-5 fw-bolder" style={{"fontSize": "20px"}}>انشئ متجرك الان</button>
                <button className="me-3 p-3 main-btn" style={{"backgroundColor": "var(--main-color)" , "border": "2px solid var(--dark-color)", "color": "var(--dark-color)"}}>تجربه المنصه</button>

            </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="2000">
                <img src={require("./images/intro.webp")} style={{"maxWidth": "70%"}}></img>
            </div>
        </div>
    )
}


export default LandingPage;