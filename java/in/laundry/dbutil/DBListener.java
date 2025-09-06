package in.laundry.dbutil;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class DBListener implements ServletContextListener {
   @Override
public void contextInitialized(ServletContextEvent sce) {
	ServletContext sc = sce.getServletContext();
	String url = sc.getInitParameter("url");
	String username = sc.getInitParameter("username");
	String password = sc.getInitParameter("password");
	DBConnection.openConnection(url, username, password);
}
   
  @Override
	public void contextDestroyed(ServletContextEvent sce) {
		DBConnection.closeConnection();
	}
}
