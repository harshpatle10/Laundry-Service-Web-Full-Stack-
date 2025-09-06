package in.laundry.Passchange;

import java.io.IOException;
import java.sql.SQLException;

import in.laundry.dao.ProfileChange;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class PasswordChangeServlet extends HttpServlet {
  @Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	  String currpass = req.getParameter("currpass");
		String newpass = req.getParameter("newpass");
		
		try {
			boolean check = ProfileChange.changePass(currpass, newpass);
	   	    if(check) {
	            resp.sendRedirect("http://localhost:5173/AdminSetting?status=password-updated");

//	   	     resp.sendRedirect("html/admin/setting.html?passstatus=success");
	   	    }else {
	            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//	      	 resp.sendRedirect("html/admin/setting.html?passstatus=invalid");
	   	    }
		}catch(SQLException ex) {
            resp.sendRedirect("http://localhost:5173/AdminSetting?status=unexpected-error");

//	  	  resp.sendRedirect("html/admin/setting.html?passstatus=error");
		}

	}
}
