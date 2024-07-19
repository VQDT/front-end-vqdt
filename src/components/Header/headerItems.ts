interface INavItem extends Record<string, string> {
    name: string;
    to: string;
}

export const navItems: Record<string, INavItem[]> = {
    "admin": [
        {
            name: "Provas",
            to: "/painel-de-provas/",
        },
    ],
    "applicator": [
        {
            name: "Preparatório",
            to: "/preparatorio",
        }
    ],
    "candidate": [
        {
            name: "Provas",
            to: "/painel-de-provas/",
        },
        {
            name: "Dias de Curso",
            to: "/dias-de-curso",
        },
    ],
    "elaborator": [

    ],
    "reviewer": [

    ],
    "supervisor": [

    ],
    "default": [],
}