const TYPES = {
  SOCKETS_CONNECTION_REQUEST: Symbol('SOCKETS_CONNECTION_REQUEST'),
  SOCKETS_CONNECTION_SUCCESS: Symbol('SOCKETS_CONNECTION_SUCCESS'),
  SOCKETS_CONNECTION_FAILURE: Symbol('SOCKETS_CONNECTION_FAILURE'),

  SOCKETS_CONNECTION_MISSING: Symbol('SOCKETS_CONNECTION_MISSING'),

  MOUNT_CHAT: Symbol('MOUNT_CHAT'),
  UNMOUNT_CHAT: Symbol('UNMOUNT_CHAT'),

  SEND_MESSAGE: Symbol('SEND_MESSAGE'),
  RECIEVE_MESSAGE: Symbol('RECIEVE_MESSAGE'),
  RECIEVE_NEW_CHAT: Symbol('RECIEVE_NEW_CHAT'),
  RECIEVE_DELETED_CHAT: Symbol('RECIEVE_DELETED_CHAT'),
}

export default TYPES