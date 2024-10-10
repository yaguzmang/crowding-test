module.exports = {
  fileDrop: {
    dropFilesHere: 'Enregistrer les fichiers ici',
    dragAndDropOrClick: 'Glisser-déposer les fichiers ici, ou cliquer pour sélectionner les fichiers',
  },
  language: {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    ru: 'Русский',
    ar: 'العربية',
    zh: '中文',
  },
  disclaimer: {
    statisticalFactsheets:
      'Avertissement: peut contenir des estimations de la FAO, peut contenir des valeurs manquantes',
    part1: 'This website has been produced with the assistance of the ',
    europeanUnion: 'Union européenne',
    part2: ',  du ',
    govFinland: 'Gouvernement de Finlande',
    part3: ',  du ',
    govNorway: 'Gouvernement de Norvège',
    part4: ' et du ',
    gef: 'Global Environment Facility',
    part5:
      '. Its contents are the sole responsibility of FAO and can in no way be taken to reflect the views of the European Union, the Government of Finland, the Government of Norway and the Global Environment Facility.',
    termsOfUse: 'Statistical Database Terms of Use',
  },
  home: {
    keyFindings: `Le monde compte une superficie forestière totale de 4,06 milliards d'hectares
(ha), ce qui correspond à 31 pour cent de la superficie totale des terres. Cela
équivaut à 0,52 ha par personne - bien que les forêts ne soient pas également
réparties entre les populations du monde ou sur le plan géographique. Le domaine
tropical compte la plus grande part de forêts du monde (45 pour cent), suivi
des domaines boréal, tempéré et sous-tropical`,
  },
  footer: {
    contactUs: 'Contactez-nous',
    termsAndConditions: 'Termes et conditions',
    scamAlert: 'Alerte aux messages frauduleux',
    reportMisconduct: 'Signaler un cas de mauvaise conduite',
    tutorials: 'Vidéo',
    sendFeedback: 'Envoyer réactions',
    licenses: 'Autorisations',
    platformVersion: 'Version de la plate-forme',
  },
  unit: {
    haThousand: '1 000 ha',
    ha: 'ha',
    kmSq: 'km²',
    mileSq: 'mi²',
    acre1000: '1 000 acres',
    acre: 'acre',
    haMillion: "millions d'ha",
    haThousandPerYear: '1 000 ha / an',
    tonnesPerHa: 'tonnes / ha',
    cubicMeterPerHa: 'm³/ha',
    millionTonnes: 'million metric tonnes',
    millionsCubicMeterOverBark: 'millions de m³ sur écorce',
    thousandCubicMeterOverBark: '1 000 m³ over bark',
    billionCubicMeter: 'billion m³',
    thousandCubicMeter: '1 000 m³',
    thousandCubicMeterRWE: '1 000 m³ round-wood equivalent',
    thousandPersons: '1 000 persons',
    gt: 'Gt',
    fte1000: '1 000 EPT',
    numberOfStudents: '$t(graduationOfStudents.numberOfStudents)',
    absoluteNumber: 'absolute number',
    annualNumberOfVisitsMillion: 'annual number of visits (million)',
    millionNationalCurrency: 'million national currency',
    facilityLengthIn1000Km: 'facility (length in 1 000 km)',
    growingStockPercent: '% du total',
  },
  countrySelection: {
    selectCountry: 'Choisissez le pays',
  },
  definition: {
    definitionLabel: 'Voir les définitions',
    faqLabel: 'Q&R',
    seeReportingNotes: 'See Reporting Notes',
  },
  audit: {
    notStarted: 'Pas commencé',
    edited: 'Modifié',
  },
  yesNoTextSelect: {
    yes: 'Oui',
    no: 'Non',
    notSelected: '',
  },
  user: {
    roles: {
      REVIEWER: 'Examinateur',
      NATIONAL_CORRESPONDENT: 'Correspondant national',
      ALTERNATE_NATIONAL_CORRESPONDENT: 'Correspondant national suppléant',
      COLLABORATOR: 'Collaborateur',
      ADMINISTRATOR: 'Administrateur',
      VIEWER: 'Visionneur',
      noRole: '',
      // unused?
      reviewer_plural: 'Examinateurs',
      nationalCorrespondent_plural: 'Correspondants nationaux',
      alternateNationalCorrespondent_plural: 'Correspondants nationaux suppléants',
      collaborator_plural: 'Collaborateurs',
      // deprecated
      // reviewer: 'Reviewer',
      // nationalCorrespondent: 'National correspondent',
      // alternateNationalCorrespondent: 'Alternate national correspondent',
      // collaborator: 'Collaborator',
      // administrator: 'Administrator',
    },
    resetPasswordEmail: {
      subject: 'Plateforme FRA - Réinitialiser le mot de passe',
      textMessage: `Dear {{user}}

We have received a request to reset your password for your FRA account. 
If you didn't make this request, you can safely ignore this email.

Click the following link to reset your password
{{- link}}


Thanks,
The FRA team fra@fao.org
{{- url}}`,
      htmlMessage: `Dear {{user}}
<br/><br/>
We have received a request to reset your password for your FRA account. 
<br/>
If you didn't make this request, you can safely ignore this email.
<br/><br/><br/>
<a href="{{link}}" style="text-decoration: none; background-color: #0098a6;border: 2px solid #00988F;color: white;font-size: 14px;font-weight: 700;    padding: 10px 50px;">Click here to reset your password</a>
<br/><br/><br/>
Thanks,
<br/>
The FRA team fra@fao.org
<br/>
{{- url}}
      `,
    },
  },
  fraClass: {
    forest: 'Forêt',
    otherWoodedLand: 'Autres terres boisées',
    otherLand: 'Autre terre',
  },
  fraForestCharacteristicsClass: {
    naturallyRegeneratingForest: 'Forêt naturellement régénérée',
    plantationForest: 'Forêt de plantation',
    ofWhichIntroduced: '…dont introduite',
    ofWhichPrimaryForest: '$t(fra.forestCharacteristics.primaryForest)',
    otherPlantedForest: 'Autre forêt plantée',
    totalForest: 'Forêt totale',
  },
  fraOtherLandClass: {
    palms: '…dont palmiers (huile, noix de coco, dattes, etc)',
    treeOrchards: '…dont vergers (inclut fruits, fruits à coque, olives, etc)',
    agroforestry: '…dont système agroforestier',
    treesUrbanSettings: '…dont arbres en milieu urbain',
  },
  messageBoard: {
    messageBoard: '$t(landing.sections.messageBoard)',
  },
  userChat: {
    chatHeader: 'Échange de messages avec {{user}}',
    noMessages: 'Pas de messages',
    writeMessage: 'Écrire un message…',
    send: 'Envoyer',
    cancel: 'Cancel',
    notificationEmail: {
      subject: '{{sender}} vous a envoyé un message',
      textMessage: `Cher {{recipient}},

{{sender}} vous a envoyé un message.

Accédez à la plateforme au lien suivant pour le voir et répondre:
{{- link}}

L'équipe de FRA
{{- url}}
    `,
      htmlMessage: `Cher {{recipient}},
<br/><br/>
{{sender}} vous a envoyé un message.
<br/><br/>
<b><a href="{{- link}}">Accédez à la plateforme pour le voir et répondre.</a></b>
<br/><br/>
L'équipe de FRA
<br/>
{{- url}}
    `,
    },
  },
  // error messages
  error: {
    access: {
      countryRoleNotSpecified:
        "Erreur: L'utilisateur {{user}} a essayé d'accéder à {{countryIso}} mais aucun rôle n'a été précisé",
      countryUserNotReviewer:
        "Erreur: L'utilisateur {{user}} a essayé d'accéder à {{countryIso}} dont il n'est pas examinateur",
      userNotAdministrator:
        "Erreur : l'utilisateur {{user}} a tenté d'accéder à une ressource disponible uniquement pour les administrateurs",
      roleChangeNotAllowed:
        "Erreur: L'utilisateur {{user}} a essayé de configurer un autre profil d'utilisateur à {{role}} ce qui n'est pas autorisé pour l'utilisateur connecté",
      userAlreadyAddedToCountry: "Erreur : l'utilisateur {{user}} est déjà ajouté au pays {{countryIso}}",
      invitationAlreadyUsed:
        "Erreur: L'invitation {{invitationUuid}} a déjà été utilisée, détournement par {{loginEmail}} non autorisé!",
      countryDoesNotMatch: 'Erreur: Le pays {{countyryIso}} ne correspond pas',
      assessmentEditingNotAllowed:
        "Erreur: L'utilisateur {{user}} dans le rôle {{role}} ne peut pas modifier l'évaluation en {{assessmentStatus}} pour le pays {{countryIso}}",
      assessmentCommentingNotAllowed:
        "Erreur: L'utilisateur {{user}} dans le rôle {{role}} ne peut pas commenter l'évaluation en {{assessmentStatus}} pour le pays {{countryIso}}",
    },
    assessment: {
      transitionNotAllowed:
        "Erreur: La transition depuis {{currentStatus}} à {{status}} n'est pas autorisée pour le rôle {{role}}",
      deskStudyNotAllowed: "Erreur: Seulement l'administrateur peut changer le statut de l'étude de bureau",
    },
    review: {
      commentDeleteNotOwner:
        "Erreur: L'utilisateur {{user}} a essayé de supprimer un commentaire qui ne lui appartient pas",
      commentEnterResolvedIssue:
        "Erreur: L'utilisateur {{user}} a essayé de saisir un commentaire sur une question résolue",
    },
    ndp: {
      previousNdpNotFound: 'Pas trouvé de point des données nationales avant {{year}}',
    },
  },
  // components

  countryListing: {
    annuallyUpdated: 'Mis à jour annuellement',
    fra2020: 'FRA 2020',
  },
  navigation: {
    hideAll: 'Masquer tout',
    showAll: 'Montrer tout',
    support: {
      dontDelete: 'Information de système, ne pas supprimer',
      feedbackEmailSubject: 'Réactions sur la plateforme de FRA',
      platformVersion: 'Version de la plate-forme',
      userAgent: 'Agent utilisateur',
      user: 'Utilisateur',
      manageCollaborators: 'Gérer collaborateurs',
    },
    sectionHeaders: {
      introduction: 'Introduction',
      forestExtentCharacteristicsAndChanges: 'Étendue, caractéristiques et changement des forêts',
      forestGrowingStockBiomassAndCarbon: 'Matériel sur pied, biomasse et carbone forestiers',
      forestDesignationAndManagement: 'Désignation et gestion des forêts',
      forestOwnershipAndManagementRights: 'Droits de propriété et de gestion des forêts',
      forestDisturbances: 'Perturbations forestières',
      forestPolicyAndLegislation: 'Politiques et dispositions législatives sur les forêts',
      employmentEducationAndNwfp: 'Emploi, enseignement et PFNL',
      sustainableDevelopment: 'Objectif de développement durable 15',
      panEuropeanIndicators: 'Indicateurs paneuropéens',
    },
    cancel: 'Cancel',
    changeStatusTextPlaceholder: 'Ajouter un message facultatif',
    doNotNotifyUsers: 'Ne pas notifier les utilisateurs',
    notifySelf: "S'envoyer une copie à soi-même",
  },
  header: {
    editProfile: 'Modifier profil',
    logout: 'Déconnexion',
    hideSidebar: 'Masquer barre latérale',
    showSidebar: 'Montrer barre latérale',
    autoSave: {
      saving: 'Enregistrement…',
      complete: 'Modifications enregistrées',
      lastSaveTimestampReceived: 'Dernière modification',
    },
  },
  time: {
    hour: 'Il y a {{count}} heure',
    hour_plural: 'Il y a {{count}} heures',
    day: 'Il y a {{count}} jour',
    day_plural: 'Il y a {{count}} jours',
    week: 'Il y a {{count}} semaine',
    week_plural: 'il y a {{count}} semaines',
    aMomentAgo: 'Il y a un moment',
  },
  review: {
    comments: 'Commentaires',
    noComments: 'Pas de commentaires',
    loading: 'Chargement',
    resolve: 'Résoudre',
    confirmDelete: 'Supprimer ce commentaire? Cette action ne peut pas être annulée.',
    commentDeleted: 'Commentaire supprimé',
    commentMarkedAsResolved: 'Marqué comme résolu',
    delete: 'Delete',
    writeComment: 'Écrire un commentaire…',
    commentingClosed: 'Période de commentaires terminée',
    cancel: 'Cancel',
  },
  description: {
    edit: 'Modifier',
    done: 'Terminé',
    loading: 'Chargement contenu…',
    description: 'Description',
    dataSourcesTitle: 'Sources des données, données de base & classification et définitions nationales',
    generalCommentsTitle: 'Commentaires',
    dataSources: 'Sources des données',
    dataSourcesPlus: 'Source des données + type de source de données par ex. IFN, etc',
    originalData: 'Données de base',
    nationalClassificationAndDefinitions: 'Classification et définitions nationales',
    nationalData: 'Données nationales',
    analysisAndProcessing: 'Analyse et traitement des données nationales',
    estimationAndForecasting: 'Estimation et prévision',
    reclassification: 'Reclassification dans les catégories de FRA {{cycleName}}',
  },
  nationalDataPoint: {
    clickOnNDP: 'Click on the year to access original data',
    nationalDataPoint: 'Point des données nationales',
    addNationalDataPoint: 'Ajouter point des données nationales',
    noNationalDataAdded: 'Pas de donnée nationale ajoutée',
    nationalData: 'Donnée nationale',
    reclassificationLabel: 'Données de base et reclassification',
    forestCategoriesLabel: 'Forêt, autres terres boisées et autre terre',
    forestCategoriesLabel2025: 'Forêt, autres terres boisées et terres restantes',
    referenceYearData: 'Année de référence pour les données',
    referenceYear: 'Année de référence',
    references: 'Références',
    prefill: 'Prefill',
    prefillWith: 'Prefill with',
    selectYear: 'Sélectionner…',
    methods: 'Méthodes',
    methodsUsed: 'Méthodes utilisées',
    dataSource: 'Source des données',
    dataSources: 'Sources des données',
    dataSource2025ExplanatoryText:
      'The data sources listed were reported in FRA 2020. Please copy and paste relevant data sources in table above.',
    additionalComments: 'Commentaires supplémentaires',
    edit: 'Modifier',
    confirmCopyPreviousValues: 'Do you want to override previous values? This operation cannot be undone.',
    copyPreviousValues: 'Copier les références précédentes',
    nationalClassifications: 'Classifications nationales',
    nationalClass: 'Classe nationale',
    nationalClasses: 'Classifications et définitions',
    definition: 'Définition',
    categories: 'Catégories',
    class: 'Classe',
    fraClasses: 'Classes de FRA',
    area: 'Superficie (1 000 ha)',
    total: 'Total',
    modifiedExplanation: 'Point des données nationales avec modifications',
    confirmDelete: 'Supprimer ce point des données? Cette action ne peut pas être annulée.',
    discardChanges: 'Annuler les modifications',
    doneEditing: 'Terminée',
    enterOrCopyPasteNationalClasses: 'Saisir ou copier-coller les classes nationales',
    forestCharacteristics: 'Caractéristiques des forêts',
    otherLandCharacteristics: 'Autre terre dotée de couvert arboré',
    plantationForest: 'Forêt de plantation',
    remindDirtyOdp: 'Le point des données nationales a été actualisé, générer nouvelles valeurs',
    disabled: 'Désactivé, activer dans la section 1b',
    dataSourceMethodsOptions: {
      nationalForestInventory: 'Inventaire national des forêts',
      sampleBasedRemoteSensingAssessment: "Évaluation d'échantillons par télédétection",
      fullCoverMaps: 'Cartes complètes des forêts/de la végétation',
      registersQuestionnaires: 'Répertoires/questionnaires',
      other: 'Autres formes de propriété (préciser dans les commentaires)',
    },
    appliesToVariablesOptions: {
      forest: 'Forêt',
      otherWoodedLand: 'Autres terres boisées',
      otherLand: 'Autre terre',
    },
    fileAddedWillBecomePublic: 'Un fichier ajouté comme référence sera accessible au public',
  },
  userManagement: {
    addUser: 'Ajouter collaborateur',
    allUsers: 'Tous les collaborateurs',
    confirmDelete: 'Éliminer {{user}}?',
    done: 'Terminé',
    edit: 'Modifier',
    editPermissions: 'Modifier les autorisations',
    formErrors: 'There are errors in the form. Please, fix them and submit it again.',
    info: 'Info',
    insufficientPrivileges: 'Privilèges insuffisants',
    invitationDeleted: "L'invitation a été supprimée",
    invitationEmailSent: "Un e-mail d'invitation a été envoyé",
    invitationLink: "Lien d'invitation",
    invitationLinkCopied: 'The invitation link has been copied',
    inviteAgain: 'Inviter de nouveau',
    loginEmail: 'Connexion',
    manageCollaborators: 'Gérer collaborateurs',
    noUsers: 'Aucun collaborateur ajouté',
    permissions: 'Autorisations',
    personalInfoRequired: 'Veuillez compléter vos informations personnelles avant de continuer',
    placeholder: 'Choisir…',
    remove: 'Éliminer',
    sendInvitation: "Envoyer un email d'invitation",
    userAdded: '{{email}} a été ajouté',
    userModified: '{{user}} a été modifié',
    invitationEmail: {
      subject: 'Invitation à la plateforme de FRA',
      textMessage: `Cher {{invitedUser}},

Vous avez été invité à accéder {{assessmentName}} {{cycleName}} comme {{role}} pour le/la {{- country}}.

Acceptez cette invitation et accédez à cette plateforme à l'adresse suivante:
{{- link}}

Bon travail!

L'équipe de FRA fra@fao.org
{{- url}}
    `,
      htmlMessage: `Cher {{invitedUser}},
<br/><br/>
Vous avez été invité à accéder {{assessmentName}} {{cycleName}} comme {{role}} pour le/la {{country}}.
<br/><br/>
<b><a href="{{- link}}">Acceptez cette invitation et accédez à la plateforme</a></b>
<br/><br/>
Bon travail!
<br/><br/>
L'équipe de FRA fra@fao.org
<br/>
{{- url}}
    `,
    },
    permissionNames: {
      tableData: 'Données du tableau',
      descriptions: 'Descriptions',
    },
  },
  // FRA 2020 questionare
  // Object name and title should have always the same name

  contactPersons: {
    all: '$t(common.all)',
    reportPreparationAndContactPersons: 'Préparation du rapport et personnes de contact',
    contactPersons: 'Introduction',
    contactPersonsSupport: 'Le présent rapport a été préparé par la(les) personne(s) suivante(s)',
    introductoryText: "Texte d'introduction",
    introductoryTextSupport: "Placer un texte d'introduction sur le contenu de ce rapport",
    firstName: 'Prénom',
    lastName: 'Nom de famille',
    institution: 'Institution/adresse',
    email: 'Email',
    tables: 'Tableaux',
    none: 'Aucune',
  },
  extentOfForest: {
    extentOfForest: 'Étendue des forêts et des autres terres boisées',
    estimationAndForecasting: 'Estimation et prévision',
    categoryHeader: 'Catégories de FRA',
    forestArea: 'Forêt',
    chart: {
      placeholderLine1: 'Pour commencer, ajouter de nouveaux points de données nationales et les utiliser',
      placeholderLine2: 'pour générer automatiquement les valeurs de FRA.',
    },
    otherLandCategories: "Catégories d'autres terres",
    ofWhichPalms: '…dont palmiers (huile, noix de coco, dattes, etc.)',
    ofWhichTreeOrchards: '…dont vergers (inclut fruits, fruits à coque, olives, etc.)',
    ofWhichAgroforestry: '…dont système agroforestier',
    ofWhichTreesUrbanSettings: '…dont arbres en milieu urbain',
    totalLandArea: 'Total des terres émergées',
    fedAreasExceedTotalLandArea:
      'La superficie des forêts et des autres terres boisées est supérieure au total des terres émergées',
    forestAreaDoesNotMatchPreviouslyReported:
      'La superficie de forêt ne correspond pas à la superficie de FRA {{year}}: {{previous}}',
    forestAreaNetChangeDoesNotMatch:
      'Le changement net de la superficie forestière ne correspond pas à la valeur attendue : {{value}}',
    useOriginalDataPoints: 'Utiliser les points de données nationales',
    dontUseOriginalDataPoints: 'Ne pas utiliser les points de données nationales',
    whatIsThis: "Qu'est-ce-que c'est?",
    tableNoticeMessage:
      "La superficie des terres enregistrée par FAOSTAT pour l'année 2015 est utilisée pour toutes les années de référence",
    ndpMissingValues: 'Le point de données nationales a des valeurs manquantes',
    showNDPs: 'Afficher les points de données nationaux',
    hideNDPs: 'Cacher les points de données nationaux',
  },
  climaticDomain: {
    climaticDomain: 'Domaine climatique',
    percentOfForestArea2015: '% de superficie forestière 2015',
    percentOfForestArea2015Override: 'Remplacer valeur',
    selectDefault: 'Défault',
    boreal: 'Boréal',
    temperate: 'Tempéré',
    subtropical: 'Sous-tropical',
    sub_tropical: '$t(climaticDomain.subtropical)',
    tropical: 'Tropical',
  },
  forestCharacteristics: {
    forestCharacteristics: 'Caractéristiques des forêts',
    estimationAndForecasting: 'Estimation et prévision',
    categoryHeader: 'Catégories de FRA',
    naturalForestArea: 'Forêt naturellement régénérée',
    plantationForestArea: 'Forêt de plantation',
    plantationForestIntroducedArea: "...dont d'espèces introduites",
    otherPlantedForestArea: 'Autre forêt plantée',
    plantedForest: 'Forêt plantée',
    totalForestArea: 'Total superficie forestière',
    total: 'Total',
    useOriginalDataPoints: 'Utiliser les points de données nationales',
    dontUseOriginalDataPoints: 'Ne pas utiliser les points de données nationales',
  },
  tableWithOdp: {
    confirmGenerateFraValues: 'Remplacer valeurs existantes?',
    generateFraValues: 'Générer valeurs',
    generatingFraValues: 'En cours de traitement...',
    linearExtrapolation: 'Linéaire',
    repeatLastExtrapolation: 'Répéter dernier',
    annualChangeExtrapolation: 'Changement annuel',
    placeholderFuture: 'Futur',
    placeholderPast: 'Passé',
    copyToClipboard: 'Copier valeurs',
    placeholderSelect: 'Estimation et prévision',
    _1000haYear: '1000 ha/an',
  },
  forestAreaChange: {
    forestAreaChange: 'Expansion annuelle de la forêt, déforestation et changement net',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1000 ha)',
    forestExpansion: 'Expansion de la forêt',
    ofWhichAfforestation: '…dont boisement',
    ofWhichNaturalExpansion: '…dont expansion naturelle',
    deforestation: 'Déforestation',
    forestAreaNetChange: 'Changement net de la superficie forestière',
    forestAreaNetChangeFrom1a: 'Changement net de la superficie de forêt calculée à partir du tableau 1a',
    netChangeDoesNotMatch: 'Ne correspond pas au changement net de la superficie forestière',
  },
  annualReforestation: {
    annualReforestation: 'Reboisement annuel',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1000 ha)',
    reforestation: 'Reboisement',
  },
  specificForestCategories: {
    specificForestCategories: 'Forêt primaire et catégories spéciales de forêts',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1 000 ha)',
    bamboo: 'Bambous',
    mangroves: 'Mangroves',
    temporarilyUnstocked: 'Temporairement non boisée et/ou récemment régénérée',
    primaryForest: 'Forêt primaire',
    exceedsNaturallyRegeneratingForest: 'Supérieur aux forêts naturellement régénérées (1b)',
    rubberWood: 'Bois de caoutchouc',
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover: 'Autre terre dotée de couvert arboré',
    areaUnitLabel: 'Superficie (1 000 ha)',
    categoryHeader: 'Catégories de FRA',
    palms: 'Palmiers',
    treeorchards: 'Vergers',
    agroforestry: 'Système agroforestier',
    treesinurbansettings: 'Arbres en milieu urbain',
    total: 'Total',
    otherLandArea: "Superficie d'autre terre",
    other: 'Autres formes de propriété (préciser dans les commentaires)',
  },
  growingStock: {
    growingStock: 'Matériel sur pied',
    supportText: "Contrôler d'avoir introduit les données dans les tableaux 1a & 1b avant de modifier ce tableau",
    categoryHeader: 'Catégories de FRA',
    avgTableHeader: 'Matériel sur pied m³/ha (sur écorce)',
    totalTableHeader: 'Total matériel sur pied (millions m³ sur écorce)',
    naturallyRegeneratingForest: 'Forêt naturellement régénérée',
    plantedForest: 'Forêt plantée',
    plantationForest: '…dont forêt de plantation',
    otherPlantedForest: '…dont autre forêt plantée',
    forest: 'Forêt',
    otherWoodedLand: 'Autres terres boisées',
    copyToClipboard: 'Copier valeurs',
  },
  growingStockComposition: {
    native: 'Indigène',
    introduced: 'Introduite',
    growingStockComposition: 'Composition du matériel sur pied',
    forestGrowingStockComposition: 'Composition du matériel sur pied de la forêt',
    categoryHeader: 'Catégories de FRA',
    nativeTreeSpecies: "Espèce d'arbre indigène",
    introducedTreeSpecies: "Espèce d'arbre introduite",
    areaUnitLabel: 'Matériel sur pied dans la forêt (millions m³ sur écorce)',
    scientificName: 'Dénomination scientifique',
    millionCubicMeter: '$t(fra.growingStockComposition.millionCubicMeter)',
    commonName: 'Dénomination usuelle',
    rank: '#{{idx}} Classé(e) en volume',
    remainingNative: "Espèces d'arbres indigènes restantes",
    remainingIntroduced: "Espèces d'arbres introduites restantes",
    totalNative: "Volume total espèces d'arbres indigènes",
    totalIntroduced: "Volume total espèces d'arbres introduites",
    totalGrowingStock: 'TOTAL Matériel sur pied ',
    rankingYear: 'Année de classement 2015',
    growingStockPercent: '$t(unit.growingStockPercent)',
    mostRecentYear: '$t(fra.growingStockComposition.mostRecentYear)',
  },
  biomassStock: {
    biomassStock: 'Biomasse',
    categoryHeader: 'Catégories de FRA',
    tableHeader: 'Biomasse forestière (tonnes/ha)',
    aboveGround: 'Biomasse aérienne',
    belowGround: 'Biomasse souterraine',
    deadWood: 'Bois mort',
    downloadExcel: 'Télécharger calculateur excel',
  },
  carbonStock: {
    carbonStock: 'Carbone',
    categoryHeader: 'Catégories de FRA',
    tableHeader: 'Carbone forestier (tonnes/ha)',
    carbonAboveGroundBiomass: 'Carbone dans la biomasse aérienne',
    carbonBelowGroundBiomass: 'Carbone dans la biomasse souterraine',
    carbonDeadwood: 'Carbone dans le bois mort',
    carbonLitter: 'Carbone dans la litière',
    carbonSoil: 'Carbone dans le sol',
    soilDepthHeading: 'Profondeur du sol (cm) utilisée pour les estimations du carbone dans le sol',
  },
  designatedManagementObjective: {
    designatedManagementObjective: 'Objectif de gestion désigné',
    primaryDesignatedManagementObjective: 'Objectif de gestion désigné principal',
    primaryDesignatedManagementObjectiveSupport:
      "L'objectif de gestion désigné principal est sensiblement plus important que les autres objectifs de gestion. Les différents objectifs de gestion principaux sont *exclusifs* et la superficie déclarée dans un des objectifs de gestion principaux ne devra pas être déclarée dans aucun des autres objectifs de gestion principaux. La somme des différents objectifs de gestion devra correspondre à la superficie de forêt.",
    totalAreaWithDesignatedManagementObjective: 'Superficie totale avec un objectif de gestion désigné',
    totalAreaWithDesignatedManagementObjectiveSupport:
      "Objectif de gestion désigné, qu'il soit primaire ou pas. Les différentes catégories de désignation sont *non exclusives*. Les superficies peuvent donc être déclarées plus d'une fois. Par exemple, dans le cas d'une superficie forestière avec des \"usages multiples\" comme objectif de gestion principal, il faudra rendre compte de chacun de ses objectifs de gestion. Ainsi la somme des différents objectifs de gestion peut être supérieure à la superficie totale de forêt.",
    categoryHeader: 'Catégories de FRA 2020',
    areaUnitLabel: 'Superficie forestière (1000 ha)',
    production: 'Production',
    soilWaterProtection: "Protection du sol et de l'eau",
    biodiversityConservation: 'Conservation de la biodiversité',
    socialServices: 'Services sociaux',
    multipleUse: 'Usages multiples',
    other: 'Autres formes de propriété (préciser dans les commentaires)',
    unknown: 'Aucune fonction/Fonction inconnue',
    totalForestArea: 'Total superficie forestière',
    total: 'Total',
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithinProtectedAreas:
      "Superficie forestière se trouvant à l'intérieur d'aires protégées juridiquement constituées et superficie forestière soumise à des plans de gestion forestière à long-terme",
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1 000 ha)',
    header: "Superficie forestière à l'intérieur d'aires protégées juridiquement constituées",
    forestAreaWithLongTermManagementPlan: 'Superficie forestière soumise à un plan de gestion forestière à long-terme',
    ofWhichInProtectedAreas: '…dont dans des aires protégées',
  },
  forestOwnership: {
    forestOwnership: 'Propriété de la forêt',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie forestière (1000 ha)',
    privateOwnership: 'Propriété privée',
    ofWhichIndividuals: '…dont appartenant à des particuliers',
    ofWhichPrivateBusinesses: '…dont appartenant à des entreprises et des institutions commerciales privées',
    ofWhichCommunities: '…dont appartenant à des collectivités locales, tribales et indigènes',
    publicOwnership: 'Propriété publique',
    otherOrUnknown: 'Inconnue/Autre (à préciser dans les commentaires)',
    totalForestArea: 'Total superficie forestière',
    total: 'Total',
  },
  holderOfManagementRights: {
    holderOfManagementRights: 'Détenteur des droits de gestion des forêts publiques',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie forestière (1000 ha)',
    publicAdministration: 'Administration publique',
    individuals: 'Particuliers',
    privateBusinesses: 'Entreprises et institutions commerciales privées',
    communities: 'Collectivités locales, tribales et indigènes',
    other: 'Inconnue/Autre (à préciser dans les commentaires)',
    totalPublicOwnership: 'Propriété publique totale',
    total: 'Total',
    publicOwnershipDoesNotMatch: 'Ne correspond pas à la propriété publique totale',
  },
  disturbances: {
    disturbances: 'Perturbations',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1 000 ha)',
    insects: 'Insectes',
    diseases: 'Maladies',
    severeWeatherEvents: 'Événements météorologiques graves',
    other: 'Autres formes de propriété (préciser dans les commentaires)',
    totalForestArea: 'Total superficie forestière',
    total: 'Total',
  },
  areaAffectedByFire: {
    areaAffectedByFire: 'Superficie touchée par les incendies',
    categoryHeader: 'Catégories de FRA',
    areaUnitLabel: 'Superficie (1 000 ha)',
    totalLandAreaAffectedByFire: 'Superficie totale de terre touchée par les incendies',
    ofWhichForest: '…dont de forêt',
  },
  degradedForest: {
    degradedForest: 'Forêt dégradée',
  },
  forestPolicy: {
    forestPolicy:
      'Politiques, législation et plateforme nationale de participation des parties prenantes aux politiques forestières',
    categoryHeader: "Indiquer l'existence de",
    areaUnitLabel: 'Booléen (Oui/Non)',
    national: 'Nationale',
    subnational: 'Sous-nationales',
    policiesSFM: 'Politiques en faveur de la GDF',
    legislationsSFM: 'Législations ou règlements en faveur de la GDF',
    stakeholderParticipation:
      "Plateforme favorisant ou permettant la participation des parties prenantes à l'élaboration des politiques forestières",
    existenceOfTraceabilitySystem: 'Système(s) de traçabilité des produits ligneux',
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate: 'Superficie de domaine forestier permanent',
    categoryHeader: 'Catégories de FRA 2020',
    areaUnitLabel: 'Superficie forestière (1000 ha)',
    applicable: 'Applicable?',
  },
  employment: {
    employment: "Emploi dans la sylviculture et l'exploitation forestière",
    average: 'Moyenne triannuelle',
    categoryHeader: 'Catégories de FRA 2020',
    unitHeader: 'Équivalent plein-temps (1000 EPT)',
    inForestry: "Emploi dans la sylviculture et l'exploitation forestière",
    ofWhichSilviculture: "…dont dans la sylviculture et d'autres activités d'exploitation forestière",
    ofWhichLogging: "…dont dans l'exploitation forestière",
    ofWhichGathering: '…dont dans la collecte de produits forestiers non ligneux',
    ofWhichSupport: "…dont dans les services d'appui à la sylviculture",
    total: 'Total',
    female: 'Femmes',
    male: 'Hommes',
  },
  graduationOfStudents: {
    graduationOfStudents: "Obtention de diplômes liés à l'enseignement forestier",
    average: 'Moyenne triannuelle',
    numberOfStudents: "Nombre d'étudiants diplômés",
    fra2020Categories: 'Catégories de FRA 2020',
    doctoralDegree: 'Doctorat',
    mastersDegree: 'Master',
    bachelorsDegree: 'Licence',
    technicianCertificate: 'Diplôme/brevet de technicien',
    total: 'Total',
    female: 'Femmes',
    male: 'Hommes',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals: 'Extraction de produits forestiers non ligneux et valeur pour 2015',
    nameOfProduct: 'Nom du PFNL',
    keySpecies: 'Espèce clé',
    quantity: 'Quantité',
    unit: 'Unité',
    value: 'Valeur (1000 monnaie nationale)',
    category: 'Catégorie de PFNL',
    plantProductsSelectHeading: "Produits d'origine végétale / matières premières",
    food: '1 Aliments',
    fodder: '2 Fourrage',
    rawMaterialForMedicine: '3 Matières premières pour les médicaments et les produits aromatiques',
    rawMaterialForColorants: '4 Matières premières pour les colorants et les teintures',
    rawMaterialForUtensils: "5 Matières premières pour les ustensiles, l'artisanat, la construction",
    ornamentalPlants: '6 Plantes ornementales',
    exudates: '7 Exsudats',
    otherPlantProducts: "8 Autres produits d'origine végétale",
    animalProductsSelectHeading: "Produits d'origine animale / matières premières",
    livingAnimals: '9 Animaux vivants',
    hidesSkins: '10 Cuirs, peaux et trophées',
    wildHoney: "11 Miel et cire d'abeille",
    wildMeat: '12 Gibier',
    animalRawMaterialForMedicine: '13 Matières premières pour les médicaments',
    animalRawMaterialForColorants: '14 Matières premières pour les colorants',
    otherEdibleAnimalProducts: "15 Autres produits d'origine animale comestibles",
    otherNonEdibleAnimalProducts: "16 Autres produits d'origine animale non-comestibles",
    allOtherPlantProducts: "Tous les autres produits d'origine végétale",
    allOtherAnimalProducts: "Tous les autres produits d'origine animale",
    total: 'Total',
    currency: 'Dénomination monnaie nationale',
    notSelected: '',
  },
  sustainableDevelopment: {
    sustainableDevelopment: 'Objectif de développement durable 15',
    indicator: 'Indicateur',
    percent: 'Pourcentage',
    nameOfAgencyResponsible: "Nom de l'agence responsable",
    sdgIndicator1: 'Indicateur ODD 15.1.1 Superficie forestière comme pourcentage du total des terres émergées 2015',
    sdgIndicator2: 'Indicateur ODD 15.2.1 Progrès réalisés dans la gestion durable des forêts',
    forestAreaProportionLandArea2015: 'Superficie forestière comme pourcentage du total des terres émergées 2015',
    subIndicator: 'Sous-Indicateur {{no}}',
    forestAreaAnnualNetChangeRate: 'Taux annuel de changement de la superficie forestière',
    aboveGroundBiomassStockForests: 'Biomasse aérienne dans les forêts',
    percent2015ForestAreaBaseline: 'Pourcentage (Superficie forestière de référence 2015)',
    proportionForestAreaLegallyEstablishedProtectedAreas:
      'Pourcentage de superficie forestière se trouvant dans des aires protégées juridiquement constituées',
    proportionForestAreaLongTermForestManagement:
      'Pourcentage de superficie forestière soumise à une gestion à long-terme',
    forestArea1000Ha: 'Superficie forestière (1000 ha)',
    forestAreaVerifiedForestManagement:
      'Superficie forestière soumise à des systèmes de certification de gestion durable vérifiés indépendants',
  },
  panEuropeanIndicators: {
    panEuropeanIndicators: 'Indicateurs quantitatifs paneuropéens sur la gestion durable des forêts',
    uploadQuestionnaire: 'Télécharger questionnaire',
    chooseFile: 'Choisir fichier',
    downloadQuestionnaire: 'Télédécharger questionnaire',
    download: 'Télédécharger',
    remove: 'Éliminer',
    noQuestionnaire: 'Aucun questionnaire sélectionné',
    panEuropeanQualitativeIndicators: 'Indicateurs qualitatifs paneuropéens sur la gestion forestière durable',
    accessReportingPage: 'Accéder à la page des rapports',
  },
  assessment: {
    fra: 'FRA',
    panEuropean: 'pan-European',
    deskStudy: 'Étude de bureau',
    statusChangeNotification: {
      subject: 'Le statut de {{- country}} a été changé à {{status}} dans la plateforme de FRA',
      textMessage: `Cher {{recipientName}},

{{changer}} a changé le statut de {{assessment}} à "{{status}}" pour {{- country}} dans la plateforme de FRA.

{{message}}

Se rendre sur la plateforme à l'adresse: {{- serverUrl}}

L'équipe de FRA
{{- serverUrl}}`,
      htmlMessage: `Cher {{recipientName}},
<br/><br/>
{{changer}} a changé le statut de {{assessment}} à "{{status}}" pour {{country}} dans la plateforme de FRA.
<br/><br/>
{{message}}
<br/><br/>
<a href="{{- serverUrl}}"><b>Se rendre sur la plateforme</b></a>
<br/><br/>
L'équipe de FRA
<br/>
{{- serverUrl}}`,
    },
    status: {
      changing: {
        label: 'Changement…',
      },
      notStarted: {
        label: 'Pas commencé',
      },
      editing: {
        label: 'Modifier',
        previous: 'Retour à modifier',
      },
      review: {
        label: "À l'étude",
        next: 'Transmettre pour examen',
        previous: 'Retour à examen',
      },
      approval: {
        label: "Attente d'approbation",
        next: 'Transmettre pour approbation',
        previous: 'Retour à approbation',
      },
      accepted: {
        label: 'Accepté',
        next: 'Accepter',
        previous: '',
      },
    },
  },
  multiSelect: {
    placeholder: 'Choisir…',
  },
  emoji: {
    picker: {
      search: 'Rechercher',
      categories: {
        search: 'Résultats recherche',
        recent: 'Fréquemment utilisé(s)',
        people: 'Smileys & Personnes',
        nature: 'Animaux & Nature',
        foods: 'Aliments & Boissons',
        activity: 'Activité',
        places: 'Voyages & Lieux',
        objects: 'Objets',
        symbols: 'Symboles',
        flags: 'Drapeaux',
      },
    },
  },
  country: {
    region: {
      asia: 'Asie',
      europe: 'Europe',
      oceania: 'Océanie',
      north_and_central_america: 'Amérique du Nord et Centrale',
      south_america: 'Amérique du sud',
      africa: 'Afrique',
      atlantis: 'Atlantis',
      forest_europe: 'Forest Europe',
    },
  },
  countryMessageBoard: {
    messageBoard: "Panneau d'affichage",
    messageBoardDesc: 'Les messages postés ici sont visibles par tous les membres du pays.',
    oneToOneMessages: 'Messages individuels',
  },
  tutorial: {
    watch: 'Regarder',
    passwordLogin:
      "Tutoriel pour l'utilisateur de la plateforme FRA - Comment se connecter avec un mot de passe personnalisé",
    googleLogin:
      "Tutoriel pour l'utilisateur de la plateforme FRA - Comment se connecter à partir de son compte Google",
    collaboratorAdd: "Tutoriel pour l'utilisateur de la plateforme FRA - Comment ajouter un collaborateur",
    platformNavigation: "Tutoriel pour l'utilisateur de la plateforme FRA - Naviguer sur la plateforme",
    documentUpload: "Tutoriel pour l'utilisateur de la plateforme FRA - Comment télécharger un document",
    ndpAdd: "Tutoriel pour l'utilisateur de la plateforme FRA - Comment ajouter un point de données national",
    passwordLoginShort: 'Comment se connecter avec un mot de passe personnalisé',
    googleLoginShort: 'Comment se connecter à partir de son compte Google',
    guidelinesAndSpecifications: 'Lignes directrices et spécifications',
    ndpAddReferenceLink:
      "Tutoriel pour l'utilisateur de la plateforme FRA - Comment ajouter le lien d'une référence pour un point de données national",
    nationalDataAddReferenceLink:
      "Tutoriel pour l'utilisateur de la plateforme FRA - Comment ajouter le lien d'une référence pour des données nationales",
  },
};
