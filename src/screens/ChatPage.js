import React from 'react';

import Sidebar from '../components/Sidebar';
import ChatHeader from '../components/ChatHeader';
import Chat from '../components/Chat';
import ErrorMessage from '../components/ErrorMessage';

class ChatPage extends React.Component {
  componentDidMount() {
    const {
      fetchAllChats,
      fetchMyChats,
      match,
      setActiveChat,
      socketsConnect,
      mountChat,
    } = this.props;
    Promise.all([fetchAllChats(), fetchMyChats()])
      .then(() => {
        socketsConnect();
      })
      .then(() => {
        const { chatId } = match.params;
        if (chatId) {
          setActiveChat(chatId);
          mountChat(chatId);
        }
      });
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: { params },
      setActiveChat,
      mountChat,
      unmountChat,
    } = this.props;
    const { params: nextParams } = nextProps.match;

    if (nextParams.chatId && params.chatId !== nextParams.chatId) {
      setActiveChat(nextParams.chatId);
      unmountChat(params.chatId);
      mountChat(params.chatId);
    }
  }

  render() {
    const {
      logout,
      chats,
      activeUser,
      createChat,
      joinChat,
      leaveChat,
      deleteChat,
      sendMessage,
      messages,
      editUser,
      error,
      isConnected,
    } = this.props;
    return (
      <>
        <ChatHeader
          isConnected={isConnected}
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar chats={chats} createChat={createChat} isConnected={isConnected} />
        <Chat
          isConnected={isConnected}
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
        <ErrorMessage error={error} />
      </>
    );
  }
}

export default ChatPage;
