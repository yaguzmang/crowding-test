module.exports = {
  agreementLevelExplanation:
    'Уровень согласия N означает, что по крайней мере N из выбранных источников данных должны согласиться с тем, что определенный пиксель является областью древесного покрова.',
  burnedArea: 'Выгоревшая площадь',
  burnedAreaWithUnit: '$t(geo.burnedArea) ({{unit}})',
  chooseAgreementLevel: 'Выберите мин. уровень согласования между выбранными слоями.',
  customAgreementArea: 'Область индивидуального соглашения',
  error: {
    extraEstimation: {
      failedToRetrieve: 'Не удалось получить оценку.',
      unexpectedDuringProcessing: 'Непредвиденная ошибка во время обработки.',
    },
    map: {
      failedToLoad: 'Возникла проблема при загрузке карты.',
    },
    mosaic: {
      noMosaicAvailableForConfiguration: 'Ошибка: для выбранной конфигурации мозаика недоступна.',
    },
    statistics: {
      dataUnavailable: 'Данные недоступны.',
      failedToFetch: 'Произошла ошибка при получении статистики: {{error}}',
      foundNoData: 'Данные не найдены.',
    },
  },
  estimateCustomAgreementArea: 'Оценить площадь индивидуального соглашения',
  forestArea: 'Площадь лесного покрова ({{unit}})',
  geeAssetId: 'Идентификатор актива GEE',
  globalOpacity: 'Глобальная непрозрачность',
  landsat: 'Landsat',
  map: 'Карта',
  maxCloudCoverage: 'Максимальное облачное покрытие',
  metersReducerScale: '{{meters}} м Шкала редуктора',
  recipes: {
    forest: {
      allGfc10: 'Все (GFC Hansen >=10%)',
      allGfc20: 'Все (GFC Hansen >=20%)',
      allGfc30: 'Все (GFC Hansen >=30%)',
      esriEsa: 'ESRI и ЕКА',
      esriEsaGlobland2020Gfc10: 'ESRI, ESA, Globland 2020 и GFC Hansen >=10%',
    },
    recipes: 'Рецепты',
  },
  reportedToFra2020: 'Об этом сообщает FRA 2020',
  satellite: 'Спутник',
  satelliteMosaic: 'Спутниковая мозаика',
  sections: {
    burnedArea: {
      layerTitles: {
        modis: 'МОДИС',
      },
      title: 'Выгоревшая площадь',
    },
    forest: {
      layerTitles: {
        agreement: 'Уровень соглашения',
        copernicus2019: 'Copernicus (2019)',
        customFnf: 'Пользовательский ФнФ',
        esa2020: 'ESA (2020)',
        esaGlobCover2009: 'ESA GlobCover (2009)',
        esri2020: 'ESRI (2020)',
        globeLand2020: 'GlobeLand (2020)',
        hansenGfc2020: 'Hansen GFC (2020)',
        hansenGfc2020WithPercent: '$t(geo.sections.forest.layerTitles.hansenGfc2020) {{hansenPercent}} %',
        jaxa2017: 'JAXA (2017)',
        modis: 'MODIS',
        tanDemX2019: 'TanDEM-X (2019)',
      },
      title: 'Деревянный покров',
    },
    protectedArea: {
      layerTitles: {
        customProtectedArea: 'Пользовательская охраняемая территория',
        filteredWdpa: 'Отфильтрованное WDPA',
        wdpa: 'ВДПА',
      },
      title: 'Охранямеая площадь',
    },
  },
  selectMinTreeCoverPercent: 'Выберите мин. процент покрытия деревьев:',
  sentinel: 'Sentinel',
  showSatelliteMosaic: 'Показать спутниковую мозаику',
  statistics: {
    burnedArea: {
      burnedAreaByYear: 'Площадь пожаров по годам',
    },
    forestArea: {
      extentOfForestPerSource: 'Степень древесного покрова на каждый источник и по данным ОЛР {{year}}',
      extentOfForestTreeCover: 'Степень древесного покрова по источникам',
      forestAreaHa: 'Площадь лесного покрова, га',
      forestAreaPercentOfLandArea: 'Площадь лесного покрова % площади суши',
      landArea: 'Площадь земельного участка',
    },
    graphs: 'Статистические графики',
    protectedArea: {
      allGfc10: 'Все (GFC Hansen >=10%)',
      allGfc20: 'Все (GFC Hansen >=20%)',
      allGfc30: 'Все (GFC Hansen >=30%)',
    },
    title: 'Статистика',
  },
  treeCoverAgreementSelected: 'Выбрано соглашение о покрытии деревьев',
  treeCoverProtectedAreas: 'Древесный покров на охраняемых территориях',
  treeCoverProtectedAreasWithUnit: '$t(geo.treeCoverProtectedAreas) ({{unit}})',
}
