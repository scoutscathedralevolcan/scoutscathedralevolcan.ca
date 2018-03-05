---
title:  "Nos unités"
section-title: "Nos unités"
section-id: "unites"
published: true
weight: 4
background-image: https://drive.google.com/uc?export=view&id=1GsNp6FEWZ0X-IdaZh-Mf2qENiaNwoIAwzg
---

<ul class="timeline">
{% assign previousunitlevel = -1 %}
{% for unitpage in site.pages-unites %}
  {% if unitpage.weight != previousunitlevel %}
    {% if sidetoggle == 0 %}
        {% assign sidetoggle = 1 %}
    {%else%}
        {% assign sidetoggle = 0 %}
    {%endif%}
    {% if previousunitlevel != -1 %}
    </li>
    {%endif%}
    <li>
  {% endif%}
    {% if unitpage.weight != previousunitlevel %}
    <img class="timeline-image" src="{{unitpage.insigne}}" />
    {%else%}
        {% if sidetoggle == 0 and unitpage.weight == previousunitlevel%}
    <img class="timeline-image timeline-image-cliped-reverted" src="{{unitpage.insigne}}" />
        {%else%}
    <img class="timeline-image timeline-image-cliped" src="{{unitpage.insigne}}" />
        {%endif%}
    {%endif%}
    <div class="timeline-panel{% if sidetoggle == 1 and unitpage.weight != previousunitlevel%} timeline-inverted{%endif%}{% if sidetoggle == 0 and unitpage.weight == previousunitlevel%} timeline-inverted{%endif%}">
        <h2>{{unitpage.title}}</h2>
        <h3>Unité {{unitpage.short}} ans</h3>
        <h4>{{unitpage.unit-name}}</h4>
        <p>{{unitpage.description}}</p>
        <p class="go-to-button text-center"><a href="{{unitpage.permalink}}">En savoir plus</a></p>
    </div>
    {% assign previousunitlevel = unitpage.weight %}
{% endfor %}
</li>
<li>
<div class="timeline-image timeline-image-with-bg">
    <h3>Fin du parcours jeune</h3>
</div>
</li>
</ul>
