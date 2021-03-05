module ApplicationHelper
  def external_link_to(name = nil, options = nil, html_options = nil, &block)
    opts = { target: '_blank', rel: 'noopener noreferrer nofollow' }

    if block_given?
      options ||= {}
      options = options.merge(opts)
    else
      html_options ||= {}
      html_options = html_options.merge(opts)
    end

    link_to(name, options, html_options, &block)
  end

  #helper to set background images with asset hashes in a style attribute
  def background_image(image)
    "background-image: url('" << image_path(image) << "')"
  end

  def nav_link(link_text, url, options = {})
    options[:class] ||= ""
    options[:class] << " active" if url == current_page.url
    link_to(link_text, url, options)
  end

  def markdown(content)
     Tilt['markdown'].new { content }.render
  end
end
