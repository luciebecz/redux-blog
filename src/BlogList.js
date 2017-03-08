import React from 'react';
import { connect } from 'react-redux';

const BlogList = ({ blogs }) => (
    <ul>
      { blogs.map((blog) => {
        return (
          <li key={blog.id}>
            {blog.name}
            {blog.content}
          </li>
      )
      })
    }
    </ul>
  )

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList); 