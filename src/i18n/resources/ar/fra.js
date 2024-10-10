// TODO: all fra labels will be migrated here in a future refactor
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _2020 = require('./2020');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _2025 = require('./2025');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const print = require('./print');
module.exports = {
  2020: _2020,
  2025: _2025,
  print,
  // assessment labels
  labels: {
    short: 'FRA',
  },
  // common
  area100HaYear: 'المساحة (1000 هـ)',
  area100Ha: 'المساحة (١٠٠٠  هكتار)',
  categoryHeader2020: 'فئات تقييم الموارد الحرجية 2020',
  categoryHeader2025: 'فئات تقييم الموارد الحرجية 2025',
  forestArea100HaYear: 'مساحة الغابة (1000 هـ)',
  // tables
  areaAffectedByFire: {
    areaAffected: 'المساحة المتضررة (١٠٠٠  هكتار)',
    areaAffectedByFire2025: '$t(areaAffectedByFire.areaAffectedByFire)',
    totalLandAreaAffectedByFire2025: 'إجمالي مساحة الاراضي المتضررة بالحرائق',
  },
  biomassStock: {
    aboveGround2025: '$t(biomassStock.aboveGround)',
    belowGround2025: '$t(biomassStock.belowGround)',
    deadWood2025: '$t(biomassStock.deadWood)',
    biomassStock2025: '$t(biomassStock.biomassStock)',
  },
  biomassStockAvg: {
    forestBiomass: 'الكتلة الحيوية للغابات (طن / هكتار)',
  },
  biomassStockTotal: {
    totalForestBiomass: 'إجمالي الكتلة الحيوية للغابات (مليون طن)',
  },
  carbonStock: {
    carbonAboveGroundBiomass2025: '$t(carbonStock.carbonAboveGroundBiomass)',
    carbonBelowGroundBiomass2025: '$t(carbonStock.carbonBelowGroundBiomass)',
    carbonStock2025: '$t(carbonStock.carbonStock)',
  },
  carbonStockTotal: {
    totalForestCarbon: 'إجمالي الكربون الحرجي (مليون طن)',
  },
  climaticDomain: {
    percentOfForestArea: '٪ من مساحة الغابات',
  },
  contactPersons: {
    expectedYearForNextCountryReportUpdate: 'العام المتوقع للتحديث القادم للتقاريرالدولة',
  },
  degradedForest: {
    // Title
    degradedForest: 'الغابة المتدهورة',
    degradedForestDefinition: 'تعريف الغابات المتدهورة',
    forestDegradationMonitoringAndAssessment: 'رصد تدهور الغابات وتقييمه',
    degradedAreaForThatYear: 'مساحة الغابات المتدهورة لذلك العام (١٠٠٠  هكتار)',
    doesYourCountryMonitor: 'هل يرصد في بلدك مساحة الغابات المتدهورة',
    hasNationalDefinitionOfDegradedForest: 'هل في بلدك تعريف وطني "للغابات المتدهورة"',
    hasNationalLevelData: 'إذا كانت البيانات متوفرة على المستوى الوطني',
    howMonitored: 'اوصف عملية الرصد والنتائج',
    ifYes: 'اذا "نعم"',
    whatIsDefinition: 'ما هو التعريف الوطني "للغابات المتدهورة"؟',
    yearOfLatestAssessment: 'سنة آخر تقييم',
    // Multiple choice
    // generic
    other: 'أخرى (شرح في التعليقات)',
    notSelected: '',
    criteriaOfDegradedForest: 'المعايير المطبقة في تعريف الغابات المتدهورة',
    changeInForestStructureDecreaseInForestCanopy: 'تغيير في هيكل الغابة / انخفاض في الغطاء التاجي',
    forestDisturbances: 'اضطرابات الغابات',
    lossOfProductivityAndForestGoods: 'فقدان الإنتاجية والمنتجات الحرجية',
    lossOfForestServices: 'فقدان خدمات الغابات',
    lossOfCarbonBiomassAndGrowingStock: 'فقدان الكربون والكتلة الحيوية والمخزون المتنامي',
    lossOfBiologicalDiversity: 'فقدان التنوع البيولوجي',
    soilDamageErosion: 'تلف / تآكل التربة',
    mainMethods: 'الأساليب الرئيسية المطبقة لرصد مساحة الغابات المتدهورة',
    fieldInventoryAndObservations: 'الجرد الميداني والملاحظات',
    wallToWallRemoteSensingMapping: 'رسم خرائط الاستشعار عن بعد المتواصلة',
    remoteSensingSurvey: 'مسح الاستشعار عن بعد',
    expertOpinion: 'رأي الخبراء',
    productionHarvestData: 'بيانات الإنتاج / الحصاد',
    forestManagementPlanReport: 'تقرير خطة إدارة الغابات',
    underDevelopment: 'تحت التطوير',
    monitoringScale: 'مقياس المراقبة',
    national: 'الوطني',
    subnational: 'دون الوطني',
    biome: 'منطقة حيوية',
    standLocal: 'الوقوف / محلي',
    criteriaOfDegradedForest2025: '$t(fra.degradedForest.criteriaOfDegradedForest)',
  },
  designatedManagementObjective: {
    designatedManagementObjective2025: '$t(designatedManagementObjective.designatedManagementObjective)',
    noDesignation: 'بدون تعيين',
    unknown2025: 'غير معروف',
  },
  disturbances: {
    forestDamage: 'أضرار لاحقة بالغابة',
    predominantCause: 'السبب الغالب',
    forestAreaAffected: 'مساحة الغابات المتضررة (١٠٠٠  هكتار)',
    severeWeatherEvents2025: '$t(disturbances.severeWeatherEvents)',
  },
  extentOfForest: {
    remainingLandArea: 'مساحة الأرض المتبقية',
    totalLandArea2025: '$t(extentOfForest.totalLandArea)',
    extentOfForest2025: '$t(extentOfForest.extentOfForest)',
    otherWoodedLand: '$t(fraClass.otherWoodedLand)',
  },
  forestAreaChange: {
    forestExpansion2025: '$t(forestAreaChange.forestExpansion)',
    forestAreaChange2025: '$t(forestAreaChange.forestAreaChange)',
    forestAreaNetChange2025: '$t(forestAreaChange.forestAreaNetChange)',
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithLongTermManagementPlan2025: 'منطقة الغابات مع خطة إدارة طويلة الأجل',
    forestAreaWithinProtectedAreas2025: '$t(forestAreaWithinProtectedAreas.forestAreaWithinProtectedAreas)',
  },
  forestCharacteristics: {
    ofWhichOtherPlantedForest: '$t(growingStock.otherPlantedForest)',
    ofWhichPlantationForest: '$t(growingStock.plantationForest)',
    primaryForest: '... منها غابة أولية',
    plantationForestIntroducedArea2025: '... منها الأنواع الدخيلة',
    naturalForestArea2025: '$t(forestCharacteristics.naturalForestArea)',
  },
  forestOwnership: {
    ofWhichPrivateBusinesses2025: '$t(forestOwnership.ofWhichPrivateBusinesses)',
    ofWhichCommunities2025: '... منها مملوكة من قبل الشعوب الأصلية والمجتمعات المحلية',
    other2025: '$t(common.otherSpecifyInComments)',
    unknown2025: 'غير معروف',
    total2025: 'الإجمالي الكلي',
    forestOwnership2025: '$t(forestOwnership.forestOwnership)',
  },
  forestRestoration: {
    forestRestoration: 'استصلاح الغابات',
    hasYourCountryForestRestorationCommitments: 'هل التزامات بلدك باستصلاح الغابات؟',
    isThereALawOrOtherGovernmentMandateInSupportOfRestoration: 'هل هناك قانون أو تفويض حكومي آخر لدعم الاستصلاح ؟',
    isThereANationalDefinitionOfRestoration:
      'هل يوجد تعريف وطني لـ "الاستصلاح " إذا كانت الإجابة بنعم ، قدِّم تعريفًا لعملية المراقبة والنتائج.',
    whatAreasInNeedOfRestorationHaveBeenIdentified:
      'ما هي المناطق التي تحتاج إلى استصلاحها والتي تم تحديدها وكيف تم تحديدها؟',
    whatAreTheTargetsSetForTheRestoration: 'ما هي أهداف جهود التعافي؟ على سبيل المثال: (xxxx) هكتار إلى (yyyy) سنة.',
    howManyHectaresOfForestHaveBeenRestoredToDate: 'كم هكتار من الغابات تم استصلاحها حتى الآن؟',
    ifYes: 'اذا "نعم"',
  },
  growingStock: {
    totalForest: 'مجموع الكلي للغابات',
    naturallyRegeneratingForest2025: '$t(growingStock.naturallyRegeneratingForest)',
    plantationForest2025: '$t(growingStock.plantationForest)',
    plantedForest2025: '$t(growingStock.plantedForest)',
    otherPlantedForest2025: '$t(growingStock.otherPlantedForest)',
  },
  growingStockComposition: {
    millionCubicMeter: 'مليون متر مكعب',
    mostRecentYear: 'آخر سنة:',
    percentOfTotal: '٪ من الكل',
    ranked: '# {{idx}} الترتيب',
    totalGrowingStock: 'إجمالي مخزون الأشجار الحيّة',
    totalIntroducedTreeSpecies: 'إجمالي أنواع الأشجار الدخيلة',
    totalNativeTreeSpecies: 'إجمالي أنواع الأشجار الأصلية',
    updatedGrowingStockComposition: '$t(growingStockComposition.growingStockComposition)',
    nativeTreeSpecies2025: '$t(growingStockComposition.nativeTreeSpecies)',
    remainingNative2025: '$t(growingStockComposition.remainingNative)',
    introducedTreeSpecies2025: '$t(growingStockComposition.introducedTreeSpecies)',
    remainingIntroduced2025: '$t(growingStockComposition.remainingIntroduced)',
  },
  holderOfManagementRights: {
    holderOfManagementRights2025: '$t(holderOfManagementRights.holderOfManagementRights)',
    privateBusinesses2025: '$t(holderOfManagementRights.privateBusinesses)',
    communities2025: 'الشعوب الأصلية والمجتمعات المحلية',
    other2025: '$t(common.otherSpecifyInComments)',
    unknown2025: 'غير معروف',
  },
  otherWoodedLand: {
    otherWoodedLand2025: '$t(growingStock.otherWoodedLand)',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals2025: 'عمليات إزالة المنتجات الحرجية غير الخشبية وقيمتها ٢٠٢٠ ',
    nameOfProduct2025: '$t(nonWoodForestProductsRemovals.nameOfProduct)',
    allOtherPlantProducts2025: '$t(nonWoodForestProductsRemovals.allOtherPlantProducts)',
    allOtherAnimalProducts2025: '$t(nonWoodForestProductsRemovals.allOtherAnimalProducts)',
    currency2025: '$t(nonWoodForestProductsRemovals.currency)',
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover2025: '$t(otherLandWithTreeCover.otherLandWithTreeCover)',
    agroforestry2025: '$t(otherLandWithTreeCover.agroforestry)',
    other2025: '$t(otherLandWithTreeCover.other)',
  },
  primaryForestByClimaticDomain: {
    primaryForestByClimaticDomain: 'الغابات الأولية حسب المجال المناخي',
    primaryForestArea100Ha: 'Primary forest area ($t(unit.haThousand))',
    primaryForestBoreal: '... منها غابة أولية شمالية',
    primaryForestTemperate: '... منها غابة أولية معتدلة',
    primaryForestTropical: '... منها غابة استوائية أولية',
    primaryForestSubTropical: '... منها غابة أولية شبه استوائية',
    totalPrimaryForest: 'الإجمالي الكلي',
  },
  specificForestCategories: {
    specificForestCategories2025: 'فئات الغابات المحددة',
    mangroves2025: `Mangroves¹`,
    rubberWood2025: '$t(specificForestCategories.rubberWood)',
    mangrovesDisclaimer: `¹Includes both Forest and Other wooded land`,
  },
  forestPolicy: {
    forestPolicy2025: '$t(forestPolicy.forestPolicy)',
    policiesSFM2025: '$t(forestPolicy.policiesSFM)',
    legislationsSFM2025: '$t(forestPolicy.legislationsSFM)',
    stakeholderParticipation2025: '$t(forestPolicy.stakeholderParticipation)',
    existenceOfTraceabilitySystem2025: '$t(forestPolicy.existenceOfTraceabilitySystem)',
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate2025: '$t(areaOfPermanentForestEstate.areaOfPermanentForestEstate)',
  },
  sustainableDevelopment: {
    annualForestAreaChangeRate: 'معدل التغير السنوي لمساحة الغابات',
    sdgIndicator1_2025: 'مؤشر أهداف التنمية المستدامة ١٥ .١ .١  لمساحة الغابات كنسبة من إجمالي مساحة الأرض',
    forestAreaProportionLandArea: 'مساحة الغابات كنسبة من إجمالي مساحة الأرض',
    aboveGroundBiomassStockForests2025: '$t(sustainableDevelopment.aboveGroundBiomassStockForests)',
    proportionForestAreaLegallyEstablishedProtectedAreas2025:
      '$t(sustainableDevelopment.proportionForestAreaLegallyEstablishedProtectedAreas)',
    proportionForestAreaLongTermForestManagement2025:
      '$t(sustainableDevelopment.proportionForestAreaLongTermForestManagement)',
    forestAreaVerifiedForestManagement2025: '$t(sustainableDevelopment.forestAreaVerifiedForestManagement)',
    dataProvidedBy: `يتم توفير البيانات الخاصة بهذا المؤشر الفرعي لأهداف التنمية المستدامة من قبل مجلس رعاية الغابات وهيئة اعتماد الحراجة البيئية (منظمات إصدار الشهادات الحرجية).`,
    'Metadata-15-01-01': `المؤشر ١٥. ١. ١ البيانات الوصفية لأهداف التنمية المستدامة.`,
    'Metadata-15-02-01': `المؤشر ١٥. ٢. ١ البيانات الوصفية لأهداف التنمية المستدامة.`,
  },
  navigation: {
    sectionHeaders: {
      employmentEducationAndNwfp2025: 'عمليات إزالة المنتجات الحرجية غير الخشبية وقيمتها ٢٠٢٠ ',
      forestGrowingStockBiomassAndCarbon2025: '$t(navigation.sectionHeaders.forestGrowingStockBiomassAndCarbon)',
      forestDesignationAndManagement2025: '$t(navigation.sectionHeaders.forestDesignationAndManagement)',
      forestOwnershipAndManagementRights2025: '$t(navigation.sectionHeaders.forestOwnershipAndManagementRights)',
      forestDisturbances2025: '$t(navigation.sectionHeaders.forestDisturbances)',
      forestExtentCharacteristicsAndChanges2025: '$t(navigation.sectionHeaders.forestExtentCharacteristicsAndChanges)',
      forestPolicyAndLegislation2025: '$t(navigation.sectionHeaders.forestPolicyAndLegislation)',
    },
  },
  extentOfForest_forestAreaStatusAndTrend_Description: {
    header_0: 'معيار درجة منطقة الغابات',
    status: {
      high: 'مصادر البيانات: الجرد الوطني للغابات أو الاستشعار عن بعد الحديثة¹ (مسح قائم على العينات أو رسم الخرائط المتواصل) مع تقييم الدقة / معايرة البيانات الميدانية.',
      medium:
        'مصادر البيانات: الجرد الوطني للغابات أو الاستشعار عن بعد القديمة² (المسح القائم على العينات أو رسم الخرائط المتواصل) مع تقييم الدقة / معايرة البيانات الميدانية.',
      low: 'مصادر البيانات: أخرى ، مثل السجلات أو تقديرات الخبراء أو الاستشعار عن بعد دون تقييم الدقة / معايرة البيانات الميدانية.',
    },
    trend: {
      high: 'تستند التقديرات إلى التوافق المتكرر لقوائم الجرد الوطنية للغابات حيث لا يتجاوز تاريخ أحدثها خمس سنوات³ ؛ و / أو الاستشعار عن بعد - تقييمات التغيير من خلال التحليل متعدد الأوقات لفترة لا تنتهي قبل أكثر من خمس سنوات (على سبيل المثال ، خفض الانبعاثات الناتجة عن إزالة الغابات وتدهورها ، المستويات المرجعية [للانبعاثات]).',
      medium:
        'تستند التقديرات إلى التوافق المتكرر لقوائم الجرد الوطنية للغابات حيث يكون أحدثها قد مضي عليها اكثر من خمس سنوات³ ؛ و / أو تقييمات تغير الاستشعار عن بعد من خلال التحليل متعدد الأوقات لفترة تنتهي قبل أكثر من خمس سنوات ؛ أو مقارنة الخرائط المتوافقة بدون تحليل زمني متعدد.',
      low: 'مصادر البيانات الأخرى ، على سبيل المثال ، تقديرات الخبراء ، أو التقديرات المستندة إلى تقييمات غير متوافقة.',
    },
    footer1:
      'البيانات المستخدمة لا تزيد عمرها عن ٥ سنوات من سنة تقديم التقارير (البيانات أحدث من عام ٢٠١٨ لتقارير برنامج التقييم العالمي للغابات ٢٠٢٥)¹.',
    footer2:
      'البيانات المستخدمة تزيد عمرها عن ٥ سنوات من سنة تقديم التقارير (البيانات أقدم من عام ٢٠١٨ لتقارير برنامج التقييم العالمي للغابات ٢٠٢٥)².',
    footer3: 'متوافقة فيما يتعلق بالأساليب والفئات والتعريفات المستخدمة³.',
  },
  growingStock_growingStockStatus_Description: {
    header_0: 'معيار درجة طريقة تقدير الكتلة الحيوية',
    status: {
      high: 'مصادر البيانات: الجرد الوطني الحديث¹ للغابات أو المسح الجوي بخاصية الليزر بالمسح الأرضي الاحتمالي.',
      medium:
        'مصادر البيانات: الجرد الوطني القديم² للغابات، أو الجرد الجزئي الميداني، أو المسح  الجوي بخاصية الليزر بدون عينات ميدانية احتمالية.',
      low: 'مصادر البيانات: مصادر بيانات أخرى، مثل بيانات الأقمار الصناعية، السجلات، الاستبيانات أو تقييمات الخبيراء',
    },
    status2025: {
      high: '$t(fra.growingStock_growingStockStatus_Description.status.high)',
      medium: '$t(fra.growingStock_growingStockStatus_Description.status.medium)',
      low: '$t(fra.growingStock_growingStockStatus_Description.status.low)',
    },
    footer1:
      'البيانات المستخدمة لا تزيد عمرها عن ١٠ سنوات من سنة تقديم التقارير (البيانات أحدث من عام ٢٠١٣ لتقارير برنامج التقييم العالمي للغابات ٢٠٢٥)¹.',
    footer2:
      'البيانات المستخدمة تزيد عمرها عن ١٠ سنوات من سنة تقديم التقارير (البيانات أقدم من عام ٢٠١٣ لتقارير برنامج التقييم العالمي للغابات ٢٠٢٥)².',
  },
  biomassStock_biomassStockStatus_Description: {
    header_0: 'معيار درجة مخزون الأشجار الحيّة',
    status: {
      high: 'مصادر البيانات: الجرد الوطني للغابات أو المسح بالليزر المحمول جوًا مع عينات أرضية احتمالية',
      medium:
        'مصادر البيانات: الجرد الوطني القديم للغابات ، قوائم الجرد الميدانية الجزئية ، أو المسح بالليزر المحمول جواً بدون عينات أرضية احتمالية.',
      low: 'مصادر البيانات: مصادر البيانات الأخرى ، مثل بيانات الأقمار الصناعية أو السجلات أو الاستبيانات أو تقييمات الخبراء.',
    },
  },
};
