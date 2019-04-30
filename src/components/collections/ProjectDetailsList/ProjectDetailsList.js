import React from 'react';

// Custom imports
import { ProjectDetails } from '..';

export default ({ details }) => {
  const renderedList = details.map(block => (
    <ProjectDetails key={block.label} label={block.label} text={block.text} />
  ));

  return (
    <div>
      {renderedList}
    </div>
  );
};
