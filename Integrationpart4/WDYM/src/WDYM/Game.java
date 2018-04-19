package WDYM;

import java.util.Vector;

public class Game {
	
	private Vector<GameServerThread> gst = null;
	private Vector<String> usernames = null;
	private String winner = "";
	private Vector<String> cards = null; //chosen cards from the player 
	
	public Game() {
		gst = new Vector<GameServerThread>(3);
		usernames = new Vector<String>(3);
		usernames.add("Player1");
		usernames.add("Player2");
		usernames.add("Player3");
	}
	
	public boolean addPlayer(GameServerThread gs) {
		gst.add(gs);
		if(gst.size()==1) {
			int index = gst.size()-1;
			gst.get(index).setJudge(true);
			return true;
		}
		return false;
	}
	
	public void updatePlayers() {
		if(usernames.size()<=1) {
			System.out.println("Setting username to nothing");
			usernames.set(0, "no users yet");
		}
		else{
			for(int index=0; index<gst.size();index++) { 
				System.out.println("Setting username: " + gst.get(index).getUsername());
				usernames.set(index, gst.get(index).getUsername());
				System.out.println("set");
			}
		}
		for(int i=0;i<gst.size();i++) {
			gst.get(i).setAllPlayers(usernames);
		}
	}
	
	public Vector<GameServerThread> getPlayers(){
		return gst;
	}
		
	public void addUsername(String name) {
		usernames.add(name);
	}
	
	public Vector<String> getUsernames(){
		return usernames;
	}
	
	public void setWinner(String winner)
	{
		this.winner = winner;
	}
	public String getWinner()
	{
		return this.winner;
	}
	public void setCards(String newcard)
	{
		this.cards.add(newcard);
	}
	
	public Vector<String> getCards()
	{
		return this.cards;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
