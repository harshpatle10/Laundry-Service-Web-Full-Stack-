package in.laundry.email;

import java.util.Properties;

import jakarta.mail.Authenticator;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;

public class EmailsendServlet {

    private static Properties properties;

    static {
        System.out.println("Preparing to send Mail");
        properties = new Properties();
        String host = "smtp.gmail.com";
        properties.put("mail.smtp.host", host);
        properties.put("mail.transport.protocol", "smtp");
        properties.put("mail.smtp.auth", "true");
        properties.put("mail.smtp.starttls.enable", "true");
        properties.put("mail.smtp.port", "587");
    }

    public static void sendMail(String recipientMail) throws MessagingException {

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(AppDetails.appEmail, AppDetails.appPassword);
            }
        });

        Message message = prepareMessage(session, AppDetails.appEmail, recipientMail);
        Transport.send(message);

        System.out.println("Message Sent Successfully!");
    }

    private static Message prepareMessage(Session session, String myAccountEmail, String recipientEmail) {
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(myAccountEmail, AppDetails.appName)); // optional name
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));
            message.setSubject("Welcome to " + AppDetails.appName);
            message.setText("Hey! " + recipientEmail + ", Thanks for Signing Up with us!");
            return message;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    // Overloaded method for custom subject and HTML message
    public static void sendMail(String recipient, String subject, String htmlTextMessage) throws MessagingException {

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(AppDetails.appEmail, AppDetails.appPassword);
            }
        });

        Message message = prepareMessage(session, AppDetails.appEmail, recipient, subject, htmlTextMessage);
        Transport.send(message);

        System.out.println("Message Sent Successfully!");
    }

    private static Message prepareMessage(Session session, String myAccountEmail, String recipientEmail, String subject,
            String htmlTextMessage) {
        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(myAccountEmail, AppDetails.appName)); // optional name
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(recipientEmail));
            message.setSubject(subject);
            message.setContent(htmlTextMessage, "text/html");
            return message;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
