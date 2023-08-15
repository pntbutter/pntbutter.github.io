<script>
export default {
    data() {
        return {
            elements: useElements(),
        }
    },
}
</script>

<template>
    <div class="flex  gap-2">
        <div v-for="(value, key) in elements.elements">
            <HeaderElementsButton :element="key" :value="value" @click="elements.handleChange(key)" />
        </div>
    </div>
</template>
