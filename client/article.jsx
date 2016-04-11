"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class Article extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

	render() {
		const {editorState} = this.state;
		return <Editor editorState={editorState} onChange={this.onChange} />;
	}

}

module.exports = Article;