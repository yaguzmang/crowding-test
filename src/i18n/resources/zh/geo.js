module.exports = {
  agreementLevelExplanation: '同意程度 N 意味着至少 N 个选定的数据源需要达成一致，认定某个像素为树木覆盖区域。',
  burnedArea: '烧毁区域',
  burnedAreaWithUnit: '$t(geo.burnedArea) ({{unit}})',
  chooseAgreementLevel: '选择所选图层间的最小同意程度。',
  customAgreementArea: '自定义同意区域',
  error: {
    extraEstimation: {
      failedToRetrieve: '检索估算时出现问题。',
      unexpectedDuringProcessing: '处理过程中出现意外错误。',
    },
    map: {
      failedToLoad: '加载地图时出现问题。',
    },
    mosaic: {
      noMosaicAvailableForConfiguration: '错误：所选配置没有可用的镶嵌。',
    },
    statistics: {
      dataUnavailable: '数据不可用。',
      failedToFetch: '获取统计信息时发生错误：{{error}}',
      foundNoData: '未找到数据。',
    },
  },
  estimateCustomAgreementArea: '估算自定义同意区域',
  forestArea: '树木覆盖区域 ({{unit}})',
  geeAssetId: 'GEE 属性 ID',
  globalOpacity: '全球不透明度',
  landsat: 'Landsat',
  map: '地图',
  maxCloudCoverage: '最大云覆盖率',
  metersReducerScale: '{{meters}} 米 缩减比例',
  recipes: {
    forest: {
      allGfc10: '全部 (GFC Hansen >=10%)',
      allGfc20: '全部 (GFC Hansen >=20%)',
      allGfc30: '全部 (GFC Hansen >=30%)',
      esriEsa: 'ESRI & ESA',
      esriEsaGlobland2020Gfc10: 'ESRI、ESA、Globland 2020 & GFC Hansen >=10%',
    },
    recipes: '配方',
  },
  reportedToFra2020: '汇报给2020年全球森林资源评估',
  satellite: '卫星',
  satelliteMosaic: '卫星镶嵌',
  sections: {
    burnedArea: {
      layerTitles: {
        modis: 'MODIS',
      },
      title: '烧毁区域',
    },
    forest: {
      layerTitles: {
        agreement: '同意层',
        copernicus2019: 'Copernicus (2019)',
        customFnf: '自定义 森林/非森林',
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
      title: '树木覆盖',
    },
    protectedArea: {
      layerTitles: {
        customProtectedArea: '自定义受保护区域',
        filteredWdpa: '筛选后的世界保护区数据库',
        wdpa: '世界保护区数据库(WDPA)',
      },
      title: '受保护区域',
    },
  },
  selectMinTreeCoverPercent: '选择最小树木覆盖百分比：',
  sentinel: '哨兵卫星(Sentinel)',
  showSatelliteMosaic: '显示卫星镶嵌',
  statistics: {
    burnedArea: {
      burnedAreaByYear: '烧毁区域（按年）',
    },
    forestArea: {
      extentOfForestPerSource: '根据资料来源及向 FRA 报告的树木覆盖范围 {{year}}',
      extentOfForestTreeCover: '树木覆盖范围（按来源）',
      forestAreaHa: '树木覆盖面积，公顷',
      forestAreaPercentOfLandArea: '树木覆盖面积占土地面积的百分比',
      landArea: '土地面积',
    },
    graphs: '统计图表',
    protectedArea: {
      allGfc10: '全部 (GFC Hansen >=10%)',
      allGfc20: '全部 (GFC Hansen >=20%)',
      allGfc30: '全部 (GFC Hansen >=30%)',
    },
    title: '统计信息',
  },
  treeCoverAgreementSelected: '选定的同意树木覆盖区域',
  treeCoverProtectedAreas: '受保护区域内的树木覆盖',
  treeCoverProtectedAreasWithUnit: '$t(geo.treeCoverProtectedAreas) ({{unit}})',
}
