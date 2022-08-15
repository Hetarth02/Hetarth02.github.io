<script>
    import SocialButton from "./SocialButton.svelte";
</script>

<div class="sm:w-3/4 mx-auto grid md:grid-cols-3 gap-8">
    <div
        class="card md:card-side md:shadow-lg bg-neutral md:col-span-2 md:row-span-2 hover:scale-[1.05] transition-all"
    >
        <div class="card-body items-center text-center">
            <h2 class="card-title text-success">Flowbite Svelte</h2>
            <p class="py-4 px-2">
                Speed up your web development with Flowbite Svelte. Flowbite
                Svelte is an official Flowbite component library for Svelte. All
                interactivities are handled by Svelte.
            </p>
            <div class="card-actions">
                <SocialButton
                    link={"https://github.com/themesberg/flowbite-svelte/pull/182"}
                >
                    <i class="bi bi-github text-2xl" />
                </SocialButton>
            </div>
        </div>
    </div>
    <div
        class="card bg-[#06281e] shadow-xl md:row-span-2 hover:scale-[1.05] transition-all"
    >
        <div class="card-body items-center text-center">
            <h2 class="card-title text-success">intuitive()</h2>
            <p class="py-4 px-2">
                A website where you can find intuitive and easy to understand
                definitions of probably any topic.
            </p>
            <div class="card-actions">
                <SocialButton link={"https://github.com/Hetarth02/intuitive"}>
                    <i class="bi bi-github text-2xl" />
                </SocialButton>
            </div>
        </div>
    </div>
    <div
        class="card bg-stone-700 shadow-xl md:col-span-3 md:row-span-1 hover:scale-[1.05] transition-all"
    >
        <div class="card-body items-center text-center">
            <h2 class="card-title text-success">Laraquest</h2>
            <p class="py-4 px-2">
                Laraquest is a social support platform where users can create
                their forums and threads as well as reply to existing threads.
                Moreover, users can subscribe to their preferred threads to keep
                up with it by recieving notifications. This entire project is
                Open-Source.
            </p>
            <div class="card-actions">
                <SocialButton link={"https://github.com/Hetarth02/laraquest"}>
                    <i class="bi bi-github text-2xl" />
                </SocialButton>
            </div>
        </div>
    </div>
</div>
