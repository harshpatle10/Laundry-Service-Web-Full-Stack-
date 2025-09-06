package in.laundry.api;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import in.laundry.dao.Registerdao;
import in.laundry.pojo.Registerpojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class Ordersdetailsservlet extends HttpServlet {
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
  
        List<Registerpojo> list =  Registerdao.AllRegister();
		Map<String, List<Map<String, String>>> mapalldata = new HashMap<>();
		List<Map<String, String>> ordersList = new ArrayList<>();

		for (Registerpojo data : list) {
		    Map<String, String> map = new HashMap<>();
		    map.put("id", data.getId() + "");
		    map.put("customer", data.getName()+"");
		    map.put("amount", data.getPayment()+"");
		    map.put("status", "Pending");
		    
		    map.put("weight", data.getWeight()+"");
		    map.put("email",data.getEmail()+"");
		    map.put("address", data.getAddress()+"");
		    map.put("service", data.getService()+"");
		    map.put("date", data.getDate()+"");
		    map.put("number", data.getMobilenumber()+"");
		   
		    ordersList.add(map);
		}
		mapalldata.put("Allorders", ordersList);
	    Gson g = new Gson();
	    String data  = g.toJson(mapalldata);
	    pw.print(data);
	 }catch(SQLException ex) {
     	String data = "{\"status\":404,\"error\":"+ex.getMessage()+"}";
 	    pw.print(data);
	 }
        
    }
}
