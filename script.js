import { router } from "https://hydrojs.pages.dev/src/dom.js"

function index(){
    return [
        title("propianist1124 :3"),
        link({
            rel:"stylesheet",
            href:"/assets/style.css",
            type:"text/css"
        }),
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"/assets/img/favicon.ico"
        }),
        h1([
            "i'm propianist1124",
            img({
                src:"assets/img/favicon.ico",
                style:"width:35px; height:35px; margin-left:auto; border:1px solid var(--background-lighter); border-radius:50%; padding:3px 3px;"
            })
        ], { style:"display:flex; align-items:center; justify-content:center;" }),
        div([
            div([
                h2("about me"),
                p([
                    "my fav js frameworks are ",
                    a("cheeksjs", { href:"https://cheeksjs.pages.dev/", target:"_blank" }),
                    ", ",
                    a("nextjs", { href:"https://nextjs.org", target:"_blank" }),
                    ", and ",
                    a("sveltekit", { href:"https://kit.svelte.dev", target:"_blank" }),
                    ". i also love developing sites with ",
                    a("vsc", { href:"https://code.visualstudio.com/", target:"_blank" }),
                    ", ",
                    a("vercel", { href:"https://vercel.com/", target:"_blank" }),
                    ", and ",
                    a("github", { href:"https://github.com", target:"_blank" }),
                    "."
                ])
            ], { class:"card" }),
            div(h2("socials"), { class:"card", id:"socials" }),
            div(h2("projects"), { class:"card", id:"projects" })
        ], { class:"container" }),
        script({ src:"/assets/src/script.js" }),
    ]
}

router({
    "/": index,
})