# ÉcoMétéo

# Description
L’application a pour objectif de fournir des prévisions météorologiques pour la France, tout en optimisant l'impact environnemental de l’accès à ces informations. Aujourd’hui, des services comme Météo France posent plusieurs défis environnementaux et d’expérience utilisateur, en particulier avec :
- La surutilisation des données météorologiques en ligne.
- Un rafraîchissement automatique très fréquent (parfois toutes les 30 secondes).
- Trop de publicités intrusives, dégradant l’expérience utilisateur.
- Une surcharge d’informations jugées peu essentielles (exemple : heures précises du lever/coucher du soleil).

# Utilité sociale
L’utilité sociale de ce projet réside dans sa capacité à proposer une alternative plus durable à la consultation des prévisions météorologiques. Aujourd’hui, l’empreinte énergétique du numérique est de plus en plus préoccupante, et chaque action en ligne, telle que la consultation de la météo, contribue à la consommation de ressources. Notre application vise donc à :
- Sensibiliser les utilisateurs à l’impact énergétique des actions numériques.
- Offrir une plateforme allégée, sans publicité, qui met en avant l’essentiel pour l’utilisateur (températures, précipitations).
- Limiter l’affichage des informations secondaires et optionnelles, accessibles uniquement à la demande.
- Encourager une consommation raisonnée et écologique de l’information.

# Impact de la numérisation
La numérisation impacte directement les comportements de consultation des prévisions météorologiques. Avec la démocratisation des smartphones, les utilisateurs ont pris l’habitude de consulter la météo plusieurs fois par jour, provoquant une surconsommation d’énergie et un transfert massif de données inutiles. Notre solution numérique apporte plusieurs améliorations :
- Optimisation de la consommation énergétique : en réduisant la fréquence de rafraîchissement des données (par exemple, toutes les 5 minutes au lieu de 30 secondes), nous visons à réduire l’impact environnemental.
- Réduction des données affichées : nous proposons une interface minimaliste, présentant uniquement les informations essentielles. Les utilisateurs peuvent demander des détails supplémentaires, mais ces informations sont limitées en nombre.
- Amélioration de l’expérience utilisateur : sans publicités et avec moins d’informations superflues, notre application devient plus agréable et facile à utiliser.
- Modèle de prévisions : en limitant la consultation de prévisions à court terme (par exemple sur 3 jours maximum), nous limitons la surcharge des serveurs et la consommation énergétique liée à la gestion de données à plus long terme, qui est souvent peu fiable et plus coûteuse à générer.

# Scénarios d'usage et impacts
Nous faisons l'hypothèse que les utilisateurs visitent notre plateforme plusieurs fois par jour, par exemple en milieu d'après-midi avant de sortir pour une activité en extérieur ou avant de partir au travail, afin de vérifier les conditions météorologiques actuelles et les prévisions à venir. Ces visites peuvent durer quelques instants seulement. Pour cette raison, nous avons choisi de modéliser les scénarios suivants : l'un centré sur la consultation rapide de la météo en temps réel, et l'autre sur l'exploration des prévisions à long terme pour planifier des événements futurs.

# Scénario 1 Consultation rapide de la météo
  1. L'utilisateur se connecte à Météo France ou à un autre service météo en ligne.
  2. Il sélectionne sa localisation (ville, région) ou laisse le site utiliser sa position géographique.

# Scénario 2 Exploration des prévisions à long terme
  1. L'utilisateur effectue à nouveau les étapes 1, 2 et 3 du scénario 1.
  2. Il consulte les prévisions à court et moyen terme qui lui sont proposées en fonction de sa localisation.
  4. Les détails complets des prévisions pour cette période (températures, précipitations, vent, etc.) s'affichent.
  5. Il revient à la liste des prévisions pour continuer son exploration ou consulter d'autres jours.

# Impact de l'exécution des scénarios auprès de différents services concurrents
L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :

  - le nombre de requêtes lancées,
  - le poids des téléchargements,
  - le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de quotidiens nationaux de diverses sensibilités politiques, économiques et environementales :

  - MétéoFrance
  - La Chaîne Météo
  - MétéoCiel
  - Météo60 

Les résultats sont les suivants (attention, d'une journée à l'autre, on peut observer une certaine variabilité) :

  - Scénario "Consultation rapide de la météo",
  - Scénario "Exploration des prévisions à long terme".