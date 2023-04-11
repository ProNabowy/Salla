const Footer = () => {
    return (
        <footer className="bg-white pb-2">

            <div className="container">

                <div className="d-flex justify-content-between list">

                    <ul>

                        <h4>سله</h4>
                        <li><a href="#">منصه المقترحات</a></li>
                        <li><a href="#">انضم لفريق سله</a></li>
                        <li><a href="#">اتفاقيه الاستخدام</a></li>
                        <li><a href="#">سياسه الخصوصيه</a></li>

                    </ul>

                    <ul>

                        <h4>متجر التطبيقات</h4>
                        <li><a href="#">ما هو متجر تطبيقات سله</a></li>
                        <li><a href="#">تصفح التطبيقات</a></li>

                    </ul>

                    <ul>

                        <h4>صانع التطبيقات</h4>
                        <li><a href="#">ما هو صانع التطبيقات</a></li>
                        <li><a href="#">اصنع تطبيقا لمتجرك</a></li>

                    </ul>

                    <ul>

                        <h4>الخدمات المسانده</h4>
                        <li><a href="#">مركز المساعده</a></li>
                        <li><a href="#">اكادميه سله</a></li>
                        <li><a href="#">مجتمع تجار سله</a></li>
                        <li><a href="#">منصه الشكاوي</a></li>

                    </ul>

                </div>

                <div className="d-flex justify-content-between align-items-center social">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="download">
                            <div>
                                <p>Download On The</p>
                                <h4>App Store</h4>
                            </div>
                            <i className="fa-brands fa-apple fs-3 me-2"></i>
                        </div>
                        <div className="download">
                            <div>
                                <p>Get It On</p>
                                <h4>Google Play</h4>
                            </div>
                            <img src={require("./Google_Play-Icon-Logo.wine.png")}></img>
                        </div>
                    </div>
                    <div>
                        <a href="#"><i className="fa-brands fa-youtube" style={{ "color": "var(--main-color)" }}></i></a>
                        <a href="#"><i className="fa-brands fa-twitter me-4" style={{ "color": "var(--main-color)" }}></i></a>
                        <a href="#"><i className="fa-brands fa-instagram me-4" style={{ "color": "var(--main-color)" }}></i></a>
                    </div>
                </div>
                <div className="mt-5"></div>
                <hr />
                <div className="d-flex justify-content-between align-items-center text-black-50 privcy">

                    <div className="privcy-content">
                        <p>جميع الحقوق محفوظه لدي سله القابضه 2023 	&copy;</p>
                    </div>
                    <div className="d-flex align-items-center">

                        <p className="m-0 info">
                            <span>                        <i className="fa-solid fa-phone me-2 ms-2"></i>
                                8001111210</span>
                            <span>                        <i className="fa-solid fa-location-dot me-2 ms-2"></i>
                                مكة المكرمة، المملكة العربية السعودية</span>
                            <span>                        <i className="fa-solid fa-envelope me-2 ms-2"></i>
                                info@salla.sa</span>
                        </p>
                        <img src={require("./vat.png")} style={{ "width": "40px", "height": "40px" }} className="me-3"></img>
                    </div>

                </div>
            </div>

        </footer>
    )
}

export default Footer;