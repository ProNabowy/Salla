import OfferBox from "./Box/OfferBox";

const Offers = _ => {
    const boxsData = [
        {
            "h1": "متاجر التجزئة",
            "p": "مزايا عديدة تلائم تجارتك",
            "i": "fa-solid fa-house"
        },
        {
            "h1": "قطاع الجملة",
            "p": "نقلة نوعية في البيع للشركات والمؤسسات",
            "i": "fa-solid fa-users"
        },
        {
            "h1": "لمطاعم والمقاهي",
            "p": "جميع ما تحتاجه لإدارة أعمالك رقميًا",
            "i": "fa-solid fa-mug-saucer"
        },
        {
            "h1": "صناعة المحتوى",
            "p": "لمكان الأنسب لتحويل شغفك بصناعة المحتوى إلى أرباح",
            "i": "fa-solid fa-table"
        },
        {
            "h1": "تقديم الخدمات",
            "p": "حلول مميزة لتقديم خدماتك وإدارة أعمالك",
            "i": "fa-solid fa-book-open"
        },
        {
            "h1": "المنتجات الرقمية",
            "p": "لمكان الأنسب لبيع كافة المنتجات الرقمية",
            "i": "fa-solid fa-laptop"
        },
        {
            "h1": "الجمعيات الخيرية",
            "p": "حلول سهلة لكافة الاحتياجات الرقمية لجمعيتكم",
            "i": "fa-solid fa-hand-holding-dollar"
        }
    ];
    const boxsUi = boxsData.map(box => {
        return <OfferBox key={Math.random()} title={box.h1} phragraph={box.p} icone={box.i} />
    })
    return (
        <div style={{"backgroundColor": "#f8f8f8" }} className="section-padding" data-aos="fade-in">

            <div className="container">

                <div className="text-center fw-bolder mb-5">
                    <h1 className="mb-4" style={{ "color": "var(--dark-color)" }}>سلة تفهم كافة احتياجاتك</h1>
                    <h6>مهما كان مجال تجارتك يمكنك الاعتماد على سلة ودعمها لمختلف القطاعات</h6>
                </div>

                <div className="offersBoxs">
                    {boxsUi}
                </div>
            </div>
        </div>
    )
}

export default Offers;