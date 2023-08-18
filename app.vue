<template>
    <div class="h-screen  bg-slate-800  text-slate-100">
        <header class="flex  items-center  justify-between  p-6  border-b  border-slate-700">
            <HeaderElements />
            <HeaderActions />
        </header>

        <div class="grid  grid-cols-4  gap-6  p-6">
            <div>red guard</div>
            <div>demolitionist</div>
            <div>void warden</div>
            <InitiativList />
        </div>
    </div>
</template>
