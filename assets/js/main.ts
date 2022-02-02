const menuToggle = document.querySelector("button#menu-toggle");
const menu = document.querySelector("#menu");
const menuBackdrop = document.querySelector("#menu-backdrop");
const themeToggle = document.querySelector("#theme-toggle");

enum Theme {
    Light = "Light",
    Dark = "Dark"
}

let theme = Theme.Light;

const toggleMenu = (menu: Element, menuBackdrop: Element) => {
    menu.classList.toggle("hidden");
    menuBackdrop.classList.toggle("hidden");
};

const getTheme = () => {
    theme = document.documentElement.classList.contains("dark") ? Theme.Dark : Theme.Light;
    setTheme();
};

const setTheme = () => {
    if(theme === Theme.Dark){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }
};

const toggleTheme = () => {
    theme = (theme === Theme.Dark) ? Theme.Light : Theme.Dark;
    localStorage.setItem("theme", theme);
    setTheme();
};

const applyInvertOnSVG = () => {
    document.querySelectorAll("img[src$=svg]:not(.icon)")
        .forEach(image => {
            const parent = document.createElement("div");
            // image used following classes shadow-md dark:shadow-slate-900 mx-auto my-3
            parent.classList.add("svg-wrapper", "shadow-md", "dark:shadow-slate-900", "mx-auto", "my-3");
            image.parentNode?.insertBefore(parent, image);
            image.classList.add("dark:invert", "shadow-none");
            parent.appendChild(image);
        });
};

const insertAfter = (newNode: Node, referenceNode: Node) => {
    referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling);
};

const moveToC = () => {
    // Find the generated ToC by asciidoctor
    const atoc = document.querySelector("#toc");
    if(!atoc){
        console.error("Cannot find the autogenerated ToC");
        return;
    }
    // Find the place we want to put the ToC
    const htoc = document.querySelector("#toc-header");
    if(!htoc){
        console.error("Cannot find the ToC");
        return;
    }
    // Remove the placeholder
    htoc.nextElementSibling?.remove();
    insertAfter(atoc, htoc);
}

if(!!menuToggle && !!menu && !!menuBackdrop){
    menuToggle.addEventListener('click', () => toggleMenu(menu, menuBackdrop));
    menuBackdrop?.addEventListener('click', () => toggleMenu(menu, menuBackdrop));
}

themeToggle?.addEventListener('click', toggleTheme);

getTheme();
applyInvertOnSVG();
moveToC();