interface INavItem extends Record<string, string> {
    name: string;
    to: string;
}

export const navItems: Record<string, INavItem[]> = {
    "ADMIN": [
        {
            name: "Provas",
            to: "/painel-de-provas",
        },
        {
            name: "Preparatório",
            to: "/preparatorio",
        },
        {
            name: "Aplicações",
            to: "/aplicador",
        },
        {
            name: "Elaboração",
            to: "/painel-de-elaborador",
        },
    ],
    "APPLICATOR": [
        {
            name: "Preparatório",
            to: "/preparatorio",
        },
        {
            name: "Aplicações",
            to: "/aplicador",
        }
    ],
    "CANDIDATE": [
        {
            name: "Provas",
            to: "/painel-de-provas",
        },
    ],
    "ELABORATOR": [
        {
            name: "Elaboração",
            to: "/painel-de-elaborador",
        },
    ],
    "REVIEWER": [

    ],
    "SUPERVISOR": [

    ],
    "default": [],
}