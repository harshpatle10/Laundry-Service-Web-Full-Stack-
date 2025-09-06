package in.laundry.servlet;

import java.io.IOException;
import java.sql.SQLException;

import in.laundry.dao.Logindao;
import in.laundry.pojo.Loginpojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class Loginservlet extends HttpServlet {
  @Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	    String nameemail = req.getParameter("nameemail");
	    String password = req.getParameter("password");
	    /* if(nameemail.equals("admindeshboard@gmail.com") && password.equals("admin@123")) {
	    	resp.sendRedirect("html/admin/deshboard.html");
	    }else {*/
	    	
	   Loginpojo lp = new Loginpojo();
	    	
	    try {
	     if(nameemail.contains("@gmail.com")) {
	    	 lp.setEmail(nameemail);
	    	 lp.setPassword(password);
	    	 boolean check = Logindao.checkEmail(lp);
	    	 if(check) {
	    		int loginid =  Logindao.getLoginId(lp);
	    		
	    			    		 
	    	        resp.sendRedirect("http://localhost:5173/?loginstatus=loginsuccess");
//	    		 resp.sendRedirect("html/index.html?loginstatus=loginsuccess");
	    	 }else {
	    	        resp.sendRedirect("http://localhost:5173/LoginSignup?loginstatus=failed");
//	    		 resp.sendRedirect("html/admin/loginsignup.html?loginstatus=failed");
	    	 }
	     }else {
	    	 lp.setName(nameemail);
	    	 lp.setPassword(password);
	    	boolean check =  Logindao.checkName(lp);
	    	if(check) {
	            resp.sendRedirect("http://localhost:5173/?loginstatus=loginsuccess");
//	    		 resp.sendRedirect("html/index.html?loginstatus=loginsuccess");
	    	 }else {
	    	        resp.sendRedirect("http://localhost:5173/LoginSignupLoginSignup?loginstatus=failed");
//	    		 resp.sendRedirect("html/admin/loginsignup.html?loginstatus=failed");
	    	 }
	     }   
	    }catch(SQLException ex) {
	    	
	        resp.sendRedirect("http://localhost:5173/LoginSignup?admindata=failed");
//   		 resp.sendRedirect("html/admin/loginsignup.html?loginstatus=error");
	    }
	    
	    
	    // }
	    
	}
}
