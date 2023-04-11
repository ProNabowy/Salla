import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const BorderlessCommerce = () => {
    const h1 = "تجارة لا تعرف حدودًا";
    const h4 = "من السعوديَّة لكل العالم بكل سهولة.";
    const p1 = "دعم أكثر من 40 لغة.";
    const p2 = "استقبال المدفوعات من أكثر من 79 دولة.";
    const p3 = "شحن دولي يغطي معظم دول العالم.";
    const p4 = "إمكانية إضافة فروع ومستودعات متعددة لمتجرك.";
    return (
        <div style={{"backgroundColor": "#f8f8f8"}} className="section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxImage imgName="languages.webp" imgClasses="col-lg-6" />
                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} />

                </div>

            </div>
        </div>
    );
}

export default BorderlessCommerce;