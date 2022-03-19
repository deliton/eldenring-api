---
id: bosses
title: Bosses Route
sidebar_label: Bosses
slug: /bosses
---

## Introduction

This route fetches a list of all the bosses that can be encountered in Elden Ring, and outputs that in JSON format. The user can define his own pagination and also use search queries to find the desired output. 

## Schema

| ATTRIBUTE        |      TYPE      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| id         | `string` | Id of the boss |
| name         | `string` | Name of the boss |
| image         | `string` | Image of the boss |
| description         | `string` | Short description of the boss |
| location         | `string` | Where is the boss located |
| drops         | `string[]` | List of items and spoils this boss drops |
| healthPoints         | `string` | How much HP this boss has |

## Sample Result

```javascript
{
  success: true,
  count: 2,
  data: [{
      id: "17f69590896l0i1ul0hnmor8iyf9xd",
      name: "Ancestor Spirit",
      image: "https://eldenring.fanapis.com/images/bosses/17f69590896l0i1ul0hnmor8iyf9xd.png",
      description: "A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets.",
      location: "Siofra River",
      drops: [
        "13.000 Runes",
        "Ancestral Follower Ashes"
      ],
      healthPoints: "???"
    },
    {
      id: "17f69878c4al0i1ul0i7dsfou8igrk",
      name: "Ancient Hero Of Zamor",
      image: "https://eldenring.fanapis.com/images/bosses/17f69878c4al0i1ul0i7dsfou8igrk.png",
      description: "Noticeably agile, frost-made creature suceptible to magic attacks.",
      location: "Weeping Evergaol, Giant-Conquering Hero's Grave",
      drops: [
        "5,400 Runes",
        "Radagon's Scarseal",
        "83,000 Runes",
        "Zamor Curved Sword",
        "Zamor Mask",
        "Zamor Armor",
        "Zamor Bracelets",
        "Zamor Legwraps"
      ],
      healthPoints: " 2200"
    }
  ]
}
```


## Route

| METHOD        |      URL      |   DESCRIPTION |
| ------------- | :-----------: | -----: |
| `GET`         | https://eldenring.fanapis.com/api/bosses | This route retrieves a list of all the bosses of **Elden Ring**. |
| `GET`         | https://eldenring.fanapis.com/api/bosses/:boss_id | This route retrieves one **Elden Ring** boss using its ID. |

## Parameters

This route supports the following parameters:

| Parameter        |      default value      | Example URL |  DESCRIPTION |
| ------------- | :-----------: | -----: |  -----: |
| `limit`        | 20 | https://eldenring.fanapis.com/api/bosses?limit=100 | This parameter is used to set the maximum amount of items in the response |
| `page`         | 0 | https://eldenring.fanapis.com/api/bosses?limit=20&page=3 | This parameter is used no navigate between pages of results |
| `name`         | none | https://eldenring.fanapis.com/api/bosses?name=Ancestor%20Spirit  | This parameter is used to search for fields by their names |
