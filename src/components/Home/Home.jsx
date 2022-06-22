import React from 'react'
import css from "./Home.module.css"

export function Home() {
  return (
    <div className={css.home}>
      <h1>Cover your page.</h1>
      <h3>
        Cover is a one-page template for building simple and beautiful home pages.
        Download, edit the text, and add your own fullscreen background photo to make it your own.
      </h3>
      <button className={css.btn}>learn more</button>
    </div>
  )
}
