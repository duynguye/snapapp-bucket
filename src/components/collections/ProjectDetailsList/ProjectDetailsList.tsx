import React from 'react';

// Custom imports
import { ProjectDetails } from '../';

interface IDetail {
  label: string;
  text: string;
}

export default ({ details }: { details: Array<IDetail> }) => {
  const renderedList = details.map(block => (
    <ProjectDetails key={block.label} label={block.label} text={block.text} />
  ));

  return (
    <div>
      { renderedList }
    </div>
  );
};
