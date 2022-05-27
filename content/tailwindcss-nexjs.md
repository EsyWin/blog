# Tailwindcss NextJS

## Install

Assuming you've already created a react project using the followings :

```bash
npx create-next-app my-project
cd my-project
```

Now run : 

```bash
# using npm
npm install -D tailwindcss postcss autoprefixer
# using yarn
yarn add tailwindcss postcss autoprefixer --dev
# in both cases
npx tailwindcss init -p
```

## Configuration

Modify `tailwind.config.js` to your `content` path :

```javascript
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then, add the `@tailwind` directives to your `./styles/global.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Don't forget to import `global.css` inside `./pages/_app.js` at the very beginning of the file :

```
// @tailwind
import "../styles/global.css";
// our custom css
import "../styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
```

Now run either `npm run dev` or `yarn dev` according to your package manager.

## Voilà !

You're ready to use `tailwindcs` within `next.js`, try it !

```
// index.js

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```
