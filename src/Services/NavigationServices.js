import  Services  from "./DataServices";

const menu = [
    {
        id: 1,
        name: 'Home',
        path: "/",
    },
    {
        id: 2,
        name: 'About Us',
        path: "/Company",
    },
    {
        id: 3,
        name: 'Portfolio',
        path: "/Portfolio"
    },
    {
        id: 4,
        name : 'Services',
        submenu : [...Services],
        path : "/Services"
    },
    {
        id: 5,
        name : 'Contact',
        path : "/Contact"
    },
   
   
]
async function GetNavMenu() {
   
    return menu;
}

const NavigationService = {
    GetNavMenu
}

export default NavigationService;