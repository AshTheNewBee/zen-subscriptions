### Zen Subscription

#### Example:

Zen Subscription

An application for purchasing subscriptions at Zendesk, built on Nextjs with Typescript, React, context api, and SCSS.

## Project Status
version 1.0.0 > working solution

#### Example:

Users can purchase new Zendesk subscriptions or update their current plan

#### REQUIREMENTS:
  - The app should display the existing subscription information upon load 
    (fetched from the `/api/current` endpoint).
    
  - Changing any of the subscription details (plan or seats) should show the
    price of the updated subscription (fetched from the `/api/preview` endpoint)
    
  - The update button should be disabled unless previewing a subscription that 
    is different from the existing subscription. In other words, the app should 
    not allow an update if the subscription has not been changed.
  
  - Clicking on the 'Update' button should update the subscription by submitting
    a PUT request to the `/api/curent` endpoint
  
  - A successful submission should display a confirmation screen showing both 
    the previous and updated subscription details. The updated details that 
    differ from the previous subscription should be highlighted.
  
  - The confirmation screen should include a 'Back' button shows the 
    subscription screen again

## Back-end
- Back-end API is created using Nextjs
### Paths
  #### /api/curent
    GET
    - Retrieves the plan data

  #### /api/preview
    PUT
    - Updates the Plan data


## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm run test`  

To Start Server:

`npm run dev`  

To Visit App:

`localhost:3000/currentPlan`  

To Run Docker
`docker build . -t zendesk-subscriptions`
`docker run -p 3000:3000 zendesk-subscriptions`

## Reflection
  - This app is created as a apart of Zendesk coding challenge. 
    - It is built on NextJS framework with Typescript. API was built using nextjs API routes. Json file is used for CRUD operations.
    - React Context API is used for state management in Frontend

  - Next js was the chosen framework for this project; as it allows to build the api & Front-end together. It also allows server-side rendering where further optimisation could be taken place in future versions.

  - This project was challenging because of limited exposure to the Next js Framework and the integration to Jest testing platform. 
    

## Improvements
  - Add Loading icon until components loads
  - Enhance unit test coverage with edge cases


## Future Features
 - Disable the update button for subscriptions with invalid seat counts
    - Display an error message if an error is received from the server endpoints
    - Support multiple products (each with their own plan and seat count) 
    - Additional screens:
      - Display/update the payment information
      - Display/update the contact information
    - Support for multiple currencies (eg., USD, Euros, British Pounds, etc.)
  