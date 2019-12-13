import React from "react"

import styles from "./styles.module.css"

interface IExternalLinkPreviewProps {
  url: string
  title: string
  description: string
  image: string
}

function ExternalLinkPreview({
  url,
  title,
  description,
  image,
}: IExternalLinkPreviewProps) {
  return (
    <a href={url}>
      <section>
        <div>
          <h4>{title}</h4>
          <div>{description}</div>
          <div>{url}</div>
        </div>
        <div>
          <img src={image} />
        </div>
      </section>
    </a>
  )
}

export default ExternalLinkPreview
