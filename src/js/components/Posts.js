import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, getDataSaga } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDataSaga("https://api.valentinog.com/api/link/");
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { getDataSaga }
)(Post);
