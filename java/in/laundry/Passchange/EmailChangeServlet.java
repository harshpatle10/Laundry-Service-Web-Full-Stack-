package in.laundry.Passchange;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

import in.laundry.dao.AdminDetailsDao;
import in.laundry.dao.ProfileChange;
import in.laundry.pojo.AdminDetailsPojo;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class EmailChangeServlet extends HttpServlet {
@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	String newemail = req.getParameter("newemail");
	String password = req.getParameter("currpass");
	
	try {
		boolean check = ProfileChange.changeEmail(newemail, password);
   	    if(check) {
            resp.sendRedirect("http://localhost:5173/AdminSetting?status=email-updated");

//   	     resp.sendRedirect("html/admin/setting.html?emailchange=success");
   	    }else {
            resp.sendRedirect("http://localhost:5173/AdminSetting?status=email-failed");

//      	 resp.sendRedirect("html/admin/setting.html?emailchange=invalid");
   	    }
	}catch(SQLException ex) {
        resp.sendRedirect("http://localhost:5173/AdminSetting?status=email-failed");

//  	  resp.sendRedirect("html/admin/setting.html?emailchange=error");
	}
}
}
