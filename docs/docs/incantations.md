---
id: incantations
title: Incantations Route
sidebar_label: Incantations
slug: /incantations
---

## Introduction

This route fetches a list of all incantations that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the incantation |
| name         | `string` | Name of the incantation |
| image         | `string` | Image URL of the incantation icon |
| description         | `string` | Short description of the incantation |
| type         | `string` | Type of Incantation |
| cost         | `number` | Cost in FP to cast this incantation once |
| slots         | `number` | How many skill slots equipping this incantation consumes |
| effects         | `string` | What this incantation does |
| requires         | `{ name: string, amount: number }` | What attributes and what amount is required to cast this incantation |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f696c7ce7l0hynrwmh6d0r0rwk2",
      name: "Ancient Dragons' Lightning Strike",
      image: "https://eldenring.fanapis.com/images/incantations/17f696c7ce7l0hynrwmh6d0r0rwk2.png",
      description: "A secret incantation of the capital's ancient dragon cult.",
      type: "Incantations",
      cost: 27,
      slots: 1,
      effects: "Summons red lightning that spreads from impact",
      requires: [{
          name: "Intelligence",
          amount: 0
        },
        {
          name: "Faith",
          amount: 26
        },
        {
          name: "Arcane",
          amount: 0
        }
      ]
    },
    {
      id: "17f695ad891l0hynrxcposdnx7gy9h",
      name: "Aspects Of The Crucible: Horns",
      image: "https://eldenring.fanapis.com/images/incantations/17f695ad891l0hynrxcposdnx7gy9h.png",
      description: "One of the ancient Erdtree incantations.",
      type: "Incantations",
      cost: 30,
      slots: 1,
      effects: "creates shoulder horn to gore foes from a low stance.",
      requires: [{
          name: "Intelligence",
          amount: 0
        },
        {
          name: "Faith",
          amount: 27
        },
        {
          name: "Arcane",
          amount: 0
        }
      ]
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/incantations | This route retrieves a list of all the incantations of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/incantations/:incantation_id | This route retrieves one **Elden Ring** incantation using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/incantations?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/incantations?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/incantations?name=Ancient%20Dragons'%20Lightning%20Strike  | This parameter is used to search for fields by their names |
