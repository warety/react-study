import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { recieveAuth } from '../actions';
import { withRouter, Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
  componentDidMount() {
    this.props.recieveAuth();
  }

  render() {
    const { component: Component, isAuth, ...rest } = this.props;

    return (
      <Route {...rest} render={props => (
        isAuth ? (
          <Component {...props} />
        ) : (
            <Redirect to={{
              pathname: '/welcome',
              state: { from: props.location }
            }} />
          )
      )} />
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  recieveAuth
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute));
