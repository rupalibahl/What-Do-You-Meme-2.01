package WDYM;

public class GameServerThread extends Thread{
	
	private String username;
	private int points;
	private boolean judge;
	public GameServerThread() {
		username ="";
		points = 0;
		judge = false;
		
	}
	
	public GameServerThread(String n) {
		username=n;
		points =0;
		judge = false;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String name) {
		username = name;
	}
	
	public int getPoints() {
		return points;
	}
	
	public void incrementPoints() {
		points++;
	}
	
	public boolean getJudge() {
		return judge;
	}
	
	public void setJudge(boolean j) {
		judge = j;
	}
}
