export const useInitiativ = defineStore('initiativ', {
    state: () => ({
        units: [
            {
                name: 'Red Guard',
                initiativ: 0,
            },
            {
                name: 'Demolitionist',
                initiativ: 0,
            },
            {
                name: 'Void Warden',
                initiativ: 0,
            },
            {
                name: 'Monster',
                initiativ: 0,
            },
        ]
    }),

    actions: {
        // handleChange(el: string) {
        //     // typescript fiddling to access object property dynamically
        //     type ObjectKey = keyof typeof this.elements;
        //     const name = el as ObjectKey;

        //     switch(this.elements[name]) {
        //         // if element is inert set it to strong
        //         case -1:
        //             this.elements[name] = 1;
        //             break;

        //         // if element is waning set it to inert
        //         case 0:
        //             this.elements[name] = -1;
        //             break;

        //         // if element is strong set it to waning
        //         case 1:
        //             this.elements[name] = 0;
        //             break;
        //     }
        // },
    },
})
