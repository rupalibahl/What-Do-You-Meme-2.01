package WDYM;

import java.util.Vector;

public class Game {
	
	private Vector<GameServerThread> gst = null;
	private Vector<String> usernames = null;
	
	public Game() {
		gst = new Vector<GameServerThread>(3);
		usernames = new Vector<String>(3);
	}
	
	public boolean addPlayer(GameServerThread gs) {
		gst.add(gs);
		if(gst.size()==1) {
			int index = gst.size()-1;
			gst.get(index).setJudge(true);
			return true;
		}
		else return false;
	}
	
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
