class MessageFactory {
    static parse(buffer) {
        const buf = new SerialBuffer(buffer);
        const type = Message.peekType(buf);
        const clazz = MessageFactory.CLASSES[type];
        if (!clazz || !clazz.unserialize) throw `Invalid message type: ${type}`;
        return clazz.unserialize(buf);
    }
}
/**
 * @dict 
 * @type {object}
 */
MessageFactory.CLASSES = {};
MessageFactory.CLASSES[Message.Type.VERSION] = VersionMessage;
MessageFactory.CLASSES[Message.Type.INV] = InvMessage;
MessageFactory.CLASSES[Message.Type.GET_DATA] = GetDataMessage;
MessageFactory.CLASSES[Message.Type.NOT_FOUND] = NotFoundMessage;
MessageFactory.CLASSES[Message.Type.BLOCK] = BlockMessage;
MessageFactory.CLASSES[Message.Type.TX] = TxMessage;
MessageFactory.CLASSES[Message.Type.GET_BLOCKS] = GetBlocksMessage;
MessageFactory.CLASSES[Message.Type.MEMPOOL] = MempoolMessage;
MessageFactory.CLASSES[Message.Type.REJECT] = RejectMessage;
MessageFactory.CLASSES[Message.Type.ADDR] = AddrMessage;
MessageFactory.CLASSES[Message.Type.GET_ADDR] = GetAddrMessage;
MessageFactory.CLASSES[Message.Type.PING] = PingMessage;
MessageFactory.CLASSES[Message.Type.PONG] = PongMessage;
MessageFactory.CLASSES[Message.Type.SIGNAL] = SignalMessage;
MessageFactory.CLASSES[Message.Type.GET_CHAIN_PROOF] = GetChainProofMessage;
MessageFactory.CLASSES[Message.Type.CHAIN_PROOF] = ChainProofMessage;
MessageFactory.CLASSES[Message.Type.GET_ACCOUNTS_PROOF] = GetAccountsProofMessage;
MessageFactory.CLASSES[Message.Type.ACCOUNTS_PROOF] = AccountsProofMessage;
Class.register(MessageFactory);
