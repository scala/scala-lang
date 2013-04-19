---
layout: page
title: Blog
---

<div class="row">
  <div class="span9">

{% for p in site.tags.blog-post limit: 5 %}
  {% assign post = p %}
  {% include render-news-item.html %}
{% endfor %}

  </div>
  <div class="span3">
    <h3>Entries</h3>
    <ul class="post-list">
      {% for p in site.tags.blog-post limit: 30 %}
      <li>
        {% if p.link-out %}
          <a href="{{ p.link-out }}">{{ p.title }}</a>
        {% else %}
          <a href="{{ site.baseurl }}{{ p.url }}">{{ p.title }}</a>
        {% endif %}
          <span class="date">( {{ p.date | date: "%A, %B %d, %Y" }} )</span>
      </li>
      {% endfor %}
    </ul>
  </div>
</div>
