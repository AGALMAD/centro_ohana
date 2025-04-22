package com.Ohana.OhanaServer.Controllers.Activity;

import com.Ohana.OhanaServer.Models.Paragraph;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewActivity {
    private String title;
    private MultipartFile image;
    private String description;
    private Date startDate;
    private Date endDate;
    private Time startTime;
    private Time endTime;
    private String postLink;
    private List<NewParagraph> paragraphs;

}
