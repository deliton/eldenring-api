---
id: armors
title: Armors Route
sidebar_label: Armors
slug: /armors
---

## Introduction

This route fetches a list of all armor pieces that can be encountered in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the armor piece |
| name         | `string` | Name of the armor piece |
| image         | `string` | Image URL of the armor piece |
| description         | `string` | Short description of the armor piece |
| category         | `string` | Category of the armor piece. Example: `Leg Piece`, `Helmet`, etc. |
| weight         | `number` | How much this armor piece weights in your invetory |
| dmgNegation         | `{name: string, amount: number}` | How much damage this armor piece negates. Example: `{ "name": "Strike", amount: 6 }`|
| resistance         | `{name: string, amount: number}` | How much resistance wearing this armor piece provides. Example: `{ "name": "Poise", amount: 10 }`|

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f696e0685l0i0nblzy58h0qvewk",
      name: "All-knowing Greaves",
      image: "https://eldenring.fanapis.com/images/armors/17f696e0685l0i0nblzy58h0qvewk.png",
      description: "Greaves set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
      category: "Leg Armor",
      dmgNegation: [{
          name: "Phy",
          amount: 7
        },
        {
          name: "Strike",
          amount: 6
        },
        {
          name: "Slash",
          amount: 7
        },
        {
          name: "Pierce",
          amount: 6
        },
        {
          name: "Magic",
          amount: 7
        },
        {
          name: "Fire",
          amount: 5
        },
        {
          name: "Ligt",
          amount: 5
        },
        {
          name: "Holy",
          amount: 5
        }
      ],
      resistance: [{
          name: "Immunity",
          amount: 17
        },
        {
          name: "Robustness",
          amount: 29
        },
        {
          name: "Focus",
          amount: 13
        },
        {
          name: "Vitality",
          amount: 13
        },
        {
          name: "Poise",
          amount: 10
        }
      ],
      weight : 6.6
    },
    {
      id: "17f69515b49l0i0nbno079cqzlskebf",
      name: "All-knowing Armor",
      image: "https://eldenring.fanapis.com/images/armors/17f69515b49l0i0nbno079cqzlskebf.png",
      description: "Armor set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be.",
      category: "Chest Armor",
      dmgNegation: [{
          name: "Phy",
          amount: 12
        },
        {
          name: "Strike",
          amount: 11
        },
        {
          name: "Slash",
          amount: 13
        },
        {
          name: "Pierce",
          amount: 11
        },
        {
          name: "Magic",
          amount: 12
        },
        {
          name: "Fire",
          amount: 9
        },
        {
          name: "Ligt",
          amount: 10
        },
        {
          name: "Holy",
          amount: 8
        }
      ],
      resistance: [{
          name: "Immunity",
          amount: 28
        },
        {
          name: "Robustness",
          amount: 46
        },
        {
          name: "Focus",
          amount: 21
        },
        {
          name: "Vitality",
          amount: 21
        },
        {
          name: "Poise",
          amount: 16
        }
      ],
      weight : 10.6
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/armors | This route retrieves a list of all the armor pieces of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/armors/:ammo_id | This route retrieves one **Elden Ring** armor piece using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/armors?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/armors?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/armors?name=All-knowing%20Armor  | This parameter is used to search for fields by their names |
