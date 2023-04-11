import HeaderLogic from "./HeaderLogic";

const Header = () => {
    return (
        <header className="pt-4 pb-2" style={{"background": "var(--main-color)"}}>

            <div className="container pe-2 ps-2 d-flex  justify-content-between align-items-center">
                <div>
                <a href="#"><img src={require("./image/logo.PNG")}  alt="test"/></a>
                </div>
                  <div className="icones d-none">
                  <i className="fa-solid fa-bars active" id="mnue"></i>
                  <i className="fa-solid fa-x text-white" id="close"></i>
                  </div>
                <div className="align-items-center header-list" id="header-list">
                  <div className="d-flex ul-list">
                  <ul className="d-flex align-items-center fw-bold mb-0">
                        <li className="me-3"><a href="#" style={{"color": "var(--dark-color)"}}>الرائيسيه</a></li>
                        <li className="me-3"><a href="#" style={{"color": "var(--dark-color)"}}>التعليم</a></li>
                        <li className="me-3"><a href="#" style={{"color": "var(--dark-color)"}}>الحلول</a></li>
                        <li className="me-3"><a href="#" style={{"color": "var(--dark-color)"}}>الاسعار</a></li>
                    </ul>
                    <div className="login">
                        <a href="#" className="fw-bold" style={{"color": "var(--dark-color)"}}>تسجيل الدخول</a>
                        <button className="main-btn p-4 pt-2 pb-2 me-3">انشئ متجرك مجانا</button>
                    </div>
                  </div>
                </div>
            </div>
            <HeaderLogic />
        </header>
    )
}

export default Header;