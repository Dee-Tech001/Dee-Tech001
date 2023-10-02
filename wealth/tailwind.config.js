/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007acc', // Use your desired color code
      },
  
    },
  },
  plugins: [],
}

