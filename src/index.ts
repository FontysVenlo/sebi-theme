enum Theme {
    Light = "Light",
    Dark = "Dark"
}

const menuToggle = document.querySelector("button#menu-toggle");
const menu = document.querySelector("#menu");
const menuBackdrop = document.querySelector("#menu-backdrop");
const themeToggle = document.querySelector("#theme-toggle");
let theme = Theme.Light;

const toggleMenu = (menu: Element, menuBackdrop: Element) => {
    menu.classList.toggle("hidden");
    menuBackdrop.classList.toggle("hidden");
};

const getTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if ((!!currentTheme && Theme[currentTheme as keyof typeof Theme] === Theme.Dark) || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        theme = Theme.Dark;        
    } else {
        theme = Theme.Light;
    }
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

const checkTOC = () => {
    const mainContent = document.querySelector("#main-content");
    const toc = mainContent?.querySelector("#toc");
    if(!toc){
        return;
    }
    toc.firstElementChild?.remove();
    const tocHeader = document.querySelector("#toc-header");
    tocHeader?.after(toc);
}

if(!!menuToggle && !!menu && !!menuBackdrop){
    menuToggle.addEventListener('click', () => toggleMenu(menu, menuBackdrop));
}

themeToggle?.addEventListener('click', toggleTheme);

getTheme();
checkTOC();