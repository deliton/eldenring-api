---
id: creatures
title: Creatures Route
sidebar_label: Creatures
slug: /creatures
---

## Introduction

This route fetches a list of all creatures that can be encountered in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the creature |
| name         | `string` | Name of the creature |
| image         | `string` | Image URL of the creature |
| description         | `string` | Short description of the creature |
| location         | `string` | Where this creature can be found |
| drops         | `string[]` | What items and resources this creature drops |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f6a3ceea8l0i6yrr9i9li6sityc",
      name: "Arcane Sphere Of Faces",
      image: "https://eldenring.fanapis.com/images/creatures/17f6a3ceea8l0i6yrr9i9li6sityc.png",
      description: "Safeguard of the Witchbane Ruins' basement cellar. Mysteriously rare and highly unconventional.",
      location: "Witchbane Ruins",
      drops: [
        "None"
      ]
    },
    {
      id: "17f6a0bda2cl0i6yrtkvf0vjp9puf",
      name: "Giant Bat",
      image: "https://eldenring.fanapis.com/images/creatures/17f6a0bda2cl0i6yrtkvf0vjp9puf.png",
      description: "The Giant Bats of Limgrave are nocturnal creatures and often rest during the day, unless they are disturbed.",
      location: "Near the cliffs on Western Limgrave.",
      drops: [
        "Gold Firefly"
      ]
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/creatures | This route retrieves a list of all the creatures of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/creatures/:creature_id | This route retrieves one **Elden Ring** creature using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/creatures?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/creatures?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/creatures?name=Giant%20Bat  | This parameter is used to search for fields by their names |
