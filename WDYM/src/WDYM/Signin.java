package WDYM;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
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

/**
 * Servlet implementation class Signin
 */
@WebServlet("/Signin")
public class Signin extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		System.out.println(username);
		System.out.println(password);
		String isNewUser= "";
		isNewUser = request.getParameter("newUser");
		System.out.println("hi?");
		System.out.println("New User? " + isNewUser);
		if(isNewUser==null) {
			System.out.println("null");
		}
		else if(isNewUser.equals("yes")) {
			System.out.println("accessing this.");
			if(!addNewUser(username, password)) {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("UsernameTaken");
				out.write(js);
			}
			else {
				Gson gson = new GsonBuilder().setPrettyPrinting().create();
				String js = gson.toJson("Added");
				out.write(js);
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
				//send json "Correct" to ReactNative client
			}
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
