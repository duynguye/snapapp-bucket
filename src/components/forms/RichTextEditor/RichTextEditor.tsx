import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactQuill, { Quill } from 'react-quill';

import { Button } from '../../buttons';
import styles from './RichTextEditor.module.scss';

const icons = Quill.import('ui/icons');
// icons['bold'] = '<i class="far fa-plus"></i>';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, false] }],
    ['bold', 'italic', 'underline', 'link'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]

export default ({ value, onChange }: any) => (
  <div className={styles.container}>
    <ReactQuill 
      className={styles.editor}
      modules={modules}
      formats={formats}
      placeholder={'Take some notes...'}
      value={value} 
      onChange={onChange} 
    />
    <Button>Add Notes</Button>
  </div>
);