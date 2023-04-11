const BoxImage = (props) => {
    const {imgClasses , imgName} = props;
    return(
        <div className={imgClasses}>

            <img src={require(`./Images/${imgName}`)} style={{"maxWidth": "100%" , "width": "100%"}} alt="tesssssting"></img>

        </div>
    )
}

export default BoxImage;