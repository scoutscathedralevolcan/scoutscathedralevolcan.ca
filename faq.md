---
layout: page
title: FAQ
section-id: faq
permalink: /faq/
weight: 9
published: true
faq:
  - 
    faq-section-title: "Inscription"
    question-answer:
      - 
        question: "Quel est le coût de l’inscription?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "À quoi servent les frais d’inscriptions?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "À quoi mon enfant doit-il s’attendre après son inscription?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Existe-t-il une aide financière pour les familles à faible revenue?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Pourquoi avez-vous un uniforme?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Une année scout dure combien de temps?"
        answer: "Aucune réponse disponible pour l'instant"
  - 
    faq-section-title: "Mon enfant"
    question-answer:
      - 
        question: "Mon enfant a des besoins particuliers, est-ce qu’il peut faire du scoutisme?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Doit-on croire en Dieu pour s’inscrire chez les Scouts ?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Quelles sont les mesures de sécurités mise en place dans votre groupe?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Pourquoi certaines unités sont mixtes alors que d’autres sont homogènes?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Est-ce que mon enfant doit avoir des aptitudes particulières pour être dans les scouts?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Mon enfant doit-il être doué dans les sports pour pouvoir faire du scoutisme?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Que fera mon enfant pendant sa réunion scoute hebdomadaire?"
        answer: "Aucune réponse disponible pour l'instant"
  - 
    faq-section-title: "Parents"
    question-answer:
      - 
        question: "Quel est le rôle du parent ou du tuteur dans les activités scoutes?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Est-ce qu’un parent peut aider sans devenir animateur?"
        answer: "Aucune réponse disponible pour l'instant"
  - 
    faq-section-title: "Activités"
    question-answer:
      - 
        question: "Faites-vous des activités à l’extérieur?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Combien de temps peut durer un camp?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Combien de camp faites-vous par année?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Vos camps sont-ils faits toujours au même endroits?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Jusqu’où une unité peut-elle aller en activité?"
        answer: "Aucune réponse disponible pour l'instant"
  - 
    faq-section-title: "Aussi"
    question-answer:
      - 
        question: "Pourquoi la collaboration des parents est-elle aussi importante dans le scoutisme?"
        answer: "Aucune réponse disponible pour l'instant"
      - 
        question: "Pourquoi dit-on du mouvement scout qu’il est un mouvement éducatif non-formel?"
        answer: "Aucune réponse disponible pour l'instant"
---

<div class="faq">
{% for faq-section in page.faq %}
    <div class="faq-section">
        <input id="{{ faq-section.faq-section-title | slugify }}" type="checkbox" class="panel">
        <div class="plus">+</div>
        <label for="{{ faq-section.faq-section-title | slugify }}" class="panel-title">{{ faq-section.faq-section-title }}</label>
        <div class="panel-content">
            <ul class="faq-questions-list">
        {% for question in faq-section.question-answer %}
            <li class="faq-question">
            <span class="faq-question-title">{{ question.question }}</span>
            <div class="faq-answer">{{ question.answer }}</div>
            </li>
        {% endfor %}
            </ul>
        </div>
    </div>
{% endfor %}
</div>
