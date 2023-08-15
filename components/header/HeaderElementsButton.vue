<script>
export default {
    props: [
        'element',
        'value',
    ]
}
</script>

<template>
    <button type="button" class="grid  place-content-center  w-20  h-20  rounded-full  border  border-current" :class="{ 
        'text-red-500': value === -1, 
        'text-amber-500': value === 0,
        'text-green-500': value === 1,
    }">
        {{ element }}
    </button>
</template>
