<script>
export default {
    data() {
        return {
            hp: 10,
            xp: 0,
            conditions: {
                disarm: false,
                immobilize: false,
                muddle: false,
                poison: false,
                strengthen: false,
                stun: false,
                wound: false,
            }
        }
    },
    props: [
        'name',
    ]
}
</script>

<template>
    <div class="space-y-3  p-6  bg-slate-900">
        <h3 class="text-2xl  font-bold">{{ name }}</h3>

        <div class="flex  items-center  text-red-500">
            <span class="grow  text-lg">Health:</span>

            <button type="button" @click="hp--">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <strong class="w-14  text-xl  text-center">{{ hp }}</strong>

            <button type="button" @click="hp++">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <div class="flex  items-center  text-sky-500">
            <span class="grow  text-lg">Experience:</span>

            <button type="button" @click="xp--">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>

            <strong class="w-14  text-xl  text-center">{{ xp }}</strong>

            <button type="button" @click="xp++">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>

        <div class="pt-3">
            <h2 class="mb-3  text-lg">Conditions</h2>

            <div class="grid  grid-cols-2  gap-2">
                <button type="button" v-for="(applies, condition) in conditions" @click="conditions[condition] = !applies" class="p-2  pb-2.5  border" :class="{ 'opacity-50': !applies }">
                    <span class="uppercase  text-xs  tracking-wide  font-bold  leading-none">{{ condition }}</span>
                </button>
            </div>
        </div>
    </div>
</template>
