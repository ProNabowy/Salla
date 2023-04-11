import  { useEffect} from 'react'

const HeaderLogic = () => {
    const makeHeaderFixed = () => {
        const header = document.querySelector("header");
        const headerStyle = "position: fixed; top: 0; padding:5px !important; width: 100%; visibility: visible; opacity: 1; transform: scale(1);"
        if (window.scrollY > 100) header.style.cssText += headerStyle;
        window.addEventListener("scroll" , () => header.style.cssText += headerStyle);
      };   
    const toggleMnue = () => {
        const mnue = document.getElementById("mnue");
        const closeMnue = document.getElementById("close");
        const list = document.getElementById("header-list");

        const setRemoveClasses = (elementOne , elementTwo, remove , add ) => {
            // "remove || add Parameter" is a class that is passed as an argument to a function in order to remove || add this class from a list.
            list.classList.remove(remove);
            list.classList.add(add);

            // toggle the "active" class between two HTML elements by removing it from one element and adding it to another
            elementOne.classList.remove("active");
            elementTwo.classList.add("active");
        }
        mnue.onclick = () => {
            document.body.classList.add("overflow-hidden");
            setRemoveClasses(mnue , closeMnue , "d-none" , "d-flex");
        };
        
        closeMnue.onclick = () => {
            document.body.classList.remove("overflow-hidden");
            setRemoveClasses(closeMnue ,  mnue, "d-flex" , "d-none");
        }

    };
    useEffect(() => {
        makeHeaderFixed();
        toggleMnue();
    }, []);
}

export default HeaderLogic
