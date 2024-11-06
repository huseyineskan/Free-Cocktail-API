# Free Cocktail API with React

We are coding a cocktail application with React using the free API https://www.thecocktaildb.com/api.php.

## Description

React-lazy-load-image-component has been added for the cocktail image in the project. You can access other usage features from this address https://www.npmjs.com/package/react-lazy-load-image-component.

## Features

- We store the `id`, `name` and `image` information we need for the data retrieved from the API in `data/db.json` with json-server.
- You can get cocktail information randomly.
- All displayed cocktails are shown under the All past cocktails menu.
- Liked cocktails are shown on the My Favorites page.
- Cocktails can be cleaned individually or in bulk.
- Responsive design.

## Data Example

src/data/db.json

```
{
  "myfavorites": [
    {
      "id": "12690",
      "name": "Lassi - A South Indian Drink",
      "img": "https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg"
    },
    {
      "id": "12754",
      "name": "Sex on the Beach",
      "img": "https://www.thecocktaildb.com/images/media/drink/fi67641668420787.jpg"
    }
  ],
  "allpastcocktails": [
    {
      "id": "13056",
      "name": "Wine Cooler",
      "img": "https://www.thecocktaildb.com/images/media/drink/yutxtv1473344210.jpg"
    },
    {
      "id": "14578",
      "name": "Amaretto Sunrise",
      "img": "https://www.thecocktaildb.com/images/media/drink/akcpsh1493070267.jpg"
    },
    {
      "id": "178342",
      "name": "Gin and Soda",
      "img": "https://www.thecocktaildb.com/images/media/drink/nzlyc81605905755.jpg"
    }
  ]
}

```

## Screnshots

![Get a drink](https://github.com/huseyineskan/Free-Cocktail-API/blob/main/src/img/get-a-drink.png)

![All Past Cocktails](https://github.com/huseyineskan/Free-Cocktail-API/blob/main/src/img/all-past-cocktails.png)

![My Favorites](https://github.com/huseyineskan/Free-Cocktail-API/blob/main/src/img/my-favorites.png)
