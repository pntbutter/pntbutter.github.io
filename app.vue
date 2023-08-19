<template>
    <div class="h-screen  bg-slate-800  text-slate-100">
        <header class="flex  items-center  justify-between  p-6  border-b  border-slate-700">
            <HeaderElements />
            <HeaderActions />
        </header>

        <div class="grid  grid-cols-4  gap-6  p-6">
            <Character name="Red Guard" />
            <Character name="Demolitionist" />
            <Character name="Void Warden" />
            <InitiativList />
        </div>
    </div>
</template>
