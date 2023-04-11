import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const MarketingSolutions = () => {
    const h1 = "حلول تسويقيَّة في مكان واحد";
    const h4 = "استهدف المزيد من العملاء بحلول تسويقية مخصصة";
    const p1 = "قدم لعملائك كوبونات خصم مميزة تشجعهم على إتمام الشراء.";
    const p2 = "تحكم بكافة تفاصيل العروض والخصومات.";
    const p3 = "دعم التسويق بالعمولة لمتجرك.";
    const p4 = "استهداف دقيق للسلات المتروكة.";
    const p5 = "إدارة الحملات الإعلانية على مختلف المنصات.";
    return (
        <div className="bg-white section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} p5={p5} />
                    <BoxImage imgName="marketing.webp" imgClasses="col-lg-6" />

                </div>

            </div>
        </div>
    );
}

export default MarketingSolutions;