# ÉcoMétéo

# Description
L’application a pour objectif de fournir des prévisions météorologiques pour la France, tout en optimisant l'impact environnemental de l’accès à ces informations. Aujourd’hui, des services comme Météo France posent plusieurs défis environnementaux et d’expérience utilisateur, en particulier avec :
- La surutilisation des données météorologiques en ligne.
- Un rafraîchissement automatique très fréquent (parfois toutes les 30 secondes).
- Trop de publicités intrusives, dégradant l’expérience utilisateur.
- Une surcharge d’informations jugées peu essentielles (exemple : articles, météo de la France, météo sur 15 jours).

# Utilité sociale
L’utilité sociale de ce projet réside dans sa capacité à proposer une alternative plus durable à la consultation des prévisions météorologiques. Aujourd’hui, l’empreinte énergétique du numérique est de plus en plus préoccupante, et chaque action en ligne, telle que la consultation de la météo, contribue à la consommation de ressources. Notre application vise donc à :
- Sensibiliser les utilisateurs à l’impact énergétique des actions numériques.
- Offrir une plateforme allégée, sans publicité, qui met en avant l’essentiel pour l’utilisateur (températures, précipitations).
- Limiter l’affichage des informations secondaires et optionnelles, accessibles uniquement à la demande.
- Encourager une consommation raisonnée et écologique de l’information.

# Impact de la numérisation
La numérisation impacte directement les comportements de consultation des prévisions météorologiques. Avec la démocratisation des smartphones, les utilisateurs ont pris l’habitude de consulter la météo plusieurs fois par jour, provoquant une surconsommation d’énergie et un transfert massif de données inutiles. Notre solution numérique apporte plusieurs améliorations :
- Optimisation de la consommation énergétique : en réduisant la fréquence de rafraîchissement des données (par exemple, toutes les 5 minutes au lieu de 30 secondes) ou en la supprimant totalement, nous visons à réduire l’impact environnemental.
- Réduction des données affichées : nous proposons une interface minimaliste, présentant uniquement les informations essentielles. Les utilisateurs peuvent demander des détails supplémentaires, mais ces informations sont limitées en nombre.
- Amélioration de l’expérience utilisateur : sans publicités et avec moins d’informations superflues, notre application devient plus agréable et facile à utiliser.
- Modèle de prévisions : en limitant la consultation de prévisions à court terme (par exemple sur 3 jours maximum), nous limitons la surcharge des serveurs et la consommation énergétique liée à la gestion de données à plus long terme, qui est souvent peu fiable. Cette prévisions sur une courte période pourrait à long terme inciter les developpeurs d'API météo à réduire leurs plage de données ce qui aurait un impact important. 

# Scénarios d'usage et impacts
Nous faisons l'hypothèse que les utilisateurs visitent notre plateforme plusieurs fois par jour, par exemple en milieu d'après-midi avant de sortir pour une activité en extérieur ou avant de partir au travail, afin de vérifier les conditions météorologiques actuelles et les prévisions à venir. Ces visites peuvent durer quelques instants seulement. Pour cette raison, nous avons choisi de modéliser les scénarios suivants : l'un centré sur la consultation rapide de la météo en temps réel, et l'autre sur l'exploration des prévisions à long terme pour planifier des événements futurs.

# Scénario 1 Consultation de la météo sur Paris et d'un article
  1. L'utilisateur se connecte à Météo France ou à un autre service météo en ligne.
  2. Il sélectionne sa localisation (ville, région) ou laisse le site utiliser sa position géographique.
  3. Il choisit de voir la mètéo du weekend.
  4. Il retourne sur la page d'accueil.
  5. Il séléctionne un article et le lit.

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

  - MétéoFrance,
  - [La Chaîne Météo (problème cookies)](./benchmark/greenit_analysis_extension/LaChaineMeteo_greenit.png),
  - [MétéoCiel (problème cookies)](./benchmark/greenit_analysis_extension/MeteoCiel_greenit.png),
  - [Météo60 (bientôt)](./benchmark/greenit_analysis_extension/Meteo60_greenit.png).

