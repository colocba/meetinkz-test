# Meetinkz test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.6.

## App architecture seperated by components

- Main app
  - Navbar Component
  - Venue Cards Component
    - Filtering elements component
    - Cards component
      - Card component (n components like this being n the amount of json obects from api)
  - Map Component
    - Map marker component (n components like this being n the amount of json obects from api)

## Services and pipes

### Api venues service

There are multiple purposes of this service:

* Getting the whole data from the api provided by Amidan with http request and passing it to the **Cards component** and to the **Map component** for them to display the data on their respective views.

* Receiving filter properties from the **Filtering elements component**, filters the data and updates the **Cards component** and **Map component** for updating their view.

* Pass sort type for sorting purposes from **Filtering elements component** to **Cards component**.
Note: The sorting will be done at the **Cards component** and not at the service.

### Highlighter service

The main purpose of this service is to receive the coordinates and name of a clicked card/marker and pass them to the other component so we can highlight it / make a bouncing effect.

### To currency pipe

This pipe will get the currency `number` and transform it to the corresponding `char` symbol.

## Tech stack

1. Angular 8
2. Bootstrap
3. Agm (Google maps)

## External Api's

- Angular Material
  For making the app prettier
- ngx-scroll-to
  Makes the effect of scrolling
- @ng-bootstrap
  For the stars rating in the card. Yes, it was totally necesary add an entire module for that...

## Time spend

Although we have talk in the interview about " a two hours job " it has took me 8 hours ~.
I think the time was well spent since I had made a total module division where each part of the app is a seperate component. Which is exactly the main Angular idea.
Therefore, I had to make a bunch of services for the comunication between them.

Learning all the new stuff took me a while as well like making a new api key for google maps, learning their Api and even making a document like this one is not easy :)

## URL

You can enter the app hosted by Github pages [by clicking here](https://colocba.github.io/meetinkz-test/)

## Source code

You can find the source code in the `/src` folder on this repository
