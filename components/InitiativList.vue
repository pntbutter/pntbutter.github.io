<script>
export default {
    data() {
        return {
            initiativ: useInitiativ(),

            
        }
    },

    computed: {
        sortedList() {
            return this.initiativ.units.sort((a, b) => a.initiativ - b.initiativ);
        }
    },
}
</script>

<template>
    <div class="space-y-2">
        <div v-for="(unit, index) in sortedList" :index="index" class="flex  gap-1  order-last">
            <input type="text" v-model="unit.name" class="w-3/4  px-2  py-1  text-black">
            <input type="number" v-model="unit.initiativ" min="0" max="100" class="w-1/4  px-2  py-1  text-black">
            {{ initz }}
        </div>

        <button type="button" @click="initiativ.units.push({ name: '', initiativ: 0 })">add</button>
    </div>
</template>
