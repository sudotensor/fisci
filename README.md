## Fisci

> Latin translation: '_Finance_'

Fisci is a finance management web application that helps small businesses and individuals track their spending to become more financially responsible. The app was developed in collaboration with [Brain Evans](https://github.com/mrbrianevans), [Randolph Liu](https://github.com/RandolphLiu), [Anya Sims](https://github.com/aas89), and [Bryan Ang](https://github.com/bryangwj) as a submission for Hex Cambridge 2020.

## Inspiration
Due to lockdowns across the world, many individuals and small businesses
        have struggled financially; this inspired us to make managing finances
        simple while offering helpful insights into a user's spending habits.

## What does Fisci do?
With Fisci, users have the ability to enter their transaction history
        through the transaction table tab and analyse their spending patterns
        through the insights page. Users also have a guide page containing
        curated resources on how to be financially stable; this page also
        includes resources for small businesses on COVID guidelines and funding.

## How was Fisci built?
Fisci has a React.js front-end and a Python Flask back-end. The back-end
        on Google Cloud Run (GCR) instance and the front-end is served through
        Firebase hosting. Further, the domain was registered through Domain.com
        and the transaction records are stored in a Cassandra database from
        Datastax Astra.

## Challenges
The team was quite new to Firebase authentication and using CQL for the
        database. The former took quite a lot of time to setup and experiment
        with, but ultimately we didn't have enough time to include it in the
        final product. However, it was indeed a great learning opportunity to
        learn how to set it up. The Material UI documentation was quite
        cumbersome to go through, and the sheer size of the library proved quite
        overwhelming

## Accomplishments
We're proud of having a lightning fast backend and a smooth-as-butter,
        minimalist front-end that provides a great user experience.

## Learning Opportunity
 We're also proud of have learned quite a lot about developing web apps
        in React with Python Flask as a backend - the part of linking the app
        with Google Cloud was particularly interesting. We also learned how to
        collaborate better by paralellising tasks and gained technical knowlege
        from one another.

## What's Next?
Our next steps is to polish the app and link it with Firebase
        authentication (Sign-in with Google) and to add time-series prediction
        based on transaction history. We also plan on making the app mobile
        compatible with features to scan receipts and invoices and automatically
        populate the transaction table. A big step would be to use an
        OpenBanking API to automatically feed in the user transactions from
        their bank account. Also, we plan on adding a subscription (renewal
        payments) tracker that would remind users when a subscription is due.
