/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                50: "#ecfcff",
                100: "#cef6ff",
                200: "#a4ebfd",
                300: "#61dafb",
                400: "#1fc0f1",
                500: "#03a3d7",
                600: "#0681b4",
                700: "#0c6892",
                800: "#145576",
                900: "#154764",
                950: "#072d45"
            },
            width: {
                "1/10": "10%",
                "9/10": "90%",
                40: "40%",
                50: "50%"
            },
            fontFamily: {
                montserrat: ["Montserrat", "serif"]
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/conferenceImages/image1.jpg')"
            },
            boxShadow: {
                normal: "1px 1px 8px 0px rgba(11, 8, 27, 0.16);"
            },
      animation: {
        'logo-scroll': 'scroll 10s linear infinite',
      },keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
        }
    },
    plugins: []
}; 
