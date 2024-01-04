## How to run

- clone, and run NPM install to install the dependencies
- run: npm run dev

## Approach & state Management

For this app I only manage local states, It was not necessary to use global states.
The main visual components are VotingForm and TableResult both rendered in the App.ts component.
For the form I used React-Hook-Form library to manage the form state,  this library avoid 
unnecessary renders when the user types in each file. 
In the TableResult we render the Table component that delegate the weather api call to the weatherCell.tsx
component, in that way we only call to the services when the component is rendered, the state is manage by
react-query library, who call the services and save in cache the response, so once the response is obtained, is not necessary more calls for that city, you can see this, when you change the page.

## Folder Structure

 ### config
Contain configurations files related to the application, in this case we only have a simple axios configured instance in the file api.ts. 

- hooks
customs hooks

### components
All shared and reusable components 

### screens
Visual components 

### services
Contain a file "weatherServices" with the api call necessary in the app, in this folder could be a file for each microservices used.

### types 
Types and Interfaces shared along de app 

### utils 
Regular expressions and reusable functions