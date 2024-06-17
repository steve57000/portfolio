export const mockData = [
    {
        id: 1,
        title: "Réservia",
        images: "reservia.png",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/zdKRljCuUDBwi5al/reservia.mp4"
            }
        ],
        objectif: "Transformez une maquette en site web",
        description: "L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS. Pour cela, vous travaillez en étroite collaboration avec Sarah, la CTO, et Loïc, l’UI designer.",
        tags: ["HTML", "CSS"],
        savoir: [
            "Utiliser un système de gestion de version pour le suivi du projet et son hébergement.",
            "Implémenter une interface responsive.",
            "Mettre en place son environnement Front-End.",
            "Intégrer du contenu conformément à une maquette",
        ],
        websiteUrl: "https://steve57000.github.io/BellSteve_P2_27072021/",
        fonction: [
            {
                name: "Fonction de recherche",
                list: [
                    "Les usagers pourront rechercher des hébergements dans la ville de leur choix.",
                    "Le champ de recherche est un champ de saisie, le texte doit donc pouvoir être édité par l’utilisateur.",
                    "Il faut englober ce champ dans un formulaire. La partie Recherche ne doit pas être fonctionnelle - il s’agit d’une première version pour valider l’interface."
                ],
                imgs: ["reservia-search.png", "reservia-search-actif.png"]
            },
            {
                name : "Liens “Hébergements” et “Activités” ",
                list: [
                    "Les textes “Hébergements” et “Activités”, situés dans l’en-tête, sont des liens. Ils doivent mener respectivement vers la section “Hébergements à Marseille” et “Activités à Marseille”"
                ],
                imgs: ["reservia-link.png"]
            },
            {
                name : "Cartes hébergements et activités",
                list: [
                    "Chaque carte d’hébergement ou d’activité devra être cliquable dans son intégralité (pas uniquement le titre).",
                    "Pour l’instant, les liens sont vides. On peut utiliser un attribut `href=”#”` pour simuler la présence d’un lien."
                ],
                imgs: ["reservia-lodging.png",  "reservia-activity.png"]
            },
            {
                name: "Filtres de recherche",
                list: [
                    "Les hébergements peuvent être filtrés par thématique, comme le budget ou l’ambiance.",
                    "Les filtres ne doivent pas être fonctionnels, il s’agit juste d’une première version pour valider l’interface."
                ],
                imgs: ["reservia-filter.png"]
            },
            {
                name: "Maquettes",
                list: [
                    "Trois maquettes ont été réalisées : desktop, tablette et mobile.",
                ]
            },
            {
                name : "Breakpoints",
                list: [
                    ">1024 px pour les écrans d’ordinateurs.",
                    ">=768 px pour les tablettes.",
                    "et tout ce qui est en dessous de 768 pour les téléphones portables."
                ]
            },
            {
                name : "Largeur min - max",
                list: [
                    "Pour éviter d’étirer la page web sur la largeur de façon excessive, il va falloir déterminer une largeur maximum de 1440 px. Au-delà, une marge blanche doit apparaître sur les côtés et le contenu doit se limiter à 1440 px de large. La largeur minimum est fixée à 320 px, en-deçà de cette largeur, le comportement n’est pas garanti."
                ]
            },
            {
                name: "Desktop first",
                list: [
                    "Il faut d’abord réaliser l’intégration pour les ordinateurs (autrement dit, en desktop first), puis les tablettes et enfin les téléphones. L’utilisation des Media Queries nous permettra de réaliser l’intégration pour les différents supports."
                ]
            },
            {
                name : "Bibliothèque d’icônes",
                list: [
                    "Les icônes proviennent de la bibliothèque Font Awesome."
                ]
            },
            {
                name : "Couleurs",
                list: [
                    "Les couleurs de la charte sont le bleu (#0065FC), le bleu clair (#DEEBFF) et le gris pour le fond (#F2F2F2)."
                ]
            },
            {
                name : "Police",
                list: [
                    "La police du site est Raleway. Nous pouvons passer par Google Fonts pour importer facilement cette police dans le code."
                ]
            },
            {
                name : "Mise en page",
                list: [
                    "Il est recommandé d'utiliser Flexbox."
                ]
            },
            {
                name : "Balises sémantiques",
                list: [
                    "Il est important d’utiliser des balises sémantiques, au minimum “header”, “nav”, “h1-h2-h3”, “main”, “section”, “article” et “footer”."
                ]
            },
            {
                name : "Validité du code",
                list: [
                    "Aucun IDE ou éditeur de code particulier n’est imposé pour le développement.\n",
                    "Le code doit être valide aux validateurs W3C HTML et CSS.",
                    "Le code HTML ne doit pas contenir de propriété CSS.",
                    "Lors du passage du desktop au mobile et à la tablette, ne pas dupliquer le code HTML (exception faite dans le formulaire avec le mot “Rechercher” et l’icône de la loupe).",
                    "Privilégier l’utilisation des classes CSS pour cibler un élément, plutôt que d’utiliser le nom de l’élément lui-même.",
                    "Ne pas dupliquer des classes CSS inutilement. Exemple : si 4 éléments sont identiques du point de vue de la mise en forme, alors utiliser une seule et même classe CSS, et non pas 4.",
                ]
            },
            {
                name : "Compatibilité navigateurs",
                list: [
                    "La maquette doit être compatible avec les dernières versions de Google Chrome et de Mozilla Firefox. Il faudra tester la page web sur ces deux navigateurs."
                ]
            },
            {
                name : "Restrictions",
                list: [
                    "Aucun framework CSS (type BootStrap ou Tailwind CSS) ou préprocesseur CSS (type Sass ou Less) ne doit être utilisé.",
                    "Aucun autre langage ne doit être utilisé (comme JavaScript, par exemple)"
                ]
            }
        ],
    },
    {
        id: 2,
        title: "Oh My Food!!!",
        images: "oh-my-food.png",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/SNYZ9aLwsdlA9jOi/Ohmyfood.mp4 "
            }
        ],
        objectif: "Dynamisez une page web avec des animations CSS",
        description: "Votre mission est de développer un site 'mobile first' qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu pour que les plats soient prêts à leur arrivée. L’équipe commerciale a déjà réussi à convaincre 4 restaurateurs d’utiliser la plateforme",
        tags: ["HTML", "CSS"],
        savoir: [
            "Mettre en œuvre des effets CSS graphiques avancés.",
            "Assurer la cohérence graphique d’un site web.",
            "Mettre en place une structure de navigation pour un site web."
        ],
        websiteUrl: "https://steve57000.github.io/Bell_steve_P3_04082021/index.html",
        fonction: [
            {
                name: "Page d'accueil",
                list: [
                    "Affichage de la localisation des restaurants. À terme, il sera possible de choisir sa localisation pour trouver des restaurants proches d’un certain lieu.",
                    "Une courte présentation de l’entreprise.",
                    "Une section contenant les 4 menus sous forme de cartes. Au clic sur la carte, ’utilisateur est redirigé vers la page du menu.",
                    "Quand l’application aura plus de menus, un “loader” sera nécessaire. Sur cette maquette, nous souhaitons en avoir un aperçu. Il devra apparaître pendant 1 à 3 secondes quand on arrive sur la page d'accueil, couvrir l'intégralité de l'écran, et utiliser les animations CSS (pas de librairie). Le design de ce loader n’est pas défini, toute proposition est donc la bienvenue tant qu’elle est cohérente avec la charte graphique du site."
                ],
                imgs: ["ohmyfood-accueil-top.png", "ohmyfood-accueil-middle.png"]
            },
            {
                name: "Page de menu",
                list: [
                    "4 pages contenant chacune le menu d’un restaurant.",
                    "À l’arrivée sur la page, les plats devront apparaître progressivement avec un léger décalage dans le temps. Ils pourront apparaître soit un par un, soit par groupe “Entrée”, “Plat” et “Dessert”",
                    "Le visiteur peut ajouter les plats qu'il souhaite à sa commande en cliquant dessus. Cela fait apparaître une petite coche à droite du plat. Cette coche devra coulisser de la droite vers la gauche. Pour cette première version, l’effet peut apparaître au survol sur desktop au lieu du clic. Si l’intitulé du plat est trop long, il devra être rogné avec des points de suspension."
                ],
                imgs: ["ohmyfood-menu.png"]
            },
            {
                name: "Header",
                list: [
                    "Le header est présent sur toutes les pages.",
                    "Sur la page d’accueil, il contient le logo du site.",
                    "Sur les pages de menu, il contient en plus un bouton de retour vers la page d’accueil."
                ]
            },
            {
                name: "Footer",
                list: [
                    "Le footer est identique sur toutes les pages.",
                    "Au clic sur “Contact”, un renvoi vers une adresse mail est effectué."
                ],
                imgs: ["ohmyfood-footer.png"]
            },
            {
                name: "Technologies",
                list: [
                    "Le développement doit se faire en CSS, sans JavaScript.",
                    "Le code CSS doit être disponible dans un ou plusieurs fichiers dédiés.",
                    "Le site devra être réalisé en adoptant le Mobile First, c’est-à-dire qu’il faudra d’abord réaliser l'intégration de la maquette mobile, puis tablette, et enfin l'intégration du responsive vers le desktop.",
                    "Aucun framework ne devra être utilisé ; en revanche l’utilisation de SASS serait un plus.",
                    "Aucun code CSS ne doit être appliqué via un attribut style dans une balise HTML.",
                    "Tout le code doit être versionné sur GitHub avec des commits réguliers pour suivre l’avancement et publier le site en ligne plus facilement",
                    "Le site devra être accessible sur GitHub Pages une fois terminé.",
                ]
            },
            {
                name: "Compatibilité",
                list: [
                    "L’ensemble du site devra être responsive sur mobile, tablette et desktop.",
                    "Les pages devront passer la validation W3C en HTML et CSS sans erreur.",
                    "Le site doit être parfaitement compatible avec les dernières versions desktop de Chrome et Firefox",
                ]
            },
            {
                name : "Couleurs",
                list: [
                    "Les couleurs de la charte : primaire (#9356DC), secondaire (#FF79DA) et tertiaire (#99E2D0)."
                ]
            },
            {
                name : "Police",
                list: [
                    "La police du site, pour le logo et les titres : Shrikand et pour le texte : Roboto."
                ]
            },
            {
                name : "Boutons",
                list: [
                    "Au survol, la couleur de fond des boutons principaux devra légèrement s’éclaircir. L’ombre portée devra également être plus visible.",
                    "À terme, les visiteurs pourront sauvegarder leurs menus préférés. Pour ça, un bouton \"J’aime\" en forme de cœur est présent sur la maquette. Au clic, il devra se remplir progressivement. Pour cette première version, l’effet peut apparaître au survol sur desktop au lieu du clic."
                ]
            }
        ]
    },
    {
        id: 3,
        title: "La Chouette Agence",
        images: "la-chouette-agence.png",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/mtMVhtFK9DVUFO_q/chouetteagence.mp4"
            }
        ],
        docs: [
            {
                nameDocs : "audit seo",
                link: "audit-SEO.pdf"
            }
        ],
        objectif: "Optimisez un site web existant",
        description: "L’activité de l’entreprise a bien démarré mais aujourd’hui, elle est en perte de vitesse. La fondatrice de l’entreprise cherche une solution pour faire repartir l’activité. En tapant “Entreprise web design Lyon” sur Internet, elle s’aperçoit que le site de l’agence apparaît seulement en deuxième page des moteurs de recherche.",
        tags: ["HTML", "CSS", "SEO"],
        savoir: [
            "Optimiser la taille et la vitesse d’un site web.",
            "Réaliser une recherche des bonnes pratiques en développement web.",
            "Écrire un code HTML et CSS maintenable.",
            "Assurer l’accessibilité d’un site web.",
            "Optimiser le référencement d’un site web.",
        ],
        websiteUrl: "https://steve57000.github.io/P4_10092021_site_corrig-/",
        fonction: [
            {
                name: "La couleur",
                list: [
                    "Le contraste des couleurs DOIT être conforme aux exigences du niveau AA du WCAG 2.1",
                    "Un contraste dont le ratio est de 4.5:1 pour les textes normaux (dont la fonte est inférieure à 18 points ou 14 points en gras).",
                    "Un contraste dont le ratio est de 3:1 pour les grands textes (18 points minimum ou 14 points en gras).",
                    "L'information transmise par la couleur DOIT également être disponible par d'autres moyens (texte souligné pour les liens, etc.)."
                ]
            },
            {
                name: "Le focus",
                list: [
                    "Tous les éléments activables DOIVENT être focusable.",
                    "Les contrôles standard tels que les liens, les boutons et les champs de formulaire sont accessibles par défaut.",
                    "Les contrôles non standard DOIVENT avoir un rôle ARIA (en-US) approprié qui leur est attribué, comme button, link ou checkbox.",
                    "Le focus DOIT être traité dans un ordre logique et de manière cohérente."
                ]
            },
            {
                name: "Analyse de l'état actuel de SEO du site fourni",
                list: [
                    "J’aimerais que tu indiques les parties du site qui ne sont pas optimisées pour le SEO et/ou qui ne sont pas à jour en termes d’accessibilité",
                    "Actuellement, certains de nos utilisateurs rencontrent des problèmes d’accessibilité sur notre site, c’est un point sur lequel on veut s’améliorer."
                ]
            },
            {
                name: "Amélioration du SEO du site",
                list: [
                    "Il faudra optimiser notre site.",
                    "Le site doit passer le W3C pour HTML et CSS."
                ]
            },
            {
                name: "Comparaison des résultats",
                list: [
                    "La vitesse de chargement des pages du site a un impact sur notre classement dans les résultats de recherche. Dans tes différentes recommandations, j’aimerais que tu prennes des mesures pour accélérer la vitesse de chargement, et que tu me démontres que cela fonctionne, grâce à des captures d’écran comparatives entre la version du site actuelle et celle que tu auras optimisée, fourni dans un rapport d’optimisation. "
                ]
            },
        ]
    },
    {
        id: 4,
        title: "Kanap",
        images: "kanap.png",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/FzvfuDkYAO3-8j4X/kanap.mp4"
            }
        ],
        objectif: "Construisez un site e-commerce",
        description: "Félicitations ! Vous avez été recruté en tant que développeur front-end par Kanap, une entreprise de commerce en ligne. Son credo ? Se démarquer des grands site e-commerce comme Amazon en créant des applications thématiques ne vendant qu’un seul groupe de produits.",
        tags: ["HTML", "CSS", "Javascript"],
        savoir: [
            "Interagir avec un web service avec JavaScript.",
            "Valider des données issues de sources externes.",
            "Créer un plan de test pour une application.",
            "Gérer des évènements JavaScript."
        ],
        websiteUrl: "",
        fonction: [
            {
                name: "Page d'accueil",
                list: [
                    "Affiche de manière dynamique tous les articles disponibles à la vente"
                ]
            },
            {
                name: "Page produit",
                list: [
                    "Affiche de manière dynamique les détails du produit sur lequel l'utilisateur a cliqué depuis la page d’accueil.",
                    "L’utilisateur peut sélectionner une quantité, une couleur, et ajouter le produit à son panier"
                ]
            },
            {
                name: "Page panier",
                list: [
                    "Un résumé des produits dans le panier, le prix total et la possibilité de modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.",
                    "Un formulaire permettant de passer une commande. Les données du formulaire doivent être correctes et bien formatées avant d'être renvoyées au back-end. Par exemple, pas de chiffre dans un champ prénom."
                ]
            },
            {
                name: "La page d’accueil",
                list: [
                    "Cette page présente l’ensemble des produits retournés par l’API.",
                    "Pour chaque produit, il faudra afficher l’image de celui-ci, ainsi que son nom et le début de sa description.",
                    "En cliquant sur le produit, l’utilisateur sera redirigé sur la page du produit pour consulter celui-ci plus en détail.",
                ]
            },
            {
                name: "La page Panier",
                list: [
                    "Sur cette page, l’utilisateur va pouvoir modifier la quantité d’un produit de son panier et le total du panier devra bien se mettre à jour.",
                    "L’utilisateur aura aussi la possibilité de supprimer un produit de son panier, le produit devra donc disparaître de la page.",
                    "Les inputs des utilisateurs doivent être analysés et validés pour vérifier le format et le type de données avant l’envoi à l’API. Il ne serait par exemple pas recevable d’accepter un prénom contenant des chiffres, ou une adresse e-mail ne contenant pas de symbole “@”",
                    "En cas de problème de saisie, un message d’erreur devra être affiché en dessous du champ correspondant",
                ]
            },
            {
                name: "La page Confirmation",
                list: [
                    "L'utilisateur doit voir s’afficher son numéro de commande."
                ]
            },
            {
                name: "API",
                list: [
                    "Des promesses devront être utilisées pour éviter les callbacks.",
                    "Il est possible d’utiliser des solutions alternatives, comme fetch, celle-ci englobant la promesse.",
                    "L’API n’est actuellement que dans sa première version. La requête post qu’il faudra formuler pour passer une commande ne prend pas encore en considération la quantité ni la couleur des produits achetés."
                ]
            },
            {
                name: "Fonctionnement du panier",
                list: [
                    "Dans le panier, les produits doivent toujours apparaître de manière regroupée par modèle et par couleur.",
                    "Si un produit est ajouté dans le panier à plusieurs reprises, avec la même couleur, celui-ci ne doit apparaître qu’une seule fois, mais avec le nombre d’exemplaires ajusté. ",
                    "Si un produit est ajouté dans le panier à plusieurs reprises, mais avec des couleurs différentes, il doit apparaître en deux lignes distinctes avec la couleur et la quantité correspondantes indiquées à chaque fois."
                ]
            },
        ]
    },
    {
        id: 5,
        title: "Piiquante",
        images: "piiquante.png",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/O3P3YUUHoYGWkPG3/piiquante.mp4"
            }
        ],
        objectif: "Construisez une API sécurisée",
        description: "Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .",
        tags: ["Express", "NodeJS", "MongoDB", "Multer"],
        websiteUrl: "",
        savoir: [
            "Implémentez un modèle logique de données conformément à la réglementation.",
            "Stocker des données de manière sécurisée.",
            "Mettre en œuvre des opérations CRUD de manière sécurisée.",
            "Gérer des évènements JavaScript."
        ],
        fonction: [
            {
                name: "Contexte du projet",
                list: [
                    "Piiquante se dédie à la création de sauces épicées dont les recettes sont gardées secrètes. Pour tirer parti de son succès et générer davantage de buzz, l'entreprise souhaite créer une application web dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres."
                ]
            },
            {
                name: "Spécifications de l'API",
                list: [
                    "POST '/api/auth/signup' : Hachage du mot de passe de l'utilisateur, ajout de l'utilisateur à la base de données.",
                    "POST '/api/auth/login' : Vérification des informations d'identification de l'utilisateur, depuis la base de données et un token web JSON signé (contenant également l'_id de l'utilisateur)",
                    "GET '/api/sauces' : Renvoie un tableau de toutes les sauces de la base de données",
                    "GET '/api/sauces/:id' : Renvoie la sauce avec l’_id fourni",
                    "POST '/api/sauces' : Capture et enregistre l'image, analyse la sauce transformée en chaîne de caractères et l'enregistre dans la base de données en définissant correctement son imageUrl. Initialise les likes et dislikes de la sauce à 0 et les usersLiked et usersDisliked avec des tableaux vides. Remarquez que le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoie une chaîne pour le corps de la demande en fonction des données soumises avec le fichier.",
                    "PUT '/api/sauces/:id' : Met à jour la sauce avec l'_id fourni. Si une image est téléchargée, elle est capturée et l’imageUrl de la sauce est mise à jour. Si aucun fichier n'est fourni, les informations sur la sauce se trouvent directement dans le corps de la requête (req.body.name, req.body.heat, etc.). Si un fichier est fourni, la sauce transformée en chaîne de caractères se trouve dans (req.body.sauce). Notez que le corps de la demande initiale est vide ; lorsque multer est ajouté, il renvoie une chaîne du corps de la demande basée sur les données soumises avec le fichier.",
                    "DELETE '/api/sauces/:id' : Supprime la sauce avec l'_id fourni.",
                    "POST '/api/sauces/:id/like' : Définit le statut « Like » pour l' userId fourni. Si like = 1, l'utilisateur aime (= like) la sauce. Si like = 0, l'utilisateur annule son like ou son dislike. Si like = -1, l'utilisateur n'aime pas (= dislike) la sauce. L'ID de l'utilisateur doit être ajouté ou retiré du tableau approprié. Cela permet de garder une trace de leurs préférences et les empêche de liker ou de ne pas disliker la même sauce plusieurs fois : un utilisateur ne peut avoir qu'une seule valeur pour chaque sauce. Le nombre total de « Like » et de « Dislike » est mis à jour à chaque nouvelle notation",
                ]
            },
            {
                name: "Exigences de sécurité",
                list: [
                    "Le mot de passe de l'utilisateur doit être haché.",
                    "L'authentification doit être renforcée sur toutes les routes sauce requises. Les adresses électroniques dans la base de données sont uniques et un plugin Mongoose approprié est utilisé pour garantir leur unicité et signaler les erreurs.",
                    "La sécurité de la base de données MongoDB (à partir d'un service tel que MongoDB Atlas) ne doit pas empêcher l'application de se lancer sur la machine d'un utilisateur.",
                    "Un plugin Mongoose doit assurer la remontée des erreurs issues de la base de données",
                    "Les versions les plus récentes des logiciels sont utilisées avec des correctifs de sécurité actualisés",
                    "Le contenu du dossier images ne doit pas être téléchargé sur GitHub.",
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Groupomania",
        images: "groupomania.PNG",
        objectif: "Créez un réseau social d’entreprise",
        description: "Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. Le département RH de Groupomania a imaginé plusieurs fonctionnalités pour favoriser les échanges entre collègues.",
        tags: ["HTML", "SASS", "VueJS", "MySQL", "Express"],
        websiteUrl: "",
        savoir: [
            "Authentifier un utilisateur et maintenir sa session.",
            "Gérer un stockage de données à l’aide de SQL.",
            "Implémenter un stockage de données sécurisé en utilisant SQL.",
            "Personnaliser le contenu envoyé à un client web."
        ],
        fonction: [
            {
                name: "Page de connexion",
                list: [
                    "Une page de connexion permettant à l’utilisateur de se connecter, ou bien de créer un compte s’il n’en possède pas. Ici il faut demander le minimum d’informations, la connexion doit se faire à partir de deux éléments : le mail de l’employé, et un mot de passe. Rien de plus à prévoir pour le moment."
                ]
            },
            {
                name: "Détails de la fonctionnalité de connexion",
                list: [
                    "Un utilisateur doit avoir la possibilité de se déconnecter.",
                    "La session de l’utilisateur persiste pendant qu’il est connecté.",
                    "Les données de connexion doivent être sécurisées"
                ]
            },
            {
                name: "Page d’accueil",
                list: [
                    "La page d’accueil doit lister les posts créés par les différents utilisateurs. On voudra que les posts soient listés de façon antéchronologique (du plus récent au plus ancien)."
                ]
            },
            {
                name: "Création d’un post",
                list: [
                    "Un utilisateur doit pouvoir créer un post.",
                    "Un post doit pouvoir contenir du texte et une image.",
                    "Un utilisateur doit aussi pouvoir modifier et supprimer ses posts."
                ]
            },
            {
                name: "Système de like",
                list: [
                    "Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post."
                ]
            },
            {
                name: "Rôle administrateur",
                list: [
                    "Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer un utilisateur “administrateur” ; celui-ci aura les droits de modification / suppression sur tous les posts du réseau social. Il faudra donc nous communiquer les identifiants de cet administrateur."
                ]
            },
            {
                name: "Identité graphique",
                list: [
                    "Police d’écriture : tous les textes du site doivent utiliser la police Lato. Couleurs : vous êtes libre sur les couleurs, mais voici notre palette actuelle dont vous pouvez vous inspirer.",
                    "Primaire : #FD2D01",
                    "Secondaire : #FFD7D7",
                    "Tertiaire : #4E5166",
                ]
            }
        ]
    },
    {
        id: 7,
        title: "GameOn",
        images: "gameon.PNG",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/R0pcTqNF7XSespyn/gameon.mp4"
            }
        ],
        objectif: "Créez une landing page avec Javascript",
        description: "Vous avez récemment été embauché comme développeur Front-End junior dans une PME, GameOn, spécialisée dans les conférences et les concours de jeux.",
        tags: ["HTML", "CSS", "Javascript"],
        savoir: [
            "Manipulez des données avec JavaScript.",
            "Faire interagir JavaScript avec une page web.",
            "Créez un formulaire de saisie de données."
        ],
        websiteUrl: "https://steve57000.github.io/gameOn/",
        fonction: [
            {
                name: "Tests manuels",
                list: [
                    "Visualiser et tester l'interface utilisateur dans les dernières versions de Chrome et de Firefox, ainsi que dans les versions mobile et desktop. Corriger les erreurs d'affichage existantes.",
                    "Tester toutes les fonctionnalités des boutons et des entrées de formulaire (tester les valeurs correctes et incorrectes)"
                ]
            },
            {
                name: "Ajouter confirmation quand envoi réussi",
                list: [
                    "Après une validation réussie, inclure un message de confirmation de la soumission réussie pour l'utilisateur (ex. \"Merci ! Votre réservation a été reçue.\")"
                ]
            },
            {
                name: "Ajouter validation ou messages d'erreur",
                list: [
                    "Des messages d'erreur spécifiques doivent apparaître sous l'entrée qui n'est pas correcte. Les messages d'erreur doivent s'afficher sous le champ de saisie associé."
                ]
            },
            {
                name: "Implémenter entrées du formulaire",
                list: [
                    "Lier les labels aux entrées dans le HTML en utilisant les attributs \"for\" et \"id\" dans le code existant. Corriger le code HTML quand nécessaire.",
                    "Utiliser du JavaScript pur (pas de jQuery) pour terminer le formulaire",
                    "Le formulaire doit être valide quand l'utilisateur clique sur \"Submit\"",
                    "Le champ Prénom a un minimum de 2 caractères / n'est pas vide.",
                    "Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.",
                    "L'adresse électronique est valide.",
                    "Pour le nombre de concours, une valeur numérique est saisie.",
                    "Un bouton radio est sélectionné.",
                    " La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.",
                    "Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation."
                ]
            },
            {
                name: "Todo : fermer la modale",
                list: [
                    "Ajouter la fonctionnalité au bouton (x)"
                ]
            },
        ]
    },
    {
        id: 8,
        title: "FishEye!!!",
        images: "fishEye.PNG",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/N1VH3zCelGQ7wsFj/fisheye.mp4"
            }
        ],
        objectif: "Créez un site accessible pour une plateforme de photographes",
        description: "Depuis quelques semaines, vous êtes développeur junior chez Techasite, une société de conseil spécialisée dans le développement de sites web et d'applications mobiles. Avec votre cheffe de projet Amanda et le Designer UI, vous venez de faire une réunion de lancement du projet avec un nouveau client, FishEye. FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web. ",
        tags: ["HTML", "CSS", "Javascript"],
        savoir: [
            "Assurer l'accessibilité d'un site web.",
            "Développer une application web modulaire avec des design patterns.",
            "Écrire du code JavaScript maintenable.",
            "Gérer les évènements d'un site avec JavaScript."
        ],
        websiteUrl: "https://steve57000.github.io/front-end-FishEye/",
        fonction: [
            {
                name: "Entreprise",
                list: [
                    "Nos clients prennent de super photos, mais ils n’y connaissent rien en développement web. C'est pourquoi nous proposons une plateforme unique pour montrer leurs photos sur une belle page et les contacter pour des événements ou des tirages. Nous sommes l'un des plus grands sites de photographie en freelance, avec un énorme réseau de photographes."
                ]
            },
            {
                name: "Objectif",
                list: [
                    "Notre site a été construit il y a plus de dix ans, et nous n'avons pas eu l'occasion de le mettre à jour jusqu'à présent. Nous venons de lever des fonds et nous aimerions que votre équipe le transforme d'un site statique à un site dynamique"
                ]
            },
            {
                name: "Page d'accueil",
                list: [
                    "Liste de tous les photographes avec leur nom, leur slogan, leur localisation, leur prix/heure et une image miniature de leur choix.",
                    "Lorsque l'utilisateur clique sur la vignette d'un photographe, il est amené à sa page"
                ]
            },
            {
                name: "Page des photographes",
                list: [
                    "Affiche une galerie des travaux du photographe.",
                    "Les photographes peuvent montrer à la fois des photos et des vidéos.",
                    "Lorsque l'utilisateur clique sur l'icône \"Like\", le nombre de likes affiché est incrémenté",
                    "Le nombre de likes total d’un photographe doit correspondre à la somme des likes de chacun de ses médias",
                    "Les médias peuvent être triés par popularité ou par titre.",
                    "Lorsque l'utilisateur clique sur un média, celui-ci doit s’ouvrir dans une lightbox, une croix dans le coin pour fermer la fénêtre, des boutons de navigation permettent de passer d'un élément média à l'autre, les touches fléchées du clavier permettent également de naviguer entre les médias dans la lightbox",
                    "Afficher un bouton pour contacter le photographe.",
                    "Le formulaire de contact est une modale qui s'affiche par-dessus le reste. Il comprend des champs pour les noms, l'adresse électronique et le message. Plus tard, le bouton de contact enverra un message au photographe. Pour l'instant, seulement afficher le contenu des trois champs dans les logs de la console."
                ]
            },
            {
                name: "Responsive design",
                list: [
                    "Pour cette itération, pas besoin que le site soit responsive sur mobile."
                ]
            },
            {
                name: "L'accessibilité est clé",
                list: [
                    "Utilisez des éléments HTML \"sémantiques\" qui décrivent leur intention autant que possible, au lieu de mettre des éléments <div> et <span> partout.",
                    "Lorsque vous devez créer un élément personnalisé, ajoutez des attributs ARIA pour décrire ce qu'il fait",
                    "Les images doivent présenter un attribut “alt”. Utilisez le titre des photos pour remplir cet attribut, et le nom du photographe dans le cas d’une photo de profil de photographe.",
                    "Le code devrait passer les tests AChecker sans “known issue” (afin qu'il soit conforme aux WCAG).",
                    "Toute la gestion des événements (par exemple, les clics et les pressions au clavier) doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).",
                    "Utilisez un lecteur d'écran gratuit pour vous faire une idée de ce que représente l'utilisation du site pour une personne malvoyante."
                ]
            },
            {
                name: "Contraintes techniques additionnelles",
                list: [
                    "Le code est séparé en différents fichiers (HTML, CSS, JavaScript)",
                    "ESLint est utilisé (avec les paramètres par défaut) pour garantir que le code est robuste. Ceci est particulièrement facile à intégrer avec l'IDE VSCode",
                    "Une version moderne (ES6 ou supérieure) de JavaScript est utilisée et les fonctionnalités obsolètes ne sont pas utilisées"
                ]
            },
        ]
    },
    {
        id: 9,
        title: "Les Petits Plats",
        images: "lespetitsplats.PNG",
        objectif: "Développez un algorithme de recherche en JavaScript",
        description: "Vous êtes freelance et vous venez d’être missionné par l’entreprise “Les petits plats” en temps que Développeur Front-end pour une mission de 3 mois. Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.  ",
        tags: ["HTML", "CSS", "Javascript"],
        websiteUrl: "https://steve57000.github.io/Les_petits_plats/",
        savoir: [
            "Analyser un problème informatique.",
            "Développer un algorithme pour résoudre un problème."
        ],
        fonction: [
            {
                name: "L’utilisateur doit pouvoir filtrer les recettes selon deux axes",
                list: [
                    "Une barre principale permettant de rechercher des mots ou groupes de lettres dans le titre, les ingrédients ou la description.",
                    "Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils."
                ]
            },
            {
                name: "Scénario nominal",
                list: [
                    "Le cas d’utilisation commence lorsque l’utilisateur entre au moins 3 caractères dans la barre de recherche principale.",
                    "Le système recherche des recettes correspondant à l’entrée utilisateur dans : le titre de la recette, la liste des ingrédients de la recette, la description de la recette.",
                    "L’interface est actualisée avec les résultats de recherche.",
                    "Les champs de recherche avancée sont actualisés avec les informations ingrédients, ustensiles, appareil des différentes recettes restantes.",
                    "L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil.",
                    "Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent. Par exemple, si l’utilisateur entre “coco” dans la liste d’ingrédients, seuls vont rester “noix de coco” et “lait de coco”.",
                    "L’utilisateur choisit un mot clé dans le champ.",
                    "Le mot clé apparaît sous forme de tag sous la recherche principale.",
                    "Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.",
                    "L’utilisateur sélectionne une recette."
                ]
            },
            {
                name: "Scénario alternatif A1",
                list: [
                    "Aucune recette correspondante à la recherche, l’interface affiche « Aucune recette ne contient ‘XXX ’ vous pouvez chercher «tarte aux pommes », « poisson », etc. (le XXX correspond à ce que l’utilisateur a écrit dans la recherche)",
                ]
            },
            {
                name: "Scénario alternatif A2",
                list: [
                    "L’utilisateur commence sa recherche par un tag,  les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée.",
                ]
            },
            {
                name: "Scénario alternatif A3",
                list: [
                    "L’utilisateur ajoute d’autres tags pour la recherche avancée, L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles, appareil. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans le champ disparaissent.",
                    "L’utilisateur choisit un mot clé dans le champ, le mot clé apparaît sous forme de tag sous la recherche principale",
                    "Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les champs de recherche avancée"
                ]
            },
            {
                name: "Règles de gestion",
                list: [
                    "La recherche doit pouvoir se faire via le champ principal ou via les tags (ingrédients, ustensiles ou appareil)",
                    "La recherche principale se lance à partir de 3 caractères entrés par l’utilisateur dans la barre de recherche.",
                    "La recherche s’actualise pour chaque nouveau caractère entré.",
                    "La recherche principale affiche les premiers résultats le plus rapidement possible.",
                    "Les champs ingrédients, ustensiles et appareil de la recherche avancée proposent seulement les éléments restant dans les recettes présentes sur la page",
                    "Les retours de recherche doivent être une intersection des résultats. Si l’on ajoute les tags “coco” et “chocolat” dans les ingrédients, on doit récupérer les recettes qui ont à la fois de la coco et du chocolat.",
                    "Comme pour le reste du site, le code HTML et CSS pour l’interface devra passer avec succès le validateur W3C .",
                    "Aucune librairie ne sera utilisée pour le JavaScript du moteur de recherche."
                ]
            },
        ]
    },
    {
        id: 10,
        title: "Billed",
        images: "billed.PNG",
        objectif: "Débuggez et testez un SaaS RH",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/KLI0IcObRXmmoKUI/presentationbilled.mp4"
            }
        ],
        description: "Vous êtes développeur front-end chez Billed, une entreprise qui produit des solutions Saas destinées aux équipes de ressources humaines. Malheureusement pour Billed, Garance, une collègue de la feature team “note de frais” a quitté l’entreprise avant d’avoir terminé l’application. Dans deux semaines, l’équipe doit montrer la solution qui fonctionne à l’ensemble de l’entreprise.",
        tags: ["Jest", "Kanban Notion"],
        savoir: [
            "Écrire des tests unitaires avec JavaScript.",
            "Rédiger un plan de test end-to-end manuel.",
            "Débugger une application web avec le Chrome Debugger.",
            "Écrire des tests d'intégration avec JavaScript."
        ],
        websiteUrl: "",
        fonction: [
            {
                name: "Bug - report",
                list: [
                    "Fixer les bugs identifiés dans le rapport de bug fourni par Jest.",
                    "Utiliser Chrome Debugger."
                ]
            },
            {
                name: "Bug - hunt",
                list: [
                    "Fixer les bugs identifiés par Leila sur le parcours employé.",
                    "Utiliser Chrome Debugger."
                ]
            },
            {
                name: "Tests unitaires et d’intégration",
                list: [
                    "Ajouter des tests unitaires et d’intégration pour les fichiers Bills et NewBill. Ils vont permettre d’éliminer les bugs et d’éviter toute régression lors des prochaines évolutions de la solution.",
                    "Certains tests sont déjà développés (pour le Login et pour le Dashboard côté administrateur RH) : ils sont déjà cochés sur le kanban. Il faut s’en inspirer pour les restants."
                ]
            },
            {
                name: "Tests End-to-End",
                list: [
                    "Rédiger un plan de test End-to-End (E2E) sur le parcours employé pour guider Leïla"
                ]
            },
            {
                name: "Autres informations",
                list: [
                    "L’application contient déjà des données test mais il est nécessaire d’en créer de nouvelles.",
                    "Des comptes administrateur et employé ont été créés pour les tests dans le readme du code front-end. Il faut les utiliser pour pouvoir charger une note de frais côté employé et la consulter côté administrateur RH."
                ]
            }
        ]
    },
    {
        id: 11,
        title: "Learn@Home",
        images: "learnhome.PNG",
        video: [
            {
                name: "présentation PowerPoint",
                link: "https://steve-bell.freeboxos.fr:3446/share/o-2mpFIekZJdwAld/Learn%40home.mp4"
            }
        ],
        objectif: "Définissez les besoins pour une app de soutien scolaire",
        description: "Vous travaillez chez Dev4U, une petite agence web dans laquelle tout le monde a une double casquette ! Votre entreprise a décroché un nouveau client : Learn@Home. Cette association met en relation des enfants en difficulté scolaire avec des tuteurs bénévoles. Fonctionnant surtout par le bouche à oreille et les SMS, elle souhaite désormais avoir un site web complet. ",
        tags: ["Figma", "User stories", "Kanban Notion"],
        savoir: [
            "Créer une maquette pour un client.",
            "Identifier les besoins de l'application à partir d'un cahier des charges.",
            "Modéliser une solution technique pour un client.",
            "Contribuer à un projet en utilisant une méthodologie agile."
        ],
        websiteUrl: "",
        fonction: [
            {
                name: "Les diagrammes de cas d’usage",
                list: [
                    "connexion,",
                    "chat,",
                    "calendrier",
                    "gestionnaire de tâches,",
                    "tableau de bord"
                ]
            },
            {
                name: "Les user stories",
                list:[
                    "Les user stories avec critère(s) d’acceptation pour chacune des fonctionnalités, partagées dans un format standard (PDF, DOCX, XLSX)."
                ]
            },
            {
                name: "Les maquettes du site",
                list:[
                    "Les maquettes du site avec un design simple et au moins une maquette par page (tu peux utiliser Figma ou Sketch et il faudra que tu expliques la navigation entre les pages pendant le meeting)."
                ]
            },
            {
                name: "Un Kanban",
                list:[
                    " Un Kanban découpant le projet, de manière macro (détails techniques exclus) en blocs de fonctionnalités et sous-fonctionnalités pour le développement. J’ai démarré le découpage dans ce kanban sur Notion, à toi de finir de compléter la colonne ”ANALYZE” sur le même modèle. Tu peux travailler sur Notion, Trello ou GitHub."
                ]
            },
            {
                name: "La page de connexion",
                list:[
                    "Un système de récupération de mot de passe oublié",
                    "Un lien vers une page de création de compte"
                ]
            },
            {
                name: "Le tableau de bord",
                list:[
                    "Un récapitulatif des tâches (to-do list) issu de la page de gestion des tâches.",
                    "la liste des événements prochains, issue de la page calendrier.",
                    "Un compteur de messages non lus."
                ]
            },
            {
                name: "L’interface de chat",
                list:[
                    "La photo de profil de l’expéditeur, à côté de chaque message",
                    "Un indicateur permettant de visualiser si un message a été lu ou non",
                    "L’horodatage des messages"
                ]
            },
            {
                name: "La page de calendrier",
                list:[
                    "La page de calendrier de Learn@Home correspond à une page de calendrier classique, sur laquelle s’affichent les différents événements, rendez-vous de l’utilisateur.",
                ]
            },
            {
                name: "La page de gestion des tâches",
                list:[
                    "L’élève ne peut créer des tâches que pour lui-même.",
                    "Le bénévole peut créer des tâches pour les élèves qu’il suit."
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Kasa",
        images: "kasa.PNG",
        objectif: "Développez une application Web avec React et React Router",
        description: "Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.",
        tags: ["HTML", "CSS", "REACT"],
        savoir: [
            "Créer des composants avec React.",
            "Développer les routes d'une application web avec React Router.",
            "Initialiser une application web avec un framework."
        ],
        websiteUrl: "https://steve57000.github.io/kasa/",
        fonction: [
            {
                name: "React :",
                list: [
                    "Découpage en composants modulaires et réutilisables",
                    "Un composant par fichier",
                    "Structure logique des différents fichiers",
                    "Utilisation des props entre les composants",
                    "Utilisation du state dans les composants quand c'est nécessaire",
                    "Gestion des événements",
                    "Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible"
                ]
            },
            {
                name: "React Router :",
                list: [
                    "Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.",
                    "Il existe une page par route.",
                    "La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.",
                    "La logique du routeur est réunie dans un seul fichier."
                ]
            },
            {
                name: "Général :",
                list: [
                    "Le code ne doit pas produire d'erreur ou de warning dans la console."
                ]
            },
            {
                name: "Contraintes fonctionnelles",
                list: [
                    "Pour le défilement des photos dans la galerie (composant Gallery) : Si l'utilisateur se trouve à la première image et qu'il clique sur \"Image précédente\", la galerie affiche la dernière image.",
                    "Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur \"Image suivante\", la galerie affiche la première image.",
                    "S'il n'y a qu'une seule image, les boutons \"Suivant\" et \"Précédent\" ainsi que la numérotation n'apparaissent pas.",
                    "La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.",
                    "Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page.",
                    "Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer. Inversement, si le Collapse est fermé, un clic permet de l'ouvrir."

                ]
            },
        ]
    }
];

export const curriculumVitae = {
    id: 1000,
    title: "Développeur web frontend",
    objectif: "Recherche d'emploi dans le domaine du développement web",
    image: "cvImage.png",
    savoir: [
        "Langages de programmation : HTML, CSS, JavaScript",
        "Frameworks : React.js, Vue.js",
        "Outils de versionnement : Git, GitHub",
        "Conception web responsive",
        "Développement Frontend et Backend",
        "Bonne compréhension des concepts de base de données",
        "Expérience dans le déploiement d'applications web",
    ],
    description: "Je suis un développeur web passionné à la recherche de nouvelles opportunités professionnelles.",
    experience: [
        {
            poste: "Poseur assainissement",
            entreprise: "Mayer Detp",
            lieu: "Metz",
            dateDebut: "Août 2018",
            dateFin: "Août 2020",
            description: "Installation et maintenance des réseaux d'eau, d'assainissement, de gaz et de toutes les canalisations de transport et de distribution de fluides selon les règles de sécurité",
        },
        {
            poste: "Monteur / Cableur",
            entreprise: "ERT technologie",
            lieu: "Woippy",
            dateDebut: "Octo. 2015",
            dateFin: "Août 2017",
            description: "Réaliser la pose et raccorder un faisceau de câble en fibre optique où coaxial. Vérifier les liaisons réalisées et tester les performances avec des appareils de certification homologués",
        },
        {
            poste: "Construction de réseaux électriques et de télécommunications",
            entreprise: "Capecom",
            lieu: "Marly",
            dateDebut: "Juil. 2012",
            dateFin: "Sept. 2014",
            description: "Construction et entretient de lignes de communication à longue distance et urbaines, aériennes ou souterraines",
        },
        {
            poste: "Plâtrier plaquiste peintre",
            entreprise: "Multi travaux",
            lieu: "Jarny",
            dateDebut: "Avril 2012",
            dateFin: "Juil. 2012",
            description: "Aménagement, isolation, décoration des espaces intérieurs",
        },
        {
            poste: "Conseiller de vente",
            entreprise: "Castorama",
            lieu: "Jouy-Aux-Arches",
            dateDebut: "Avril 2012",
            dateFin: "Juil. 2012",
            description: "Réaliser la vente de produits destinés à l'aménagement, la décoration et l'équipement du foyer, mise en rayon et facing",
        },
        {
            poste: "Plâtrier plaquiste enduiseur",
            entreprise: "Peultier MDB",
            lieu: "Augny",
            dateDebut: "Janv. 2009",
            dateFin: "Janv. 2010",
            description: "Aménagement, isolation, décoration des espaces intérieurs et extérieur. Agencement et finition de maison et immeuble",
        },
        {
            poste: "Maître chien",
            entreprise: "Marine National",
            lieu: "Lorient, Toulon",
            dateDebut: "Sept. 2008",
            dateFin: "Août 2009",
            description: "Aménagement, isolation, décoration des espaces intérieurs et extérieur. Agencement et finition de maison et immeuble",
        },
        {
            poste: "Aide plâtrier traditionnel , plaquiste, enduiseur",
            entreprise: "OC Plâtre",
            lieu: "Vittonville",
            dateDebut: "Juil. 2003",
            dateFin: "Mars 2007",
            description: "Réaliser les travaux d'isolation et de finition sur du neuf ou de la rénovation à l'aide de matériaux adaptés à l'enduisage et mettre en œuvre tous types de revêtements en plâtres ou similaires.",
        },
        {
            poste: "Apprenti Carreleur, factotum",
            entreprise: "Peutier MDB",
            lieu: "Augny",
            dateDebut: "Sept. 2001",
            dateFin: "Juin 2003",
            description: "Aménagement, isolation, décoration des espaces intérieurs et extérieur. Agencement et finition de maison et immeuble",
        },
    ],
    formations: [
        {
            diplome: "Titre de niveau 6, développeur d'application - JavaScript React ",
            etablissement: "OPENCLASSROOMS",
            lieu: "Paris",
            dateObtention: "en cour",
        },
        {
            diplome: "Titre de niveau 5, développeur web",
            etablissement: "OPENCLASSROOMS",
            lieu: "Paris",
            dateObtention: "2022",
        },
        {
            diplome: "Bac pro, Vendeur spécialisé en magasin",
            etablissement: "Afpa",
            lieu: "Paris",
            dateObtention: "2011",
        },
        {
            diplome: "CAP, Carreleur",
            etablissement: "CFA Montigny-Les-Metz",
            lieu: "Paris",
            dateObtention: "2001",
        },
    ],
    competences: [
        "Concevoir une application web",
        "Réseaux informatiques et télécoms",
        "Développer une application en lien avec une base de données",
        "Concevoir et gérer un projet",
        "Concevoir une maquette de présentation",
        "Résolution de problèmes",
        "Travail d'équipe",
    ],
    langues: [
        { langue: "Anglais", niveau: "Débutant" },
        { langue: "Français", niveau: "Natif" },
    ],
    contactInfo: {
        name: "Bell",
        lastName: "Steve",
        address: "3 rue René Cassin",
        ville: "57130 Ars Sur Moselle",
        phone: "07 44 44 85 61",
        email: "steve57b@hotmail.fr",
    },
    portfolioLink: "https://steve57000.github.io/portfolio",
    socialLinks: [
        "https://www.linkedin.com/in/steve-bell57",
    ],
};
