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
    document.querySelectorAll("img[src$=svg]")
        .forEach(image => image.classList.add("dark:invert"));
};

if(!!menuToggle && !!menu && !!menuBackdrop){
    menuToggle.addEventListener('click', () => toggleMenu(menu, menuBackdrop));
    menuBackdrop?.addEventListener('click', () => toggleMenu(menu, menuBackdrop));
}

themeToggle?.addEventListener('click', toggleTheme);

getTheme();
applyInvertOnSVG();