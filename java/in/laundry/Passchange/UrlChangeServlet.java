package in.laundry.Passchange;

import java.io.IOException;
import java.sql.SQLException;

import in.laundry.dao.ProfileChange;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class UrlChangeServlet extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		  String currpass = req.getParameter("currpass");
			String newurl = req.getParameter("newurl");
			
			try {
				boolean check = ProfileChange.changeUrl(newurl, currpass);
		   	    if(check) {
		   	    	
		            resp.sendRedirect("http://localhost:5173/AdminSetting?status=url-updated");

//		   	     resp.sendRedirect("html/admin/setting.html?urlstatus=success");
		   	    }else {
		            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//		      	 resp.sendRedirect("html/admin/setting.html?urlstatus=invalid");
		   	    }
			}catch(SQLException ex) {
	            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//		  	  resp.sendRedirect("html/admin/setting.html?urlstatus=error");
			}

		}
	
}
