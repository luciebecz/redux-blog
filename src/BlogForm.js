import React from 'react';
import { connect } from 'react-redux';

const BlogForm = ({dispatch, nextId }) => {
  let blogContent;
  let blogText;

  return (
    <div>
      <h3>Add a Blog</h3>
      <form 
        onSubmit={ e => {
          e.preventDefault();
          dispatch({ 
            type: 'ADD_BLOG', 
            blog: { name: blogText.value, content: blogContent.value, id: nextId}
          })
          dispatch({ type: 'INC_ID' })
          blogText.value = null;
          blogContent.value = null;
        }}
      >
        <input ref={ n => blogText = n } placeholder='Blog Name'/>
        <input ref={ c => blogContent = c } placeholder='Blog Content'/>
        <input type='submit' className='btn' />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { nextId: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);