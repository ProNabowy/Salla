import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const TwilightCustomizer = () => {
    const h1 = "متجرك، على ذوقك";
    const h4 = "نجاحك التجاري يحتاج لمظهر أنيق، اختر مظهرًا يناسب علامتك.";
    const p1 = "مكتبة متنوعة من الثيمات الجاهزة القابلة للتخصيص حسب رغبتك.";
    const p2 = "تخصيص تفاصيل التصميم عن طريق JS و CSS.";
    const p3 = "كما يمكنك صنع ثيمك الخاص مع Salla Twilight.";
    return (
        <div className="bg-white section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} p3={p3} />
                    <BoxImage imgName="design.webp" imgClasses="col-lg-6" />

                </div>

            </div>
        </div>
    )
}

export default TwilightCustomizer;