package WDYM;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Vector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class Waiting
 */
@WebServlet("/Waiting")
public class Waiting extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private Game g = new Game();
       

	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out =  response.getWriter();
		
		String username = request.getParameter("username");
		g.addUsername(username);
		Vector<String> tempUsernames = g.getUsernames();
		String message="";
		for(int i =0; i<tempUsernames.size();i++) {
			message+=tempUsernames.get(i) + " {'\n'}";
		}
		System.out.println(message);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String js = gson.toJson(message);
		out.write(js);
		
		
	}

}
