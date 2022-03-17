# FanAPIs Template

## Description
This repository holds the template code for FanAPIs, such as Zelda API and others that may come. This consists of a RESTful API and GraphQL API our beloved franchises.

NextJS never cease to amaze me! This all started as some proof of concept, but it ended up being very fast and reliable way of delivering data, a good fit for student projects. The best thing about this template is that maintaining those APIs doesn't cost anything (unlike more reliable APIs hosted on AWS for example).

## Tech Stack

Deployment: Vercel

Engine: NextJS

# Building
In order to build this project just clone this repository and install the dependencies:

```console
user@admin:~$ git clone https://github.com/deliton/fanapis-template.git && cd fanapis-template
user@admin:~/fanapis-template$ npm install && npm run dev

```

# Deploy

You can also quickly deploy a version of this repository using Vercel. Just create an account there, import this repository and that's it, it's done. In order to properly use this API it is necessary to define some ENVIRONMENT VARIABLES:

**API_URL**= URL TO THE DOMAIN OF YOUR API

## Tech Description

This template uses NextJS API routes to deliver data, and to achieve that we use static JSON files with a simple JSON driver to filter and join between different files.
