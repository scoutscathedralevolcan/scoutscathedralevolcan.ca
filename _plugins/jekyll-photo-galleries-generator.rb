module Jekyll
    class ReadYamlPage < Page
        def read_yaml(base, name, opts = {})
            begin
                self.content = File.read(File.join(base.to_s, name.to_s), (site ? site.file_read_opts : {}).merge(opts))
                if content =~ /\A(---\s*\n.*?\n?)^((---|\.\.\.)\s*$\n?)/m
                    self.content = $POSTMATCH
                    self.data = SafeYAML.load($1)
                end
                rescue SyntaxError => e
                Jekyll.logger.warn "YAML Exception reading #{File.join(base.to_s, name.to_s)}: #{e.message}"
                rescue Exception => e
                Jekyll.logger.warn "Error reading file #{File.join(base.to_s, name.to_s)}: #{e.message}"
            end
            self.data ||= {}
        end
    end

    class GalleriePhotoPage < ReadYamlPage
        def initialize(site, base, dir, title, gallerie)
            @site = site
            @base = base
            @dir = dir
            @name = 'index.html'
            self.process(@name)
            self.read_yaml(File.join(base, "_layouts"), "gallery_page.html")
            self.data['title'] = title
            self.data["gallerie"] = gallerie
        end
    end

    class GalleriesIndexPage < ReadYamlPage
        def initialize(site, base, dir, title, galleries)
            @site = site
            @base = base
            @dir = dir
            @name = 'index.html'
            self.process(@name)
            self.read_yaml(File.join(base, "_layouts"), "gallery_index.html")
            self.data['title'] = title
            self.data["galleries"] = galleries
        end

    end

    class GalleriesGenerator < Generator
        safe true

        def generate(site)
            galleriesIndexPath = site.data["galleriesphotos"]["gallerieOutputPath"] ||= "galleries"
            galleriesIndexTitle = site.data["galleriesphotos"]["gallerieIndexTitle"] ||= "Galleries photo"
            galleries = site.data["galleriesphotos"]["galleries"]
            site.pages << GalleriesIndexPage.new(site, site.source, galleriesIndexPath, galleriesIndexTitle, galleries)
            if galleries
                for gallerie in galleries do
                    gallerieTitle = gallerie["title"]
                    if gallerieTitle != ""
                        galleriePublishedDate = gallerie["publishedDate"]
                        galleriePath = File.join(galleriesIndexPath, slugify(galleriePublishedDate.strftime("%F ") + gallerieTitle))
                        site.pages << GalleriePhotoPage.new(site, site.source, galleriePath, gallerieTitle, gallerie)
                    end
                end
            end
        end
    end

end
