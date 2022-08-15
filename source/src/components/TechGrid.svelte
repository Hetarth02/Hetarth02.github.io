<script>
    import { slide } from "svelte/transition";
    import Technology from "./Technology.svelte";
    let web_array = [
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            technology: "HTML5",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            technology: "CSS3",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            technology: "JS",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
            technology: "PHP",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
            technology: "Bootstrap",
        },
        {
            image_link:
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            technology: "TailwindCSS",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg",
            technology: "Laravel",
        },
        {
            image_link:
                "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
            technology: "Svelte",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
            technology: "NodeJs",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
            technology: "ExpressJs",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            technology: "MySQL",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
            technology: "PostgreSQL",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            technology: "Mongodb",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/df12cb598044a3f38efc1f45e3580558c324cf8789b79487125044eeebcc4dee/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6865726f6b752f6865726f6b752d69636f6e2e737667",
            technology: "Heroku",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
            technology: "Postman",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
            technology: "Docker",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
            technology: "Git/Github",
        },
    ];
    let data_array = [
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            technology: "Python",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/53ae1cb6abbfacfb463f0a0d2fbdb58acad261200cb61f3d32abd7ac0edacded/68747470733a2f2f736561626f726e2e7079646174612e6f72672f5f696d616765732f6c6f676f2d6d61726b2d6c6967687462672e737667",
            technology: "Seaborn",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
            technology: "Pandas",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/69ce21304adac467a8251181f98932e1785abd9d718cdd8edc78d1abbf2dcb49/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30352f5363696b69745f6c6561726e5f6c6f676f5f736d616c6c2e737667",
            technology: "Scikit-Learn",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
            technology: "Selenium",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
            technology: "PostgreSQL",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            technology: "Mongodb",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/df12cb598044a3f38efc1f45e3580558c324cf8789b79487125044eeebcc4dee/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6865726f6b752f6865726f6b752d69636f6e2e737667",
            technology: "Heroku",
        },
        {
            image_link:
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
            technology: "Docker",
        },
        {
            image_link:
                "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
            technology: "Git/Github",
        },
    ];
    export let tech_type = true;
</script>

{#if tech_type}
    <div
        class="w-10/12 mx-auto grid grid-cols-3 gap-8 align self-center"
        transition:slide
    >
        {#each web_array as data}
            <Technology {...data} />
        {/each}
    </div>
{:else}
    <div
        class="w-10/12 mx-auto grid grid-cols-3 gap-8 align self-center"
        transition:slide
    >
        {#each data_array as data}
            <Technology {...data} />
        {/each}
    </div>
{/if}
