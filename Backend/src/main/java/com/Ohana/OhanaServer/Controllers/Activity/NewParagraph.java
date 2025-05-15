package com.Ohana.OhanaServer.Controllers.Activity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NewParagraph {
    private String title;
    private String text;
}
