import React from 'react'
// import PropTypes from 'prop-types'

function Article(props) {
  return (
    <div>
        <h2>Article</h2>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

// Article.propTypes = {}

export default Article
