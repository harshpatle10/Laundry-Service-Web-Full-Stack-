package in.laundry.email;

import jakarta.mail.MessagingException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

public class Constactser extends HttpServlet {
   
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html");
        PrintWriter pw = resp.getWriter();

        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String number = req.getParameter("number");
        String message = req.getParameter("message");

        try {
            // You can pass these parameters to the email method if needed
            EmailsendServlet.sendMail(email);  // Modify your method if needed to use message/body
            pw.println("<h2 style='color:green'>✅ Message sent successfully!</h2>");
        } catch (MessagingException ex) {
            pw.println("<h2 style='color:red'>❌ Failed to send email: " + ex.getMessage() + "</h2>");
            ex.printStackTrace();
        }
    }
}
