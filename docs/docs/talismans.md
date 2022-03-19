---
id: talismans
title: Talismans Route
sidebar_label: Talismans
slug: /talismans
---

## Introduction

This route fetches a list of all talismans that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the Talisman |
| name         | `string` | Name of the Talisman |
| image         | `string` | Image URL of the Talisman icon |
| description         | `string` | Short description of the Talisman |
| effects        | `string` | What happens when we equip this Talisman |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69dfff40l0i2soo71h481xlxzx8i",
      name: "Arrow's Reach Talisman",
      image: "https://eldenring.fanapis.com/images/talismans/17f69dfff40l0i2soo71h481xlxzx8i.png",
      description: "A talisman depicting three arrows. Carried by hunters of beasts.",
      effect: "Increases bow effective range."
    },
    {
      id: "17f69c74ab1l0i2sp8u8ehul0cxenh",
      name: "Axe Talisman",
      image: "https://eldenring.fanapis.com/images/talismans/17f69c74ab1l0i2sp8u8ehul0cxenh.png",
      description: "A talisman depicting an axe and a warrior. Enhances charge attacks.",
      effect: "Enhances charge attacks."
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/talismans | This route retrieves a list of all the talismans of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/talismans/:talisman_id | This route retrieves one **Elden Ring** talisman using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/talismans?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/talismans?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/talismans?name=Axe%20Talisman  | This parameter is used to search for fields by their names |
