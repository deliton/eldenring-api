export default {
  "title": "Elden Ring API",
  "tagline": "The ultimate fan-made Elden Ring API!",
  "url": "https://docs.eldenring.fanapis.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/eldenring-rune-icon.png",
  "organizationName": "FANAPIS",
  "projectName": "Elden Ring API",
  "themeConfig": {
    "navbar": {
      "title": "Elden Ring API - Docs",
      "logo": {
        "alt": "Elden Ring API logo",
        "src": "img/eldenring-rune-icon.png"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/deliton/eldenring-api",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "copyright": "This site is not filiate nor funded by FromSoftware. It was made with the sole purpose of fun and knowledge. Elden Ring API 2022. Built with Docusaurus."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/mnt/c/Users/delit/Documents/codes/deliton/eldenring-api/docs/sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/mnt/c/Users/delit/Documents/codes/deliton/eldenring-api/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};