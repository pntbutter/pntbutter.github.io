<script>
export default {
    data() {
        return {
            elements: useElements(),

            decreaseElements() {
                const elements = this.elements.elements;

                // decrease all the elements that are strong or waning
                for (const el in elements) {
                    if (this.elements.elements[el] > -1) {
                        this.elements.elements[el]--;
                    }
                }
            },
        }
    },
}
</script>

<template>
    <div>
        <button type="button" @click="decreaseElements" class="border  px-4  py-2.5  border-current">
            Ny runda
        </button>
    </div>
</template>
