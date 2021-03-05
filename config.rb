#Bootstrap is used to style bits of the demo. Remove it from the config, gemfile and stylesheets to stop using bootstrap
require "uglifier"

# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions
Slim::Engine.set_options shortcut: {
  '#' => { tag: 'div', attr: 'id' }, '.' => { tag: 'div', attr: 'class' }
}

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# pretty urls
activate :directory_indexes

# Localization
activate :i18n, mount_at_root: :fr

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page "/partials/*", layout: false
page "/admin/*", layout: false

activate :blog do |blog|
  blog.permalink = "news/{year}/{title}.html"
  blog.sources = "posts/{title}.html"
  blog.layout = "news-detail"
end

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy product.yml files to product.html
data.products.each do |_filename, product|
  # product is an array: [filename, {data}]
  proxy "/product/#{product[:title].parameterize}/index.html", "product.html",
  locals: {product: product},
  layout: 'product-detail',
  ignore: true
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
configure :development do
  set :debug_assets, true

  activate :livereload
end

configure :build do
  # Minify css on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript, ignore: "**/admin/**", compressor: ::Uglifier.new(mangle: true, compress: { drop_console: true }, output: {comments: :none})

  # Use Gzip
  activate :gzip

  # # Use asset hashes to use for caching
  # activate :asset_hash
end
