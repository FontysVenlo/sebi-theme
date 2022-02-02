const currentTheme = localStorage.getItem("theme");
if ((!!currentTheme && currentTheme === "Dark") || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}