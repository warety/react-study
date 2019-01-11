import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchAllChats, fetchMyChats, setActiveChat, createChat, deleteChat, joinChat, leaveChat } from '../actions'
import { editUser, logout } from '../../auth/actions';
import { sendMessage, mountChat, unmountChat, socketsConnect } from '../../sockets/actions';
import * as fromChats from '../reducers';
import * as fromState from '../../store/reducers';
import { getChatError, getIsConnected } from '../../services/reducers';
import ChatPage from '../../../screens/ChatPage';

const mapStateToProps = state => {
  const activeChat = fromChats.getById(state.chats, state.chats.activeId);
  return {
    isAuth: state.auth.isAuth,
    activeUser: {
      ...state.auth.user,
      isMember: fromState.isMember(state, activeChat),
      isCreator: fromState.isCreator(state, activeChat),
      isChatMember: fromState.isChatMember(state, activeChat),
    },
    chats: {
      active: activeChat,
      my: fromChats.getByIds(state.chats, state.chats.myIds),
      all: fromChats.getByIds(state.chats, state.chats.allIds),
    },
    messages: state.messages,
    error: getChatError(state),
    isConnected: getIsConnected(state),
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat,
  createChat,
  deleteChat,
  editUser,
  joinChat,
  leaveChat,
  logout,
  sendMessage, 
  mountChat, 
  unmountChat, 
  socketsConnect,
}, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
