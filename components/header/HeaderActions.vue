<script>
export default {
    data() {
        return {
            elements: useElements(),
            initiativ: useInitiativ(),

            decreaseElements() {
                // decrease all the elements that are strong or waning
                for (const el in this.elements.elements) {
                    if (this.elements.elements[el] > -1) {
                        this.elements.elements[el]--;
                    }
                }
            },

            resetInitiativ() {
                this.initiativ.units.forEach((unit) => {
                    unit.initiativ = 100;
                });
            },

            newRound() {
                this.decreaseElements();
                this.resetInitiativ();
            }
        }
    },
}
</script>

<template>
    <div>
        <button type="button" @click="newRound" class="border  px-4  py-2.5  border-current">
            Ny runda
        </button>
    </div>
</template>
