<script>
export default {
    data() {
        return {
            initiativ: useInitiativ(),
        }
    },
}
</script>

<template>
    <div class="p-6  border-2  border-slate-700">
        <h2 class="mb-6  text-2xl  font-bold">Initiativ</h2>

        <div class="flex  flex-col  gap-4">
            <div v-for="(unit, index) in initiativ.units" class="flex  gap-2  transition-all" :style="{ order: unit.initiativ }">
                <input type="text" v-model="unit.name" class="flex-auto  px-2  py-1  text-black">

                <input type="number" v-model="unit.initiativ" min="0" max="100" class="w-16  px-2  py-1  text-black">

                <button type="button" @click="initiativ.units.splice(index, 1)" class="grid  place-content-center  w-8  h-8  text-red-500  opacity-75  transition  hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                    </svg>
                </button>
            </div>

            <div class="order-last">
                <button type="button" @click="initiativ.units.push({ name: 'meanie', initiativ: 100 })">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
