import React from "react";
import { connect } from "react-redux";

class InsightsContainer extends React.Component {
  render() {
    const { artists } = this.props;
    return (
      <div>
        <h2>Insights</h2>
        <div>
          <ol>
            {artists.map(artist => (
              <li>{artist.name}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

const mapStateToProps = (state, ownProps) => {
  return {
    artists: state.artists.artists
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsightsContainer);
