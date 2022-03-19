---
id: sorceries
title: Sorceries Route
sidebar_label: Sorceries
slug: /sorceries
---

## Introduction

This route fetches a list of all sorceries that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the sorcery |
| name         | `string` | Name of the sorcery |
| image         | `string` | Image URL of the sorcery icon |
| description         | `string` | Short description of the sorcery |
| type         | `string` | Type of Incantation |
| cost         | `number` | Cost in FP to cast this sorcery once |
| slots         | `number` | How many skill slots equipping this sorcery consumes |
| effects         | `string` | What this sorcery does |
| requires         | `{ name: string, amount: number }` | What attributes and what amount is required to cast this sorcery |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69548207l0hykrjxtjpw45plt0o",
      name: "Ambush Shard",
      image: "https://eldenring.fanapis.com/images/sorceries/17f69548207l0hykrjxtjpw45plt0o.png",
      description: "One of the night sorceries of Sellia, Town of Sorcery. Launches a projectile from a distance removed from the caster, so as to strike the enemy from behind. This sorcery can be cast repeatedly. The Sellian sorcerers were assassins, and it is said that they often hunted their fellows.",
      type: "Sorceries",
      cost: 16,
      slots: 1,
      effects: "Strikes from behind with projectile fired from distance",
      requires: [{
          name: "Intelligence",
          amount: 23
        },
        {
          name: "Faith",
          amount: 0
        },
        {
          name: "Arcane",
          amount: 0
        }
      ]
    },
    {
      id: "17f69526092l0hykrkfqubdcrri5ri",
      name: "Carian Phalanx",
      image: "https://eldenring.fanapis.com/images/sorceries/17f69526092l0hykrkfqubdcrri5ri.png",
      description: "One of the sorceries of the Carian royal family.",
      type: "Sorceries",
      cost: 26,
      slots: 1,
      effects: "Forms a defensive arch of numerous magic glintblades",
      requires: [{
          name: "Intelligence",
          amount: 34
        },
        {
          name: "Faith",
          amount: 0
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
| `GET`         | https://eldenring.fanapis.com/api/sorceries | This route retrieves a list of all the sorceries of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/sorceries/:sorcery_id | This route retrieves one **Elden Ring** sorcery using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/sorceries?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/sorceries?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/sorceries?name=Carian%20Phalanx  | This parameter is used to search for fields by their names |
