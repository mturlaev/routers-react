import React from 'react'
import css from "./Features.module.css"

export function Features () {
    return (
        <div className={css.features}>
            <h1>mturlaev</h1>
      <h3>
        Cover is a one-page template for building simple and beautiful home pages.
        Download, edit the text, and add your own fullscreen background photo to make it your own.
      </h3>
      <button className={css.btn}>learn more</button>
        </div>
    )
}