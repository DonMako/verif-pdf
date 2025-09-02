import React, { ReactElement, useState } from "react";

export default function ChangeTheme(): ReactElement {

    const [dark, setDark] = useState(true);

    function change(): void {
        if (dark) {
            setDark(false);
            document.getElementById("themeButton")!.setAttribute("value", "Light theme");
            document.getElementById("themeSymbol")!.setAttribute("src", "/images/moon.svg");
            lighten();
        } else {
            setDark(true);
            document.getElementById("themeButton")!.setAttribute("value", "Dark theme");
            document.getElementById("themeSymbol")!.setAttribute("src", "/images/sun.svg");
            darken();
        }
    }

    function lighten(): void {
        document.getElementById("myPdf")!.style.border = "2px solid black";
        let body = document.getElementsByTagName("body")[0];
        body.style.color = "black";
        body.style.backgroundColor = "white";
    }

    function darken(): void {
        document.getElementById("myPdf")!.style.border = "2px solid white";
        let body = document.getElementsByTagName("body")[0];
        body.style.color = "white";
        body.style.backgroundColor = "black";
    }

    return <button id="themeButton" onClick={change}><img id="themeSymbol" src="/images/sun.svg" /></button>
}