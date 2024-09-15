<script lang="ts">
    import knnImg from '$lib/assets/images/knn.webp';
    import snipImg from '$lib/assets/images/snippet_sauce.webp';
    import githubImg from '$lib/assets/images/github_background.webp';
    import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

    // Components
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

    // Local
    let showcase = 'svelsa';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
    <!-- Preview -->
    <div class="col-span-2">
        <DocsPreview label={showcase.replace('-', ' ')} regionPreview="min-h-[400px]">
            <svelte:fragment slot="preview">
                {#if showcase === 'svelsa'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={githubImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Svelsa"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">E-commerce</p>
                            <h3 class="h3">Svelsa Shopfront</h3>
                            <article>
                                <p class="opacity-75">
                                    Developed using SvelteKit, MedusaJS and DaisyUI for responsive
                                    UI development. Has over 20 prebuilt themes for easy
                                    customization, and a plugin API for custom theme integration.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <a
                                    href="https://github.com/Hetarth02/medusa-svelsa"
                                    class="group chip variant-soft hover:variant-filled"
                                    aria-label="Medusa Svelse Link"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5em"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            class="fill-black dark:fill-white group-hover:fill-white group-hover:dark:fill-black"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        />
                                    </svg>
                                    <span>Github</span>
                                </a>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'Snippet Sauce'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={snipImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Snippet Sauce"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Website</p>
                            <h3 class="h3">Snippet Sauce</h3>
                            <article>
                                <p class="opacity-75">
                                    Snippet sauce is a one-stop snippet collection platform. We
                                    provide a huge collection of fully tested and working code
                                    snippets, so you don't have to worry about trial and error.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <a
                                    href="https://github.com/Hetarth02/snippet-sauce-backend"
                                    class="group chip variant-soft hover:variant-filled"
                                    aria-label="Snippet Sauce Backend Link"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5em"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            class="fill-black dark:fill-white group-hover:fill-white group-hover:dark:fill-black"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        />
                                    </svg>
                                    <span>Github</span>
                                </a>
                            </div>
                        </footer>
                    </div>
                {:else if showcase === 'KNN'}
                    <div class="card shadow-xl overflow-hidden max-w-[400px] text-token">
                        <header>
                            <img
                                src={knnImg}
                                class="bg-black/50 w-full h-1/2 aspect-[21/9] object-cover"
                                alt="Post"
                                loading="lazy"
                            />
                        </header>
                        <div class="p-4 space-y-4">
                            <p class="h6 font-bold">Algorithm</p>
                            <h3 class="h3">KNN</h3>
                            <article>
                                <p class="opacity-75">
                                    KNN Machine Learning Algorithm from scratch using python. The
                                    dataset used for testing is Iris dataset.
                                </p>
                            </article>
                        </div>
                        <hr class="opacity-50" />
                        <footer class="p-4 flex justify-center items-center space-x-4">
                            <div class="flex justify-center space-x-2">
                                <a
                                    href="https://github.com/Hetarth02/KNN"
                                    class="group chip variant-soft hover:variant-filled"
                                    aria-label="KNN Algorithm Link"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.5em"
                                        viewBox="0 0 496 512"
                                    >
                                        <path
                                            class="fill-black dark:fill-white group-hover:fill-white group-hover:dark:fill-black"
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                        />
                                    </svg>
                                    <span>Github</span>
                                </a>
                            </div>
                        </footer>
                    </div>
                {/if}
            </svelte:fragment>
        </DocsPreview>
    </div>
    <!-- Info -->
    <div class="space-y-4" id="My_Projects">
        <h2 class="h2">My Projects!</h2>
        <p>
            This is where I've gathered the digital fruits of my late-night coding sessions. If you
            find a bug🪲, consider it a challenge or perhaps an Easter egg in this virtual scavenger
            hunt.
        </p>
        <!-- Options -->
        <ListBox
            active="variant-filled"
            hover="hover:variant-soft"
            rounded="rounded-container-token"
            padding="!p-4"
            labelledby="My_Projects"
        >
            <ListBoxItem bind:group={showcase} name="showcase" value="svelsa">
                <div class="space-y-2">
                    <h3 class="h3">Svelsa</h3>
                    <p class="!text-sm">
                        An open source e-commerce platform made with collaboration from other
                        developers in the community.
                    </p>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Snippet Sauce">
                <div class="space-y-2">
                    <h3 class="h3">Snippet Sauce</h3>
                    <p class="!text-sm">
                        An open source platform made with collaboration from other developers in the
                        community.
                    </p>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="KNN">
                <div class="space-y-2">
                    <h3 class="h3">KNN Algorithm from scratch</h3>
                    <p class="!text-sm">An attempt of mine to implement KNN from scratch.</p>
                </div>
            </ListBoxItem>
            <ListBoxItem
                bind:group={showcase}
                name="showcase"
                value="link"
                on:click={() => {
                    window.location.href = 'https://github.com/Hetarth02';
                }}
            >
                <div class="space-y-2">
                    <h3 class="h3">🔭And many more...</h3>
                    <p class="!text-sm">There is much more to explore!</p>
                </div>
            </ListBoxItem>
        </ListBox>
    </div>
</div>
