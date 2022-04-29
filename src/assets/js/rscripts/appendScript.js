export const appendScript = (scriptToAppend) => {
    const script = document.createElement("script");
    script.src = scriptToAppend;
    //script.type = "text/javascript"
    script.async = false;
    document.body.appendChild(script);
}