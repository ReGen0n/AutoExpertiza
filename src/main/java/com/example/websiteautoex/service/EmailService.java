package com.example.websiteautoex.service;

import com.example.websiteautoex.dto.ContactRequest;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.util.HtmlUtils;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.mail.to}")
    private String toEmail;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendContactMessage(ContactRequest request) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(toEmail);
            helper.setSubject("Нова заявка з сайту autoexpertiza.site");

            if (request.getEmail() != null && !request.getEmail().isBlank()) {
                helper.setReplyTo(request.getEmail());
            }

            String html = """
                    <h2>Нова заявка з сайту</h2>
                    <p><b>Ім’я:</b> %s</p>
                    <p><b>Телефон:</b> %s</p>
                    <p><b>Email:</b> %s</p>
                    <p><b>Тип звернення:</b> %s</p>
                    <p><b>Повідомлення:</b></p>
                    <p style="white-space: pre-line;">%s</p>
                    """.formatted(
                    escape(request.getName()),
                    escape(request.getPhone()),
                    escape(request.getEmail()),
                    escape(request.getServiceType()),
                    escape(request.getMessage())
            );

            helper.setText(html, true);
            mailSender.send(message);

        } catch (Exception e) {
            throw new RuntimeException("Помилка відправки email", e);
        }
    }

    private String escape(String value) {
        return HtmlUtils.htmlEscape(value == null ? "" : value);
    }
}