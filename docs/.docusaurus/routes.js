
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','d90'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','a25'),
  exact: true,
},
{
  path: '/blog/tags/api',
  component: ComponentCreator('/blog/tags/api','6a1'),
  exact: true,
},
{
  path: '/blog/tags/documentation',
  component: ComponentCreator('/blog/tags/documentation','ba8'),
  exact: true,
},
{
  path: '/blog/tags/release',
  component: ComponentCreator('/blog/tags/release','fbc'),
  exact: true,
},
{
  path: '/blog/v1-release',
  component: ComponentCreator('/blog/v1-release','581'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','7be'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','f50'),
  exact: true,
},
{
  path: '/docs/ammos',
  component: ComponentCreator('/docs/ammos','d1c'),
  exact: true,
},
{
  path: '/docs/armors',
  component: ComponentCreator('/docs/armors','64f'),
  exact: true,
},
{
  path: '/docs/ashes',
  component: ComponentCreator('/docs/ashes','310'),
  exact: true,
},
{
  path: '/docs/bosses',
  component: ComponentCreator('/docs/bosses','e65'),
  exact: true,
},
{
  path: '/docs/classes',
  component: ComponentCreator('/docs/classes','80c'),
  exact: true,
},
{
  path: '/docs/creatures',
  component: ComponentCreator('/docs/creatures','d60'),
  exact: true,
},
{
  path: '/docs/graphql',
  component: ComponentCreator('/docs/graphql','1cc'),
  exact: true,
},
{
  path: '/docs/incantations',
  component: ComponentCreator('/docs/incantations','c0f'),
  exact: true,
},
{
  path: '/docs/items',
  component: ComponentCreator('/docs/items','7b5'),
  exact: true,
},
{
  path: '/docs/locations',
  component: ComponentCreator('/docs/locations','b09'),
  exact: true,
},
{
  path: '/docs/npcs',
  component: ComponentCreator('/docs/npcs','ff7'),
  exact: true,
},
{
  path: '/docs/shields',
  component: ComponentCreator('/docs/shields','a02'),
  exact: true,
},
{
  path: '/docs/sorceries',
  component: ComponentCreator('/docs/sorceries','c20'),
  exact: true,
},
{
  path: '/docs/spirits',
  component: ComponentCreator('/docs/spirits','8d6'),
  exact: true,
},
{
  path: '/docs/talismans',
  component: ComponentCreator('/docs/talismans','5fa'),
  exact: true,
},
{
  path: '/docs/weapons',
  component: ComponentCreator('/docs/weapons','13a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
