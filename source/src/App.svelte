<script>
    import Form from "./components/Form.svelte";
    import Project from "./components/Project.svelte";
    import Section from "./components/Section.svelte";
    import Research from "./components/Research.svelte";
    import TechGrid from "./components/TechGrid.svelte";
    import OpenSource from "./components/OpenSource.svelte";
    import Introduction from "./components/Introduction.svelte";
    let profile;
</script>

<div data-theme={profile ? "dracula" : "night"}>
    <Introduction bind:profile_switch={profile} />

    <Section
        icon={'<i class="bi bi-terminal-fill" />'}
        title={"My Projects"}
        switch_option={true}
        bg={profile ? "bg-[#0f1729]" : "bg-[#272935]"}
        bind:profile_state={profile}
    >
        <Project bind:project_type={profile} />
    </Section>

    <Section
        icon={'<i class="bi bi-journal-bookmark-fill" />'}
        title={"Publications"}
    >
        <Research />
    </Section>

    <Section
        icon={'<i class="bi bi-box-fill" />'}
        title={"Open Source Contributions"}
        bg={profile ? "bg-[#0f1729]" : "bg-[#272935]"}
    >
        <OpenSource />
    </Section>

    <Section
        icon={'<i class="bi bi-gear-wide-connected" />'}
        title={"My Tools"}
        switch_option={true}
        bind:profile_state={profile}
    >
        <TechGrid bind:tech_type={profile} />
    </Section>

    <Section
        icon={'<i class="bi bi-cup-hot" />'}
        title={"Let's have a talk!"}
        bg={profile ? "bg-[#0f1729]" : "bg-[#272935]"}
    >
        <Form />
    </Section>
</div>
