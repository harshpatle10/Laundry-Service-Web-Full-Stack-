package in.laundry.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import in.laundry.dao.Registerdao;
import in.laundry.dao.Signupdao;
import in.laundry.pojo.Registerpojo;
import in.laundry.pojo.Signuppojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UserListServlet extends HttpServlet {
  @Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  
	  // Inside your doGet or doPost method
	  resp.setHeader("Access-Control-Allow-Origin", "*");
	  resp.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, OPTIONS");
	  resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
	  
	  resp.setContentType("application/json");
      PrintWriter pw = resp.getWriter();
      
      
      
      Gson gson = new Gson();

      try {

      List<Signuppojo> list =  Signupdao.AllSignup();
      
	    Gson g = new Gson();
	    String data  = g.toJson(list);
	    
	    pw.print(data);
	 }catch(SQLException ex) {
      	String data = "{\"status\":404,\"error\":"+ex.getMessage()+"}";
	    pw.print(data);
	 }
}
}
