---
id: items
title: Items Route
sidebar_label: Items
slug: /items
---

## Introduction

This route fetches a list of all items that can be obtained in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output.

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the item |
| name         | `string` | Name of the item |
| image         | `string` | Image URL of the item icon |
| description         | `string` | Short description of the item |
| type         | `string` | Type of item |
| effect         | `string` | What the item does when given, consumed or used to upgrade things |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69e47912l0i1z0lip3kamll88h",
      name: "Blue Cipher Ring",
      image: "https://eldenring.fanapis.com/images/items/17f69e47912l0i1z0lip3kamll88h.png",
      description: "Item for online play. Puts the wearer in ready state to answer should someone in another world call for rescue. You will be summoned to their world as a hunter. When summoned to rescue another player, your objective will be to defeat the invader.",
      type: "Reusable",
      effect: "Enables the wearer to answer calls for rescue"
    },
    {
      id: "17f69cb5ad0l0i1z0lpxlgghg1a5nd",
      name: "White Cipher Ring",
      image: "https://eldenring.fanapis.com/images/items/17f69cb5ad0l0i1z0lpxlgghg1a5nd.png",
      description: "Item for online play. Allows you to automatically request for a hunter from another world to come to your rescue when your world is invaded. (You may be unable to summon rescuers under certain circumstances). A lost mystic code, enchanted to take the form of a ring. One of the fetishes said to have been bestowed by the Two Fingers.",
      type: "Reusable",
      effect: "When invaded, request the aid of a hunter."
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/items | This route retrieves a list of all the items of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/items/:item_id | This route retrieves one **Elden Ring** item using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/items?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/items?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/items?name=White%20Cipher%20Ring  | This parameter is used to search for fields by their names |
