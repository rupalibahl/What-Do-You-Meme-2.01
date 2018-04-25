package WDYM;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.URL;
import java.net.URLConnection;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import Messages.Message;
import Messages.ReturnUserListMessage;

/**
 * Servlet implementation class Signin
 */
@WebServlet("/Signin")
public class Signin extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ObjectInputStream ois=null;
	private ObjectOutputStream oos=null;
	BufferedReader br;
	private int memeNum=0;
//	private Socket s;


	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String whatfunction = request.getParameter("servlet");
		String winner = request.getParameter("winner");
		String card = request.getParameter("card");

		String isNewUser= "";
		isNewUser = request.getParameter("newUser");

		if(whatfunction==null) {
			System.out.println("null");
		}
		else if(whatfunction.equals("signin")) {
			signInChecker(out, username, password, isNewUser);
		}
		else if(whatfunction.equals("startinggame")){
			startingGameChecker(out, username);
		}
		else if(whatfunction.equals("waiting")) {
			waiting(out, username);
		}
		else if(whatfunction.equals("result")){
			result(out,winner);
		}
		else if(whatfunction.equals("end")){
			end(out);
		}
		else if(whatfunction.equals("playerCards")){
			addPlayerCards(out,card);
		}
		else if(whatfunction.equals("judgePicked")){
			judgePicked(out);
			
		}else if(whatfunction.equals("playerPicked")){
			playerPicked(out);
		}
		else if(whatfunction.equals("getmeme")){
			getmeme(out);
		}
		else if(whatfunction.equals("getcaptions")) {
			getcaptions(out);
		}

		
	}
	
	
	public void getcaptions(PrintWriter out) {
		String js = "first,second,third,forth,fifth,sixth";
		System.out.println("sending string: " + js);
		out.write(js);
		
//		Connection conn = null; //use this to connect to the database
//		Statement st = null; //for executing any sql command
//		PreparedStatement ps = null;
//		ResultSet rs = null; //anything that's retrieved from the database select statement. This will be a table
//		try {
//			String captionText ="";
//			Class.forName("com.mysql.jdbc.Driver");
//			conn = DriverManager.getConnection("jdbc:mysql://localhost/WDYMUsers?user=root&password=root&useSSL=false");
//			
//			
//			st = conn.createStatement();
//			ps = conn.prepareStatement("SELECT * FROM Captions ;");
//			rs=ps.executeQuery(); 
//			while(rs.next()) { 
//				captionText += rs.getString("captionText") + ",";
//
//			}
//			
//			
//			Gson gson = new GsonBuilder().setPrettyPrinting().create();
//			String js = gson.toJson(captionText);
//			System.out.println("sending meme : " +js);
//			out.write(js);
//		
//		}
//		catch (SQLException sqle) {
//			System.out.println("sqle: " + sqle.getMessage());
//		}
//		catch(ClassNotFoundException cnfe) {
//			System.out.println("cnfe in adduser: " + cnfe.getMessage());
//		}
//		finally {
//			try {
//				if(rs!=null) {
//					rs.close();
//				}
//				if(st!=null) {
//					st.close();
//				}
//				if(conn!=null) {
//					conn.close();
//				}
//			}
//			catch(SQLException sqle) {
//				System.out.println("sqle: " + sqle.getMessage());
//			}
//		}
	}
	
	//when players wait for judge to press stack/ your meme and signal the players (show meme cards on their page)
	public void getmeme(PrintWriter out)
	{
		memeNum++;
		
		
		Connection conn = null; //use this to connect to the database
		Statement st = null; //for executing any sql command
		PreparedStatement ps = null;
		ResultSet rs = null; //anything that's retrieved from the database select statement. This will be a table
		try {
			String memeLink ="";
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/WDYMUsers?user=root&password=root&useSSL=false");
			
			
			st = conn.createStatement();
			ps = conn.prepareStatement("SELECT * FROM Memes " + 
					"WHERE memesID=" + memeNum + ";");
			rs=ps.executeQuery(); 
			while(rs.next()) { 
				memeLink = rs.getString("memeLink");

			}
			
			
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String js = gson.toJson(memeLink);
			System.out.println("sending meme : " +js);
			out.write(js);
		
		}
		catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		}
		catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in adduser: " + cnfe.getMessage());
		}
		finally {
			try {
				if(rs!=null) {
					rs.close();
				}
				if(st!=null) {
					st.close();
				}
				if(conn!=null) {
					conn.close();
				}
			}
			catch(SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		
	}
	
	//when players wait for judge to pick the winner, after judge picks winner, signal players
	public void judgePicked(PrintWriter out)
	{
		
	}
	
	//when judge wait for players to pick caption cards, after players pick, signal judge
	public void playerPicked(PrintWriter out)
	{
		
	}
	//add chosen captions from the player to each game's card deck
	public void addPlayerCards(PrintWriter out, String card)
	{
		System.out.println("card: " + card);
		
		System.out.println("in add playercards");
		sendMessage("addcards");
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String js = gson.toJson(card);
		System.out.println("add playercards js : " +js);
		out.write(js);
	
	}
	
	//players use this to get the winner in the End.js
	public void end(PrintWriter out)
	{
		System.out.println("in end");
		
		try {
		//get the game winner string
		sendMessage("getWinner");
		String msg1 = (String) ois.readObject();
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String js = gson.toJson(msg1);
		System.out.println("end js : " +js);
		out.write(js);
		
		}catch(IOException ioe){
			System.out.println("ioe in end(): " + ioe.getMessage());
		}catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in end(): " + cnfe.getMessage());
		}

	}
	
	//Judge use this to set winner of the game in Judge2.js
	public void result(PrintWriter out, String winner)
	{
		System.out.println("in result");
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String js = gson.toJson(winner);
		System.out.println("result js : " +js);

		out.write(js);
		
		//send winner to serverThread
		sendMessage(winner);
	}
	
	
	public void signInChecker(PrintWriter out, String username, String password, String isNewUser) {
		System.out.println("hi?");
		System.out.println("New User? " + isNewUser);
		if(isNewUser==null) {
			System.out.println("null");
		}
		else if(isNewUser.equals("yes")) {
			if(!addNewUser(username, password)) {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("UsernameTaken");
				out.write(js);
				
			}
			else {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("Added");
				out.write(js);
				try {
					Socket s = new Socket("localhost", 6789);
					this.oos = new ObjectOutputStream(s.getOutputStream());
					this.ois = new ObjectInputStream(s.getInputStream());
					br = new BufferedReader(new InputStreamReader(s.getInputStream()));
				}
				catch(IOException ioe) {
					System.out.println("ioe in Signin.java: " + ioe.getMessage());
				}

				sendMessage(username);

			}

		}
		else if(isNewUser.equals("no")) {
			if(!loginUser(username,password)) {
			    Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("InvalidUsername");
				out.write(js);
				//send json "Incorrect" to ReactNative Client
			}
			else {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("validUsername");
				out.write(js);
				try {
					System.out.println("Making this connection");
					Socket s = new Socket("localhost", 6789);
					this.oos = new ObjectOutputStream(s.getOutputStream());
					this.ois = new ObjectInputStream(s.getInputStream());
					br = new BufferedReader(new InputStreamReader(s.getInputStream()));
					System.out.println("connection made, sending username");
					sendMessage(username);
				}
				catch(IOException ioe) {
					System.out.println("ioe in signin.java: " + ioe.getMessage());
				}

				//send json "Correct" to ReactNative client
			}
		}
	}
	
	
	public void waiting(PrintWriter out, String username) {
		System.out.println("hi im gonna print the username again:");
		System.out.println(username);
		Vector<String> userList= new Vector<String>(3);
		userList.add("Player1");
		userList.add("Player2");
		userList.add("Player3");
		try {
			sendMessage("needUserList");
			String msg1 = (String) ois.readObject();
			sendMessage("nametwo");
			String msg2 = (String) ois.readObject();
			sendMessage("namethree");
			String msg3 = (String) ois.readObject();
			userList.set(0, msg1);
			userList.set(1, msg2);
			userList.set(2, msg3);
			System.out.println("Printing usernames: ");
			for(int i=0; i<userList.size();i++) {
				System.out.println(userList.get(i));
			}
			Gson gson = new GsonBuilder().setPrettyPrinting().create();
			String temp = msg1 + ", " + msg2 + ", " + msg3;
			String js = gson.toJson(temp);
			out.write(js);

			
		}
		catch(IOException ioe) {
			System.out.println("ioe in Signin.java: " + ioe.getMessage());
		}
		catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in Signin.java: " + cnfe.getMessage());
		}
		
	}
	
	public void startingGameChecker(PrintWriter out, String username) {
		System.out.println("hi im gonna print the username again:");
		System.out.println(username);
		boolean isJudge;
//		boolean isJudge = g.addPlayer(new GameServerThread(username));
//		g.addUsername(username);
		try {
//			Socket s = new Socket("localhost", 6789);
//			this.oos = new ObjectOutputStream(s.getOutputStream());
//			this.ois = new ObjectInputStream(s.getInputStream());
//			br = new BufferedReader(new InputStreamReader(s.getInputStream()));
			
			sendMessage("isJudge");
			String m = (String) ois.readObject();
			System.out.println("returned message: " + m);
			if(m.equals("yesIsJudge")) {
				isJudge=true;
			}
			else {
				isJudge=false;
			}
			
//			Vector<String> userList= new Vector<String>(3);
//			userList.add("Player1");
//			userList.add("Player2");
//			userList.add("Player3");
//			sendMessage("needUserList");
//			String msg1 = (String) ois.readObject();
//			sendMessage("nametwo");
//			String msg2 = (String) ois.readObject();
//			sendMessage("namethree");
//			String msg3 = (String) ois.readObject();
//			userList.set(0, msg1);
//			userList.set(1, msg2);
//			userList.set(2, msg3);
//			
//			System.out.println("Printing usernames: ");
//			for(int i=0; i<userList.size();i++) {
//				System.out.println(userList.get(i));
//			}
	
			if(isJudge) {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("player");
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
	
	private boolean addNewUser(String username, String password) {
		Connection conn = null; //use this to connect to the database
		Statement st = null; //for executing any sql command
		PreparedStatement ps = null;
		ResultSet rs = null; //anything that's retrieved from the database select statement. This will be a table
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost/WDYMUsers?user=root&password=root&useSSL=false");
			
			
			st = conn.createStatement();
			ps = conn.prepareStatement("SELECT* " + 
					"FROM Login;");
			rs=ps.executeQuery(); 
			while(rs.next()) { 
				String uname = rs.getString("username");
				if(username.equals(uname)) {
					return false;
				}
			}
			
			
			st = conn.createStatement();
			st.executeUpdate("INSERT INTO Login(username, password) " + 
					"VALUES ('"+username+"','"+password+"');" );
			ps = conn.prepareStatement("SELECT* " + 
					"FROM Login");
			rs=ps.executeQuery(); 
			while(rs.next()) { 
				String uname = rs.getString("username");
				String pass = rs.getString("password");
				
				System.out.println(uname + "\t" + pass );
			}
			return true;
		
		}
		catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		}
		catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in adduser: " + cnfe.getMessage());
		}
		finally {
			try {
				if(rs!=null) {
					rs.close();
				}
				if(st!=null) {
					st.close();
				}
				if(conn!=null) {
					conn.close();
				}
			}
			catch(SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
		}
		return true;
		
		}
		
		
	private boolean loginUser(String username, String password) {
			Connection conn = null; //use this to connect to the database
			Statement st = null; //for executing any sql command
			PreparedStatement ps = null;
			ResultSet rs = null; //anything that's retrieved from the database select statement. This will be a table
			Vector<String> names = new Vector<String>();
			boolean loggedin=false;
			try {
				Class.forName("com.mysql.jdbc.Driver");
				System.out.println("hi");

				conn = DriverManager.getConnection("jdbc:mysql://localhost/WDYMUsers?user=root&password=root&useSSL=false");
				st = conn.createStatement();
				ps = conn.prepareStatement("SELECT* " + 
						"FROM Login;");
				rs=ps.executeQuery(); 
				while(rs.next() && !loggedin) { 
					String uname = rs.getString("username");
					String pass = rs.getString("password");
					names.add(uname);
					if(username.equals(uname)) {
						if(password.equals(pass)) {
							System.out.println("Logging in");
							loggedin=true;
						}
					}
					
					System.out.println(uname + "\t" + pass );
			}
			if(!loggedin) {
				System.out.println("Incorrect login");
			}
		}
		catch (SQLException sqle) {
			System.out.println("sqle: " + sqle.getMessage());
		}
		catch(ClassNotFoundException cnfe) {
			System.out.println("cnfe in login: " + cnfe.getMessage());
		}
		finally {
			try {
				if(rs!=null) {
					rs.close();
				}
				if(st!=null) {
					st.close();
				}
				if(conn!=null) {
					conn.close();
				}
				return loggedin;
			}
			catch(SQLException sqle) {
				System.out.println("sqle: " + sqle.getMessage());
			}
			
		}
		return loggedin;
	}


}
