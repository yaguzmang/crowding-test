module.exports = {
  noData: 'No data available',
  rowName: {
    area: 'Area',
    forest: 'Forest',
    landArea: 'Land area',
    naturalForestArea: '$t(forestCharacteristics.naturalForestArea)',
    other: '$t(common.other)',
    otherArea: 'Other area',
    otherForest: 'Other forest',
    otherLand: '$t(fraClass.otherLand)',
    other_or_unknown: 'Other or unknown',
    plantedForest: '$t(forestCharacteristics.plantedForest)',
    primaryForest: '$t(specificForestCategories.primaryForest)',
    private_ownership: 'Private',
    protected: 'Protected',
    public_ownership: 'Public',
    unknown: '$t(fra.forestOwnership.unknown2025)',
  },
  forestArea: {
    title: 'Forest Area, {{startYear}} - {{endYear}}, $t({{unit}})',
  },
  carbonAndGrowingStock: {
    title: 'Forest growing stock and carbon, {{startYear}} - {{endYear}}',
    rowName: '',
    carbon_stock_biomass_total: 'Carbon stock in biomass ($t({{unit}}))',
    carbon_stock_total: 'Total carbon stock ($t({{unit}}))',
    growing_stock_total: '$t(growingStock.growingStock) ($t({{unit}}))',
  },
  forestAreaPercent: {
    title: 'Forest area % of land area, {{year}}',
  },
  primaryForest: {
    title: 'Primary forest % of forest area, {{year}}',
  },
  forestOwnership: {
    title: '$t(forestOwnership.forestOwnership) %, {{year}}',
  },
  forestAreaWithinProtectedAreas: {
    title: 'Forest area within protected areas, {{year}}, % of forest area',
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
    title: 'Naturally regenerated and planted forest area, {{startYear}} - {{endYear}}, $t({{unit}})',
  },
}
