import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import 'file-upload-with-preview/dist/style.css';
import { Events, FileUploadWithPreview } from 'file-upload-with-preview';

import uploadLogo from './custom-image.svg';

export default function ImageUploader({ onChange }) {
  useEffect(() => {
    const upload = new FileUploadWithPreview('my-unique-id', {
      images: {
        backgroundImage: { uploadLogo },
      },
      maxFileCount: 5,
      multiple: true,
      text: {
        browse: 'Choose',
        chooseFile: 'Take your pick...',
        label: 'Choose Product Images to Upload',
      },
    });
    console.log(upload);
  }, []);

  window.addEventListener(Events.IMAGE_ADDED, (e) => {
    const { detail } = e;
    onChange(detail.cachedFileArray);
  });

  window.addEventListener(Events.IMAGE_DELETED, (e) => {
    const { detail } = e;
    onChange(detail.cachedFileArray);
  });

  return <div className="custom-file-container" data-upload-id="my-unique-id" />;
}

ImageUploader.propTypes = { onChange: PropTypes.func };
