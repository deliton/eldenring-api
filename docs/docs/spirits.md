---
id: spirits
title: Spirits Route
sidebar_label: Spirits
slug: /spirits
---

## Introduction

This route fetches a list of all spirits that can be obtained and summoned in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the spirit |
| name         | `string` | Name of the spirit |
| image         | `string` | Image URL of the spirit icon |
| description         | `string` | Short description of the spirit |
| fpCost         | `number` | Cost in FP to summon this spirit once |
| hpCost         | `number` | Cost in HP to summon this spirit once |
| effects        | `string` | What happens when we summon this spirit |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69ac4bd0l0i2rc618tsrggfp3kh",
      name: "Banished Knight Oleg",
      image: "https://eldenring.fanapis.com/images/spirits/17f69ac4bd0l0i2rc618tsrggfp3kh.png",
      description: "Ashen remains in which spirits yet dwell. Use to summon the spirit of Oleg, the Banished Knight.",
      fpCost: "100",
      hpCost: "0",
      effect: "Summons Banished Knight Oleg spirit"
    },
    {
      id: "17f69beb243l0i2rcptdnjy0wl2nxj",
      name: "Demi-human Ashes",
      image: "https://eldenring.fanapis.com/images/spirits/17f69beb243l0i2rcptdnjy0wl2nxj.png",
      description: "Ashen remains in which spirits yet dwell. Use to summon the spirits of five demi-humans.",
      fpCost: "69",
      hpCost: "0",
      effect: "Summons five demi-human spirits"
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/spirits | This route retrieves a list of all the spirits of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/spirits/:spirit_id | This route retrieves one **Elden Ring** spirit using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/spirits?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/spirits?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/spirits?name=Demi-human%20Ashes  | This parameter is used to search for fields by their names |
