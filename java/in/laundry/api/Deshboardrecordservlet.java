package in.laundry.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Map;

import com.google.gson.Gson;

import in.laundry.dao.Deshboardrecorddao;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Deshboardrecordservlet extends HttpServlet {
   @Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	   
	   // Inside your doGet or doPost method
		  resp.setHeader("Access-Control-Allow-Origin", "*");
		  resp.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
		  resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
		  
		  
	   resp.setContentType("application/json");
       PrintWriter out = resp.getWriter();
       Gson g = new Gson();
       try {
       Map<String,Integer> map = Deshboardrecorddao.TotalRecord();
      String jsonData = g.toJson(map);
   	  out.print(jsonData);

       }catch(SQLException ex) {
       	
    	   String jsonData = "{\"status\":404,\"error\":"+ex.getMessage()+"}";
       	out.print(jsonData);
       }
       finally {
       out.flush();
       }
       
       
       }
}
