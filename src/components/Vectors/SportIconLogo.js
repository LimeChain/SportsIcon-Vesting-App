import { useEffect, useState } from "react"
 // react/jsx-no-duplicate-props
const SportIconLogo = () => {
    const [dimensions, setDimeonsions] = useState('100');

    const DIMENSION_FOR_DIFFERENT_SCREENS = {
        MOBILE: '75',
        TABLET: '100',
        DESKTOP: '140'
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 768) {
                setDimeonsions(DIMENSION_FOR_DIFFERENT_SCREENS.MOBILE);
            } else if (window.innerWidth > 768 && window.innerWidth <= 1049) {
                setDimeonsions(DIMENSION_FOR_DIFFERENT_SCREENS.TABLET);
            } else if ( window.innerWidth > 1050) {
                setDimeonsions(DIMENSION_FOR_DIFFERENT_SCREENS.DESKTOP);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <svg height="167.458" viewBox="0 0 400 167.458" width={dimensions} height={dimensions} xmlns="http://www.w3.org/2000/svg">
            <path d="m1327.224 1313.463a29.969 29.969 0 0 0 -1.635-10.139 19.975 19.975 0 0 0 -19.624-13.628 20.245 20.245 0 0 0 -12.156 3.652 20.583 20.583 0 0 0 -7.359 9.976 27.7 27.7 0 0 0 -1.635 10.139h-18.642a47.039 47.039 0 0 1 2.507-15.59 35.546 35.546 0 0 1 13.955-17.989q9.812-6.542 23.331-6.542 13.627 0 23.44 6.542a34.976 34.976 0 0 1 13.846 17.989 44.123 44.123 0 0 1 2.616 15.59z" fill="#449764" transform="translate(-1138.508 -1186.125)" />
            <path d="m1282.634 763.547a35.221 35.221 0 0 1 -13.955-18.043 49.721 49.721 0 0 1 0-31.18 35.546 35.546 0 0 1 13.955-17.989q9.812-6.541 23.331-6.541 13.627 0 23.44 6.541a34.977 34.977 0 0 1 13.846 17.989 44.123 44.123 0 0 1 2.616 15.59 44.693 44.693 0 0 1 -2.616 15.59 35.656 35.656 0 0 1 -13.9 17.989q-9.758 6.541-23.276 6.541-13.63 0-23.441-6.487zm35.541-13.518a19.8 19.8 0 0 0 7.414-9.976 31.2 31.2 0 0 0 1.635-10.139 29.97 29.97 0 0 0 -1.635-10.139 19.975 19.975 0 0 0 -19.624-13.628 20.245 20.245 0 0 0 -12.156 3.652 20.583 20.583 0 0 0 -7.359 9.976 27.7 27.7 0 0 0 -1.635 10.139 28.792 28.792 0 0 0 1.635 10.139 19.747 19.747 0 0 0 19.515 13.519 20.933 20.933 0 0 0 12.21-3.543z" fill="#449764" transform="translate(-1138.508 -689.794)" /><g fill="black">
                <path d="m419.642 763.384q-7.633-6.648-7.632-18.643v-1.526h17.552v1.09q0 5.233 2.944 8.013t8.286 2.78a14.651 14.651 0 0 0 6.105-1.144 7.921 7.921 0 0 0 3.707-3.216 8.481 8.481 0 0 0 .981-4.033 7.716 7.716 0 0 0 -.763-3.489q-2.072-3.488-9.049-4.906l-9.485-1.854q-12.428-2.507-16.9-10.684a22.837 22.837 0 0 1 -2.834-11.447 23.425 23.425 0 0 1 3.052-12.211 22.471 22.471 0 0 1 10.03-9.1 35.445 35.445 0 0 1 15.59-3.216q13.41 0 21.1 6.6t7.686 18.588v1.514h-17.664v-1.09q0-5.233-2.944-7.958t-8.286-2.726a14.265 14.265 0 0 0 -6.05 1.144 7.958 7.958 0 0 0 -3.652 3.216 7.447 7.447 0 0 0 -1.09 4.033 7.026 7.026 0 0 0 .763 3.38q1.962 3.381 9.049 4.8l9.376 1.854q12.319 2.509 17.116 10.9a23.054 23.054 0 0 1 2.726 11.557 24.486 24.486 0 0 1 -2.943 12.21 22.882 22.882 0 0 1 -10.085 9.05 35.891 35.891 0 0 1 -15.645 3.161q-13.41.003-21.041-6.647z" transform="translate(-412.01 -689.794)" />
                <path d="m903.876 727.235a24.379 24.379 0 0 1 -3.162 12.647 22.285 22.285 0 0 1 -9.267 8.776 29.682 29.682 0 0 1 -13.846 3.107h-13.082v27.474h-17.771v-76.316h30.852a30.014 30.014 0 0 1 13.9 3.107 21.717 21.717 0 0 1 9.212 8.668 24.54 24.54 0 0 1 3.164 12.537zm-17.989 0a8.617 8.617 0 0 0 -1.2-4.579 7.379 7.379 0 0 0 -3.326-3.052 12.241 12.241 0 0 0 -5.4-1.09h-11.442v17.662h11.447a11.719 11.719 0 0 0 5.4-1.145 7.687 7.687 0 0 0 3.326-3.108 8.824 8.824 0 0 0 1.195-4.688z" transform="translate(-781.772 -700.961)" />
                <path d="m1889.069 748.931 16.135 30.308h-20.823l-15.481-29.655h-3.6v29.654h-17.771v-76.315h31.835a31.133 31.133 0 0 1 13.628 2.78 19.949 19.949 0 0 1 8.831 8.014 22.865 22.865 0 0 1 2.834 11.447 20.573 20.573 0 0 1 -2.725 10.9 16.312 16.312 0 0 1 -6.922 6.432 33.588 33.588 0 0 1 -10.848 3.271zm-23.769-30.418v17.008h11.665q6.322 0 8.613-4.144a9.05 9.05 0 0 0 1.09-4.47 8.8 8.8 0 0 0 -.981-4.361q-2.4-4.032-8.722-4.034z" transform="translate(-1632.976 -700.961)" />
                <path d="m2254.544 702.923h63.015v16.353h-22.677v59.962h-17.771v-59.962h-22.568z" transform="translate(-1979.157 -700.961)" />
                <path d="m2707.865 763.384q-7.633-6.648-7.631-18.643v-1.526h17.552v1.09q0 5.233 2.944 8.013t8.286 2.78a14.65 14.65 0 0 0 6.105-1.144 7.922 7.922 0 0 0 3.707-3.216 8.479 8.479 0 0 0 .981-4.033 7.715 7.715 0 0 0 -.763-3.489q-2.072-3.488-9.049-4.906l-9.485-1.854q-12.428-2.507-16.9-10.684a22.836 22.836 0 0 1 -2.834-11.447 23.425 23.425 0 0 1 3.052-12.211 22.47 22.47 0 0 1 10.03-9.1 35.446 35.446 0 0 1 15.59-3.216q13.41 0 21.1 6.6t7.686 18.588v1.514h-17.661v-1.09q0-5.233-2.944-7.958t-8.286-2.726a14.264 14.264 0 0 0 -6.051 1.144 7.956 7.956 0 0 0 -3.652 3.216 7.445 7.445 0 0 0 -1.09 4.033 7.025 7.025 0 0 0 .763 3.38q1.962 3.381 9.049 4.8l9.376 1.854q12.319 2.509 17.116 10.9a23.052 23.052 0 0 1 2.726 11.557 24.485 24.485 0 0 1 -2.943 12.21 22.881 22.881 0 0 1 -10.084 9.05 35.891 35.891 0 0 1 -15.645 3.161q-13.41.003-21.045-6.647z" transform="translate(-2358.233 -689.794)" />
                <path d="m762.384 1347.042a35.843 35.843 0 0 1 -13.791-17.989 49.723 49.723 0 0 1 0-31.18 35.734 35.734 0 0 1 13.846-17.989 36.858 36.858 0 0 1 21.914-6.542 40.086 40.086 0 0 1 17.389 3.6 29.824 29.824 0 0 1 12.538 10.357 31.421 31.421 0 0 1 5.288 15.808h-18.535a14.5 14.5 0 0 0 -5.56-9.758 16.737 16.737 0 0 0 -11.12-3.652 17.114 17.114 0 0 0 -10.685 3.652 20.707 20.707 0 0 0 -7.3 9.976 27.7 27.7 0 0 0 -1.635 10.139 28.791 28.791 0 0 0 1.635 10.139 20.084 20.084 0 0 0 7.2 9.866 17.614 17.614 0 0 0 10.575 3.653 17.3 17.3 0 0 0 10.521-3.6 14.7 14.7 0 0 0 5.288-9.7h18.534a31.882 31.882 0 0 1 -5.124 15.481 30.027 30.027 0 0 1 -12.21 10.52 37.578 37.578 0 0 1 -17.226 3.761 36.073 36.073 0 0 1 -21.542-6.542z" transform="translate(-696.155 -1186.125)" />
                <path d="m1895.719 1342.4v-55.924h16.026v76.316h-25.838l-18.316-44.263-3.924-11.129v55.391h-16.136v-76.316h25.948l18.1 44.154z" transform="translate(-1632.976 -1197.292)" /><path d="m460.09 1302.063v-15.589h-48.078v15.589h15.153v45.137h-15.153v15.59h48.078v-15.59h-15.153v-45.136z" transform="translate(-412.012 -1197.293)" />
                <path d="m1327.222 1541.411v.054a31.2 31.2 0 0 1 -1.635 10.139 19.8 19.8 0 0 1 -7.414 9.976 20.934 20.934 0 0 1 -12.21 3.543 19.747 19.747 0 0 1 -19.515-13.519 28.792 28.792 0 0 1 -1.635-10.139c0-.019 0-.036 0-.054h-18.645a47.057 47.057 0 0 0 2.507 15.643 35.222 35.222 0 0 0 13.955 18.043q9.812 6.489 23.44 6.487 13.517 0 23.276-6.542a35.656 35.656 0 0 0 13.9-17.989 44.716 44.716 0 0 0 2.616-15.643h-18.644z" transform="translate(-1138.508 -1414.127)" /></g>
        </svg>
    )
}

export { SportIconLogo }