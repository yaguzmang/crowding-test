module.exports = {
  agreementLevelExplanation:
    'مستوى الاتفاق (N) يعني أنه يجب أن تتفق مصادر البيانات المحددة على الأقل بنسبة (N) بأن نقطة بيانات معينة هي منطقة تغطية شجرية.',
  burnedArea: 'المنطقة المحروقة',
  burnedAreaWithUnit: '$t(geo.burnedArea) ({{unit}})',
  chooseAgreementLevel: 'اختر الحد الأدنى لمستوى الاتفاق بين الطبقات المحددة.',
  customAgreementArea: 'منطقة الاتفاق المخصص',
  error: {
    extraEstimation: {
      failedToRetrieve: 'كانت هناك مشكلة في استرجاع التقدير.',
      unexpectedDuringProcessing: 'خطأ غير متوقع أثناء عملية المعالجة.',
    },
    map: {
      failedToLoad: 'كانت هناك مشكلة أثناء تحميل الخريطة.',
    },
    mosaic: {
      noMosaicAvailableForConfiguration: 'خطأ: لا توجد فسيفساء متوفرة للتكوين المُحددة.',
    },
    statistics: {
      dataUnavailable: 'البيانات غير متوفرة.',
      failedToFetch: 'حدث خطأ أثناء جلب الإحصائيات: {{error}}',
      foundNoData: 'لم يتم العثور على البيانات.',
    },
  },
  estimateCustomAgreementArea: 'تقدير مساحة الاتفاقية المخصصة',
  forestArea: 'مساحة الغطاء الشجري ({{unit}})',
  geeAssetId: 'مُعرِّف أصول محرك جوجل إيرث',
  globalOpacity: 'معدل التعتيم العالمي',
  landsat: 'القمر الصناعي لاندسات',
  map: 'خريطة',
  maxCloudCoverage: 'أقصى تغطية سحابية',
  metersReducerScale: '{{meters}}م مقياس مخفض',
  recipes: {
    forest: {
      allGfc10: 'جميع (هانسن جي إف سي >=10%)',
      allGfc20: 'جميع (هانسن جي إف سي >=20%)',
      allGfc30: 'جميع (هانسن جي إف سي >=30%)',
      esriEsa: 'معهد بحوث النظم البيئية ووكالة الفضاء الأوروبية',
      esriEsaGlobland2020Gfc10: 'معهد بحوث النظم البيئية، وكالة الفضاء الأوروبية، غلوب لاند 2020 وGFC هانسن >=10%',
    },
    recipes: 'الوصفات',
  },
  reportedToFra2020: 'أبلغت إلى تقييمات موارد الغابات 2020',
  satellite: 'قمر صناعي',
  satelliteMosaic: 'فسيفساء الأقمار الصناعية',
  sections: {
    burnedArea: {
      layerTitles: {
        modis: 'موديس',
      },
      title: 'المنطقة المحترقة',
    },
    forest: {
      layerTitles: {
        agreement: 'طبقة التوافق',
        copernicus2019: 'كوبرنيكوس (2019)',
        customFnf: 'مخصص إف أن إف',
        esa2020: 'وكالة الفضاء الأوروبية (2020)',
        esaGlobCover2009: 'وكالة الفضاء الأوروبية جلوبكوفر (2009)',
        esri2020: 'معهد بحوث النظم البيئية (2020)',
        globeLand2020: 'غلوب لاند (2020)',
        hansenGfc2020: 'هانسن جي إف سي (2020)',
        hansenGfc2020WithPercent: '$t(geo.sections.forest.layerTitles.hansenGfc2020) {{hansenPercent}} %',
        jaxa2017: 'وكالة الفضاء اليابانية (2017)',
        modis: 'موديس',
        tanDemX2019: 'تانديم-إكس (2019)',
      },
      title: 'الغطاء الشجري',
    },
    protectedArea: {
      layerTitles: {
        customProtectedArea: 'مساحة المنطقة المحمية المخصصة',
        filteredWdpa: 'قاعدة بيانات عالمية مفلترة عن المناطق المحمية',
        wdpa: 'قاعدة البيانات العالمية للمناطق المحمية',
      },
      title: 'المناطق المحمية',
    },
  },
  selectMinTreeCoverPercent: 'حدد الحد الأدنى للنسبة المئوية للغطاء الشجري:',
  sentinel: 'سينتينيل',
  showSatelliteMosaic: 'عرض فسيفساء القمر الصناعي',
  statistics: {
    burnedArea: {
      burnedAreaByYear: 'المنطقة المحروقة حسب السنة',
    },
    forestArea: {
      extentOfForestPerSource:
        'امتداد الغطاء الشجري حسب المصدر وحسبما تم الإبلاغ عنه إلى هيئة تقييم الموارد الحرجية {{year}}',
      extentOfForestTreeCover: 'امتداد الغطاء الشجري حسب المصدر',
      forestAreaHa: 'مساحة الغطاء الحرجي، هكتار',
      forestAreaPercentOfLandArea: 'مساحة الغطاء الحرجي % من مساحة الأرض',
      landArea: 'مساحة الأرض',
    },
    graphs: 'الرسوم البيانية الإحصائية',
    protectedArea: {
      allGfc10: 'جميع (هانسن جي إف سي >=10%)',
      allGfc20: 'جميع (هانسن جي إف سي >=20%)',
      allGfc30: 'جميع (هانسن جي إف سي >=30%)',
    },
    title: 'الإحصائيات',
  },
  treeCoverAgreementSelected: 'اتفاقية الغطاء الشجري المحدد',
  treeCoverProtectedAreas: 'الغطاء الشجري داخل المناطق المحمية',
  treeCoverProtectedAreasWithUnit: '$t(geo.treeCoverProtectedAreas) ({{unit}})',
}
