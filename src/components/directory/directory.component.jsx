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
          linkURL: 'hats',
        },
        {
          title: 'jackets',
          imageURL: '/img/jackets_1920.jpg',
          id: 2,
          linkURL: '',
        },
        {
          title: 'sneakers',
          imageURL: '/img/sneakers_1920.jpg',
          id: 3,
          linkURL: '',
        },
        {
          title: 'womens',
          imageURL: '/img/womens_1920.jpg',
          size: 'large',
          id: 4,
          linkURL: '',
        },
        {
          title: 'mans',
          imageURL: '/img/mens_1920.jpg',
          size: 'large',
          id: 5,
          linkURL: '',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
