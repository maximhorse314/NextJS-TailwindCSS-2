# Health Explore

## Demo

[Link](https://health-explore-flax.vercel.app/)
![](health-explore.gif)

## Deployment using nextJS

- have deployed this using the `import project` tab from vercel dashboard
- Environment variable to be set `NEXT_BASE_URL` (this is same as the url at which the web application is live, remove the trailing `/`)

## Stack used

- NextJS, for frontend and apis
- Tailwindcss for styling
- Context API for state management (used to set the filter and search data)

## Features
- Highly responsive
- supports searching by company name
- supports filtering by all items on the side navigation (only one filter at a time)
- The filter api data is served using server side rendering, subsequent qpi call to jobs is done using the useEffect react hook

