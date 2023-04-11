const OfferBox = (props) => {
    const {title , phragraph , icone} = props;
    return (
        <div className="bg-white p-3 pt-4 pb-4" style={{"borderRadius": "10px"}} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
            <div className="d-flex">
            <div className="min-icone">
                    <i className={icone} style={{ "color": "var(--dark-color)" }}></i>
                </div>

                <div className="me-3 fw-bold text-end">

                <h3 style={{"color": "var(--dark-color)"}}>{title}</h3>
                <p className="text-black-50">{phragraph}</p>

                </div>

            </div>
        </div>
    )
}

export default OfferBox;