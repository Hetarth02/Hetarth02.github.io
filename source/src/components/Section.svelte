<script>
    import ProfileSwitch from "./ProfileSwitch.svelte";

    export let title;
    export let icon;
    export let bg = "";
    export let switch_option = false;
    export let profile_state = true;
</script>

<section class="px-4 py-12 {bg}">
    <p class="p-4 my-4 text-center text-4xl text-white">
        {@html icon ?? ""}
        {title}
        {#if switch_option}
            <ProfileSwitch bind:web_dev={profile_state} />
        {/if}
    </p>
    <slot />
</section>
