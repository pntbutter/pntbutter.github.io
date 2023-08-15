export const useElements = defineStore('elements', {
    state: () => ({
        // 1 = strong
        // 0 = waning
        // -1 = inert
        elements: {
            air: -1,
            fire: -1,
            water: -1,
            earth: -1,
            dark: -1,
            light: -1,
        }
    }),

    actions: {
        handleChange(el: string) {
            // typescript fiddling to access object property dynamically
            type ObjectKey = keyof typeof this.elements;
            const name = el as ObjectKey;

            switch(this.elements[name]) {
                // if element is inert set it to strong
                case -1:
                    this.elements[name] = 1;
                    break;

                // if element is waning set it to inert
                case 0:
                    this.elements[name] = -1;
                    break;

                // if element is strong set it to waning
                case 1:
                    this.elements[name] = 0;
                    break;
            }
        },
    },
})
