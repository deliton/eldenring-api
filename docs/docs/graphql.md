---
id: graphql
title: GraphQL Endpoint
sidebar_label: Usage
slug: /graphql
---

That's it, we support GraphQL out of the box. Just go to https://eldenring.fanapis.com/api/graphql and use the Apollo GraphQL sandbox. By using GraphQL you have access to all of its schema and resolvers, so it should be easy to explore on your own. Below, we'll see a few examples using the new GraphQL endpoint. 

## Route

- `POST` at https://eldenring.fanapis.com/api/graphql

## Example 1

:::note

Here we are tryng to fetch some items, and we want to display their `name`, `description` and an `image`

:::

### GraphQL Query
```javascript
query {
	item {
    name,
    description,
    image
  }
}
```

### Result
```javascript
{
  "data": {
    "item": [
      {
        "name": "Blue Cipher Ring",
        "description": "Item for online play. Puts the wearer in ready state to answer should someone in another world call for rescue. You will be summoned to their world as a hunter. When summoned to rescue another player, your objective will be to defeat the invader.",
        "image": "https://eldenring.fanapis.com/images/items/17f69e47912l0i1z0lip3kamll88h.png"
      },
      {
        "name": "White Cipher Ring",
        "description": "Item for online play. Allows you to automatically request for a hunter from another world to come to your rescue when your world is invaded. (You may be unable to summon rescuers under certain circumstances). A lost mystic code, enchanted to take the form of a ring. One of the fetishes said to have been bestowed by the Two Fingers.",
        "image": "https://eldenring.fanapis.com/images/items/17f69cb5ad0l0i1z0lpxlgghg1a5nd.png"
      },
      {
        "name": "Furlcalling Finger Remedy",
        "description": "Item for online play. Craftable item. Reveals cooperative and competitive multiplayer signs. Co-op summoning signs will be shown in gold, while hostile summoning signs will be shown in red. Multiplayer begins when you summon a player from another world through their sign.",
        "image": "https://eldenring.fanapis.com/images/items/17f69bc7c03l0i1z0m2oonn1paf7l9.png"
      },
      {
        "name": "Tarnished's Furled Finger",
        "description": "Item for online play. Creates a summon sign for cooperative multiplayer. Your objective will be to defeat the area boss of the world to which you were summoned. A finger of corpse wax, furled like a hook. It is a relic of those who came before, left to help those who would come after.",
        "image": "https://eldenring.fanapis.com/images/items/17f69d424cel0i1z0mj267csnydppy.png"
      },
      {
        "name": "Finger Severer",
        "description": "Item for online play.",
        "image": "https://eldenring.fanapis.com/images/items/17f698fa494l0i1z0mm3upwg29zx1p.png"
      },
      {
        "name": "Duelist's Furled Finger",
        "description": "Item for online play. Creates a summon sign for competitive multiplayer. Your objective will be to defeat the Host of Fingers of the world to which you were summoned. A finger of corpse wax, furled like a hook. The bronze adornments are the mark of a duelist.",
        "image": "https://eldenring.fanapis.com/images/items/17f696e0825l0i1z1b0yp9snq79rx9.png"
      },
      {
        "name": "Memory Of Grace",
        "description": "A phantom vision of the first grace, which once guided the Tarnished to the Lands Between. Lose all runes and return to last site of grace at which you rested. It all repeats. Be seen by the Elden Ring. Become the Elden Lord.",
        "image": "https://eldenring.fanapis.com/images/items/17f69cd0b30l0i1z1b1wxix8w3nd5m.png"
      }
    ]
  }
}
```

## Example 2

:::note

Here we are tryng to fetch a boss whose name is "Malenia, Blade of Miquella". We want to display the boss's id, name, description and image

:::

### GraphQL Query
```javascript
query {
	boss(name: "Malenia, Blade Of Miquella") {
	id,
    name,
    description,
    image
  }
}
```

### Result
```javascript
{
  "data": {
    "boss": [
      {
		"id": "17f69a48308l0i1ux3rigvv37tx84f",
        "name": "Malenia, Blade Of Miquella",
        "description": "...Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.",
        "image": "https://eldenring.fanapis.com/images/bosses/17f69a48308l0i1ux3rigvv37tx84f.png"
      }
    ]
  }
}
```

## Example 3

:::note

Here we are tryng to fetch an armor by armorId, and return its name and description

:::

### GraphQL Query
```javascript
query {
	getArmor(id: "17f696e0685l0i0nblzy58h0qvewk") {
    name,
    description
  }
}

```

### Result
```javascript
{
  "data": {
    "getArmor": {
      "name": "All-knowing Greaves",
      "description": "Greaves set with countless eyes and ears. Worn by Gideon Ofnir, the All-Knowing. Knowledge begins with the recognition of one's ignorance. The realization that the search for knowledge is unending. But when Gideon glimpsed into the will of Queen Marika, he shuddered in fear. At the end that should not be."
    }
  }
}
```
