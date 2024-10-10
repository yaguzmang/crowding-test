module.exports = {
  fileDrop: {
    dropFilesHere: 'Загрузить файлы',
    dragAndDropOrClick: 'Переместите некоторые файлы сюда или нажмите для выбора файлов',
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
    statisticalFactsheets: 'Оговорка: может содержать оценки ФАО, может содержать отсутствующие значения',
    part1: 'Этот веб-сайт был создан при содействии ',
    europeanUnion: 'Европейского союза',
    part2: ', ',
    govFinland: 'правительства Финляндии',
    part3: ', ',
    govNorway: 'правительства Норвегии',
    part4: ' и ',
    gef: 'Фонда глобальной окружающей среды',
    part5:
      '. Его содержание является исключительной обязанностью ФАО и никоим образом не может рассматриваться как отражающее мнения Европейского союза, правительства Финляндии, правительства Норвегии и Фонда глобальной окружающей среды.',
    termsOfUse: 'Statistical Database Terms of Use',
  },
  home: {
    keyFindings: `Общая площадь лесов в мире составляет 4,06 млрд гектаров (га), или 31 процент от общей площади суши. Это значит, что на душу населения приходится по 0,52 га, однако леса неравномерно распределены между народами и регионами мира. Наибольшая часть лесов (45 процентов) находится в тропическом поясе, далее следуют бореальный, умеренный и субтропический пояса.`,
  },
  footer: {
    contactUs: 'Связь с нами',
    termsAndConditions: 'Положения и условия',
    scamAlert: 'Опасайтесь мошенников',
    reportMisconduct: 'Сообщить о нарушении',
    tutorials: 'Видео',
    sendFeedback: 'Направить отзыв',
    licenses: 'Лицензирование',
    platformVersion: 'Версия платформы',
  },
  unit: {
    haThousand: '1 000 га',
    ha: 'га',
    kmSq: 'кв. км (км²)',
    mileSq: 'кв. миль',
    acre1000: '1 000 акров',
    acre: 'акр',
    haMillion: 'млн га',
    haThousandPerYear: '1 000 га/год',
    tonnesPerHa: 'тонн/га',
    cubicMeterPerHa: 'м³/га',
    millionTonnes: 'млн метрических тонн',
    millionsCubicMeterOverBark: 'млн м³ с корой',
    thousandCubicMeterOverBark: '1 000 м³ с корой',
    billionCubicMeter: 'млрд м³',
    thousandCubicMeter: '1 000 м³',
    thousandCubicMeterRWE: '1 000 м³ эквивалента круглого леса',
    thousandPersons: '1 000 человек',
    gt: 'гт',
    fte1000: '1 000 ЭПЗ',
    numberOfStudents: '$t(graduationOfStudents.numberOfStudents)',
    absoluteNumber: 'абсолютное количество',
    annualNumberOfVisitsMillion: 'ежегодное число посещений (млн)',
    millionNationalCurrency: 'млн ед. нац. валюты',
    facilityLengthIn1000Km: 'объект (протяжённость в 1 000 км)',
    growingStockPercent: '% от общего запаса древостоя',
  },
  countrySelection: {
    selectCountry: 'Выберите страну',
  },
  definition: {
    definitionLabel: 'См. определения',
    faqLabel: 'Часто задаваемые вопросы',
    seeReportingNotes: 'См. Примечания к отчетам',
  },
  audit: {
    notStarted: 'Не начато',
    edited: 'Отредактировано',
  },
  yesNoTextSelect: {
    yes: 'Да',
    no: 'Нет',
    notSelected: '',
  },
  user: {
    roles: {
      REVIEWER: 'Рецензент',
      NATIONAL_CORRESPONDENT: 'Национальный корреспондент',
      ALTERNATE_NATIONAL_CORRESPONDENT: 'Помощник национального корреспондента',
      COLLABORATOR: 'Сотрудник',
      ADMINISTRATOR: 'Администратор',
      VIEWER: 'Наблюдатель',
      noRole: '',
      // unused?
      reviewer_plural: 'Рецензенты',
      nationalCorrespondent_plural: 'Национальные корреспонденты',
      alternateNationalCorrespondent_plural: 'Заместители национального корреспондента',
      collaborator_plural: 'Сотрудники',
      // deprecated
      // reviewer: 'Reviewer',
      // nationalCorrespondent: 'National correspondent',
      // alternateNationalCorrespondent: 'Alternate national correspondent',
      // collaborator: 'Collaborator',
      // administrator: 'Administrator',
    },
    resetPasswordEmail: {
      subject: 'Платформа ОЛР - сменить пароль',
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
    forest: 'Площадь лесов',
    otherWoodedLand: 'Прочие лесопокрытые земли',
    otherLand: 'Другие земельные площади',
  },
  fraForestCharacteristicsClass: {
    naturallyRegeneratingForest: 'Естественно возобновляемые леса',
    plantationForest: 'Плантационные лесные культуры',
    ofWhichIntroduced: '…в том числе интродуцированные породы',
    ofWhichPrimaryForest: '$t(fra.forestCharacteristics.primaryForest)',
    otherPlantedForest: 'Другие лесные культуры',
    totalForest: 'Всего лесов',
  },
  fraOtherLandClass: {
    palms: '…в том числе пальмы (масличные, кокосовые, финиковые и т.д.)',
    treeOrchards: '…в том числе древесные сады (включает фруктовые, ореховые,оливковые деревья и т.д)',
    agroforestry: '…в том числе агролесоводство',
    treesUrbanSettings: '…в том числе деревья в городской среде',
  },
  messageBoard: {
    messageBoard: '$t(landing.sections.messageBoard)',
  },
  userChat: {
    chatHeader: 'Сообщения от {{user}}',
    noMessages: 'Нет сообщений',
    writeMessage: 'Написать сообщение…',
    send: 'Отправить',
    cancel: 'Cancel',
    notificationEmail: {
      subject: '{{sender}} отправил Вам сообщение',
      textMessage: `Уважаемый(ая) {{recipient}},

{{sender}} отправил Вам сообщение.

Зайдите на платформу по следующему адресу, чтобы просмотреть сообщение и ответить:
{{- link}}

Группа по ОЛР
{{- url}}
    `,
      htmlMessage: `Уважаемый(ая) {{recipient}},
<br/><br/>
{{sender}} отправил Вам сообщение.
<br/><br/>
<b><a href="{{- link}}">Зайдите на платформу, чтобы просмотреть сообщение и ответить.</a></b>
<br/><br/>
Группа по ОЛР
<br/>
{{- url}}
    `,
    },
  },
  // error messages
  error: {
    access: {
      countryRoleNotSpecified:
        'Ошибка: Пользователь {{user}} попытался получить доступ к {{countryIso}} но не была указана роль',
      countryUserNotReviewer:
        'Ошибка: Пользователь {{user}} попытался получить доступ к {{countryIso}} не являясь рецензентом этой страны',
      userNotAdministrator:
        'Ошибка: пользователь {{user}} попытался получить доступ к ресурсу, доступному только для администраторов',
      roleChangeNotAllowed:
        'Ошибка: Пользователь {{user}} попытался назначить роль другого пользователя {{role}}, что не разрешается вошедшему пользователю',
      userAlreadyAddedToCountry: 'Ошибка: пользователь {{user}} уже добавлен к стране {{sturniso}}',
      invitationAlreadyUsed:
        'Ошибка: приглащение {{invitationUuid}} уже было использовано, захват {{loginEmail}} не разрешается!',
      countryDoesNotMatch: 'Ошибка: страна{{countyryIso}}не совпадает',
      assessmentEditingNotAllowed:
        'Ошибка: Пользователь {{user}} в роли {{role}} не может редактировать оценку в состоянии {{assessmentStatus}} для страны {{countryIso}}',
      assessmentCommentingNotAllowed:
        'Ошибка: Пользователь {{user}} в роли {{role}} не может комментировать оценку в состоянии {{assessmentStatus}} для страны {{countryIso}}',
    },
    assessment: {
      transitionNotAllowed: 'Ошибка: Переход от {{currentStatus}} к {{status}} не разрешается для роли {{role}}',
      deskStudyNotAllowed: 'Ошибка: Только администратор может изменять статус кабинетного исследования',
    },
    review: {
      commentDeleteNotOwner: 'Ошибка: Пользователь {{user}} попытался удалить чужой комментарий',
      commentEnterResolvedIssue: 'Ошибка: Пользователь {{user}} попытался добавить комментарий к разрешенной проблеме',
    },
    ndp: {
      previousNdpNotFound: 'Невозможно найти Национальные отчетные годы до до {{year}}',
    },
  },
  // components

  countryListing: {
    annuallyUpdated: 'Ежегодно обновляется',
    fra2020: 'ОЛР-2020',
  },
  navigation: {
    hideAll: 'Скрыть все',
    showAll: 'Показать все',
    support: {
      dontDelete: 'Системная информация, просьба не удалять',
      feedbackEmailSubject: 'Обратная связь с платформой ОЛР',
      platformVersion: 'Версия платформы',
      userAgent: 'Агент пользователя',
      user: 'Пользователь',
      manageCollaborators: 'Координировать сотрудников',
    },
    sectionHeaders: {
      introduction: 'Введение',
      forestExtentCharacteristicsAndChanges: 'Площадь лесов, характеристики и изменения',
      forestGrowingStockBiomassAndCarbon: 'Запас древостоя, биомасса и углерод',
      forestDesignationAndManagement: 'Назначение лесов и управление лесами',
      forestOwnershipAndManagementRights: 'Права собственности на леса и права управления лесами',
      forestDisturbances: 'Нарушения состояния лесов',
      forestPolicyAndLegislation: 'Лесохозяйственная политика и законодательство',
      employmentEducationAndNwfp: 'Занятость, образование и НДЛП',
      sustainableDevelopment: 'Цель устойчивого развития 15',
      panEuropeanIndicators: 'Общеевропейские индикаторы',
    },
    cancel: 'Cancel',
    changeStatusTextPlaceholder: 'Добавить комментарий по выбору',
    doNotNotifyUsers: 'Не уведомлять пользователей',
    notifySelf: 'Отправить копию самому себе',
  },
  header: {
    editProfile: 'Редактировать профиль',
    logout: 'Выход',
    hideSidebar: 'Скрыть боковую панель',
    showSidebar: 'Показать боковую панель',
    autoSave: {
      saving: 'Сохранение…',
      complete: 'Все изменения сохранены',
      lastSaveTimestampReceived: 'Последний раз отредактировано ',
    },
  },
  time: {
    hour: '{{count}} час назад',
    hour_plural: '{{count}} несколько часов назад',
    day: '{{count}} день назад',
    day_plural: '{{count}} несколько дней назад',
    week: '{{count}} неделю назад',
    week_plural: '{{count}} Несколько недель назад',
    aMomentAgo: 'минуту назад',
  },
  review: {
    comments: 'Комментарии',
    noComments: 'Нет комментариев',
    loading: 'Загрузка',
    resolve: 'Разрешить',
    confirmDelete: 'Удалить этот комментарий? Его невозможно будет восстановить.',
    commentDeleted: 'Комментарий удален',
    commentMarkedAsResolved: 'Помечен как разрешенный',
    delete: 'Delete',
    writeComment: 'Написать комментарий…',
    commentingClosed: 'Комментирование закрыто',
    cancel: 'Cancel',
  },
  description: {
    edit: 'Редактировать',
    done: 'Готово',
    loading: 'Загрузка содержимого…',
    description: 'Описание',
    dataSourcesTitle: 'Источники данных, исходные данные и национальная классификация и определения',
    generalCommentsTitle: 'Комментарии',
    dataSources: 'Источники данных',
    dataSourcesPlus: 'Источники данных + вид источника данных, например, НИЛ и т.д.',
    originalData: 'Исходные данные',
    nationalClassificationAndDefinitions: 'Национальная классификация и определения',
    nationalData: 'Национальные данные',
    analysisAndProcessing: 'Анализ и обработка национальных данных',
    estimationAndForecasting: 'Оценка и прогнозирование',
    reclassification: 'Реклассификация в категории ОЛР-{{cycleName}}',
  },
  nationalDataPoint: {
    clickOnNDP: 'Нажмите на год, чтобы получить доступ к исходным данным',
    nationalDataPoint: 'Национальная точка данных',
    addNationalDataPoint: 'Добавить национальный отчетный год',
    noNationalDataAdded: 'Национальные данные не добавлены',
    nationalData: 'Национальные данные',
    reclassificationLabel: 'Исходные данные и реклассификация',
    forestCategoriesLabel: 'Леса, прочие лесопокрытые земли и другие земельные площади',
    forestCategoriesLabel2025: 'Леса, прочие лесистые земли и остальные земельные площади',
    referenceYearData: 'Отчетный год для данных',
    referenceYear: 'Отчетный год',
    references: 'Справочные материалы',
    prefill: 'Предварительно заполнить',
    prefillWith: 'Предварительно заполнить с',
    selectYear: 'Выбрать…',
    methods: 'Методы',
    methodsUsed: 'Используемые методы',
    dataSource: 'Источник данных',
    dataSources: 'Источники данных',
    dataSource2025ExplanatoryText:
      'Перечисленные источники данных были представлены в ОЛР-2020. Просьба скопировать и вставить соответствующие источники данных в таблицу выше.',
    additionalComments: 'Дополнительные комментарии',
    edit: 'Редактировать',
    confirmCopyPreviousValues: 'Вы хотите изменить предыдущие значения? Эту операцию нельзя отменить.',
    copyPreviousValues: 'Копировать предыдущие ссылки',
    nationalClassifications: 'Национальные классификации',
    nationalClass: 'Национальный класс',
    nationalClasses: 'Классификации и определения',
    definition: 'Определение',
    categories: 'Категории',
    class: 'Класс',
    fraClasses: 'Классы ОЛР',
    area: 'Площадь (1000 га)',
    total: 'Всего',
    modifiedExplanation: 'Национальный отчетный год с изменениями',
    confirmDelete: 'Удалить этот отчетный год? Его невозможно будет восстановить.',
    discardChanges: 'Отменить изменения',
    doneEditing: 'Завершить редактирование',
    enterOrCopyPasteNationalClasses: 'Введите или скопируйте и вставьте национальные классы',
    forestCharacteristics: 'Характеристики лесов',
    otherLandCharacteristics: 'Другие лесистые земли',
    plantationForest: 'Плантационные лесные культуры',
    remindDirtyOdp: 'Национальный отчетный год был обновлен, не забудьте регенерировать значения',
    disabled: 'Заблокировано, разблокируйте в разделе 1b',
    dataSourceMethodsOptions: {
      nationalForestInventory: 'Национальная инвентаризация лесов',
      sampleBasedRemoteSensingAssessment: 'Выборочная оценка с помощью дистанционного зондирования',
      fullCoverMaps: 'Полные карты лесов/растительности',
      registersQuestionnaires: 'Реестры/опросники',
      other: 'Прочее (укажите в комментариях)',
    },
    appliesToVariablesOptions: {
      forest: 'Площадь лесов',
      otherWoodedLand: 'Прочие лесопокрытые земли',
      otherLand: 'Другие земельные площади',
    },
    fileAddedWillBecomePublic: 'Файл, добавленный в качестве справочного документа, станет общедоступным',
  },
  userManagement: {
    addUser: 'Добавить сотрудника',
    allUsers: 'Все сотрудники',
    confirmDelete: 'Удалить {{user}}?',
    done: 'Готово',
    edit: 'Редактировать',
    editPermissions: 'Изменить разрешения',
    formErrors: 'There are errors in the form. Please, fix them and submit it again.',
    info: 'Информация',
    insufficientPrivileges: 'Недостаточно полномочий',
    invitationDeleted: 'Приглашение было удалено',
    invitationEmailSent: 'Письмо с приглашением было отправлено',
    invitationLink: 'Ссылка на приглашение',
    invitationLinkCopied: 'Ссылка на приглашение была скопирована',
    inviteAgain: 'Пригласить заново',
    loginEmail: 'Логин',
    manageCollaborators: 'Координировать сотрудников',
    noUsers: 'Сотрудники не добавлены',
    permissions: 'Разрешения',
    personalInfoRequired: 'Пожалуйста, заполните вашу личную информацию, прежде чем продолжить',
    placeholder: 'Выбрать…',
    remove: 'Удалить',
    sendInvitation: 'Направить приглашение по электронной почте',
    userAdded: '{{email}} был добавлен',
    userModified: '{{user}} был изменен',
    invitationEmail: {
      subject: 'Приглашение на платформу ОЛР',
      textMessage: `Уважаемый(ая) {{invitedUser}},

Вас пригласили на платформу ОЛР в качестве {{role}} для {{country}}.

Примите это приглашение и зайдите на платформу по следующему адресу:
{{- link}}

Успехов в работе!

Группа по ОЛР fra@fao.org
{{- url}}
    `,
      htmlMessage: `Уважаемый(ая) {{invitedUser}},
<br/><br/>
Вас пригласили на платформу ОЛР в качестве {{role}} для {{country}}.
<br/><br/>
<b><a href="{{- link}}">Примите это приглашение и зайдите на платформу</a></b>
<br/><br/>
Успехов в работе!
<br/><br/>
Группа по ОЛР fra@fao.org
<br/>
{{- url}}
    `,
    },
    permissionNames: {
      tableData: 'Данные таблицы',
      descriptions: 'Описания',
    },
  },
  // FRA 2020 questionare
  // Object name and title should have always the same name

  contactPersons: {
    all: '$t(common.all)',
    reportPreparationAndContactPersons: 'Подготавливающие доклад и контактные лица',
    contactPersons: 'Введение',
    contactPersonsSupport: 'Настоящий доклад был подготовлен следующим(и) лицом(-ами)',
    introductoryText: 'Вступительный текст',
    introductoryTextSupport: 'Вставьте вступительный текст о содержании данного доклада',
    firstName: 'Имя',
    lastName: 'Фамилия',
    institution: 'Учреждение/адрес',
    email: 'Электронная почта',
    tables: 'Таблицы',
    none: 'Ни одна',
  },
  extentOfForest: {
    extentOfForest: 'Площадь лесов и прочих лесопокрытых земель',
    estimationAndForecasting: 'Оценка и прогнозирование',
    categoryHeader: 'Категории ОЛР',
    forestArea: 'Площадь лесов',
    chart: {
      placeholderLine1: 'Чтобы начать, добавьте новые национальные отчетные годы и используйте',
      placeholderLine2: 'их для получения значений ОЛР автоматически.',
    },
    otherLandCategories: 'Категории других земельных площадей',
    ofWhichPalms: '…в том числе пальмы (масличные, кокосовые, финиковые и т.д.)',
    ofWhichTreeOrchards: '…в том числе древесные сады (вкл. фруктовые, ореховые, оливковые и т.д.)',
    ofWhichAgroforestry: '…в том числе агролесоводство',
    ofWhichTreesUrbanSettings: '…в том числе деревья в городской среде',
    totalLandArea: 'Общая площадь земель',
    fedAreasExceedTotalLandArea: 'Площадь лесов и прочих лесопокрытых земель превышает общую площадь земель',
    forestAreaDoesNotMatchPreviouslyReported: 'Площадь лесов не совпадает с площадью ОЛР-{{year}}: {{previous}}',
    forestAreaNetChangeDoesNotMatch: 'Изменение сети лесов не соответствует ожидаемому значению: {{value}}',
    useOriginalDataPoints: 'Использовать национальные отчетные годы',
    dontUseOriginalDataPoints: 'Не использовать национальные отчетные годы',
    whatIsThis: 'Что это такое?',
    tableNoticeMessage: 'Данные ФАОСТАТ о площади земель за 2015 год используются для всех отчетных лет',
    ndpMissingValues: 'Национальный отчетный год имеет отсутствующие значения',
    showNDPs: 'Показать национальные отчетные годы',
    hideNDPs: 'Скрыть национальные отчетные годы',
  },
  climaticDomain: {
    climaticDomain: 'Климатическая зона',
    percentOfForestArea2015: '% площади лесов 2015',
    percentOfForestArea2015Override: 'Переопределить значение',
    selectDefault: 'По умолчанию',
    boreal: 'Бореальная',
    temperate: 'Умеренная',
    subtropical: 'Субтропическая',
    sub_tropical: '$t(climaticDomain.subtropical)',
    tropical: 'Тропическая',
  },
  forestCharacteristics: {
    forestCharacteristics: 'Характеристики лесов',
    estimationAndForecasting: 'Оценка и прогнозирование',
    categoryHeader: 'Категории ОЛР',
    naturalForestArea: 'Естественно возобновляемые леса',
    plantationForestArea: 'Плантационные лесные культуры',
    plantationForestIntroducedArea: '…в том числе интродуцированные породы',
    otherPlantedForestArea: 'Другие лесные культуры',
    plantedForest: 'Лесные культуры',
    totalForestArea: 'Общая площадь лесов',
    total: 'Всего',
    useOriginalDataPoints: 'Использовать национальные отчетные годы',
    dontUseOriginalDataPoints: 'Не использовать национальные отчетные годы',
  },
  tableWithOdp: {
    confirmGenerateFraValues: 'Переопределить существующие значения?',
    generateFraValues: 'Получить значения',
    generatingFraValues: 'Генерируется ...',
    linearExtrapolation: 'Линейная экстраполяция',
    repeatLastExtrapolation: 'Повторять последнее значение',
    annualChangeExtrapolation: 'Годовое изменение',
    placeholderFuture: 'Будущее',
    placeholderPast: 'Прошлое',
    copyToClipboard: 'Скопировать значения',
    placeholderSelect: 'Оценка и прогнозирование',
    _1000haYear: '1000 га/год',
  },
  forestAreaChange: {
    forestAreaChange: 'Годовое расширение лесов, обезлесение и чистое изменение',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    forestExpansion: 'Расширение лесов',
    ofWhichAfforestation: '…в том числе лесоразведение',
    ofWhichNaturalExpansion: '…в том числе естественное расширение лесов',
    deforestation: 'Обезлесение',
    forestAreaNetChange: 'Чистое изменение площади лесов',
    forestAreaNetChangeFrom1a: 'Чистое изменение площади лесов рассчитано на основе таблицы 1а',
    netChangeDoesNotMatch: 'Не совпадает с Чистым изменением лесной площади',
  },
  annualReforestation: {
    annualReforestation: 'Ежегодное лесовосстановление',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    reforestation: 'Лесовосстановление',
  },
  specificForestCategories: {
    specificForestCategories: 'Девственные леса и специальные категории лесов',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    bamboo: 'Бамбуковые леса',
    mangroves: 'Мангровые леса',
    temporarilyUnstocked: 'Временно обезлесенные и/или недавно возобновленные',
    primaryForest: 'Девственные леса',
    exceedsNaturallyRegeneratingForest: 'Превышает естественно возобновляемые леса (1b)',
    rubberWood: 'Каучуковые деревья',
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover: 'Другие лесистые земли',
    areaUnitLabel: 'Площадь (1000 га)',
    categoryHeader: 'Категории ОЛР',
    palms: 'Пальмы',
    treeorchards: 'Древесные сады',
    agroforestry: 'Агролесоводство',
    treesinurbansettings: 'Деревья в городской среде',
    total: 'Всего',
    otherLandArea: 'Другие земельные площади',
    other: 'Прочее (укажите в комментариях)',
  },
  growingStock: {
    growingStock: 'Запас древостоя',
    supportText: 'Просьба убедиться, что Вы ввели данные в таблицах 1a и 1b перед редактированием данной таблицы',
    categoryHeader: 'Категории ОЛР',
    avgTableHeader: 'Запас древостоя м³/га (с корой)',
    totalTableHeader: 'Общий запас древостоя (млн. м³ с корой)',
    naturallyRegeneratingForest: 'Естественно возобновляемые леса',
    plantedForest: 'Лесные культуры',
    plantationForest: '…в том числе плантационные лесные культуры',
    otherPlantedForest: '…в том числе другие лесные культуры',
    forest: 'Площадь лесов',
    otherWoodedLand: 'Прочие лесопокрытые земли',
    copyToClipboard: 'Скопировать значения',
  },
  growingStockComposition: {
    native: 'Местные',
    introduced: 'Интродуцированные',
    growingStockComposition: 'Состав древостоя',
    forestGrowingStockComposition: '$t(growingStockComposition.growingStockComposition)',
    categoryHeader: 'Категории ОЛР',
    nativeTreeSpecies: 'Местные древесные породы',
    introducedTreeSpecies: 'Интродуцированные древесные породы',
    areaUnitLabel: 'Запас древостоя (млн. м³ с корой)',
    scientificName: 'Научное название',
    millionCubicMeter: '$t(fra.growingStockComposition.millionCubicMeter)',
    commonName: 'Общее название',
    rank: '#{{idx}} Классифицированы по объему',
    remainingNative: 'Остальные местные древесные породы ',
    remainingIntroduced: 'Остальные интродуцированные древесные породы ',
    totalNative: 'Общий объем местных древесных пород',
    totalIntroduced: 'Общий объем интродуцированных древесных пород',
    totalGrowingStock: 'Общий запас древостоя',
    rankingYear: 'Год классификации 2015',
    growingStockPercent: '$t(unit.growingStockPercent)',
    mostRecentYear: '$t(fra.growingStockComposition.mostRecentYear)',
  },
  biomassStock: {
    biomassStock: 'Запас биомассы',
    categoryHeader: 'Категории ОЛР',
    tableHeader: 'Лесная биомасса (тонн/га)',
    aboveGround: 'Надземная биомасса',
    belowGround: 'Подземная биомасса',
    deadWood: 'Мертвая древесина',
    downloadExcel: 'Скачать калькулятор excel',
  },
  carbonStock: {
    carbonStock: 'Запас углерода',
    categoryHeader: 'Категории ОЛР',
    tableHeader: 'Лесной запас углерода (тонн/га)',
    carbonAboveGroundBiomass: 'Углерод в надземной биомассе',
    carbonBelowGroundBiomass: 'Углерод в подземной биомассе',
    carbonDeadwood: 'Углерод в мертвой древесине',
    carbonLitter: 'Углерод в лесном опаде',
    carbonSoil: 'Почвенный углерод',
    soilDepthHeading: 'Глубина почвы (см), использованная для оценки почвенного углерода',
  },
  designatedManagementObjective: {
    designatedManagementObjective: 'Назначенная цель управления лесами',
    primaryDesignatedManagementObjective: 'Главная назначенная цель управления ',
    primaryDesignatedManagementObjectiveSupport:
      'Главная назначенная цель управления значительно важнее других целей управления. Различные главные цели управления являются *исключительными* и площади, представленные под одной главной целью управления лесами, не должны быть представлены для каких-либо других главных целей управления лесами.  Сумма различных целей управления должна суммироваться в площадь лесов.',
    totalAreaWithDesignatedManagementObjective: 'Общая площадь с назначенной целью управления',
    totalAreaWithDesignatedManagementObjectiveSupport:
      'Назначенная цель управления, вне зависимости от того, является ли она главной или нет. Различные категории назначения *не исключительны*. Поэтому данные о площадях могут представляться более одного раза, например, данные о площади лесов с главной целью управления «Многоцелевое использование» должны представляться по каждой цели управления. Следовательно, сумма различных целей управления может быть больше общей площади лесов.',
    categoryHeader: 'Категории ОЛР-2020',
    areaUnitLabel: 'Площадь лесов (1000 га)',
    production: 'Производство',
    soilWaterProtection: 'Охрана почв и водных ресурсов',
    biodiversityConservation: 'Сохранение биоразнообразия',
    socialServices: 'Социальные услуги',
    multipleUse: 'Многоцелевое использование',
    other: 'Прочее (укажите в комментариях)',
    unknown: 'Отсутствует/неизвестна',
    totalForestArea: 'Общая площадь лесов',
    total: 'Всего',
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithinProtectedAreas:
      'Лесные площади на охраняемых территориях и лесные площади с долгосрочным планами управления лесами',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    header: 'Лесная площадь на охраняемых территориях',
    forestAreaWithLongTermManagementPlan: 'Лесная площадь с долгосрочным планом управления лесами',
    ofWhichInProtectedAreas: '…в том числе на охраняемых территориях',
  },
  forestOwnership: {
    forestOwnership: 'Права собственности на леса',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь лесов (1000 га)',
    privateOwnership: 'Частная собственность',
    ofWhichIndividuals: '…в том числе находящиеся в собственности отдельных лиц',
    ofWhichPrivateBusinesses: '…в том числе находящиеся в собственности частных предприятий и учреждений',
    ofWhichCommunities: '…в том числе находящиеся в собственности местных, племенных и коренных общин',
    publicOwnership: 'Государственная собственность',
    otherOrUnknown: 'Неизвестны/другие формы собственности (указать в комментариях)',
    totalForestArea: 'Общая площадь лесов',
    total: 'Всего',
  },
  holderOfManagementRights: {
    holderOfManagementRights: 'Права управления государственными лесами',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь лесов (1000 га)',
    publicAdministration: 'Государственная администрация',
    individuals: 'Отдельные лица',
    privateBusinesses: 'Частные предприятия и учреждения',
    communities: 'Местные, племенные и коренные общины',
    other: 'Неизвестны/другие формы собственности (указать в комментариях)',
    totalPublicOwnership: 'Общая площадь в государственной собственности',
    total: 'Всего',
    publicOwnershipDoesNotMatch: 'Не совпадает с "Общая площадь в государственной собственности"',
  },
  disturbances: {
    disturbances: 'Нарушения ',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    insects: 'Насекомые',
    diseases: 'Болезни',
    severeWeatherEvents: 'Суровые погодные явления',
    other: 'Прочее (укажите в комментариях)',
    totalForestArea: 'Общая площадь лесов',
    total: 'Всего',
  },
  areaAffectedByFire: {
    areaAffectedByFire: 'Площадь, пораженная пожарами',
    categoryHeader: 'Категории ОЛР',
    areaUnitLabel: 'Площадь (1000 га)',
    totalLandAreaAffectedByFire: 'Общая земельная площадь, пораженная пожарами',
    ofWhichForest: '…в том числе леса',
  },
  degradedForest: {
    degradedForest: 'Деградировавшие леса',
  },
  forestPolicy: {
    forestPolicy:
      'Политика, законодательство и национальная платформа для участия заинтересованных сторон в лесохозяйственной политике',
    categoryHeader: 'Указать наличие',
    areaUnitLabel: 'Логические значения (Да/Нет)',
    national: 'Национальный',
    subnational: 'Субнациональные',
    policiesSFM: 'Политика, содействующая устойчивому управлению лесами',
    legislationsSFM: 'Законодательные и/или нормативные акты, содействующие устойчивому управлению лесами',
    stakeholderParticipation:
      'Платформа, содействующая участию заинтересованных сторон в развитии лесохозяйственной политики',
    existenceOfTraceabilitySystem: 'Система(-ы) отслеживания происхождения древесной продукции',
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate: 'Площадь постоянного лесного фонда',
    categoryHeader: 'Категории ОЛР-2020',
    areaUnitLabel: 'Площадь лесов (1000 га)',
    applicable: 'Применимо?',
  },
  employment: {
    employment: 'Занятость в лесном хозяйстве и лесозаготовке',
    average: 'Среднее значение за трехлетний период',
    categoryHeader: 'Категории ОЛР-2020',
    unitHeader: 'Эквиваленты полной занятости (1000 ЭПЗ)',
    inForestry: 'Занятость в лесном хозяйстве и лесозаготовке',
    ofWhichSilviculture: '…в том числе лесоводство и другая лесохозяйственная деятельность',
    ofWhichLogging: '…в том числе лесозаготовка',
    ofWhichGathering: '…в том числе сбор недревесной лесной продукции',
    ofWhichSupport: '…в том числе занятость во вспомогательных услугах в лесном хозяйстве',
    total: 'Всего',
    female: 'Женщины',
    male: 'Мужчины',
  },
  graduationOfStudents: {
    graduationOfStudents: 'Получение образования в сфере лесного хозяйства',
    average: 'Среднее значение за трехлетний период',
    numberOfStudents: 'Количество выпускников',
    fra2020Categories: 'Категории ОЛР-2020',
    doctoralDegree: 'Докторская степень',
    mastersDegree: 'Степень магистра',
    bachelorsDegree: 'Степень бакалавра',
    technicianCertificate: 'Свидетельство/ диплом о профессионально-техническом образовании',
    total: 'Всего',
    female: 'Женщины',
    male: 'Мужчины',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals: 'Вывозка и стоимость недревесной лесной продукции 2015',
    nameOfProduct: 'Название продукта НДЛП',
    keySpecies: 'Ключевые виды',
    quantity: 'Количество',
    unit: 'Единица',
    value: 'Стоимость (1000 единиц валюты)',
    category: 'Категория НДЛП',
    plantProductsSelectHeading: 'Продукты/сырье растительного происхождения',
    food: '1 Продовольствие',
    fodder: '2 Корм',
    rawMaterialForMedicine: '3 Лекарственное сырье и сырье для ароматических продуктов',
    rawMaterialForColorants: '4 Сырье для красителей и красок',
    rawMaterialForUtensils: '5 Сырье для утвари, ремесленных изделий и строительства',
    ornamentalPlants: '6 Декоративные растения',
    exudates: '7 Вытяжки',
    otherPlantProducts: '8 Другие продукты растительного происхождения',
    animalProductsSelectHeading: 'Продукты/сырье животного происхождения',
    livingAnimals: '9 Живые животные',
    hidesSkins: '10 Кожевенное сырье и трофеи',
    wildHoney: '11 Дикий мед и пчелиный воск',
    wildMeat: '12 Мясо дичи',
    animalRawMaterialForMedicine: '13 Лекарственное сырье',
    animalRawMaterialForColorants: '14 Сырье для красителей',
    otherEdibleAnimalProducts: '15 Другие съедобные продукты животного происхождения',
    otherNonEdibleAnimalProducts: '16 Другие несъедобные продукты животного происхождения',
    allOtherPlantProducts: 'Все остальные продукты растительного происхождения',
    allOtherAnimalProducts: 'Все остальные продукты животного происхождения',
    total: 'Всего',
    currency: 'Название валюты',
    notSelected: '',
  },
  sustainableDevelopment: {
    sustainableDevelopment: 'Цель устойчивого развития 15',
    indicator: 'Индикатор',
    percent: 'Процент',
    nameOfAgencyResponsible: 'Название ответственного ведомства',
    sdgIndicator1: 'Индикатор ЦУР 15.1.1 Площадь лесов в процентном отношении к общей площади земель 2015',
    sdgIndicator2: 'Индикатор ЦУР 15.2.1 Прогресс на пути к устойчивому управлению лесами',
    forestAreaProportionLandArea2015: 'Площадь лесов в процентном отношении к общей площади земель 2015',
    subIndicator: 'Субиндикатор {{no}}',
    forestAreaAnnualNetChangeRate: 'Темп чистого изменения лесной площади',
    aboveGroundBiomassStockForests: 'Запас надземной биомассы в лесах',
    percent2015ForestAreaBaseline: 'Процент (Площадь лесов 2015 - исходная отметка)',
    proportionForestAreaLegallyEstablishedProtectedAreas:
      'Доля площади лесов, находящихся на законно установленных охраняемых территориях',
    proportionForestAreaLongTermForestManagement: 'Доля площади лесов под долгосрочным планом управления лесами',
    forestArea1000Ha: 'Площадь лесов (1000 га)',
    forestAreaVerifiedForestManagement:
      'Площадь лесов под независимо проверяемыми системами сертификации управления лесами',
  },
  panEuropeanIndicators: {
    panEuropeanIndicators: 'Общеевропейские количественные индикаторы устойчивого управления лесами',
    uploadQuestionnaire: 'Загрузить вопросник',
    chooseFile: 'Выбрать файл',
    downloadQuestionnaire: 'Скачать вопросник',
    download: 'Скачать',
    remove: 'Удалить',
    noQuestionnaire: 'Вопросник не выбран',
    panEuropeanQualitativeIndicators: 'Общеевропейские качественные индикаторы устойчивого управления лесами',
    accessReportingPage: 'Зайти на страницу отчетности',
  },
  assessment: {
    fra: 'ОЛР',
    panEuropean: 'Общеевропейский',
    deskStudy: 'Кабинетное исследование',
    statusChangeNotification: {
      subject: '{{country}} статус изменен на {{status}} на платформе ОЛР',
      textMessage: `Уважаемый(ая){{recipientName}},

{{changer}} изменил статус с {{assessment}} на "{{status}}" для {{country}} на платформе ОЛР.

{{message}}

Зайдите на платформу по адресу: {{- serverUrl}}

Группа по ОЛР
{{- serverUrl}}`,
      htmlMessage: `Уважаемый(ая) {{recipientName}},
<br/><br/>
{{changer}} изменил статус с {{assessment}} на "{{status}}" для {{country}} на платформе ОЛР.
<br/><br/>
{{message}}
<br/><br/>
<a href="{{- serverUrl}}"><b>Зайдите на платформу</b></a>
<br/><br/>
Группа по ОЛР
<br/>
{{- serverUrl}}`,
    },
    status: {
      changing: {
        label: 'Изменяется…',
      },
      notStarted: {
        label: 'Не начато',
      },
      editing: {
        label: 'Редактируется',
        previous: 'Вернуться к редактированию',
      },
      review: {
        label: 'На рассмотрении',
        next: 'Отправить на рассмотрение',
        previous: 'Вернуться к рассмотрению',
      },
      approval: {
        label: 'Ожидает утверждения',
        next: 'Отправить на утверждение',
        previous: 'Вернуться к утверждению',
      },
      accepted: {
        label: 'Принят',
        next: 'Принять',
        previous: '',
      },
    },
  },
  multiSelect: {
    placeholder: 'Выбрать…',
  },
  emoji: {
    picker: {
      search: 'Поиск',
      categories: {
        search: 'Результаты поиска',
        recent: 'Часто используемые',
        people: 'Смайлики и люди',
        nature: 'Животные и природа',
        foods: 'Еда и напитки',
        activity: 'Деятельность',
        places: 'Путешествия и места',
        objects: 'Предметы',
        symbols: 'Символы',
        flags: 'Флаги',
      },
    },
  },
  country: {
    region: {
      asia: 'Азия',
      europe: 'Европа',
      oceania: 'Океания',
      north_and_central_america: 'Северная и Центральная Америка',
      south_america: 'Южная Америка',
      africa: 'Африка',
      atlantis: 'Атлантида',
      forest_europe: 'Forest Europe',
    },
  },
  countryMessageBoard: {
    messageBoard: 'Доска сообщений',
    messageBoardDesc: 'Оставленные здесь сообщения видны всем участникам от страны',
    oneToOneMessages: 'Личные сообщения',
  },
  tutorial: {
    watch: 'Смотреть',
    passwordLogin: 'Руководство пользователя платформы ОЛР - Как войти в систему с помощью собственного пароля',
    googleLogin: 'Руководство пользователя платформы ОЛР - Как войти в систему, используя аутентификацию Google',
    collaboratorAdd: 'Руководство пользователя платформы ОЛР — Как добавить сотрудника',
    platformNavigation: 'Руководство пользователя платформы ОЛР — Навигация по платформе',
    documentUpload: 'Руководство пользователя платформы ОЛР - Как загрузить документ',
    ndpAdd: 'Руководство пользователя платформы ОЛР — Как добавить национальный отчетный год',
    passwordLoginShort: 'Как войти в систему с помощью собственного пароля',
    googleLoginShort: 'Как войти в систему, используя аутентификацию Google',
    guidelinesAndSpecifications: 'Руководство и спецификации',
    ndpAddReferenceLink: 'Руководство пользователя платформы ОЛР - Как добавить ссылку для национальной точки данных',
    nationalDataAddReferenceLink: 'Руководство пользователя платформы ОЛР - Как добавить ссылку на национальные данные',
  },
};
