import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const Easyintegration = () => {
    const h1 = "أسطول شحن متكامل في خدمة منتجاتك";
    const h4 = "خيارات شحن متنوعة تربط متجرك بالعالم";
    const p1 = "ربط سهل بدون عقود.";
    const p2 = "اربط متجرك بأكثر من 100 شركة شحن وتوصيل محليَّة ودوليَّة.";
    const p3 = "خدمات شحن ولوجستيات مخصًّصة لجميع أنواع المنتجات.";
    const p4 = "شحن دولي ومحلي يغطي جميع المدن والقرى، والأماكن البعيدة.";
    return (
        <div style={{"backgroundColor": "#f8f8f8"}} className="section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxImage imgName="shipping.webp" imgClasses="col-lg-6" />
                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} />

                </div>

            </div>
        </div>
    );
}

export default Easyintegration;