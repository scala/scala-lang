---
layout: blog
title: Blog
---

{% for p in site.tags.blog-post limit: 5 %}
  {% assign post = p %}
  {% include render-news-item.html %}
{% endfor %}


<ul class="post-list">
  {% for p in site.posts %}
    {% if p.post-type == 'blog' %}
      <li>
        {% if p.link-out %}
          <b><a href="{{ p.link-out }}">{{ p.title }}</a></b>
        {% else %}
          <b><a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a></b>
        {% endif %}
          <br><span class="news-archive-date">{{ p.date | date: "%A, %B %d, %Y" }}</span>
      </li>
    {% endif %}
  {% endfor %}
</ul>
