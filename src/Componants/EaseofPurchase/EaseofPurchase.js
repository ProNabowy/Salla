import BoxImage from "../BoxImage/BoxImage";
import BoxText from "../BoxText/BoxText";

const EaseofPurchase = () => {
    const h1 = "أسعد عملاءك بتجربة شراء سهلة";
    const h4 = "قدم لعملائك أسهل تجربة شراء مع متجرك في سلة";
    const p1 = "الشراء مباشرة دون تعقيد أو إنشاء حساب.";
    const p2 = "الدفع إلكترونياً بخطوات بسيطة.";
    return (
        <div style={{"backgroundColor": "#f8f8f8"}} className="section-padding" data-aos="fade-in">
            <div className="container">

                <div className="row  justify-content-between">

                    <BoxImage imgName="checkout.webp" imgClasses="col-lg-6" />
                    <BoxText textClasses="col-lg-5 box-text" h1={h1} h4={h4} p1={p1} p2={p2} />

                </div>

            </div>
        </div>
    );
}

export default EaseofPurchase;