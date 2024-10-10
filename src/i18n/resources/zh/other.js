module.exports = {
  fileDrop: {
    dropFilesHere: '将文件放在此处',
    dragAndDropOrClick: '在此处拖放文件，或点击选择文件',
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
    statisticalFactsheets: '声明：可能包含粮农组织估计数值，可能有缺失的数值',
    part1: '本网站的制作得到了下述各方的协助：',
    europeanUnion: '欧洲联盟',
    part2: '、',
    govFinland: '芬兰政府',
    part3: '、',
    govNorway: '挪威政府',
    part4: '和',
    gef: '全球环境基金',
    part5: '。 网站内容由粮农组织全权负责，不代表欧洲联盟、芬兰政府、挪威政府和全球环境基金的观点。',
    termsOfUse: '统计数据库使用条款',
  },
  home: {
    keyFindings: `全球森林面积共计40.6亿公顷，占陆地总面积的31%。根据这一森林总面积计算得出的人均森林面积为0.52公顷。
	森林在各民族或地理区域间分布并不均匀，热带地区拥有的森林面积最大，占比45%，其次是寒带、温带和亚热带。`,
  },
  footer: {
    contactUs: '联系我们',
    termsAndConditions: '条款和条件',
    scamAlert: '防欺诈警告',
    reportMisconduct: '报告不当行为',
    tutorials: '视频',
    sendFeedback: '发送反馈',
    licenses: '许可',
    platformVersion: '平台版本',
  },
  unit: {
    haThousand: '1 000 公顷',
    ha: '公顷',
    kmSq: '平方公里',
    mileSq: '平方英里',
    acre1000: '1 000 英亩',
    acre: '英亩',
    haMillion: '百万公顷',
    haThousandPerYear: '1 000 公顷/年',
    tonnesPerHa: '吨/公顷',
    cubicMeterPerHa: '立方米/公顷',
    millionTonnes: '百万公吨',
    millionsCubicMeterOverBark: '百万立方米（带皮）',
    thousandCubicMeterOverBark: '1 000 立方米（带皮）',
    billionCubicMeter: '10亿立方米',
    thousandCubicMeter: '1 000 立方米',
    thousandCubicMeterRWE: '1 000 立方米原木当量',
    thousandPersons: '1 000 人',
    gt: '10亿吨',
    fte1000: '1 000 全职人力工时',
    numberOfStudents: '$t(graduationOfStudents.numberOfStudents)',
    absoluteNumber: '绝对数',
    annualNumberOfVisitsMillion: '年访问量(百万)',
    millionNationalCurrency: '百万国家货币',
    facilityLengthIn1000Km: '设施 (单位：1 000公里)',
    growingStockPercent: '森林总立木蓄积的百分比',
  },
  countrySelection: {
    selectCountry: '选择国家',
  },
  definition: {
    definitionLabel: '术语和定义',
    faqLabel: '常见问题',
    seeReportingNotes: false,
  },
  audit: {
    notStarted: '未开始',
    edited: '已编辑',
  },
  yesNoTextSelect: {
    yes: '是',
    no: '否',
    notSelected: false,
  },
  user: {
    roles: {
      REVIEWER: '审核人',
      NATIONAL_CORRESPONDENT: '国家通讯员',
      ALTERNATE_NATIONAL_CORRESPONDENT: '候补国家通讯员',
      COLLABORATOR: '合作者',
      ADMINISTRATOR: '管理员',
      VIEWER: '观察者',
      noRole: false,
      // unused?
      reviewer_plural: '审查者',
      nationalCorrespondent_plural: '国家通讯员',
      alternateNationalCorrespondent_plural: '候补国家通讯员',
      collaborator_plural: '合作者',
      // deprecated
      // reviewer: 'Reviewer',
      // nationalCorrespondent: 'National correspondent',
      // alternateNationalCorrespondent: 'Alternate national correspondent',
      // collaborator: 'Collaborator',
      // administrator: 'Administrator',
    },
    resetPasswordEmail: {
      subject: 'FRA平台 - 重置密码',
      textMessage: `尊敬的 {{user}}

我们收到了一个重置您FRA账户密码的请求。
如果您没有提出这一要求，请忽略这封邮件。


请点击以下链接重置您的密码
{{- link}}


谢谢！,
FRA工作组 fra@fao.org
{{- url}}`,
      htmlMessage: `尊敬的 {{user}}
<br/><br/>
我们收到了一个重置您FRA账户密码的请求。 
<br/>
如果您没有提出这一要求，请忽略这封邮件。
<br/><br/><br/>
<a href="{{link}}" style="text-decoration: none; background-color: #0098a6;border: 2px solid #00988F;color: white;font-size: 14px;font-weight: 700;    padding: 10px 50px;">点击此处重设密码</a>
<br/><br/><br/>
谢谢！
<br/>
FRA工作组 fra@fao.org
<br/>
{{- url}}
      `,
    },
  },
  fraClass: {
    forest: '森林',
    otherWoodedLand: '其他林地',
    otherLand: '其他土地',
  },
  fraForestCharacteristicsClass: {
    naturallyRegeneratingForest: '天然再生林',
    plantationForest: '种植林',
    ofWhichIntroduced: '引入外来树种的种植林',
    ofWhichPrimaryForest: false,
    otherPlantedForest: '其他人工林',
    totalForest: '森林总面积',
  },
  fraOtherLandClass: {
    palms: '棕榈类 (油棕、椰树、枣椰等)…',
    treeOrchards: '果树 (包括水果、坚果、橄榄等)',
    agroforestry: '农林间作…',
    treesUrbanSettings: '城市树木…',
  },
  messageBoard: {
    messageBoard: false,
  },
  userChat: {
    chatHeader: '与 {{user}}的消息',
    noMessages: '无消息',
    writeMessage: '写消息…',
    send: '发送',
    cancel: '取消',
    notificationEmail: {
      subject: '{{sender}} 发送了一条有关{{country}}的消息给您',
      textMessage: `尊敬的 {{recipient}},

{{sender}} 发送了一条有关 {{country}}的消息给您。

请通过下述URL登陆平台查看和回复消息:
{{- link}}

FRA工作组
{{- url}}
    `,
      htmlMessage: `尊敬的 {{recipient}},
<br/><br/>
{{sender}} 发送了一条有关 {{country}}的消息给您。
<br/><br/>
<b><a href="{{- link}}">请登陆平台查看和回复消息。</a></b>
<br/><br/>
FRA工作组
<br/>
{{- url}}
    `,
    },
  },
  // error messages
  error: {
    access: {
      countryRoleNotSpecified: '错误: 用户 {{user}} 试图登陆 {{countryIso}} ，但未明确身份',
      countryUserNotReviewer: '错误: 用户 {{user}} 试图登陆 {{countryIso}} ，但其并非审核人',
      userNotAdministrator: '错误: 用户 {{user}} 试图登陆仅向管理员开放的资源',
      roleChangeNotAllowed: '错误: 用户 {{user}} 试图将另一名用户的身份设置为 {{role}}，但该用户没有这一操作权限',
      userAlreadyAddedToCountry: '错误: 用户 {{user}} 已被添加至国家 {{countryIso}}',
      invitationAlreadyUsed: '错误: 邀请函 {{invitationUuid}}已被使用，不得通过{{loginEmail}}加以劫持!',
      countryDoesNotMatch: '错误: 国家 {{countyryIso}} 不匹配',
      assessmentEditingNotAllowed:
        '错误: 用户{{user}}为 {{role}}身份，不得编辑状态为{{assessmentStatus}}的国家{{countryIso}}评估报告',
      assessmentCommentingNotAllowed:
        '错误: 用户{{user}}为 {{role}}身份，不得评论状态为{{assessmentStatus}}的国家{{countryIso}}评估报告',
    },
    assessment: {
      transitionNotAllowed: '错误: 身份为{{role}}的用户，不得将{{currentStatus}}变更为{{status}}',
      deskStudyNotAllowed: '错误: 仅管理员有权限变更书面审查状态',
    },
    review: {
      commentDeleteNotOwner: '错误: 用户{{user}}试图删除他人评论',
      commentEnterResolvedIssue: '错误: 用户{{user}}试图对已解决的问题发表评论',
    },
    ndp: {
      previousNdpNotFound: '无法找到{{year}}前的任何国家数据点',
    },
  },
  // components

  countryListing: {
    annuallyUpdated: '每年更新',
    fra2020: '2020年森林资源评估（FRA 2020）',
  },
  navigation: {
    hideAll: '隐藏所有',
    showAll: '显示所有',
    support: {
      dontDelete: '系统信息，请勿移除',
      feedbackEmailSubject: 'FRA平台反馈',
      platformVersion: '平台版本',
      userAgent: '用户代理',
      user: '用户',
      manageCollaborators: '合作管理',
    },
    sectionHeaders: {
      introduction: '引言',
      forestExtentCharacteristicsAndChanges: '森林面积、特征和变化',
      forestGrowingStockBiomassAndCarbon: '森林立木蓄积量、生物量和碳储量',
      forestDesignationAndManagement: '森林的指定用途和管理',
      forestOwnershipAndManagementRights: '森林所有权和管理权',
      forestDisturbances: '森林受到干扰',
      forestPolicyAndLegislation: '森林政策和法律',
      employmentEducationAndNwfp: '就业、教育和非木质林产品',
      sustainableDevelopment: '可持续发展目标15',
      panEuropeanIndicators: '泛欧洲指标',
    },
    cancel: '取消',
    changeStatusTextPlaceholder: '添加可选消息',
    doNotNotifyUsers: '不通知用户',
    notifySelf: '将副本发送给自己',
  },
  header: {
    editProfile: '编辑简介',
    logout: '退出',
    hideSidebar: '隐藏边栏',
    showSidebar: '显示边栏',
    autoSave: {
      saving: '正在保存…',
      complete: '所有变更已保存',
      lastSaveTimestampReceived: '最后编辑',
    },
  },
  time: {
    hour: '{{count}} 小时前',
    hour_plural: '{{count}}小时前',
    day: '{{count}} 天前',
    day_plural: '{{count}}天以前',
    week: '{{count}} 星期前',
    week_plural: '{{count}}周前',
    aMomentAgo: '刚才',
  },
  review: {
    comments: '评论',
    noComments: '无评论',
    loading: '正在加载',
    resolve: '解决',
    confirmDelete: '确定要删除此条评论吗？此操作不可撤销。',
    commentDeleted: '评论删除',
    commentMarkedAsResolved: '标注为”已解决”',
    delete: '删除',
    writeComment: '写评论…',
    commentingClosed: '评论关闭',
    cancel: '取消',
  },
  description: {
    edit: '编辑',
    done: '已完成',
    loading: '正在加载内容…',
    description: '描述',
    dataSourcesTitle: '数据来源、原始数据和国家分类与定义',
    generalCommentsTitle: '评论',
    dataSources: '数据来源',
    dataSourcesPlus: '数据来源 + 数据来源类型，如国家森林资源清查（NFI）, 等等',
    originalData: '原始数据',
    nationalClassificationAndDefinitions: '国家分类和定义',
    nationalData: '国家数据',
    analysisAndProcessing: '国家数据分析和处理',
    estimationAndForecasting: '估算和预测',
    reclassification: '按照FRA {{cycleName}} 类别进行重新分类',
  },
  nationalDataPoint: {
    clickOnNDP: '点击年份获取原始数据',
    nationalDataPoint: '国家数据点',
    addNationalDataPoint: '添加国家数据点',
    noNationalDataAdded: '未添加国家数据',
    nationalData: '国家数据',
    reclassificationLabel: '原始数据和重新分类',
    forestCategoriesLabel: '森林、其他林地和其他土地',
    forestCategoriesLabel2025: '森林、其他林地和其它土地',
    referenceYearData: '数据参考年份',
    referenceYear: '参考年份',
    references: '参考',
    prefill: false,
    prefillWith: false,
    selectYear: '选择…',
    methods: '方法',
    methodsUsed: '已使用的方法',
    dataSource: '数据来源',
    dataSources: '数据来源',
    dataSource2025ExplanatoryText: false,
    additionalComments: '额外评论',
    edit: '编辑',
    confirmCopyPreviousValues: false,
    copyPreviousValues: '复制先前的参考文献',
    nationalClassifications: '国家级分类',
    nationalClass: '国家界定的类别',
    nationalClasses: '分类和定义',
    definition: '定义',
    categories: '类别',
    class: '类别',
    fraClasses: 'FRA界定的类别',
    area: '面积(1000公顷)',
    total: '共计',
    modifiedExplanation: '修正后的国家数据点',
    confirmDelete: '确定删除这一数据点吗？此操作不可撤销。',
    discardChanges: '放弃修改',
    doneEditing: '编辑完成',
    enterOrCopyPasteNationalClasses: '输入或复制与粘贴国家界定的类别',
    forestCharacteristics: '森林特征',
    otherLandCharacteristics: '有树木覆盖的其他土地',
    plantationForest: '种植林',
    remindDirtyOdp: '国家数据点已经更新，请记得重新生成数值',
    disabled: '第1b项的禁用、启用',
    dataSourceMethodsOptions: {
      nationalForestInventory: '国家森林资源清查',
      sampleBasedRemoteSensingAssessment: '基于采样的遥感评估',
      fullCoverMaps: '全幅森林/植被图',
      registersQuestionnaires: '登记/调查表',
      other: '其他(在评论中阐述)',
    },
    appliesToVariablesOptions: {
      forest: '森林',
      otherWoodedLand: '其他林地',
      otherLand: '其他土地',
    },
    fileAddedWillBecomePublic: '添加的参考文件将可公开访问',
  },
  userManagement: {
    addUser: '添加合作者',
    allUsers: '所有合作者',
    confirmDelete: '移除 {{user}}?',
    done: '已完成',
    edit: '编辑',
    editPermissions: '编辑权限',
    formErrors: '表格内有错误。请修改后再次提交。',
    info: '信息',
    insufficientPrivileges: '权限不足',
    invitationDeleted: '邀请已被删除',
    invitationEmailSent: '已发送邀请邮件',
    invitationLink: '邀请链接',
    invitationLinkCopied: false,
    inviteAgain: '再次邀请',
    loginEmail: '登陆',
    manageCollaborators: '合作管理',
    noUsers: '未添加合作者',
    permissions: '权限',
    personalInfoRequired: '请在继续之前完成您的个人信息',
    placeholder: '选择…',
    remove: '移除',
    sendInvitation: '发送邀请邮件',
    userAdded: '{{email}}已被添加',
    userModified: '用户{{user}}已被修改',
    invitationEmail: {
      subject: 'FRA平台邀请',
      textMessage: `尊敬的 {{invitedUser}},

您被邀请以{{country}}{{role}} 的身份访问FRA平台。

请点击下述链接接受邀请和访问FRA平台：
{{- link}}

欢迎来访！

FRA工作组 fra@fao.org
{{- url}}
    `,
      htmlMessage: `尊敬的 {{invitedUser}},
<br/><br/>
您被邀请以{{country}}{{role}} 的身份访问FRA平台。.
<br/><br/>
<b><a href="{{- link}}">接受邀请并访问平台</a></b>
<br/><br/>
欢迎来访！
<br/><br/>
FRA工作组 fra@fao.org
<br/>
{{- url}}
    `,
    },
    permissionNames: {
      tableData: '表格数据',
      descriptions: '描述',
    },
  },
  // FRA 2020 questionare
  // Object name and title should have always the same name

  contactPersons: {
    all: '$t(common.all)',
    reportPreparationAndContactPersons: '报告编写者和联系方式',
    contactPersons: '引言',
    contactPersonsSupport: '本报告由下述人员编写：',
    introductoryText: '介绍性文字',
    introductoryTextSupport: '简述本报告的内容',
    firstName: '名',
    lastName: '姓',
    institution: '机构/地址',
    email: '电子邮箱',
    tables: '表格',
    none: '无',
  },
  extentOfForest: {
    extentOfForest: '森林及其他林地的面积',
    estimationAndForecasting: '估算和预测',
    categoryHeader: 'FRA类别',
    forestArea: '森林',
    chart: {
      placeholderLine1: '请先添加新的国家数据点，然后使用',
      placeholderLine2: '其自动生成FRA数值。',
    },
    otherLandCategories: '其他土地类别',
    ofWhichPalms: '棕榈类 (油棕、椰树、枣椰等)…',
    ofWhichTreeOrchards: '果树类(包括水果、坚果、橄榄等)…',
    ofWhichAgroforestry: '农林间作…',
    ofWhichTreesUrbanSettings: '城市树木…',
    totalLandArea: '土地面积总和',
    fedAreasExceedTotalLandArea: '森林和其他林地面积超过土地面积总和',
    forestAreaDoesNotMatchPreviouslyReported: '森林面积与FRA {{year}}中报告的面积不匹配: {{previous}}',
    forestAreaNetChangeDoesNotMatch: '森林面积净变化与预期值不符：{{value}}',
    useOriginalDataPoints: '使用国家数据点',
    dontUseOriginalDataPoints: '不使用国家数据点',
    whatIsThis: '这是什么？',
    tableNoticeMessage: '所有参考年份均使用FAOSTAT中的2015年土地面积数据',
    ndpMissingValues: '国家数据点存在缺失值',
    showNDPs: '显示国家数据点',
    hideNDPs: '隐藏国家数据点',
  },
  climaticDomain: {
    climaticDomain: '气候区',
    percentOfForestArea2015: '占2015年森林面积的百分比',
    percentOfForestArea2015Override: '覆盖数值',
    selectDefault: '默认',
    boreal: '寒带',
    temperate: '温带',
    subtropical: '亚热带',
    sub_tropical: '$t(climaticDomain.subtropical)',
    tropical: '热带',
  },
  forestCharacteristics: {
    forestCharacteristics: '森林特征',
    estimationAndForecasting: '估算和预测',
    categoryHeader: 'FRA类别',
    naturalForestArea: '天然再生林',
    plantationForestArea: '种植林',
    plantationForestIntroducedArea: '...其中引进树种',
    otherPlantedForestArea: '其他人工林',
    plantedForest: '人工林',
    totalForestArea: '森林总面积',
    total: '共计',
    useOriginalDataPoints: '使用国家数据点',
    dontUseOriginalDataPoints: '不使用国家数据点',
  },
  tableWithOdp: {
    confirmGenerateFraValues: '覆盖当前值？',
    generateFraValues: '生成数值',
    generatingFraValues: '生成中...',
    linearExtrapolation: '线性',
    repeatLastExtrapolation: '重复上一步',
    annualChangeExtrapolation: '年度变化',
    placeholderFuture: '未来',
    placeholderPast: '过去',
    copyToClipboard: '复制数值',
    placeholderSelect: '估算和预测',
    _1000haYear: '1000公顷/年',
  },
  forestAreaChange: {
    forestAreaChange: '年度森林扩张、砍伐和净变化',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积 (1000 公顷)',
    forestExpansion: '森林扩张',
    ofWhichAfforestation: '造林',
    ofWhichNaturalExpansion: '自然扩张',
    deforestation: '砍伐',
    forestAreaNetChange: '森林面积净变化',
    forestAreaNetChangeFrom1a: '从表1a计算得出的森林面积净变化',
    netChangeDoesNotMatch: '与森林面积净变化不匹配',
  },
  annualReforestation: {
    annualReforestation: '年度造林',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积 (1000 公顷)',
    reforestation: '造林',
  },
  specificForestCategories: {
    specificForestCategories: '原始林和特殊森林类别',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积(1000公顷)',
    bamboo: '竹林',
    mangroves: '红树林',
    temporarilyUnstocked: '暂时无储量或近期恢复的',
    primaryForest: '原始林',
    exceedsNaturallyRegeneratingForest: '超过天然再生林(1b)',
    rubberWood: '橡胶种植林',
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover: '有树木覆盖的其他土地',
    areaUnitLabel: '面积(1000公顷)',
    categoryHeader: 'FRA类别',
    palms: '棕榈类',
    treeorchards: '果树类',
    agroforestry: '农林间作',
    treesinurbansettings: '城市树木',
    total: '共计',
    otherLandArea: '其他土地面积',
    other: '其他(在评论中阐述)',
  },
  growingStock: {
    growingStock: '立木蓄积量',
    supportText: '在编辑本表格前，请先在表1a和表1b中输入数据',
    categoryHeader: 'FRA类别',
    avgTableHeader: '立木蓄积量[立方米/公顷(带皮)]',
    totalTableHeader: '立木总蓄积量[百万立方米（带皮）]',
    naturallyRegeneratingForest: '天然再生林',
    plantedForest: '人工林',
    plantationForest: '种植林',
    otherPlantedForest: '其他人工林',
    forest: '森林',
    otherWoodedLand: '其他林地',
    copyToClipboard: '复制数值',
  },
  growingStockComposition: {
    native: '本地',
    introduced: '引进',
    growingStockComposition: '立木蓄积量组成',
    forestGrowingStockComposition: '森林立木蓄积量组成',
    categoryHeader: 'FRA类别',
    nativeTreeSpecies: '本地树种',
    introducedTreeSpecies: '引进树种',
    areaUnitLabel: '森林立木蓄积量[百万立方米（带皮）]',
    scientificName: '学名',
    millionCubicMeter: false,
    commonName: '通用名',
    rank: '#{{idx}} 按数量排名',
    remainingNative: '其余的本地树种',
    remainingIntroduced: '其余的引入树种',
    totalNative: '本地树种总量',
    totalIntroduced: '引进树种总量',
    totalGrowingStock: '总立木蓄积',
    rankingYear: '2015年排名',
    growingStockPercent: false,
    mostRecentYear: false,
  },
  biomassStock: {
    biomassStock: '生物量',
    categoryHeader: 'FRA类别',
    tableHeader: '森林生物量(吨/公顷)',
    aboveGround: '地上生物量',
    belowGround: '地下生物量',
    deadWood: '枯死木',
    downloadExcel: '下载excel计算器',
  },
  carbonStock: {
    carbonStock: '碳储量',
    categoryHeader: 'FRA类别',
    tableHeader: '森林碳储量(吨/公顷)',
    carbonAboveGroundBiomass: '地上生物质碳储量',
    carbonBelowGroundBiomass: '地下生物质碳储量',
    carbonDeadwood: '枯死木碳储量',
    carbonLitter: '林分枯落物碳储量',
    carbonSoil: '土壤碳储量',
    soilDepthHeading: '用于土壤碳储量估算的土壤深度（厘米）',
  },
  designatedManagementObjective: {
    designatedManagementObjective: '指定管理目标',
    primaryDesignatedManagementObjective: '主要指定管理目标',
    primaryDesignatedManagementObjectiveSupport:
      '主要指定管理目标比其他管理目标重要得多。各项主要指定管理目标之间具有“排他性”，在一个主要指定管理目标下报告的面积不应再报告给任何其他的主要指定管理目标。不同管理目标下所报告面积的总和应等于森林面积。',
    totalAreaWithDesignatedManagementObjective: '指定管理目标所涉面积总和',
    totalAreaWithDesignatedManagementObjectiveSupport:
      '指定管理目标，包括主要和非主要目标。不同的指定类别之间“无排他性”，因此，面积数据可在多个目标下重复报告，例如，作为主要管理目标“多用途”报告的森林面积应在每个管理目标下报告。因此，不同管理目标下报告的面积总和可以大于森林总面积。',
    categoryHeader: 'FRA 2020类别',
    areaUnitLabel: '森林面积(1000公顷)',
    production: '生产',
    soilWaterProtection: '水土保持',
    biodiversityConservation: '生物多样性养护',
    socialServices: '社会服务',
    multipleUse: '多重用途',
    other: '其他(在评论中阐述)',
    unknown: '无/未知',
    totalForestArea: '森林总面积',
    total: '共计',
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithinProtectedAreas: '保护区内森林面积和纳入长期管理计划的森林面积',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积(1000公顷)',
    header: '保护区内森林面积',
    forestAreaWithLongTermManagementPlan: '纳入长期森林管理计划的森林面积',
    ofWhichInProtectedAreas: '保护区内纳入长期森林管理计划的森林面积',
  },
  forestOwnership: {
    forestOwnership: '森林所有权',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '森林面积(1000公顷)',
    privateOwnership: '私有',
    ofWhichIndividuals: '个人拥有',
    ofWhichPrivateBusinesses: '私营实体和机构拥有',
    ofWhichCommunities: '本地、部落和土著社区拥有',
    publicOwnership: '公有',
    otherOrUnknown: '未知/其他 (在评论中注明)',
    totalForestArea: '森林总面积',
    total: '共计',
  },
  holderOfManagementRights: {
    holderOfManagementRights: '公有森林管理权',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '森林面积(1000公顷)',
    publicAdministration: '公共管理',
    individuals: '个人',
    privateBusinesses: '私营企业实体和机构',
    communities: '本地、部落和土著社区',
    other: '未知/其他 (在评论中注明)',
    totalPublicOwnership: '公有合计',
    total: '共计',
    publicOwnershipDoesNotMatch: '与公有合计数不匹配',
  },
  disturbances: {
    disturbances: '森林干扰因素',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积(1000公顷)',
    insects: '虫害',
    diseases: '病害',
    severeWeatherEvents: '极端天气事件',
    other: '其他(在评论中阐述)',
    totalForestArea: '森林总面积',
    total: '共计',
  },
  areaAffectedByFire: {
    areaAffectedByFire: '受火灾影响的区域',
    categoryHeader: 'FRA类别',
    areaUnitLabel: '面积(1000公顷)',
    totalLandAreaAffectedByFire: '受火灾影响的土地总面积',
    ofWhichForest: '受影响的森林面积为',
  },
  degradedForest: {
    degradedForest: '退化的森林',
  },
  forestPolicy: {
    forestPolicy: '政策、法律和鼓励利益相关者参与森林政策制定的国家平台',
    categoryHeader: '是否存在',
    areaUnitLabel: '布尔值 (是/否)',
    national: '国家级',
    subnational: '地方',
    policiesSFM: '支持可持续森林管理的政策',
    legislationsSFM: '支持可持续森林管理的法律法规',
    stakeholderParticipation: '鼓励或允许利益相关者参与森林政策制定的平台',
    existenceOfTraceabilitySystem: '木材产品追溯系统',
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate: '永久性森林资产面积',
    categoryHeader: 'FRA 2020类别',
    areaUnitLabel: '森林面积(1000公顷)',
    applicable: '适用与否?',
  },
  employment: {
    employment: '林业和伐木业的就业',
    average: '平均3年',
    categoryHeader: 'FRA 2020类别',
    unitHeader: '全职人力工时 (1000全职人力工时)',
    inForestry: '林业和伐木业的就业',
    ofWhichSilviculture: '从事造林及其他森林活动',
    ofWhichLogging: '从事伐木',
    ofWhichGathering: '从事收集非木质林产品活动',
    ofWhichSupport: '从事林业支持性服务',
    total: '共计',
    female: '女性',
    male: '男性',
  },
  graduationOfStudents: {
    graduationOfStudents: '森林相关专业毕业生',
    average: '平均3年',
    numberOfStudents: '毕业生人数',
    fra2020Categories: 'FRA 2020类别',
    doctoralDegree: '博士学位',
    mastersDegree: '硕士学位',
    bachelorsDegree: '本科学位',
    technicianCertificate: '技术证书/文凭',
    total: '共计',
    female: '女性',
    male: '男性',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals: '非木材林产品采集和价值',
    nameOfProduct: '非木材林产品名称',
    keySpecies: '关键种类',
    quantity: '数量',
    unit: '单位',
    value: '价值 (1000当地货币)',
    category: '非木材林产品类别',
    plantProductsSelectHeading: '植物产品/原料',
    food: '1 食物',
    fodder: '2 饲料',
    rawMaterialForMedicine: '3 医药和芳香产品的原料',
    rawMaterialForColorants: '4 着色剂和染料的原料',
    rawMaterialForUtensils: '5 器皿、手工艺品和建筑的原材料',
    ornamentalPlants: '6 观赏植物',
    exudates: '7 渗出物',
    otherPlantProducts: '8 其他植物产品',
    animalProductsSelectHeading: '动物产品/原料',
    livingAnimals: '9 活体动物',
    hidesSkins: '10 兽皮和猎获物',
    wildHoney: '11 野生蜂蜜和蜂蜡',
    wildMeat: '12 野生肉类',
    animalRawMaterialForMedicine: '13 医药原料',
    animalRawMaterialForColorants: '14 着色剂原料',
    otherEdibleAnimalProducts: '15 其他可食用动物产品',
    otherNonEdibleAnimalProducts: '16 其他非可食用动物产品',
    allOtherPlantProducts: '所有其他植物产品',
    allOtherAnimalProducts: '所有其他动物产品',
    total: '共计',
    currency: '货币名称',
    notSelected: false,
  },
  sustainableDevelopment: {
    sustainableDevelopment: '可持续发展目标15',
    indicator: '指标',
    percent: '百分比',
    nameOfAgencyResponsible: '负责机构名称',
    sdgIndicator1: '可持续发展目标指标 15.1.1 森林面积占陆地总面积的比例',
    sdgIndicator2: '可持续发展目标指标15.2.1 实施可持续森林管理取得的进展',
    forestAreaProportionLandArea2015: '森林面积占陆地总面积的比例（陆地总面积以2015年数据为基准）',
    subIndicator: '细化指标 {{no}}',
    forestAreaAnnualNetChangeRate: '森林面积年度净变化率',
    aboveGroundBiomassStockForests: '森林地上生物量',
    percent2015ForestAreaBaseline: '百分比（森林面积以2015年数据为基准）',
    proportionForestAreaLegallyEstablishedProtectedAreas: '依法设立的保护区内森林面积占比',
    proportionForestAreaLongTermForestManagement: '纳入长期森林管理计划的森林面积占比',
    forestArea1000Ha: '森林面积(1000公顷)',
    forestAreaVerifiedForestManagement: '基于独立验证的森林管理认证计划下的森林面积',
  },
  panEuropeanIndicators: {
    panEuropeanIndicators: '泛欧可持续森林管理量化指标',
    uploadQuestionnaire: '上传问卷',
    chooseFile: '选择文件',
    downloadQuestionnaire: '下载文件',
    download: '下载',
    remove: '移除',
    noQuestionnaire: '未选择问卷',
    panEuropeanQualitativeIndicators: '泛欧可持续森林管理定性指标',
    accessReportingPage: '访问报告页',
  },
  assessment: {
    fra: false,
    panEuropean: '泛欧洲',
    deskStudy: '书面审查',
    statusChangeNotification: {
      subject: 'FRA平台上，{{country}}的状态变更为{{status}} ',
      textMessage: `尊敬的{{recipientName}},

{{changer}} 在FRA平台上将{{country}}{{assessment}}的状态变更为 "{{status}}" 。

{{message}}

平台访问地址: {{- serverUrl}}

FRA工作组
{{- serverUrl}}`,
      htmlMessage: `尊敬的{{recipientName}},
<br/><br/>
{{changer}}在FRA平台上将{{country}}{{assessment}}的状态变更为 "{{status}}" 。
<br/><br/>
{{message}}
<br/><br/>
<a href="{{- serverUrl}}"><b>平台访问地址</b></a>
<br/><br/>
FRA工作组
<br/>
{{- serverUrl}}`,
    },
    status: {
      changing: {
        label: '正在变更…',
      },
      notStarted: {
        label: '未开始',
      },
      editing: {
        label: '正在编辑',
        previous: '返回编辑',
      },
      review: {
        label: '正在审核',
        next: '提交审核',
        previous: '返回审核',
      },
      approval: {
        label: '等待批准',
        next: '提交批准',
        previous: '返回批准',
      },
      accepted: {
        label: '已接受',
        next: '接受',
        previous: false,
      },
    },
  },
  multiSelect: {
    placeholder: '选择…',
  },
  emoji: {
    picker: {
      search: '搜索',
      categories: {
        search: '搜索结果',
        recent: '经常使用',
        people: '笑脸符&人',
        nature: '动物&自然',
        foods: '食物&饮料',
        activity: '活动',
        places: '出行&地点',
        objects: '对象',
        symbols: '符号',
        flags: '标记',
      },
    },
  },
  country: {
    region: {
      asia: '亚洲',
      europe: '欧洲',
      oceania: '大洋洲',
      north_and_central_america: '中北美洲',
      south_america: '南美洲',
      africa: '非洲',
      atlantis: '亚特兰蒂斯',
      forest_europe: '欧洲森林保护部长级会议',
    },
  },
  countryMessageBoard: {
    messageBoard: '留言板',
    messageBoardDesc: '此处发布的消息对所有本国家/地区的成员可见',
    oneToOneMessages: '一对一消息',
  },
  tutorial: {
    watch: '观看',
    passwordLogin: '全球森林资源评估平台用户教程 - 如何使用自定义密码登录',
    googleLogin: '全球森林资源评估平台用户教程 - 如何使用Google邮箱验证登录',
    collaboratorAdd: '全球森林资源评估平台用户教程 - 如何添加合作者',
    platformNavigation: '全球森林资源评估平台用户教程 - 平台导航',
    documentUpload: '全球森林资源评估平台用户教程 - 如何上传文档',
    ndpAdd: '全球森林资源评估平台用户教程 - 如何添加国家数据点',
    passwordLoginShort: '如何使用自定义密码登录',
    googleLoginShort: '如何使用Google邮箱验证登录',
    guidelinesAndSpecifications: '准则和规范',
    ndpAddReferenceLink: '全球森林资源评估平台用户教程 - 如何为国家数据点添加参考链接',
    nationalDataAddReferenceLink: '全球森林资源评估平台用户教程 - 如何为国家数据添加参考链接',
  },
};
