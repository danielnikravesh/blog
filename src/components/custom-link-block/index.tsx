import React from 'react';

interface ICustinLinkBlock {
  href: string;
  title: string;
  description: string;
  image: string;
  hrefTextOnly: string;
}

function CustomLinkBlock({
  href,
  title,
  description,
  image,
  hrefTextOnly
}: ICustinLinkBlock) {
  return (
    <a href={href} className="external-link-preview">
      <section className="elp-content-holder">
        <div className="elp-description-holder">
          <h4 className="elp-title">{title}</h4>
          <div className="elp-description">{description}</div>
          <div className="elp-link">{hrefTextOnly}</div>
        </div>
        <div className="elp-image-holder">
          <img src={image} />
        </div>
      </section>
    </a>
  );
}

export default CustomLinkBlock;
