# Topics to Cover
This is a list of topics that will be covered in today's lecture.

## react-router-dom
- react-router-dom is an npm package that gives us our routing components.
  - HashRouter / BrowserRouter
  - Route
  - Link
  - Switch
  - NavLink
  
## HashRouter
- HashRouter and BrowserRouter
- BrowserRouter you must configure server
- Keeps UI in sync with URL

## Route
- Renders UI when location matches the path
- path=''
- component={}, render={} (takes in a function)
- exact for exact paths

## Switch
- Will load only one route at a time
- Order is important! It will load the first match, then ignore the rest

## Link
- like href
- to=''

## NavLink
- activeClassName

## Using a router file

## Params
- indicate in the path with colon example: '/users/:id'
- access the value through props.match.params.id (or whatever the property name is)
