---
id: shields
title: Shields Route
sidebar_label: Shields
slug: /shields
---

## Introduction

This route fetches a list of all Shields that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the Shield |
| name         | `string` | Name of the Shield |
| image         | `string` | Image URL of the Shield |
| description         | `string` | Short description of the Shield |
| category         | `string` | What category of shield. Example: `Small Shield`, `Medium Shield`, etc. |
| weight          | `number` | How much the Shield weights when equipped |
| attack         | `{ name: string, amount: number }` | How much damage the Shield does when used as a weapon  |
| defence         | `{ name: string, amount: number }` | How much damage the Shield blocks when used as a shield  |
| requiredAttributes         | `{ name: string, amount: number }` | What are the required attribute amount in order to properly use this shield. Example: `{ name: "Str", amount: 20 }`  |
| scalesWith         | `{ name: string, scaling: string }` | How much the shield scales and with what attributes. Example: `{ name: "Str", scaling: "B" }`  |

## Sample Result

```javascript
{
  success: true,
  count: 1,
  data: [{
      id: "17f693d58ael0i125pgfsn2zo4078i",
      name: "Beastman's Jar-shield",
      image: "https://eldenring.fanapis.com/images/shields/17f693d58ael0i125pgfsn2zo4078i.png",
      description: "Shield fashioned from a tall broken jar carried by the beastmen of Farum Azula. There is a particular knack to wielding it. The beastmen have always fired earthenware jars for the express purpose of making shields. Such are their ways, strange though they are.",
      attack: [{
          name: "Phy",
          amount: 71
        },
        {
          name: "Mag",
          amount: 0
        },
        {
          name: "Fire",
          amount: 0
        },
        {
          name: "Ligt",
          amount: 0
        },
        {
          name: "Holy",
          amount: 0
        },
        {
          name: "Crit",
          amount: 100
        }
      ],
      defence: [{
          name: "Phy",
          amount: 95
        },
        {
          name: "Mag",
          amount: 30
        },
        {
          name: "Fire",
          amount: 55
        },
        {
          name: "Ligt",
          amount: 60
        },
        {
          name: "Holy",
          amount: 55
        },
        {
          name: "Boost",
          amount: 48
        }
      ],
      scalesWith: [{
        name: "Str",
        scaling: ""
      }],
      requiredAttributes: [{
        name: "Str",
        amount: 10
      }],
      category: "Small Shield",
      weight : 5
    }
  ]
}
```

## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | <https://eldenring.fanapis.com/api/shields> | This route retrieves a list of all the Shields of **Elden Ring**. |
| `GET`         | <https://eldenring.fanapis.com/api/shields/:shield_id> | This route retrieves one **Elden Ring** Shield using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | <https://eldenring.fanapis.com/api/shields?limit=100> | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | <https://eldenring.fanapis.com/api/shields?limit=20&page=3> | This parameter is used no navigate between pages of results |
| `name`         | none | <https://eldenring.fanapis.com/api/shields?name=Beastman's%20Jar-shield>  | This parameter is used to search for fields by their names |
