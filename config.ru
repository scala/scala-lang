require 'rack/jekyll'
require 'yaml'
require 'rack/rewrite'
run Rack::Jekyll.new()