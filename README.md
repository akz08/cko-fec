![](https://github.com/akz08/cko-fec/workflows/CI/badge.svg)

# Front End Challenge (Customer Feedback Page)

Submission for CKO Front End Challenge built in React.js, building a page to:

- Create comments for a product
- View all previously submitted comments
- A chart to view product trends

## Getting Started

For development, we assume `node 14.x` or higher with `yarn` installed. The editor of choice is Visual Studio Code, and a set of recommended extensions have been checked in to help streamline development. Since the project is based on an un-ejected `create-react-app`, you should be able to get started with:

`yarn install`

`yarn start`

If you have Docker installed and just want to see the app in action, run:

`docker-compose up`

## Approach

Learning a new framework whilst building a web application to a good-enough standard is fairly time consuming, so an incremental approach to development was used. The desired steps towards a completed (within scope of the problem) app and the progress made are listed below:

- [x] Build up project scaffold (CI, tooling, create-react-app)
- [x] Draft up HTML/CSS structure following specification
- [x] Split layout into logical components
- [x] Draft out sensible data structure in flat JSON files
- [x] Build out components & types using simple state
- [x] Use Contexts and Providers to manage state more centrally
- [x] Figure out how unit testing works in React
- [x] Setup integration tests with Cypress & update CI pipeline
- [ ] Build hook based on Fetch API & build in logging service
- [ ] Abstract out Fetch hook into service to swap out with mock service
- [ ] Build out mock API/service specifically for Cypress tests
- [ ] Introduce react-window and test with large # of programatically generated comments
- [ ] Build up functional test suite
- [ ] Determine secret management strategy
- [ ] Setup external logging service w/ instrumentation keys

## Architectural & Design Choices

### Continuous Integration

The repository has been setup with a base CI script to help ensure regular the code is in a healthy state (unit tests passing, linting), but most should be caught in development if using the recommended tooling.

### Dev Tooling

Compared to Angular, React is _extremely_ unopinionated. Since this is the first React project I've built from scratch, I've tried to rely on tooling & community knowledge as much as possible.

The base app was templated using `create-react-app . --template typescript` to be as close as possible to the current CKO setup. A number of ESLint plugins to help with React, Typescript, and a11y were also added and (mostly) adhered to. Prettier was also used to prevent copious amounts of keyboard tabbing.

The use of Docker and Docker Compose is fairly basic and mainly to demonstrate understanding, but could be extended to also spin up a proper API endpoint and Grafana instance.

### Code Structure

The [frames-react project](https://github.com/checkout/frames-react) was used as a basic guideline for folder structure as well as use of types. The usage of hooks and providers are based on learnings from the book [Learning React, 2nd Edition](https://github.com/MoonHighway/learning-react) and Typescript tips gathered from the [React + TypeScript cheatsheet](https://github.com/typescript-cheatsheets/react).

### Testing (TODO)

#### Unit

#### Integration

## UI Design

Design doesn't exist in a vacuum and there's no need to re-invent the wheel, so the site was styled around CKO's main page using flexbox. The layout is fairly responsive, so media queries were not used in this instance. Where possible (except for the chart), the brand colours have been "variablised" on the off-chance using those colours is frowned upon.

## Next Steps (TODO)
