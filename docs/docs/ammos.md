---
id: ammos
title: Ammos Route
sidebar_label: Ammos
slug: /ammos
---

## Introduction

This route fetches a list of all types of ammunition that can be encountered in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the ammo item |
| name         | `string` | Name of the ammo item |
| image         | `string` | Image URL of the ammo item |
| description         | `string` | Short description of the ammo item |
| type         | `string` | Damage type of the ammo item |
| passive         | `string` | Passive effect caused by the ammo item. Example: Bleed, Poison, etc. |
| attackPower         | `{name: string, amount: number}` | How much damage the the projectile does in each category of damage. Example: `{ "name": "Phys", amount: 50 }` |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69448ceel0i0a57bokoqz409yb",
      name: "Firebone Arrow",
      image: "https://eldenring.fanapis.com/images/ammos/17f69448ceel0i0a57bokoqz409yb.png",
      description: "Arrow whittled from animal bones. The tip is set alight before firing",
      type: "Pierce",
      attackPower: [{
          name: "Phy",
          amount: 10
        },
        {
          name: "Mag",
          amount: 0
        },
        {
          name: "Fire",
          amount: 90
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
      passive: "-"
    },
    {
      id: "17f695dc715l0i0a59pf1x5fb5112r",
      name: "Bloodbone Arrow (fletched)",
      image: "https://eldenring.fanapis.com/images/ammos/17f695dc715l0i0a59pf1x5fb5112r.png",
      description: "Arrow whittled from animal bones. The tip is daubed with a golden tincture. Deals holy damage. Craftable item. The fletching adds distance to the arrow's flight.",
      type: "Pierce",
      attackPower: [{
          name: "Phy",
          amount: 25
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
      passive: "Causes blood loss build up (55)"
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/ammos | This route retrieves a list of all the projectiles of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/ammos/:ammo_id | This route retrieves one **Elden Ring** projectile using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/ammos?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/ammos?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/ammos?name=Firebone%20Arrow  | This parameter is used to search for fields by their names |
