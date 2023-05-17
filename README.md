# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Links

- Solution URL: [Add solution URL here](https://github.com/anwari-fikri/rest-countries-api)
- Live Site URL: [Add live site URL here](https://master--dynamic-haupia-999d58.netlify.app/)

## My process

### Built with

- Flexbox
- Mobile-first workflow
- React
- Tailwind
- Netlify for Deployment

### What I learned

## 1. Routing with React

I never worked on routing on React before, but I did with NextJS, and I realized that [id] routing is a feature from NextJS, not from React. With React, I need to use react-router-dom.

## 2. Adding dark theme

Working with dark themes in Tailwind is easy. To implement it, add the `className="dark:bg-black-500"` attribute to your components. Use the useState hook in React to manage the current theme, and the useEffect hook to apply the correct CSS class to the documentElement based on the selected theme.

```
const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  <button onClick={handleThemeSwitch} className="dark:bg-black-500">Switch Theme</button>


```

This will make the button turns black in dark mode, white in light mode.

## 3. Data extraction from nested json

Extracting data from a json file can be difficult sometimes especially when it has a lot of nested structure with different key. For example a country may have a different native name:

```
Belize has 3 native names for their country
"nativeName": {
    "bjz": { "official": "Belize", "common": "Belize" },
    "eng": { "official": "Belize", "common": "Belize" },
    "spa": { "official": "Belice", "common": "Belice" }
  }
```

All I want is the "common" native name but the json having different key makes it difficult to extract the common native name. With the help of ChatGPT, I managed to get the information that I want to extract.

```
{Object.values(country.name.nativeName)
  .map((lang) => lang.common)
  .join(", ")}

this returns: Belize, Belize, Belice
```

### Useful resources

- [Youtube: How To Create Dynamic Pages in React](https://www.youtube.com/watch?v=t-2X1fiS61U&t=780s) - This helped me create routes that allows me to navigate around the site. This is also the reason why I deployed my app on netlify instead of GitHub pages because react-router does not work with GitHub pages.
- [Youtube: Tailwind CSS Dark Mode | React App Theme Switcher](https://www.youtube.com/watch?v=VylXkPy-MIc) - This video helped me to make my app have theme toggle. Very surprised to know how easy it is to set up dark mode with Tailwind.

## Author

- Website - [Anwari Fikri](https://www.anwarifikri.com/)
- Frontend Mentor - [@anwari-fikri](https://www.frontendmentor.io/profile/anwari-fikri)
