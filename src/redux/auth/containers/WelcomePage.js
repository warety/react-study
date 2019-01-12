import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, login } from '../actions';
import WelcomePage from '../../../screens/WelcomePage';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  error: state.services.errors.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    signup,
    login,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
