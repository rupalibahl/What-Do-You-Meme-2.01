package WDYM;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.util.Vector;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.StreamCorruptedException;

import Messages.Message;

public class GameServerThread extends Thread{
	
	
	private ObjectOutputStream oos;
	private ObjectInputStream ois;

	
	private String username;
	private int points;
	private boolean judge;
	
	private Vector<String> allPlayers = new Vector<String>(3);
	
//	public GameServerThread() {
//		username ="";
//		points = 0;
//		judge = false;
//		allPlayers.set(0, "Player1");
//		allPlayers.set(1, "Player2");
//		allPlayers.set(2, "Player3");
//	}
	
	public GameServerThread(Socket s) {
		allPlayers.add("Player1");
		allPlayers.add("Player2");
		allPlayers.add("Player3");

		try {
			oos = new ObjectOutputStream(s.getOutputStream());
			ois = new ObjectInputStream(s.getInputStream());
			String user = (String) ois.readObject();
			username = user;
			points =0;
			judge=false;

		} catch (IOException e) {
			System.out.println("ioe in GameServerThread constructor: " + e.getMessage());
		} catch (ClassNotFoundException e) {
			System.out.println("cnfe in GameServerThread constructor: " + e.getMessage());
		}
		
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
	
	public void sendMessage(Message m) {
		try {
			oos.writeObject(m);
			oos.flush();
		}
		catch(IOException ioe) {
			System.out.println("ioe: " + ioe.getMessage());
		}
	}
	
	public void sendMessage(String m) {
		try {
			oos.writeObject(m);
			oos.flush();
		}
		catch(IOException ioe) {
			System.out.println("ioe in ServerThread: " +ioe.getMessage());
		}
	}
	
	public void setAllPlayers(Vector<String> allUsernames) {
		System.out.println("accessing setAllPlayers in serverthread");
		this.allPlayers = allUsernames;
		System.out.println("it should be set");
	}
	
	public void sendUserList() {
		String message1 = "";
		String message2 = "";
		String message3 = "";
		if(allPlayers.get(0)!=null) {
			message1 = allPlayers.get(0);
		}
		if(allPlayers.get(1)!=null) {
			message2 = allPlayers.get(1);
		}
		if(allPlayers.get(2)!=null) {
			message3 = allPlayers.get(2);
		}
		try {
			System.out.println("Sending message: " + message1);
			sendMessage(message1);
			String returnedMessage = (String) ois.readObject();
			if(returnedMessage.equals("nametwo")) {
				System.out.println("Sending message: " + message2);
				sendMessage(message2);
			}
			returnedMessage = (String) ois.readObject();
			if(returnedMessage.equals("namethree")) {
				System.out.println("Sending message: " + message3);
				sendMessage(message3);
			}
		}
		catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in serverthread sendUserList" + cnfe.getMessage());
		}
		catch(IOException ioe) {
			System.out.println("ioe in serverthread sendUserList" + ioe.getMessage());
		}



	}
	
	public void run() {
		try {
			while(true) {
				String m = (String) ois.readObject();

				parseMessage(m);
			}
		} catch (IOException ioe) {
			System.out.println("ioe in ServerThread.run(): " + ioe.getMessage());
		} catch (ClassNotFoundException cnfe) {
			System.out.println("cnfe: " + cnfe.getMessage());
		}
	}
	
	public void parseMessage(String m) {
		System.out.println("Received message: " + m);
		if(m.equals("isJudge")) {
			if(judge) {
				sendMessage("yesIsJudge");
			}
			else {
				sendMessage("noNotJudge");
			}
		}
		if(m.equals("needUserList")) {
			sendUserList();
		}
	}
	
}
