<script>
    export let technology;
    export let image_link;
</script>

<div class="tooltip w-16 mx-auto items-center" data-tip={technology}>
    <figure>
        <img src={image_link} alt="{technology} Logo" />
    </figure>
</div>
