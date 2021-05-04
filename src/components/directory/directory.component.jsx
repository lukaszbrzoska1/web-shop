import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageURL: '/img/hat_1920.jpg',
          id: 1,
        },
        {
          title: 'jackets',
          imageURL: '/img/jackets_1920.jpg',
          id: 2,
        },
        {
          title: 'sneakers',
          imageURL: '/img/sneakers_1920.jpg',
          id: 3,
        },
        {
          title: 'womens',
          imageURL: '/img/womens_1920.jpg',
          size: 'large',
          id: 4,
        },
        {
          title: 'mans',
          imageURL: '/img/mens_1920.jpg',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id, size }) => (
          <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
