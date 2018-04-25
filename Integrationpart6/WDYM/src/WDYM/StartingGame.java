package WDYM;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.net.Socket;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import Messages.Message;
import Messages.ReturnUserListMessage;

/**
 * Servlet implementation class StartingGame
 */
@WebServlet("/StartingGame")
public class StartingGame extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private ObjectInputStream ois=null;
	private ObjectOutputStream oos=null;
	BufferedReader br;


	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("username");
		System.out.println("hi im gonna print the username again:");
		System.out.println(username);
		boolean isJudge;
//		boolean isJudge = g.addPlayer(new GameServerThread(username));
//		g.addUsername(username);
		try {
			Socket s = new Socket("localhost", 6789);
			this.oos = new ObjectOutputStream(s.getOutputStream());
			this.ois = new ObjectInputStream(s.getInputStream());
			br = new BufferedReader(new InputStreamReader(s.getInputStream()));
			
			sendMessage("isJudge");
			String m = (String) ois.readObject();
			if(m.equals("yesIsJudge")) {
				isJudge=true;
			}
			else {
				isJudge=false;
			}
			
			Vector<String> userList=null;
			sendMessage("needUserList");
			Message msg = (Message) ois.readObject();
			if(msg instanceof ReturnUserListMessage) {
				userList = ((ReturnUserListMessage) msg).getUserList();
			}
			
			System.out.println("Printing usernames: ");
			for(int i=0; i<userList.size();i++) {
				System.out.println(userList.get(i));
			}
	
			if(isJudge) {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("judge");
				out.write(js);
			}
			else {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("player");
				out.write(js);
			}
	//		System.out.println(g.getUsernames().get(0));
	//		System.out.println("Printing usernames: ");
	//		for(int i=0; i<g.getUsernames().size();i++) {
	//			System.out.println(g.getUsernames().get(i));
	//		}
		}
		catch(IOException ioe) {
			System.out.println("ioe in StartingGame: " + ioe.getMessage());
		} catch (ClassNotFoundException e) {
			System.out.println("cnfe in StartingGame: " + e.getMessage());
		}
	
	}
	
	
	public void sendMessage(String message) {
		try {
			if(oos!=null) {
				oos.writeObject(message);
				oos.flush();
			}
		}
		catch(IOException ioe) {
			System.out.println("ioe in Signin: " + ioe.getMessage());
		}
	}

}
