function loadComponent(id, htmlPath, jsPath) {
    fetch(htmlPath)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html
            if (jsPath) {
                const script = document.createElement("script");
                script.src = jsPath;
                script.type = "module";
                document.body.appendChild(script);
            }
        })
        .catch(err => console.log(err))
}

window.addEventListener("DOMContentLoaded", () => {
    loadComponent('header', 'src/components/header.html', 'src/js/header.js');
})