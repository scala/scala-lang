---
layout: page
title: Download Previous Versions
---



This page contains a comprehensive list of previous Scala releases.

{% for item in site.categories.download %}

<div>
  <a href="{{ item.url }}">{{ item.title }}</a>
</div>

{% endfor %}

