import React from 'react';

const Description = (props: { items: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
      <h2>{props.items}</h2>
    )
  }

export default Description;