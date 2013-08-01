#!/usr/bin/env ruby
# by Ricky Elrod (gh: @CodeBlock)
# Licensed under the same license as the same license as
# the scala/scala-lang repository from which this script originates.

require 'httparty'
require 'json'
require 'paint'

files = Dir.glob("#{File.dirname(__FILE__)}/../../_site/**/*.html")
files.each do |page|
  begin
    options = {
      :body => File.open(page).read.to_s,
      :headers => {'Content-Type' => 'text/html'}
    }
    r = HTTParty.post('http://validator.nu?out=json&parser=html5&laxtype=yes&level=error', options)
    j = JSON.parse(r.response.body)

    if j['messages'].length > 0
      puts Paint["INVALID: #{page}", :red]
    else
      puts Paint["VALID: #{page}", :green]
    end
  rescue Exception => e
    puts e
  end
end
