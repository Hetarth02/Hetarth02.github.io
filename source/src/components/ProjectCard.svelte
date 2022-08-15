<script>
    export let href;
    export let desc;
    export let title;
    export let live_link;
    export let github_link;
    export let direction = "md:flex-row";
</script>

<div
    class="w-full lg:w-10/12 mx-auto lg:px-12 flex flex-col {direction} items-center"
>
    <figure>
        <img
            src={href}
            class="w-10/12 m-4 shadow-[7px_6px_20px_0px_rgb(0,0,0,0.9)] bg-cover"
            alt="Project Logo"
        />
    </figure>
    <div
        class="p-4 m-4 w-11/12 flex flex-col items-center lg:items-start gap-4"
    >
        <p class="mb-4 text-2xl font-bold text-center text-success">{title}</p>
        <p class="pb-4">
            {desc}
        </p>
        <div>
            {#if github_link}
                <a href={github_link} class="btn btn-outline btn-success mr-4">
                    <i class="bi bi-github text-lg mr-2" /> Github
                </a>
            {/if}
            {#if live_link}
                <a href={live_link} class="btn btn-outline btn-success">
                    <i class="bi bi-browser-chrome text-lg mr-2" /> Website
                </a>
            {/if}
        </div>
    </div>
</div>
