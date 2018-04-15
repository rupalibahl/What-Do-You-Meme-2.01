package WDYM;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class StartingGame
 */
@WebServlet("/StartingGame")
public class StartingGame extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private Game g = new Game();


	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String username = request.getParameter("username");
		System.out.println(username);
		boolean isJudge = g.addPlayer(new GameServerThread(username));
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
	
	
	}

}
