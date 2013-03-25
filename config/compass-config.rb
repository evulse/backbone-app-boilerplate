# --------------------------------------------------------- #
# COMPASS / SASS CONFIGURATION FILE
# --------------------------------------------------------- #

# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "./public"
css_dir = (environment == :production) ? "public/assets/css-min" : "public/assets/css"
sass_dir = "public/assets/sass"
images_dir = "public/assets/img"
javascripts_dir = "public/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :expanded

# To disable relative paths to assets via compass helper functions. Comment:
relative_assets = true

# To enable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# Make a copy of sprites with a name that has no uniqueness of the hash.
on_sprite_saved do |filename|
  if File.exists?(filename)
    FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
  end
end

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
on_stylesheet_saved do |filename|
  if File.exists?(filename)
    css = File.read filename
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{-s[a-z0-9]{10}\.png}, '.png')
    end
  end
end