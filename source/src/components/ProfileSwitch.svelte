<script>
    export let web_dev = true;
</script>

<div class="flex justify-center items-center gap-2">
    <div class="tooltip" data-tip="Data Scientist!">
        <i class="bi bi-cpu text-2xl" />
    </div>
    <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        class="toggle"
        bind:checked={web_dev}
    />
    <div class="tooltip" data-tip="Web Developer!">
        <i class="bi bi-browser-chrome text-2xl" />
    </div>
</div>
