<script lang="ts">
    import bookImg from '$lib/assets/images/book.webp';
    import DocsPreview from '$lib/components/DocsPreview/DocsPreview.svelte';

    // Components
    import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

    // Local
    let showcase = 'Publications';
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-10 items-start">
    <!-- Info -->
    <div class="space-y-4" id="Open_source_and_Publications">
        <h2 class="h2">Open source and Publications!</h2>
        <p>
            When I'm not solving bugs, I like to research about different things and sharing them in
            my blogs and books. And, of course, sprinkling some open source goodness along the
            way!❤️
        </p>
        <!-- Options -->
        <ListBox
            active="variant-filled"
            hover="hover:variant-soft"
            rounded="rounded-container-token"
            padding="!p-4"
            labelledby="Open_source_and_Publications"
        >
            <ListBoxItem bind:group={showcase} name="showcase" value="Publications">
                <div class="space-y-2">
                    <h3 class="h3">Publications</h3>
                    <p class="!text-sm">Some of my International Publications.</p>
                </div>
            </ListBoxItem>
            <ListBoxItem bind:group={showcase} name="showcase" value="Open Source Contributions">
                <div class="space-y-2">
                    <h3 class="h3">Open Source Contributions</h3>
                    <p class="!text-sm">My open source contributions.</p>
                </div>
            </ListBoxItem>
        </ListBox>
    </div>
    <!-- Preview -->
    <div class="col-span-2">
        <DocsPreview label={showcase} regionPreview="min-h-[320px]">
            <svelte:fragment slot="preview">
                {#if showcase === 'Publications'}
                    <div class="card shadow-xl overflow-hidden text-token variant-soft-error">
                        <div class="flex flex-col sm:flex-row w-full">
                            <header class="sm:w-[30%]">
                                <img
                                    src={bookImg}
                                    class="bg-black/50 object-contain sm:object-cover w-full h-[350px]"
                                    alt="Post"
                                    loading="lazy"
                                />
                            </header>
                            <div class="p-4 space-y-4 sm:w-[70%]">
                                <p class="h6 font-bold">ISBN: 9798201278588</p>
                                <h3 class="h3">A Bird's Eye view of Data Visualisation</h3>
                                <article>
                                    <p class="opacity-75">
                                        An Academic textbook on various methods of effective data
                                        visualisation techniques.
                                    </p>
                                </article>
                                <div class="py-4 flex space-x-4">
                                    <div class="flex justify-center space-x-2">
                                        <span class="group chip variant-soft hover:variant-filled">
                                            <a
                                                href="https://books2read.com/u/3RJoWG"
                                                class="py-1"
                                                aria-label="Books2Read Link"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    viewBox="0 0 640 512"
                                                >
                                                    <path
                                                        class="fill-black dark:fill-white group-hover:fill-white group-hover:dark:fill-black"
                                                        d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                                                    />
                                                </svg>
                                            </a>
                                        </span>
                                        <span class="group chip variant-soft hover:variant-filled">
                                            <a
                                                href="https://www.google.co.in/books/edition/A_Bird_s_Eye_view_of_Data_Visualisation/g_ZVEAAAQBAJ"
                                                class="py-1"
                                                aria-label="Google Books Link"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    height="1.2em"
                                                    viewBox="0 0 488 512"
                                                >
                                                    <path
                                                        class="fill-black dark:fill-white group-hover:fill-white group-hover:dark:fill-black"
                                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                                                    />
                                                </svg>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {:else if showcase === 'Open Source Contributions'}
                    <section class="w-full p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="flex flex-col items-center space-y-4 overflow-hidden">
                            <a
                                href="https://github.com/themesberg/flowbite-svelte/pull/182"
                                class="flex flex-col justify-center items-center aspect-square w-full rounded-container-token card-hover bg-blue-400 sm:gap-4"
                                aria-label="Flowbite merged PR Link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 sm:h-12"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32.4 97.2c28-12.4 47.6-40.5 47.6-73.2c0-44.2-35.8-80-80-80S0 35.8 0 80c0 32.8 19.7 61 48 73.3V358.7C19.7 371 0 399.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V272c26.7 20.1 60 32 96 32h86.7c12.3 28.3 40.5 48 73.3 48c44.2 0 80-35.8 80-80s-35.8-80-80-80c-32.8 0-61 19.7-73.3 48H208c-49.9 0-91-38.1-95.6-86.8zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM344 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                                    />
                                </svg>
                                <p class="text-xs text-center sm:text-base">Merged PR</p>
                            </a>
                            <span class="p-2 badge variant-soft">Flowbite-Svelte</span>
                        </div>
                        <div class="flex flex-col items-center space-y-4 overflow-hidden">
                            <a
                                href="https://github.com/JuliaDocs/Documenter.jl/issues/1536"
                                class="flex flex-col justify-center items-center aspect-square w-full rounded-container-token card-hover bg-green-400 sm:gap-4"
                                aria-label="Dcoumenter.jl Issue Link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="h-8 sm:h-12"
                                >
                                    <path
                                        d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Zm9.5 2a2 2 0 1 1-.001-3.999A2 2 0 0 1 12 14Z"
                                    />
                                </svg>
                                <p class="text-xs text-center sm:text-base">Feature Requests</p>
                            </a>
                            <span class="p-2 badge variant-soft">Documenter.jl</span>
                        </div>
                        <div class="flex flex-col items-center space-y-4 overflow-hidden">
                            <a
                                href="https://www.npmjs.com/package/@hetarth02/js-array-helpers"
                                class="flex flex-col justify-center items-center aspect-square w-full rounded-container-token card-hover bg-red-400 sm:gap-4"
                                aria-label="NPM package Link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 sm:h-12"
                                    viewBox="0 0 576 512"
                                >
                                    <path
                                        d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"
                                    />
                                </svg>
                                <p class="text-xs text-center sm:text-base">Open Source Packages</p>
                            </a>
                            <span class="p-2 badge variant-soft">js-array-helpers</span>
                        </div>
                        <div class="flex flex-col items-center space-y-4 overflow-hidden">
                            <a
                                href="https://github.com/Hetarth02"
                                class="flex flex-col justify-center items-center aspect-square w-full rounded-container-token card-hover features-gradient sm:gap-4"
                                aria-label="Github Link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-8 sm:h-12 fill-slate-800 dark:fill-slate-300"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                                    />
                                </svg>
                                <p
                                    class="text-xs text-center sm:text-base fill-slate-800 dark:text-slate-300"
                                >
                                    And Many More...
                                </p>
                            </a>
                        </div>
                    </section>
                {/if}
            </svelte:fragment>
        </DocsPreview>
    </div>
</div>

<style lang="postcss">
    .features-gradient {
        background-image: radial-gradient(
                at 0% 0%,
                rgba(var(--color-secondary-500) / 0.33) 0px,
                transparent 50%
            ),
            radial-gradient(at 100% 0%, rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%),
            radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
            radial-gradient(
                at 100% 100%,
                rgba(var(--color-primary-500) / 0.19) 0px,
                transparent 50%
            );
    }
</style>
