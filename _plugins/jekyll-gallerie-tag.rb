module Jekyll
  class RenderGallerieTag < Liquid::Tag
      
    class GallerieTagValueHolder
        def initialize(gallerie_id)
            @gallerie_id = gallerie_id
        end
        
        def gallerie_id()
            @gallerie_id
        end
        
        def gallerie()
            @gallerie
        end
        
        def define_gallerie(gallerie)
            @gallerie = gallerie
        end
    end

    def initialize(tag_name, gallerie_id, tokens)
      super
      @local_values = GallerieTagValueHolder.new(String(gallerie_id).split.join(' '))
    end

    def render(context)
        site = context.registers[:site]
        galleries = site.data["galleriesphotos"]["galleries"]
        if galleries
            for current_gallerie in galleries do
                gallerieID = String(current_gallerie["id"])
                if  @local_values.gallerie_id == gallerieID
                    @local_values.define_gallerie(current_gallerie)
                end
            end
        end
        output_html = ""
        if @local_values.gallerie
            output_html += "<div class=\"gallery masonry-gallery\">\n"
            for image in @local_values.gallerie["images"]
                output_html += "<figure class=\"gallery-item\"><header class='gallery-icon'>"
                output_html += "<a href=\"" + image["url"] + "\" class=\"popup\" title=\"" + String(image["description"]) + "\"><img src=\"" + image["url"] + "\"></a>"
                output_html += "</header><figcaption class='gallery-caption'><div class=\"entry-summary\" id=\"" + slugify(String(image["description"])) + "\"><h3>" + String(image["description"]) + "</h3></div>"
                output_html +="</figcaption></figure>"
            end
            output_html += "</div>"
        end
        output_html
    end
  end
end

Liquid::Template.register_tag('gallerie', Jekyll::RenderGallerieTag)
