<script>
    import { slide } from "svelte/transition";
    import ProjectCard from "./ProjectCard.svelte";
    let web_project = [
        {
            title: "Autumn Whispers",
            href: "/autumn_whispers.webp",
            live_link:
                "https://play.google.com/store/apps/details?id=com.autumn",
            desc: "Autumn Whispers allows you to collect and share your memories from your device with loved ones. Images, videos, and voice messages recorded directly into the app can be easily shared.",
        },
        {
            title: "Snippet Sauce",
            direction: "md:flex-row-reverse",
            href: "/snippet_sauce.webp",
            live_link: "https://snippetsauce.tech/",
            github_link: "https://github.com/Hetarth02/snippet-sauce-backend",
            desc: "Snippet sauce is a one-stop snippet collection platform. We provide a huge collection of fully tested and working code snippets, so you don't have to worry about try and error. Our mission is to provide the best working code snippets with ease. From HTML to Bhai Lang we got you covered.",
        },
    ];
    let data_project = [
        {
            href: "/knn.webp",
            desc: "KNN Machine Learning Algorithm from scratch using python. The dataset used for testing is Iris dataset.",
            title: "KNN from Scratch",
            github_link: "https://github.com/Hetarth02/KNN",
        },
        {
            href: "/fractal.webp",
            desc: "This code generates some of the most well known fractal patterns, Fractal Tree and Koch's Snowflake using turtle module in python.",
            title: "Fractal Images",
            github_link: "https://github.com/Hetarth02/Fractal-Images",
            direction: "md:flex-row-reverse",
        },
        {
            href: "/ap.webp",
            desc: "Given an AP(Arithmatic Progression) series, this snippet of code will generate a line equation for the AP series which encompasses all the points in the given AP series.",
            title: "AP Pattern Generator",
            github_link: "https://github.com/Hetarth02/AP-Pattern",
        },
    ];
    export let project_type = true;
</script>

{#if project_type}
    <div transition:slide>
        {#each web_project as data}
            <ProjectCard {...data} />
        {/each}
    </div>
{:else}
    <div transition:slide>
        {#each data_project as data}
            <ProjectCard {...data} />
        {/each}
    </div>
{/if}
