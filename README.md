# GSynergy React Web Challenge – A Two Page React Web App

> Movies Browser built with react & redux-toolkit

This is a two-page web app for browsing and searching movies
available at this online API: https://developers.themoviedb.org/3/getting-started/introduction

Challenges and Improvements are by no means exhaustive and are in no particular order.

<!-- toc -->

- [API Key](#API-KEY)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies](#install-dependencies)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
- [Challenges](#challenges)
- [Improvements](#improvements)

## API KEY

To get an API Key:

1. Create a personal account at: https://www.themoviedb.org/account/signup
2. Once you have created an account, go to:
   https://www.themoviedb.org/settings/api to create an API key
   - a. Usage: Personal
   - b. Application Name: Interview
   - c. Application URL: None
   - d. Application Summary: For a developer interview project

## Usage

### Env Variables

REACT_APP_API_KEY -> `"your api key here"`

### Install Dependencies

```
npm install
```

### Run

```
npm start
```

## Build & Deploy

### Create frontend production build

```
npm run build
```

## Challenges

- SearchBar -> Implemented debouncing and caching (using redux store) in search component to reduce the number of network calls (API Polling) made when the user types the search term.

- /hooks -> Created custom re-usable hooks to getSearchSuggestions, getSearchResults and getUpcomingMovies.

- Rating -> Custom re-usable Rating component that takes in rating value and text (optional) and renders it in Star format.

- Header -> Custom re-usable Header component that follows "Render Props Pattern" which makes it pretty flexible to accept any component (ours or third party).

- svg/ ->Used the original SVG symbols given in mock-up by exporting them as svg and converting to native react components.

- CardList -> Used "Intersection Observer" to implement infinite scroll.

## Improvements

- Instead of using css directly, usage of an external css library would have made the development time shorter.

- Shimmer UI instead of well... nothing at all, would enhance user experience.

- Server Side Rendering on List Page (Main page) can take the burden off the client and improve performance.

- Introduce Auth in this app so that users can have watchlists, submit reviews, etc. Optimistic UI updates can be implemented to enhance user experience while rating (reviewing) or wishlisting.

- Scalability -> Because the risk of rendering a large DOM size is high, we can use "virtualized lists" within a container of limited height so that only the visible options are rendered.

- Accessiblity -> Implementing ARIA attributes and roles can provide inclusive experience for people using screen-readers and performing keyboard interactions.

- Preloading images, responsive images via srcSet attribute can also improve user experience.

- Code splitting is not evident at this stage of development, but if the app ever gets bigger, it will also make sense to use React.lazy() and React Suspense to dynamically import components on-demand.

- Add unit-tests and RTL DOM tests, include appropriate logging levels and implement this app as a PWA or SSR using Remix.js or NextJS.
