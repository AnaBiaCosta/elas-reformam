import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap');

  body * {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn,
  em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,
  details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after {
    content: '';
    content: none;
  }

  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #app, main, .container {
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
  }

  greg-modal{
    z-index: 100;
  }

  greg-alert{
    z-index: 101;
  }
`
