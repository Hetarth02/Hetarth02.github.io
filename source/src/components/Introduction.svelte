<script>
    import { slide } from "svelte/transition";
    import ProfileSwitch from "./ProfileSwitch.svelte";
    import SocialButton from "./SocialButton.svelte";
    export let profile_switch = true;
</script>

<div class="hero min-h-screen">
    <div class="hero-content text-center text-white">
        <div>
            <ProfileSwitch bind:web_dev={profile_switch} />
            <h1 class="text-4xl mt-4 font-bold">Hi, I am Hetarth Shah</h1>
            {#if profile_switch}
                <p class="text-lg py-6 max-w-lg" transition:slide>
                    A Web Developer currently going in-depth in Backend
                    development. I have worked with and designed various
                    DataBase structures and backend architectures. I am
                    currently polishing my skills in Frontend development.
                </p>
            {:else}
                <p class="text-lg py-6 max-w-lg" transition:slide>
                    A Data Scientist and an aspiring researcher with good
                    foundations in Mathematics used for Data Science. Moreover,
                    keenly interested and currently learning about Quantum
                    Computing!
                </p>
            {/if}
            <div class="block">
                <SocialButton link={"mailto:hetarth02@gmail.com"}>
                    <i class="bi bi-envelope" />
                </SocialButton>
                <SocialButton link={"https://github.com/Hetarth02"}>
                    <i class="bi bi-github" />
                </SocialButton>
                <SocialButton
                    link={"https://www.linkedin.com/in/hetarth-shah-1ab392220"}
                >
                    <i class="bi bi-linkedin" />
                </SocialButton>
            </div>
        </div>
    </div>
</div>
