import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script>!function(e,n){function t(e){const t=function(e){const t=n.createElement("link");return t.rel="prerender",t.href=e,t}(e);n.head.appendChild(t)}function r(e){e.removeEventListener("mouseenter",o,!1)}function o(o){const c=o.target,{href:i}=c,u=new URL(i),f=u.href;!function(e){return!!n.head.querySelector(`link[rel="prerender"][href="${e}"]`)}(f)&&function(n){const{host:t}=e.location;return n.host===t}(u)?(t(f),r(c)):r(c)}function c(e){e.addEventListener("mouseenter",o,!1)}n.querySelectorAll("a").forEach(c)}(window,window.document);</script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
