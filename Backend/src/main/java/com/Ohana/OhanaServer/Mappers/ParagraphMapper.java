package com.Ohana.OhanaServer.Mappers;

import com.Ohana.OhanaServer.Controllers.Activity.ParagraphResponse;
import com.Ohana.OhanaServer.Models.Paragraph;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ParagraphMapper {
    @Mapping(source = "id", target = "id")
    ParagraphResponse paragraphToParagraphDto(Paragraph paragraphs);

    @Mapping(source = "id", target = "id")
    List<ParagraphResponse> paragraphToParagraphDto(List<Paragraph> paragraphs);

}
