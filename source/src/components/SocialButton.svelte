<script>
    export let link;
    export let btn_class;
</script>

<a
    class="btn {btn_class ??
        'btn-ghost'} btn-circle text-xl text-white transition-all duration-300 hover:scale-[1.1] hover:-translate-y-1 hover:btn-success"
    href={link}
>
    <slot />
</a>
