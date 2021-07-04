const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageURL: '/img/hat_1920.jpg',
      id: 1,
      linkURL: 'shop/hats',
    },
    {
      title: 'jackets',
      imageURL: '/img/jackets_1920.jpg',
      id: 2,
      linkURL: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageURL: '/img/sneakers_1920.jpg',
      id: 3,
      linkURL: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageURL: '/img/womens_1920.jpg',
      size: 'large',
      id: 4,
      linkURL: 'shop/womens',
    },
    {
      title: 'mens',
      imageURL: '/img/mens_1920.jpg',
      size: 'large',
      id: 5,
      linkURL: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
