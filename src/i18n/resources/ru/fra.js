// TODO: all fra labels will be migrated here in a future refactor
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _2020 = require(false);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _2025 = require(false);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const print = require('./print');
module.exports = {
  2020: _2020,
  2025: _2025,
  print,
  // assessment labels
  labels: {
    short: 'ОЛР',
  },
  // common
  area100HaYear: 'Площадь (1000 га)',
  area100Ha: 'Площадь (1000 га)',
  categoryHeader2020: 'Категории ОЛР-2020',
  categoryHeader2025: 'Категории ОЛР-2025',
  forestArea100HaYear: 'Площадь лесов (1000 га)',
  // tables
  areaAffectedByFire: {
    areaAffected: 'Пройденная площадь (1000 га)',
    areaAffectedByFire2025: 'Площади, пройденные пожарами',
    totalLandAreaAffectedByFire2025: false,
  },
  biomassStock: {
    aboveGround2025: false,
    belowGround2025: false,
    deadWood2025: false,
    biomassStock2025: false,
  },
  biomassStockAvg: {
    forestBiomass: 'Биомасса лесов (тонн/га)',
  },
  biomassStockTotal: {
    totalForestBiomass: 'Общая биомасса лесов (млн тонн)',
  },
  carbonStock: {
    carbonAboveGroundBiomass2025: false,
    carbonBelowGroundBiomass2025: false,
    carbonStock2025: false,
  },
  carbonStockTotal: {
    totalForestCarbon: 'Общий углерод лесов (млн тонн)',
  },
  climaticDomain: {
    percentOfForestArea: '% площади лесов',
  },
  contactPersons: {
    expectedYearForNextCountryReportUpdate: 'Ожидаемый год для следующего обновления отчета страны ',
  },
  degradedForest: {
    // Title
    degradedForest: 'Деградировавшие леса',
    degradedForestDefinition: 'Определение деградировавших лесов',
    forestDegradationMonitoringAndAssessment: 'Мониторинг и оценка деградации леса',
    degradedAreaForThatYear: 'Площадь деградировавших лесов за этот год (в 1000 га)',
    doesYourCountryMonitor: 'Осуществляет ли ваша страна мониторинг площади деградировавших лесов',
    hasNationalDefinitionOfDegradedForest: 'Имеется ли в вашей стране национальное определение "деградировавших лесов"',
    hasNationalLevelData: 'Если данные национального уровня доступны',
    howMonitored: 'Опишите процесс мониторинга и результаты',
    ifYes: 'Если "да"',
    whatIsDefinition: 'Каково национальное определение "деградировавших лесов"?',
    yearOfLatestAssessment: 'Год последней оценки',
    // Multiple choice
    // generic
    other: 'Другое (объяснить в комментариях)',
    notSelected: false,
    criteriaOfDegradedForest: 'Критерии, применяемые при определении деградировавших лесов',
    changeInForestStructureDecreaseInForestCanopy: 'Изменение структуры лесов / уменьшение площади лесного покрова',
    forestDisturbances: 'Нарушения состояния лесов',
    lossOfProductivityAndForestGoods: 'Снижение продуктивности и объема лесных товаров',
    lossOfForestServices: 'Утрата лесных услуг',
    lossOfCarbonBiomassAndGrowingStock: 'Снижение запасов углерода, биомассы и древостоя',
    lossOfBiologicalDiversity: 'Утрата биологического разнообразия',
    soilDamageErosion: 'Разрушение почв / эрозия',
    mainMethods: 'Основные методы, применяемые для мониторинга площади деградировавших лесов',
    fieldInventoryAndObservations: 'Таксация леса и наблюдения',
    wallToWallRemoteSensingMapping: "Картографирование с помощью дистанционного зондирования (''wall-to-wall'')",
    remoteSensingSurvey: 'Обследование с помощью дистанционного зондирования',
    expertOpinion: 'Мнение эксперта',
    productionHarvestData: 'Данные по производству / сбору урожая',
    forestManagementPlanReport: 'Отчет о плане управления лесами',
    underDevelopment: 'В разработке',
    monitoringScale: 'Шкала мониторинга',
    national: 'Национальный',
    subnational: 'Субнациональный',
    biome: 'Биом',
    standLocal: 'Древостой / Местный',
    criteriaOfDegradedForest2025: false,
  },
  designatedManagementObjective: {
    designatedManagementObjective2025: false,
    noDesignation: 'Нет назначения',
    unknown2025: 'Неизвестно',
  },
  disturbances: {
    forestDamage: 'Повреждения лесов',
    predominantCause: 'Преобладающая причина',
    forestAreaAffected: 'Затронутая площадь лесов (1000 га)',
    severeWeatherEvents2025: false,
  },
  extentOfForest: {
    remainingLandArea: 'Остальные земельные площади',
    totalLandArea2025: false,
    extentOfForest2025: 'Площадь лесов и прочих лесистых земель',
    otherWoodedLand: 'Прочие лесистые земли',
  },
  forestAreaChange: {
    forestExpansion2025: false,
    forestAreaChange2025: false,
    forestAreaNetChange2025: false,
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithLongTermManagementPlan2025: 'Площадь лесов с долгосрочным планом управления',
    forestAreaWithinProtectedAreas2025:
      'Площадь лесов на охраняемых территориях и лесов с долгосрочным планом управления',
  },
  forestCharacteristics: {
    ofWhichOtherPlantedForest: false,
    ofWhichPlantationForest: false,
    primaryForest: '…в том числе первичные леса',
    plantationForestIntroducedArea2025: '…в том числе интродуцированные породы',
    naturalForestArea2025: '$t(forestCharacteristics.naturalForestArea)',
  },
  forestOwnership: {
    ofWhichPrivateBusinesses2025: false,
    ofWhichCommunities2025: '…в том числе принадлежащие коренным народам и местным общинам',
    other2025: 'Прочее (укажите в комментариях)',
    unknown2025: 'Неизвестно',
    total2025: 'Всего',
    forestOwnership2025: false,
  },
  forestRestoration: {
    forestRestoration: 'Восстановление лесов',
    hasYourCountryForestRestorationCommitments: 'Приняли ли ваша страна обязательства по восстановлению лесов?',
    isThereALawOrOtherGovernmentMandateInSupportOfRestoration:
      'Существует ли какой-либо закон или другой правительственный мандат в поддержку восстановления лесов?',
    isThereANationalDefinitionOfRestoration:
      'Существует ли национальное определение "восстановления лесов" в случае утвердительного ответа, дайте определение процессу мониторинга и результатам.',
    whatAreasInNeedOfRestorationHaveBeenIdentified:
      'Какие площади, нуждающиеся в восстановлении, были идентифицированы и как они были идентифицированы?',
    whatAreTheTargetsSetForTheRestoration: 'Каковы цели восстановления лесов? Пример xxx гектар к yyyy году ',
    howManyHectaresOfForestHaveBeenRestoredToDate: 'Сколько гектаров леса было восстановлено на сегодняшний день?',
    ifYes: 'Если "да"',
  },
  growingStock: {
    totalForest: 'Всего лесов',
    naturallyRegeneratingForest2025: false,
    plantationForest2025: false,
    plantedForest2025: false,
    otherPlantedForest2025: false,
  },
  growingStockComposition: {
    millionCubicMeter: 'Млн м³',
    mostRecentYear: 'Самый последний год:',
    percentOfTotal: '% от общего числа',
    ranked: '#{{idx}} Ранжирование',
    totalGrowingStock: 'Общий запас древостоя',
    totalIntroducedTreeSpecies: 'Всего интродуцированных пород деревьев',
    totalNativeTreeSpecies: 'Всего местных пород деревьев',
    updatedGrowingStockComposition: false,
    nativeTreeSpecies2025: false,
    remainingNative2025: false,
    introducedTreeSpecies2025: false,
    remainingIntroduced2025: false,
  },
  holderOfManagementRights: {
    holderOfManagementRights2025: false,
    privateBusinesses2025: false,
    communities2025: 'Коренные народы и местные сообщества',
    other2025: 'Прочее (укажите в комментариях)',
    unknown2025: 'Неизвестно',
  },
  otherWoodedLand: {
    otherWoodedLand2025: 'Прочие лесистые земли',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals2025: 'Вывозка и стоимость недревесной лесной продукции 2020',
    nameOfProduct2025: false,
    allOtherPlantProducts2025: false,
    allOtherAnimalProducts2025: false,
    currency2025: false,
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover2025: 'Прочие земли с древесным покровом',
    agroforestry2025: false,
    other2025: false,
  },
  primaryForestByClimaticDomain: {
    primaryForestByClimaticDomain: 'Первичные леса в климатическом поясе',
    primaryForestArea100Ha: false,
    primaryForestBoreal: '… в том числе бореальные первичные леса',
    primaryForestTemperate: '… в том числе умеренные первичные леса',
    primaryForestTropical: '… в том числе тропические первичные леса',
    primaryForestSubTropical: '… в том числе субтропические первичные леса',
    totalPrimaryForest: 'Всего',
  },
  specificForestCategories: {
    specificForestCategories2025: 'Особые категории лесов',
    mangroves2025: `false`,
    rubberWood2025: false,
    mangrovesDisclaimer: `false`,
  },
  forestPolicy: {
    forestPolicy2025: false,
    policiesSFM2025: false,
    legislationsSFM2025: false,
    stakeholderParticipation2025: false,
    existenceOfTraceabilitySystem2025: false,
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate2025: false,
  },
  sustainableDevelopment: {
    annualForestAreaChangeRate: 'Годовые темпы изменения площади лесов',
    sdgIndicator1_2025: 'Индикатор ЦУР 15.1.1 Площадь лесов в процентном отношении к общей площади суши',
    forestAreaProportionLandArea: 'Площадь лесов в процентном отношении к общей площади суши',
    aboveGroundBiomassStockForests2025: false,
    proportionForestAreaLegallyEstablishedProtectedAreas2025: false,
    proportionForestAreaLongTermForestManagement2025: false,
    forestAreaVerifiedForestManagement2025: false,
    dataProvidedBy: `Данные по этому субиндикатору ЦУР представляются FSC и PEFC (организациями по сертификации лесов).`,
    'Metadata-15-01-01': `Показатель ЦУР 15.1.1 Метаданные`,
    'Metadata-15-02-01': `Показатель ЦУР 15.2.1 Метаданные`,
  },
  navigation: {
    sectionHeaders: {
      employmentEducationAndNwfp2025: 'Вывозка и стоимость недревесной лесной продукции 2020',
      forestGrowingStockBiomassAndCarbon2025: false,
      forestDesignationAndManagement2025: false,
      forestOwnershipAndManagementRights2025: false,
      forestDisturbances2025: 'Нарушения состояния лесов',
      forestExtentCharacteristicsAndChanges2025: 'Площадь, характеристики и изменения лесов',
      forestPolicyAndLegislation2025: 'Политика и законодательство в отношении лесов',
    },
  },
  extentOfForest_forestAreaStatusAndTrend_Description: {
    header_0: 'Критерии уровня площади лесов',
    status: {
      high: 'Источники данных: недавняя¹ национальная инвентаризация лесов или дистанционное зондирование (обследование на основе образцов или картирование wall-to-wall) с оценкой точности / калибровки полевых данных.',
      medium:
        'Источники данных: старая²  национальная инвентаризация лесов или дистанционное зондирование (обследование на основе образцов или картирование от стены до стены) с оценкой точности / калибровки полевых данных.',
      low: 'Источники данных: другие, такие как реестры, экспертные оценки или дистанционное зондирование без оценки точности / калибровки полевых данных.',
    },
    trend: {
      high: 'Оценки, основанные на повторных сопоставимых³ национальных инвентаризациях лесов, когда последняя инвентаризация была проведена менее пяти лет назад; и/или оценки дистанционного зондирования - изменения на основе разновременного анализа за период, завершившийся не более пяти лет назад (например, исходные уровни [выбросов] для лесов СВОД).',
      medium:
        'Оценки, основанные на повторных сопоставимых³ национальных инвентаризациях лесов, когда последняя инвентаризация проведена больше пяти лет назад; и/или оценки изменений с помощью дистанционного зондирования на основе разновременного анализа за период, закончившийся более пяти лет назад; или сравнение совместимых карт без разновременного анализа.',
      low: 'Другие источники данных, например, экспертные оценки или оценки, основанные на несовместимых оценках.',
    },
    footer1:
      '¹ Данные не старше 5 лет с момента представления доклада (2018 год или более поздняя дата для страновых докладов по ОЛР-2025)',
    footer2:
      '² Данные старше 5 лет с момента представления доклада (старше 2018 года для страновых докладов по ОЛР-2025)',
    footer3: '³ Совместимы с точки зрения используемых методов, категорий и определений',
  },
  growingStock_growingStockStatus_Description: {
    header_0: 'Критерии уровня запаса древостоя',
    status: {
      high: 'Источники данных: недавняя¹ национальная инвентаризация лесов или воздушное лазерное сканирование (ВЛС) с вероятностными наземными пробами',
      medium:
        'Источники данных: старая² Старая² национальная инвентаризация лесов, частичные полевые инвентаризации, или ВСЛ без вероятностных наземных образцов.',
      low: 'Источники данных: другие источники данных, такие как спутниковые данные, реестры, вопросники или экспертные оценки.',
    },
    status2025: {
      high: false,
      medium: false,
      low: false,
    },
    footer1: false,
    footer2: false,
  },
  biomassStock_biomassStockStatus_Description: {
    header_0: 'Критерии уровня методов оценки биомассы ',
    status: {
      high: 'Коэффициенты пересчета и расширения биомассы для конкретных стран или аллометрические уравнения',
      medium:
        'Применение общих аллометрических уравнений на уровне биома или комбинации специфических коэффициентов пересчета для страны/биома и стандартных коэффициентов расширения биомассы МГЭИК',
      low: 'Стандартные коэффициенты пересчета и расширения биомассы МГЭИК (например, с использованием "калькулятора биомассы") или оценки, основанные на картах биомассы, составленных с помощью дистанционного зондирования.',
    },
  },
};
