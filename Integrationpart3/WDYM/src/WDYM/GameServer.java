package WDYM;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.URL;
import java.net.URLConnection;
import java.util.Vector;

public class GameServer {
	
	private Game g = new Game();
	
	public GameServer() {
		try {
			int port = 6789;
			ServerSocket ss = new ServerSocket(port);
			while(true) {
				System.out.println("Waiting for connection...");
				Socket s = ss.accept();
				System.out.println("accepted");
				GameServerThread gsthread = new GameServerThread(s); 
				boolean temp =g.addPlayer(gsthread);
				System.out.println("Current players: ");
				for(int i =0; i<g.getPlayers().size(); i++) {
					System.out.println(g.getPlayers().get(i).getUsername());
				}
				g.updatePlayers();
				gsthread.start();
				System.out.println("done with this thread");
			}
			
		} catch (IOException e) {
			System.out.println("ioe in GameServer: " + e.getMessage());
		}
		finally {
		}
	}
	
	public static void main(String[] args) {
		GameServer gs = new GameServer();

	}

}
