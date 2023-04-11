const BoxText = (props) => {
    const { textClasses,h1 , h4 , p1 , p2 , p3 , p4 , p5} = props;
    return(
        <div className={`${textClasses} d-flex flex-column justify-content-center`}>

            <h1 className="mb-4" style={{"color": "var(--dark-color)"}}>{h1}</h1>
            <h4 className="mb-4">{h4}</h4>

            <div>

                <p><i className="fa-solid fa-angles-left" style={{"color": "var(--dark-color)"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"> {p1}</i></p>
                <p><i className="fa-solid fa-angles-left" style={{"color": "var(--dark-color)"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1100"> {p2}</i></p>
                {p3 && <p><i className="fa-solid fa-angles-left" style={{"color": "var(--dark-color)"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200"> {p3}</i></p>}
                {p4 && <p><i className="fa-solid fa-angles-left" style={{"color": "var(--dark-color)"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1300"> {p4}</i></p>}
                {p5 && <p><i className="fa-solid fa-angles-left" style={{"color": "var(--dark-color)"}} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1400"> {p5}</i></p>}

            </div>

        </div>
    )
}

export default BoxText;