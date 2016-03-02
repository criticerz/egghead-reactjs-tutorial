var React = require('react');
var SearchGithub = require('./SearchGithub');

var Main = React.createClass({
  componentDidMount: function() {

  },
  render: function() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;