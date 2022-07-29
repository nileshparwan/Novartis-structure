import Aesthetics from "../src/Aesthetics/Aesthetics";

export const contexts = [
    {
        icon: 'box', // a icon displayed in the Storybook toolbar to control contextual props
        title: 'Themes', // an unique name of a contextual environment
        components: [
            // an array of components that is going to be injected to wrap stories
            /* Styled-components ThemeProvider, */
            /* Material-ui ThemeProvider, */
            Aesthetics
        ],
        params: [

        ],
        options: {
            deep: true, // pass the `props` deeply into all wrapping components
            disable: false, // disable this contextual environment completely
            cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
        },
    }
];


