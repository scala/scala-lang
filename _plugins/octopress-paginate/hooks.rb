# Copyright (c) 2015 Brandon Mathis
# 
# MIT License
# 
# Permission is hereby granted, free of charge, to any person obtaining
# a copy of this software and associated documentation files (the
# "Software"), to deal in the Software without restriction, including
# without limitation the rights to use, copy, modify, merge, publish,
# distribute, sublicense, and/or sell copies of the Software, and to
# permit persons to whom the Software is furnished to do so, subject to
# the following conditions:
# 
# The above copyright notice and this permission notice shall be
# included in all copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
# NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
# LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
# OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
# WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

module Octopress
  module Paginate
    if defined?(Jekyll::Hooks)
      Jekyll::Hooks.register :site, :post_read, priority: :low do |site|
        site.pages.select {|p| p.data['paginate'] }.each do |page|
          Octopress::Paginate.paginate(page)
        end
      end
      Jekyll::Hooks.register :pages, :pre_render do |page, payload|
        if page.data['paginate']
          payload['paginator'] = Octopress::Paginate.page_payload(payload, page)
        end
      end
    else
      require 'octopress-hooks'
      class SiteHook < Hooks::Site
        priority :low

        def post_read(site)
          site.pages.select {|p| p.data['paginate'] }.each do |page|
            Octopress::Paginate.paginate(page)
          end
        end
      end

      class PageHook < Hooks::Page
        def merge_payload(payload, page)
          if page.data['paginate']
            payload['paginator'] = Octopress::Paginate.page_payload(payload, page)
          end
        end
      end
    end
  end
end