Les résultats sont les suivants (attention, d'une journée à l'autre, on peut observer une certaine variabilité) :

  - scénario "[Consultation de la météo sur Paris et d'un article](https://htmlpreview.github.io/?https://raw.githubusercontent.com/UTT-GL03/EcoMeteo/main/benchmark/benchmark.html)",
  - scénario "Exploration des prévisions à long terme" (À venir).

# Maquette de l'interface et échantillon de données

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

L'interface retenue est composée d'une seule "pages Web" :

![image](./frontend/mockup.png)
__Fig.1 :__ maquette de l'interface du prototype

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec dummy-json). Bien que fictives, ces données correspondent à la structure des services concurrents.
Nous avons pu généré la météo sur 7 jours pour 3 villes diférentes.
Le format des données est inspiré de celle d'API que nous avons pu trouver, les villes remplacent les stations météo.

Ainsi, pour chaques jours, nous avons :

  - température, 
  - taux d'humidité, 
  - vent, 
  - précipitation.


# Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour cette première version du prototype :

  - l'échantillon de données est encore chargé dans le code de manière statique,
  - les fonctionnalités implémentées ne sont que celles nécessaires pour suivre le scénario prioritaire ("Regarder la météo sur Paris").
Ce scénario nécessite de pouvoir charger la page principale et regarder la météo sur Paris

## Page Météo

Nous avons développé la page météo (cf. Fig. 2) pour qu'elle affiche l'échantillon de données sous une forme proche de ce que prévoyait la maquette.

![image](./frontend/mainPage_screenshot.png)
__Fig.2:__ Prototype de la page météo

Pour l'instant, nous avons choisi un *framework* de mise en page minimaliste ([*PicoCSS*](https://picocss.com)).
nous verrons si l'impact environnemental du passage à un *framework* de mise en page plus puissant.

Nous avons décidé pour l'instant de n'inclure aucune image ni design pour l'affichage de la météo.
Même si ces design rendent l'utilisation de la plupart des applications de prévisions météo, elles sont parfois inutile et apporte une polution visuelle et peu avoir un impact environnemental.
Également, les données statiques que nous utilisont ici sont uniquement les données importantes, nous n'avons pas encore vu la partie pour afficher des données supplémentaires.
En fonction de l'utilités de ces dernières et de leurs impact nous les ajouterons ou non aux prototypes suivants.


Dans l'état actuel du prototype, il est possible d'avoir une première idée de l'impact environnemental du *frontend*.
Bien entendu, il manque encore le chargement dynamique des données, mais nous pouvons déjà évaluer l'impact de l'affichage des données et du *framework* (au sens large : *React*, *PicoCSS*, *DayJS*).
Cette évaluation de l'impact (cf. Tab.1) est déjà encourageante en mode "développement" mais encore plus en mode "pré-production".
Nous mesurons ici l'effet positif de l'adoption d'outils de développement Web intégrant la ["minification"](https://fr.wikipedia.org/wiki/Minification) (cf. *Wikipédia*) du code et la concaténation du code d'une part et des feuilles de style d'autre part.


|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| Mode "développement" | 81,85 A🟢 | 1,36 | 60 | 26 | 1678
| Mode "pré-production" | 94,35 A🟢 |  1,11 | 44 | 4 | 328

__Tab.1__: Évaluation de l'impact du prototype de la page d'accueil.

Avec l'ajout de cette page, on peut tester un scénario de consultation de la météo et mesurer son impact.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Consulter la page d'accueil | 94.54 A🟢 |  1,11 | 43 | 3 | 327
| 2. Choisir une ville | 94.54 A🟢 |  1,11 | 43 | 3 | 327
| 3. Choisir un jour | 94.54 A🟢 |  1,11 | 43 | 3 | 327

__Tab.2__: Évaluation de l'impact du scénario "consulter la météo" dans le prototype n°1.

Bien que ces estimation soit basses dû aux données statiques utilisées, elles nous permettent tout de même de comparer avec celle des services concurrents vues précédemment.