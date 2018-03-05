---
title: "Nous joindre"
section-title: "Nous joindre"
section-id: "nous-joindre"
published: true
weight: 15
background-image: https://drive.google.com/uc?export=view&id=1xwMUoTBJ2Z5zlCj7khkCWTh1cR6XBwBY-A
---

<div class="main-contact-form">
    <h3>Par courriel:</h3>
    <form name="main-contact-form" id="main-contact-form" netlify-honeypot="honey-pot" netlify novalidate>
    <p class="hidden">
        <label>Holy honey-pot (ne pas remplir): <input name="honey-pot"></label>
    </p>
    <p>
        <label>Prénom et nom: <input type="text" name="name" class="form-input"></label>   
    </p>
    <p>
        <label>Adresse courriel: <input type="email" name="email" class="form-input"></label>
    </p>
    <p>
        <label>Message: <textarea name="message" class="form-input" rows="10"></textarea></label>
    </p>
    <div id="main-contact-form-display"></div>
    <p style="text-align:right;">
        <button type="submit"  class="form-button">Envoyer</button>
    </p>
    </form>
</div>

<div class="contact-infos icon-spin">
  {% if site.adress %}
    <h3>Coordonnées:</h3>
    <p>{{site.adress}}</p>
  {% endif %}
  {% if site.phone %}
  <h3>Par téléphone:</h3>
  <p><a href="tel:{{site.phone}}" target="_blank">
      <span class="icon icon--phone">
        <svg viewBox="0 0 32 32">
          <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z" ></path>
        </svg>
      </span> {{site.phone}}
    </a></p>
  {% endif %}
  {% if  site.facebook.publisher %}
  <h3>Sur Facebook:</h3>
  <p><a href="https://facebook.com/{{ site.facebook.publisher }}">
    <span class="icon Icon--facebook">
        <svg viewBox="0 0 16 16">
            <path fill="#3b5999" d="m 15.11687,16.000001 c 0.487599,0 0.88301,-0.39541 0.88301,-0.88313 V 0.883071 C 15.99988,0.395281 15.60453,1e-6 15.11687,1e-6 H 0.8830695 c -0.48778,0 -0.88307,0.39528 -0.88307,0.88307 v 14.2338 c 0,0.48766 0.39522,0.88313 0.88307,0.88313 H 15.11687 z"/>
            <path fill="#ffffff" d="m 11.03968,16.000001 v -6.19608 h 2.07973 l 0.31141,-2.41472 h -2.39114 v -1.54165 c 0,-0.69912 0.19414,-1.17555 1.19666,-1.17555 l 1.27866,-5.6e-4 v -2.15974 c -0.22114,-0.0294 -0.98017,-0.0952 -1.86324,-0.0952 -1.8435605,0 -3.1057105,1.12532 -3.1057105,3.19188 v 1.7808 h -2.08506 v 2.41472 h 2.08506 v 6.19608 H 11.03968 z"/>
        </svg>
    </span>
    <span class="username">{{ site.facebook.publisher }}</span>
  </a></p>
  {% endif %}
  <div class="contact-map">
    <iframe src="https://www.google.com/maps/d/embed?mid=1gnAqNuG1tgtHfmx6JF2K6Uge0mg" style="width:100%; height:100%; border: none;"></iframe>
  </div>
</div>
