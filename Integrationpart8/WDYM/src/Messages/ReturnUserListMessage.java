package Messages;

import java.util.Vector;

public class ReturnUserListMessage extends Message{

	private Vector<String> userList;
	public ReturnUserListMessage(Vector<String> ul) {
		userList = ul;
	}
	
	public Vector<String> getUserList(){
		return userList;
	}
	

}
