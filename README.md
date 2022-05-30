# Elden Ring API

![eldenring-opensource-logo](https://user-images.githubusercontent.com/47995046/159050853-e91e101c-6f12-453f-95fc-c8908d633b65.png)

## Description

This repository holds the code for Elden Ring API. This consists of a RESTful API and GraphQL API of our beloved FromSoft game.

Get started at: <https://eldenring.fanapis.com>

## How to contribute

Scraping data always comes with a few bugs. If you find any bugs, feel free to contribute with data corrections. This API get its data from simple JSON files, so, you can easily fork this repository and make your changes to the JSON files that are located at <https://github.com/deliton/eldenring-api/tree/main/api/public/data>. Then open a Pull Request so I can review it and get it deployed.

## Tech Stack

Deployment: Vercel

Engine: NextJS
Docs: Docusaurus v2
Media Hosting: GitHub

# Building

In order to build this project just clone this repository and install the dependencies:

```console
user@admin:~$ git clone https://github.com/deliton/eldenring-api.git && cd eldenring-api
user@admin:~/fanapis-template$ yarn && yarn dev

```

# Deploy

You can also quickly deploy a version of this repository using Vercel. Just create an account there, import this repository and that's it, it's done. In order to properly use this API it is necessary to define some ENVIRONMENT VARIABLES:

**API_URL**= URL TO THE DOMAIN OF YOUR API

## Tech Description

This template uses NextJS API routes to deliver data, and to achieve that we use static JSON files with a simple JSON driver to filter and join between different files.
