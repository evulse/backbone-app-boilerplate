guard 'compass' do
  watch(%r{^public/assets/sass/.+\.(scss|sass)})
end
guard :livereload, :apply_js_live => false do
  watch(%r{(.+)\.(?:html)}) { |m| m[0] unless m[1] =~ /^\./ || m[1] =~ /\/\./ }
  watch(%r{(?:public/assets/css|js)(/.+)\.(?:css|js)}) { |m| m[0] unless m[1] =~ /\/\./ }
end