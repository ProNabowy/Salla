import CountUp from 'react-countup';
const About = () => {

    return (
        <div className="bg-white about section-padding text-center" data-aos="fade-in">
            <div className="container">

                <h1>أكبر منصَّة سعودية للتجارة الإلكترونيَّة في الشرق الأوسط</h1>

                <p className="mb-5">أنشئ متجرك الإلكتروني، وانضمَّ لعشرات الآلاف من العلامات المحلية والعالمية الناجحة مع سلة اليوم</p>

                <div className="d-flex nums-wrapper mt-5 justify-content-center align-items-center">

                    <div className="d-flex  mb-5" style={{ "width": "fit-content" }}>

                        <div className="min-icone">
                            <i className="fa-solid fa-house" style={{ "color": "var(--dark-color)" }}></i>
                        </div>
                        <div className="me-3 fw-bold">

                            <h1 className="fw-bolder" style={{ "color": "var(--dark-color)" }}>+
                            <CountUp start={0} end={36000} duration={3} delay={2} useEasing={true} /></h1>
                            <p className="text-black-50 text-end">متجر الكتروني</p>

                        </div>

                    </div>
                    <div className="d-flex me-5 mb-5" style={{ "width": "fit-content" }}>
                        <div className="min-icone">
                            <i className="fa-solid fa-money-check-dollar" style={{ "color": "var(--dark-color)" }}></i>
                        </div>

                        <div className="me-3 fw-bold">

                            <h1 className="fw-bolder" style={{ "color": "var(--dark-color)" }}>+
                            <CountUp start={1000000000} end={14000000000} duration={4} delay={2}  useEasing={true} /></h1>
                            <p className="text-black-50 text-end">مبيعات المنصه</p>
                            


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;