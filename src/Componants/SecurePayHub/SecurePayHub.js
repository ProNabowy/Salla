import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const SecurePayHub = () => {
    const h1 = "مدفوعات آمنة، لتجارة مستدامة، وثقة متينة!";
    const h4 = "استفد من نظام سلة المتكامل للمدفوعات الإلكترونية لإدارة مدفوعات متجرك وعملائك";
    const p1 = "وسائل دفع متنوعة تلبي كافة احتياجات عملائك.";
    const p2 = "تفعيل سريع لنظام المدفوعات خلال يوم واحد.";
    const p3 = "تحصيل المدفوعات بعد 24 ساعة.";
    const p4 = "حماية عالية وأمان لكافة عملياتك.";
    return (
        <div className="bg-white section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} p3={p3} p4={p4} />
                    <BoxImage imgName="21.webp" imgClasses="col-lg-6" />

                </div>

            </div>
        </div>
    );
}

export default SecurePayHub;