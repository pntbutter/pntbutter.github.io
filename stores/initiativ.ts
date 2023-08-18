export const useInitiativ = defineStore('initiativ', {
    state: () => ({
        units: [
            {
                name: 'Red Guard',
                initiativ: 100,
            },
            {
                name: 'Demolitionist',
                initiativ: 100,
            },
            {
                name: 'Void Warden',
                initiativ: 100,
            },
            {
                name: 'Monster',
                initiativ: 100,
            },
        ]
    }),
})
