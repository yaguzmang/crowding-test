module.exports = {
  noData: 'No hay datos disponibles',
  rowName: {
    area: 'Área',
    forest: 'Bosque',
    landArea: 'Superficie de la terra',
    naturalForestArea: '$t(forestCharacteristics.naturalForestArea)',
    other: '$t(common.other)',
    otherArea: 'Otras tierras',
    otherForest: 'Otros bosques',
    otherLand: '$t(fraClass.otherLand)',
    other_or_unknown: 'Desconocidas/otras',
    plantedForest: '$t(forestCharacteristics.plantedForest)',
    primaryForest: '$t(specificForestCategories.primaryForest)',
    private_ownership: 'Privado',
    protected: 'Protegida',
    public_ownership: 'Público',
    unknown: '$t(fra.forestOwnership.unknown2025)',
  },
  forestArea: {
    title: 'Área forestal, {{startYear}} - {{endYear}}, $t({{unit}})s',
  },
  carbonAndGrowingStock: {
    title: 'Existencias en formación y carbono en los bosques, {{startYear}} - {{endYear}}',
    rowName: '',
    carbon_stock_biomass_total: 'Carbono en la biomasa ($t({{unit}}))',
    carbon_stock_total: 'Total de carbono ($t({{unit}}))',
    growing_stock_total: '$t(growingStock.growingStock) ($t({{unit}}))',
  },
  forestAreaPercent: {
    title: 'Superficie forestal % de la superficie terrestre, {{year}}',
  },
  primaryForest: {
    title: 'Bosque primario % de area forestal, {{year}}',
  },
  forestOwnership: {
    title: '$t(forestOwnership.forestOwnership) %, {{year}}',
  },
  forestAreaWithinProtectedAreas: {
    title: '$t(forestAreaWithinProtectedAreas.header), {{year}}',
  },
  primaryDesignatedManagementObjective: {
    title:
      '$t(designatedManagementObjective.primaryDesignatedManagementObjective), {{startYear}} - {{endYear}}, $t({{unit}})',
    rowName: '',
    conservation_of_biodiversity: '$t(designatedManagementObjective.biodiversityConservation)',
    multiple_use: '$t(designatedManagementObjective.multipleUse)',
    other: '$t(common.other)',
    production: '$t(designatedManagementObjective.production)',
    protection_of_soil_and_water: '$t(designatedManagementObjective.soilWaterProtection)',
    social_services: '$t(designatedManagementObjective.socialServices)',
    unknown: '$t(fra.designatedManagementObjective.unknown2025)',
    no_designation: '$t(fra.designatedManagementObjective.noDesignation)',
  },
  naturallyRegeneratingForest: {
    title:
      'Área de bosque con procesos de regeneración natural y bosque plantado, {{startYear}} - {{endYear}}, $t({{unit}})',
  },
}
