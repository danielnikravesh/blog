import React from "react";

import styles from "./styles.module.css";

export default function SubscribeForm() {
  return (
    <form
      className={styles.form}
      action="https://sweedom.us10.list-manage.com/subscribe/post?u=a08bf93caae4063c4e6a351f6&amp;id=24c0ecc49a"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
    >
      <input
        className={styles.input}
        type="email"
        name="EMAIL"
        id="mce-EMAIL"
        placeholder="email address"
        required={true}
      />

      {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
        <input
          type="text"
          name="b_a08bf93caae4063c4e6a351f6_24c0ecc49a"
          tabIndex={-1}
        />
      </div>

      <button
        className={styles.button}
        type="submit"
        name="subscribe"
        id="mc-embedded-subscribe"
      >
        Subscribe
      </button>
    </form>
  );
}
