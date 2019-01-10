import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, setActiveChat} from '../actions'
import * as fromChats from '../reducers';
import ChatPage from '../../../screens/ChatPage';

const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
