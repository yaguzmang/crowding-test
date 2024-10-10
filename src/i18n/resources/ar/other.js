module.exports = {
  fileDrop: {
    dropFilesHere: 'ضع الملف هنا',
    dragAndDropOrClick: 'اسحب و ضع الملفات هنا, او اضغط لاختيار الملف ',
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
      'إخلاء مسؤولية: قد يحتوي على قيم تقديرية خاصة بمنظمة الأغذية والزراعة، وتكون تغيب عنه بعض القيم',
    part1: 'أنتج هذا الموقع الإلكتروني بمساعدة من',
    europeanUnion: 'الاتحاد الأوروبي',
    part2: ', الـ ',
    govFinland: 'حكومة الفنلندية',
    part3: ', الـ ',
    govNorway: 'حكومة النرويجية',
    part4: ' و ',
    gef: 'مرفق البيئة العالمية',
    part5:
      'يقع محتواه ضمن المسؤولية الحصرية لمنظمة الأغذية والزراعة، ولا يمكن بأي شكل من الأشكال اعتبار أنه يعكس آراء الاتحاد الأوروبي والحكومة الفنلندية والحكومة النرويجية ومرفق البيئة العالمية.',
    termsOfUse: 'شروط استخدام قواعد البيانات الإحصائية',
  },
  home: {
    keyFindings: `يبلغ إجمالي مساحة الغابات في العالم 4,06 مليار هكتار (هـ)، 
أي أنها تشكل 31 في المائة من إجمالي مساحة اليابسة. 
وهذه المساحة تكافئ 0,52 هـ للشخص، إلا أن توزع الغابات يفتقر إلى التجانس بين سكان العالم أو من الناحية الجغرافية، 
حيث تبقى المنطقة الاستوائية هي المستحوذة على النسبة الأكبر من غابات العالم (45 في المائة)، 
لتأتي من بعدها الغابات الشمالية، فالمناطق المعتدلة، وشبه الاستوائية.`,
  },
  footer: {
    contactUs: 'تواصل معنا',
    termsAndConditions: 'الأحكام والشروط',
    scamAlert: 'تبليغ عن احتيال',
    reportMisconduct: 'تبليغ عن سوء تصرف',
    tutorials: 'الفيديو',
    sendFeedback: 'أرسل رأيك',
    licenses: 'التراخيص',
    platformVersion: 'إصدار المنصة',
  },
  unit: {
    haThousand: '1000 هـ',
    ha: 'هـ',
    kmSq: 'كم²',
    mileSq: 'ميل²',
    acre1000: '1000 فدان',
    acre: 'فدان',
    haMillion: 'مليون هكتار',
    haThousandPerYear: '1000 هكتار/السنة',
    tonnesPerHa: 'طن/هـ',
    cubicMeterPerHa: 'م³/هـ',
    millionTonnes: 'مليون طن متري',
    millionsCubicMeterOverBark: 'مليون م³ مع اللحاء',
    thousandCubicMeterOverBark: '1000 م³ مع اللحاء',
    billionCubicMeter: 'مليار م³',
    thousandCubicMeter: '1000 م³',
    thousandCubicMeterRWE: '1000 م³ مكافئ أخشاب مستديرة',
    thousandPersons: '1000 شخص',
    gt: 'جيجاطن',
    fte1000: '1000 مكافئ الدوام الكامل',
    numberOfStudents: '$t(graduationOfStudents.numberOfStudents)',
    absoluteNumber: 'العدد المطلق',
    annualNumberOfVisitsMillion: 'عدد الزيارات السنوية (مليون)',
    millionNationalCurrency: 'مليون وفق العملة المحلية',
    facilityLengthIn1000Km: 'المرفق (الطول بآلاف الكيلومترات)',
    growingStockPercent: '٪ من إجمالي مخزون الأشجار الحيّة في الغابات',
  },
  countrySelection: {
    selectCountry: 'اختر بلداً',
  },
  definition: {
    definitionLabel: 'انظر التعاريف',
    faqLabel: 'أسئلة متكررة',
    seeReportingNotes: false,
  },
  audit: {
    notStarted: 'لم يبدأ',
    edited: 'منقح',
  },
  yesNoTextSelect: {
    yes: 'نعم',
    no: 'لا',
    notSelected: false,
  },
  user: {
    roles: {
      REVIEWER: 'مُراجع',
      NATIONAL_CORRESPONDENT: 'مراسل وطني',
      ALTERNATE_NATIONAL_CORRESPONDENT: 'مراسل وطني بديل',
      COLLABORATOR: 'متعاون',
      ADMINISTRATOR: 'مدير',
      VIEWER: 'مشاهد',
      noRole: false,
      // unused?
      reviewer_plural: 'المراجعين',
      nationalCorrespondent_plural: 'المراسلون الوطنيون',
      alternateNationalCorrespondent_plural: 'المراسلون الوطنيون المناوبون',
      collaborator_plural: 'المتعاونين',
      // deprecated
      // reviewer: 'Reviewer',
      // nationalCorrespondent: 'National correspondent',
      // alternateNationalCorrespondent: 'Alternate national correspondent',
      // collaborator: 'Collaborator',
      // administrator: 'Administrator',
    },
    resetPasswordEmail: {
      subject: 'منصة تقييم الموارد الحرجية، إعادة ضبط كلمة المرور',
      textMessage: `عزيزي {{user}}

تلقينا طلباً بإعادة ضبط كلمة المرور إلى حساب تقييم الموارد الحرجية الخاص بك. إذا لم تقدم هذا الطلب يمكنك تجاهل هذه الرسالة بأمان.
انقر على الرابط التالي لإعادة ضبط كلمة المرور{{- link}}

Click the following link to reset your password
{{- link}}


شكراً
فريق تقييم الموارد الحرجية fra@fao.org
{{- url}}`,
      htmlMessage: `عزيزي {{user}}
<br/><br/>
تلقينا طلباً بإعادة ضبط كلمة المرور إلى حساب تقييم الموارد الحرجية الخاص بك. 
<br/>
إن لم تقدم هذا الطلب، يمكنك تجاهل هذه الرسالة بأمان.
<br/><br/><br/>
<a href="{{link}}" style="text-decoration: none; background-color: #0098a6;border: 2px solid #00988F;color: white;font-size: 14px;font-weight: 700;    padding: 10px 50px;">Click here to reset your password</a>
<br/><br/><br/>
Thanks,
<br/>
فريق تقييم الموارد الحرجية fra@fao.org
<br/>
{{- url}}
      `,
    },
  },
  fraClass: {
    forest: 'الغابة',
    otherWoodedLand: 'أرض حرجية أخرى',
    otherLand: 'أرض أخرى',
  },
  fraForestCharacteristicsClass: {
    naturallyRegeneratingForest: 'غابة متجددة طبيعياً',
    plantationForest: 'الغابات الاصطناعية (مشجرة)',
    ofWhichIntroduced: '... الأنواع المدخلة منها',
    ofWhichPrimaryForest: false,
    otherPlantedForest: 'غابة مزروعة أخرى',
    totalForest: 'إجمالي مساحة الغابة',
  },
  fraOtherLandClass: {
    palms: 'منها النخيل (زيت، جوز الهند، تمر، إلخ)',
    treeOrchards: '... منها بساتين أشجار (بما فيها الفاكهة والمكسرات والزيتون، إلخ)',
    agroforestry: '... منها زراعة حرجية',
    treesUrbanSettings: '...منها أشجار في بيئة حضرية',
  },
  messageBoard: {
    messageBoard: false,
  },
  userChat: {
    chatHeader: 'رسائل مع {{user}}',
    noMessages: 'لاتوجد رسائل',
    writeMessage: 'اكتب رسالة',
    send: 'إرسال',
    cancel: 'إلغاء',
    notificationEmail: {
      subject: '{{sender}} أرسل لك رسالة حول {{country}}',
      textMessage: `عزيزي {{recipient}},

{{sender}} أرسل لك رسالة حول {{country}}.

ادخل إلى المنصة من خلال عنوان الموقع التالي لمشاهدتها والإجابة عنها:
{{- link}}

فريق تقييم الموارد الحرجية
{{- url}}
    `,
      htmlMessage: `عزيزي {{recipient}},
<br/><br/>
{{sender}} أرسل لك رسالة حول {{country}}.
<br/><br/>
<b><a href="{{- link}}">ادخل إلى المنصة من خلال عنوان الموقع التالي لمشاهدتها والإجابة عنها.</a></b>
<br/><br/>
The FRA team
<br/>
{{- url}}
    `,
    },
  },
  // error messages
  error: {
    access: {
      countryRoleNotSpecified: 'خطأ : المستخدم {{user}} حاول الدخول إلى {{countryIso}} لكن لم يتم تحديد دوره',
      countryUserNotReviewer: 'خطأ: المستخدم {{user}} حاول الدخول إلى {{countryIso}} وهو ليس مراجعاً فيه',
      userNotAdministrator: 'خطأ: حاول المستخدم {{المستخدم}} الوصول إلى مورد متاح فقط للمسؤولين',
      roleChangeNotAllowed:
        'خطأ: المستخدم {{user}} المستخدم حاول تحديد دور آخر إضافة إلى  {{role}} وهو غير مسموح للشخص المسجل للدخول',
      userAlreadyAddedToCountry: 'خطأ: تمت إضافة المستخدم {{المستخدم}} بالفعل إلى البلد {{البلد}}',
      invitationAlreadyUsed:
        'خطأ: الدعوة {{invitationUuid}} استخدمت مسبقا، وإن قرصنة البريد الإلكتروني {{loginEmail}} ممنوعة!',
      countryDoesNotMatch: 'خطأ: البلد {{countyryIso}} غير مطابق',
      assessmentEditingNotAllowed:
        'خطأ: المستخدم {{user}} المضطلع بدور {{role}} لا يمكنه تعديل تقييم حالة {{assessmentStatus}} البلد {{countryIso}}',
      assessmentCommentingNotAllowed:
        'خطأ: المستخدم {{user}} المضطلع بدور {{role}} لا يمكنه كتابة تقييم عن حالة {{assessmentStatus}} البلد {{countryIso}}',
    },
    assessment: {
      transitionNotAllowed: 'خطأ: التحول من حالة {{currentStatus}} إلى {{status}} غير مسموح لهذا الدور {{role}}',
      deskStudyNotAllowed: 'خطأ: المديرون فقط هم من يحق لهم تغيير حالة الدراسة المكتبية',
    },
    review: {
      commentDeleteNotOwner: 'خطأ: المستخدم {{user}} حاول حذف تعليق ليس له',
      commentEnterResolvedIssue: 'خطأ: المستخدم {{user}} حاول إدخال تعليق حول مسألة تم حلها',
    },
    ndp: {
      previousNdpNotFound: 'عاجز عن إيجاد أية نقطة بيانات وطنية قبل عام {{year}}',
    },
  },
  // components

  countryListing: {
    annuallyUpdated: 'محدّث سنوياً',
    fra2020: 'تقييم الموارد الحرجية 2020',
  },
  navigation: {
    hideAll: 'إخفاء الكل',
    showAll: 'إظهار الكل',
    support: {
      dontDelete: 'معلومات خاصة بالنظام يرجى عدم إزالتها',
      feedbackEmailSubject: 'آراء حول منصة تقييم الموارد الحرجية',
      platformVersion: 'إصدار المنصة',
      userAgent: 'وكيل المستخدم',
      user: 'المستخدم',
      manageCollaborators: 'إدارة المتعاونين',
    },
    sectionHeaders: {
      introduction: 'مدخل',
      forestExtentCharacteristicsAndChanges: 'نطاق الغابات ومواصفاتها والتغيرات التي تطرأ عليها',
      forestGrowingStockBiomassAndCarbon: 'مخزون الأشجار الحية والكتلة الحيوية والكربون في الغابة',
      forestDesignationAndManagement: 'تسمية الغابة وإدارتها',
      forestOwnershipAndManagementRights: 'حقوق ملكية الغابات وإدارتها',
      forestDisturbances: 'اضطرابات الغابات',
      forestPolicyAndLegislation: 'السياسات والتشريعات الخاصة بالغابات',
      employmentEducationAndNwfp: 'التوظيف والتعليم ومنتجات حرجية غير خشبية',
      sustainableDevelopment: 'الهدف الخامس عشر من أهداف التنمية المستدامة',
      panEuropeanIndicators: 'مؤشرات عموم أوروبا',
    },
    cancel: 'إلغاء',
    changeStatusTextPlaceholder: 'إضافة رسالة اختيارية',
    doNotNotifyUsers: 'عدم إرسال إشعار إلى المستخدمين',
    notifySelf: 'إرسال نسخة الي البريد الالكتروني الخاص بك',
  },
  header: {
    editProfile: 'تعديل معلومات الملف الشخصي',
    logout: 'تسجيل خروج',
    hideSidebar: 'إخفاء العمود الجانبي',
    showSidebar: 'إظهار العمود الجانبي',
    autoSave: {
      saving: 'حفظ...',
      complete: 'تم حفظ جميع التغييرات',
      lastSaveTimestampReceived: 'آخر تعديل ',
    },
  },
  time: {
    hour: '{{count}} قبل ساعة',
    hour_plural: 'قبل {{عدد}} ساعات',
    day: '{{count}} قبل يوم',
    day_plural: 'قبل {{عدد}} ايام',
    week: '{{count}} قبل أسبوع',
    week_plural: 'قبل {{عدد}} أسابيع',
    aMomentAgo: 'قبل لحظة',
  },
  review: {
    comments: 'تعليقات',
    noComments: 'لاتوجد تعليقات',
    loading: 'تحميل',
    resolve: 'حل',
    confirmDelete: 'هل تود حذف هذا التعليق؟ لايمكن الرجوع عن هذه الخطوة.',
    commentDeleted: 'تم حذف التعليق',
    commentMarkedAsResolved: 'وُسمت بأنه تم حلها',
    delete: 'إلغاء',
    writeComment: 'كتابة تعليق...',
    commentingClosed: 'إغلاق التعليقات',
    cancel: 'إلغاء',
  },
  description: {
    edit: 'تعديل',
    done: 'تم',
    loading: 'تحميل المحتوى...',
    description: 'وصف',
    dataSourcesTitle: 'مصادر البيانات، والبيانات الأصلية والتصنيف الوطني، والتعاريف',
    generalCommentsTitle: 'تعليقات',
    dataSources: 'مصادر البيانات',
    dataSourcesPlus: 'مصادر البيانات + نمط مصدر البيانات، مثلاً الجرد الوطني للغابات، إلخ.',
    originalData: 'بيانات أصلية',
    nationalClassificationAndDefinitions: 'التصنيف والتعاريف الوطنية',
    nationalData: 'بيانات وطنية',
    analysisAndProcessing: 'تحليل البيانات الوطنية ومعالجتها',
    estimationAndForecasting: 'التوقعات والتنبؤات',
    reclassification: 'إعادة التصنيف بما يتوافق وفئات تقييم الموارد الحرجية لعام {{cycleName}}',
  },
  nationalDataPoint: {
    clickOnNDP: 'انقر على العام للدخول إلى البيانات الأصلية',
    nationalDataPoint: 'نقطة البيانات الوطنية',
    addNationalDataPoint: 'أضف نقطة بيانات وطنية',
    noNationalDataAdded: 'لم تتم إضافة نقطة بيانات وطنية',
    nationalData: 'بيانات وطنية',
    reclassificationLabel: 'بيانات أصلية وإعادة التصنيف',
    forestCategoriesLabel: 'غابة، أرض حرجية أخرى، أرض أخرى',
    forestCategoriesLabel2025: 'الغابات والأراضي الحرجية الأخرى والأراضي المتبقية',
    referenceYearData: 'العام المرجعي للبيانات',
    referenceYear: 'العام المرجعي',
    references: 'المراجع',
    prefill: false,
    prefillWith: false,
    selectYear: 'اختر...',
    methods: 'الأساليب',
    methodsUsed: 'الأساليب المستخدمة',
    dataSource: 'مصدر البيانات',
    dataSources: 'مصادر البيانات',
    dataSource2025ExplanatoryText: false,
    additionalComments: 'تعليقات إضافية',
    edit: 'تعديل',
    confirmCopyPreviousValues: false,
    copyPreviousValues: 'نسخ المراجع السابقة',
    nationalClassifications: 'التصنيفات الوطنية',
    nationalClass: 'شريحة وطنية',
    nationalClasses: 'شرائح وتعاريف',
    definition: 'تعريف',
    categories: 'فئات',
    class: 'شريحة',
    fraClasses: 'شرائح تقييم الموارد الحرجية',
    area: 'المساحة (١٠٠٠  هكتار)',
    total: 'الإجمالي الكلي',
    modifiedExplanation: 'نقطة البيانات الوطنية مع التعديلات',
    confirmDelete: 'هل تود حذف نقطة البيانات هذه؟ لايمكن الرجوع عن هذه الخطوة.',
    discardChanges: 'إهمال التغييرات',
    doneEditing: 'التعديلات تمت',
    enterOrCopyPasteNationalClasses: 'إدخال أو نسخ ولصق الشرائح الوطنية',
    forestCharacteristics: 'مواصفات الغابة',
    otherLandCharacteristics: 'أرض أخرى ذات غطاء شجري',
    plantationForest: 'الغابات الاصطناعية (مشجرة)',
    remindDirtyOdp: 'تم تحديث نقطة البيانات الوطنية، تذكر تحديث القيم',
    disabled: 'معطّل، يمكنك التفعيل في الجدول 1ب',
    dataSourceMethodsOptions: {
      nationalForestInventory: 'الجرد الوطني للغابات',
      sampleBasedRemoteSensingAssessment: 'تقييم الاستشعار عن بعد استناداً إلى العينة',
      fullCoverMaps: 'خرائط الغطاء الكلي للغابات/النباتات',
      registersQuestionnaires: 'سجلات/استبيانات',
      other: '$t(common.otherSpecifyInComments)',
    },
    appliesToVariablesOptions: {
      forest: 'الغابة',
      otherWoodedLand: 'أرض حرجية أخرى',
      otherLand: 'أرض أخرى',
    },
    fileAddedWillBecomePublic: ' سيصبح الملف الذي تمت إضافته كمرجع , متاح للوصول إليها بشكل عام من جميع المستخدمين',
  },
  userManagement: {
    addUser: 'إضافة متعاون',
    allUsers: 'جميع المتعاونين',
    confirmDelete: 'إزالة {{user}}?',
    done: 'تم',
    edit: 'تعديل',
    editPermissions: 'تحرير الأذونات',
    formErrors: 'ثمة أخطاء في الاستمارة. يرجى تصحيحها وتقديمها مجدداً.',
    info: 'معلومات',
    insufficientPrivileges: 'امتيازات غير كافية',
    invitationDeleted: 'تم حذف الدعوة',
    invitationEmailSent: 'تم إرسال بريد إلكتروني للدعوة',
    invitationLink: 'رابط الدعوة',
    invitationLinkCopied: false,
    inviteAgain: 'دعوة مرة أخرى',
    loginEmail: 'تسجيل دخول',
    manageCollaborators: 'إدارة المتعاونين',
    noUsers: 'لم تتم إضافة متعاونين آخرين',
    permissions: 'أذونات',
    personalInfoRequired: 'يرجى استكمال معلوماتك الشخصية قبل المتابعة',
    placeholder: 'اختيار...',
    remove: 'إزالة',
    sendInvitation: 'إرسال دعوة عبر البريد الإلكتروني',
    userAdded: 'تمت إضافة {{البريد الالكتروني}}',
    userModified: 'تم تعديل {{المستخدم}}',
    invitationEmail: {
      subject: 'دعوة خاصة بمنصة تقييم الموارد الحرجية',
      textMessage: `عزيزي {{invitedUser}},

تمت دعوتك للدخول إلى منصة تقييم الموارد الحرجية{{role}} عن {{country}}.

بإمكانك قبول الدعوة والدخول إلى المنصة من خلال عنوان الموقع الإلكتروني التالي: 
{{- link}}

وقتاً سعيداً في إعداد التقارير!

فريق تقييم الموارد الحرجية fra@fao.org
{{- url}}
    `,
      htmlMessage: `عزيزي {{invitedUser}},
<br/><br/>
تمت دعوتك للدخول إلى منصة تقييم الموارد الحرجية بصفتك {{role}} عن {{country}}.
<br/><br/>
<b><a href="{{- link}}">اقبل هذه الدعوة وادخل إلى المنصة</a></b>
<br/><br/>
وقتاً سعيداً في إعداد التقارير!
<br/><br/>
فريق تقييم الموارد الحرجية fra@fao.org
<br/>
{{- url}}
    `,
    },
    permissionNames: {
      tableData: 'بيانات الجدول',
      descriptions: 'التفصيل',
    },
  },
  // FRA 2020 questionare
  // Object name and title should have always the same name

  contactPersons: {
    all: '$t(common.all)',
    reportPreparationAndContactPersons: 'إعداد التقارير ومسؤولي التواصل',
    contactPersons: 'مدخل',
    contactPersonsSupport: 'أعد التقرير الحالي من قبل الأشخاص التالية أسماؤهم',
    introductoryText: 'نص استهلالي',
    introductoryTextSupport: 'ضع نصاً استهلالياً ضمن محتوى هذا التقرير',
    firstName: 'الاسم',
    lastName: 'النسب',
    institution: 'المؤسسة/العنوان',
    email: 'البريد الإلكتروني',
    tables: 'جداول',
    none: 'ولا واحد',
  },
  extentOfForest: {
    extentOfForest: 'نطاق الغابة والأرض الحرجية الأخرى',
    estimationAndForecasting: 'التوقعات والتنبؤات',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    forestArea: 'الغابة',
    chart: {
      placeholderLine1: 'للبدء، قم بإضافة نقاط بيانات وطنية جديدة واستخدمها',
      placeholderLine2: 'لإيجاد القيم الخاصة بتقييم الموارد الحرجية آلياً',
    },
    otherLandCategories: 'فئات أراض أخرى',
    ofWhichPalms: 'منها النخيل (زيت، جوز الهند، تمر، إلخ)',
    ofWhichTreeOrchards: '... منها بساتين أشجار مختلفة (بما فيها الفاكهة والمكسرات والزيتون، إلخ)',
    ofWhichAgroforestry: '... منها زراعة حرجية',
    ofWhichTreesUrbanSettings: '...منها أشجار في بيئة حضرية',
    totalLandArea: 'إجمالي مساحة الأرض',
    fedAreasExceedTotalLandArea: 'مساحة الغابة والأرض الحرجية الأخرى تتجاوز إجمالي مساحة الأرض',
    forestAreaDoesNotMatchPreviouslyReported:
      'مساحة الغابة لا تتوافق مع مساحة تقييم الموارد الحرجية لعام {{year}}: {{previous}}',
    forestAreaNetChangeDoesNotMatch: 'التغيير الصافي لمساحة الغابة لا يطابق القيمة المتوقعة: {{القيمه}}',
    useOriginalDataPoints: 'استخدم نقاط البيانات الوطنية',
    dontUseOriginalDataPoints: 'لاتستخدم نقاط البيانات الوطنية',
    whatIsThis: 'ما هذا؟',
    tableNoticeMessage:
      'استخدم الرقم المتعلق بمساحة الأرض المستمد من قاعدة البيانات الإحصائية الموضوعية في منظمة الأغذية والزراعة لعام 2015 لكافة السنوات المرجعية',
    ndpMissingValues: 'هنالك قيم مفقودة في نقطة البيانات الوطنية',
    showNDPs: 'إظهار نقاط البيانات الوطنية',
    hideNDPs: 'إخفاء نقاط البيانات الوطنية',
  },
  climaticDomain: {
    climaticDomain: 'النطاق المناخي',
    percentOfForestArea2015: '% من مساحة الغابة عام 2015',
    percentOfForestArea2015Override: 'تجاهل القيمة',
    selectDefault: 'افتراضي',
    boreal: 'شمالية',
    temperate: 'معتدلة',
    subtropical: 'دون استوائية',
    sub_tropical: '$t(climaticDomain.subtropical)',
    tropical: 'استوائية',
  },
  forestCharacteristics: {
    forestCharacteristics: 'مواصفات الغابة',
    estimationAndForecasting: 'التوقعات والتنبؤات',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    naturalForestArea: 'غابة متجددة طبيعياً',
    plantationForestArea: 'الغابات الاصطناعية (مشجرة)',
    plantationForestIntroducedArea: '... منها الأنواع الدخيلة',
    otherPlantedForestArea: 'غابة مزروعة أخرى',
    plantedForest: 'الغابات المزروعة',
    totalForestArea: 'إجمالي مساحة الغابة',
    total: 'الإجمالي الكلي',
    useOriginalDataPoints: 'استخدم نقاط البيانات الوطنية',
    dontUseOriginalDataPoints: 'لاتستخدم نقاط البيانات الوطنية',
  },
  tableWithOdp: {
    confirmGenerateFraValues: 'هل تود تجاهل القيم الموجودة؟',
    generateFraValues: 'أوجد قيماً',
    generatingFraValues: 'جارٍ الإنشاء ...',
    linearExtrapolation: 'خطي',
    repeatLastExtrapolation: 'كرر الأخير',
    annualChangeExtrapolation: 'تغيير سنوي',
    placeholderFuture: 'في المستقبل',
    placeholderPast: 'في الماضي',
    copyToClipboard: 'انسخ القيم',
    placeholderSelect: 'التوقعات والتنبؤات',
    _1000haYear: '1000 هـ/العام',
  },
  forestAreaChange: {
    forestAreaChange: 'اتساع مساحة الغابة، وإزالة الغابة، وصافي التغيير سنوياً.',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (1000 هـ)',
    forestExpansion: 'اتساع مساحة الغابة',
    ofWhichAfforestation: '...منها تحريج',
    ofWhichNaturalExpansion: '...منها اتساع طبيعي',
    deforestation: 'إزالة الغابة',
    forestAreaNetChange: 'صافي التغيير في مساحة الغابة',
    forestAreaNetChangeFrom1a: 'تم حساب تغيير مساحة الغابات من الجدول 1أ',
    netChangeDoesNotMatch: 'غير مطابق لصافي التغيير في مساحة الغابة',
  },
  annualReforestation: {
    annualReforestation: 'إعادة التحريج السنوي',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (1000 هـ)',
    reforestation: 'إعادة التحريج',
  },
  specificForestCategories: {
    specificForestCategories: 'فئات الغابات البكر والغابات الخاصة',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (١٠٠٠  هكتار)',
    bamboo: 'خيزران',
    mangroves: 'منغروف',
    temporarilyUnstocked: 'غابة أزيلت أشجارها مؤقتاً أو أعيد تجديدها مؤخراً أو كليهما',
    primaryForest: 'غابة بكر',
    exceedsNaturallyRegeneratingForest: 'تتجاوز الغابة المتجددة طبيعياً (1ب)',
    rubberWood: 'خشب المطاط',
  },
  otherLandWithTreeCover: {
    otherLandWithTreeCover: 'أرض أخرى ذات غطاء شجري',
    areaUnitLabel: 'المساحة (١٠٠٠  هكتار)',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    palms: 'نخيل',
    treeorchards: 'بساتين أشجار',
    agroforestry: 'زراعة حرجية',
    treesinurbansettings: 'الأشجار في بيئات حضرية',
    total: 'الإجمالي الكلي',
    otherLandArea: 'مساحة أرض أخرى',
    other: '$t(common.otherSpecifyInComments)',
  },
  growingStock: {
    growingStock: 'مخزون الأشجار الحية',
    supportText: 'يرجى التأكد من إدخالك للبيانات في الجدولين 1أ و1ب قبل تعديل هذا الجدول',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    avgTableHeader: 'مخزون الأشجار الحية م3/هـ (مع اللحاء)',
    totalTableHeader: 'إجمالي مخزون الأشجار الحية (مليون م3 مع اللحاء)',
    naturallyRegeneratingForest: 'غابة متجددة طبيعياً',
    plantedForest: 'الغابات المزروعة',
    plantationForest: '...منها غابة اصطناعيه',
    otherPlantedForest: '...منها غابة مزروعة أخرى',
    forest: 'الغابة',
    otherWoodedLand: 'أرض حرجية أخرى',
    copyToClipboard: 'انسخ القيم',
  },
  growingStockComposition: {
    native: 'أصلية',
    introduced: 'مدخلة',
    growingStockComposition: 'تركيبة مخزون الأشجار الحية',
    forestGrowingStockComposition: 'تكوين مخزون الأشجار الحيّة بالغابات',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    nativeTreeSpecies: 'أنواع أشجار أصلية',
    introducedTreeSpecies: 'أنواع أشجار مدخلة',
    areaUnitLabel: 'مخزون الأشجار الحية في الغابة (مليون م3 مع اللحاء)',
    scientificName: 'الاسم العلمي',
    millionCubicMeter: false,
    commonName: 'الاسم الشائع',
    rank: '#{{idx}} مصنفة من حيث الحجم',
    remainingNative: 'أنواع الأشجار الأصلية المتبقية',
    remainingIntroduced: 'أنواع الأشجار المدخلة المتبقية',
    totalNative: 'إجمالي حجم أنواع الأشجار الأصلية',
    totalIntroduced: 'إجمالي حجم أنواع الأشجار المدخلة',
    totalGrowingStock: 'إجمالي مخزون الأشجار الحيّة',
    rankingYear: 'عام التصنيف 2015',
    growingStockPercent: false,
    mostRecentYear: false,
  },
  biomassStock: {
    biomassStock: 'مخزون الكتلة الحيوية',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    tableHeader: 'الكتلة الحيوية الحرجية (طن/هـ)',
    aboveGround: 'الكتلة الحيوية فوق الأرض',
    belowGround: 'الكتلة الحيوية تحت الأرض',
    deadWood: 'خشب ميت',
    downloadExcel: 'تنزيل حاسبة إكسل',
  },
  carbonStock: {
    carbonStock: 'مخزون الكربون',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    tableHeader: 'الكربون الحرجي (طن/هـ)',
    carbonAboveGroundBiomass: 'الكربون في الكتلة الحيوية فوق الأرض',
    carbonBelowGroundBiomass: 'الكربون في الكتلة الحيوية تحت الأرض',
    carbonDeadwood: 'الكربون في الخشب الميت',
    carbonLitter: 'الكربون في المهاد',
    carbonSoil: 'كربون التربة',
    soilDepthHeading: 'عمق التربة (سم) المستخدم في تقدير كربون التربة',
  },
  designatedManagementObjective: {
    designatedManagementObjective: 'الهدف المحدد للإدارة',
    primaryDesignatedManagementObjective: 'الهدف الرئيسي المحدد للإدارة',
    primaryDesignatedManagementObjectiveSupport:
      'إن الهدف الرئيس المحدد لإدارة الغابة هو ذو أهمية أكبر بكثير قياساً بسائر الأهداف الأخرى. وتعد الأهداف الرئيسة المختلفة للإدارة *حصرية* بمعنى أن المناطق التي تخضع لهدف رئيس للإدارة لا يجب إدراجها في التقارير بغرض إخضاعها لأهداف رئيسة أخرى للإدارة. في حين يضاف إلى الغابة مجموع الأهداف المختلفة للإدارة.  ',
    totalAreaWithDesignatedManagementObjective: 'إجمالي المساحة الخاضعة لهدف إدارة محدد',
    totalAreaWithDesignatedManagementObjectiveSupport:
      'الهدف المحدد للإدارة، بغض النظر أكان الهدف رئيساً أم لا. فالفئات المحددة المختلفة للإدارة هي فئات *غير حصرية*، ما يعطي إمكانية إدراج المناطق في التقارير أكثر من مرة. فعلى سبيل المثال بالنسبة لمنطقة الغابة التي اعتبرت في التقارير أنها خاضعة لهدف إدارة رئيس متمثل في "استخدام متعدد" يجب إدراجها في التقارير عند كل هدف من أهداف الإدارة. ما قد يفضي بالتالي إلى أن مجموع الأهداف المختلفة للإدارة سيتجاوز إجمالي منطقة الغابة.',
    categoryHeader: 'فئات تقييم الموارد الحرجية 2020',
    areaUnitLabel: 'مساحة الغابة (1000 هـ)',
    production: 'الإنتاج',
    soilWaterProtection: 'حماية التربة والمياه',
    biodiversityConservation: 'حفظ التنوع الحيوي',
    socialServices: 'خدمات اجتماعية',
    multipleUse: 'متعدد الاستخدام',
    other: '$t(common.otherSpecifyInComments)',
    unknown: 'لا يوجد/مجهول',
    totalForestArea: 'إجمالي مساحة الغابة',
    total: 'الإجمالي الكلي',
  },
  forestAreaWithinProtectedAreas: {
    forestAreaWithinProtectedAreas: 'مساحة الغابة ضمن المناطق المحمية ومساحة الغابة الخاضعة لخطط إدارة طويلة الأجل',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (١٠٠٠  هكتار)',
    header: 'مساحة الغابة ضمن المناطق المحمية',
    forestAreaWithLongTermManagementPlan: 'مساحة الغابة الخاضعة لخطة إدارة طويلة الأجل للغابة',
    ofWhichInProtectedAreas: '...منها في مناطق محمية',
  },
  forestOwnership: {
    forestOwnership: 'ملكية الغابة',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'مساحة الغابة (1000 هـ)',
    privateOwnership: 'ملكية خاصة',
    ofWhichIndividuals: 'منها خاضع لملكية الأفراد',
    ofWhichPrivateBusinesses: '...منها خاضع لملكية كيانات ومؤسسات أعمال خاصة',
    ofWhichCommunities: '...منها خاضع لملكية مجتمعات محلية وقبلية وأصلية',
    publicOwnership: 'ملكية عامة',
    otherOrUnknown: 'مجهولة/غير ذلك (حددها في التعليقات)',
    totalForestArea: 'إجمالي مساحة الغابة',
    total: 'الإجمالي الكلي',
  },
  holderOfManagementRights: {
    holderOfManagementRights: 'صاحب حقوق إدارة الغابات العامة',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'مساحة الغابة (1000 هـ)',
    publicAdministration: 'إدارة عامة',
    individuals: 'أفراد',
    privateBusinesses: 'كيانات ومؤسسات أعمال تابعة للقطاع الخاص',
    communities: 'مجتمعات محلية وقبلية وأصلية',
    other: 'مجهولة/غير ذلك (حددها في التعليقات)',
    totalPublicOwnership: 'إجمالي الملكية العامة',
    total: 'الإجمالي الكلي',
    publicOwnershipDoesNotMatch: 'غير مطابق لإجمالي الملكية العامة',
  },
  disturbances: {
    disturbances: 'اضطرابات',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (١٠٠٠  هكتار)',
    insects: 'حشرات',
    diseases: 'أمراض',
    severeWeatherEvents: 'الظواهر الجوية القاسية',
    other: '$t(common.otherSpecifyInComments)',
    totalForestArea: 'إجمالي مساحة الغابة',
    total: 'الإجمالي الكلي',
  },
  areaAffectedByFire: {
    areaAffectedByFire: 'المساحة المتضررة بالحرائق',
    categoryHeader: 'فئات تقييم الموارد الحرجية',
    areaUnitLabel: 'المساحة (١٠٠٠  هكتار)',
    totalLandAreaAffectedByFire: 'إجمالي مساحة الاراضي المتضررة بالحرائق',
    ofWhichForest: '...منها في الغابات',
  },
  degradedForest: {
    degradedForest: 'الغابة المتدهورة',
  },
  forestPolicy: {
    forestPolicy: 'السياسات والتشريع والمنصة الوطنية المطلوبة لمشاركة أصحاب الشأن في السياسة المتعلقة بالغابات',
    categoryHeader: 'أشر إلى وجود',
    areaUnitLabel: 'بوليني  (نعم/لا)',
    national: 'الوطني',
    subnational: 'دون وطني',
    policiesSFM: 'سياسات داعمة للإدارة المستدامة للغابات',
    legislationsSFM: 'التشريعات واللوائح الداعمة للإدارة المستدامة للغابات',
    stakeholderParticipation: 'المنصة التي تعزز أو تتيح مشاركة أصحاب الشأن في رسم سياسة الغابات',
    existenceOfTraceabilitySystem: 'نظام (نظم) تعقب المنتجات الخشبية',
  },
  areaOfPermanentForestEstate: {
    areaOfPermanentForestEstate: 'مساحة الأرض المخصصة للغابة بشكل دائم',
    categoryHeader: 'فئات تقييم الموارد الحرجية 2020',
    areaUnitLabel: 'مساحة الغابة (1000 هـ)',
    applicable: 'أقابل للتطبيق؟',
  },
  employment: {
    employment: 'التوظيف في الحراجة وقطع الأشجار',
    average: 'معدل ثلاث سنوات',
    categoryHeader: 'فئات تقييم الموارد الحرجية 2020',
    unitHeader: 'مكافئ العمل بدوام كامل (1000)',
    inForestry: 'التوظيف في الحراجة وقطع الأشجار',
    ofWhichSilviculture: '...منها أنشطة حرجية وغيرها من الأنشطة المرتبطة بالغابات',
    ofWhichLogging: '...منها قطع الأشجار',
    ofWhichGathering: '...منها جمع منتجات حرجية غير خشبية',
    ofWhichSupport: '...منها تقديم خدمات دعم الحراجة',
    total: 'الإجمالي الكلي',
    female: 'أنثى',
    male: 'ذكر',
  },
  graduationOfStudents: {
    graduationOfStudents: 'تخريج طلاب في ميدان التعليم المرتبط بالغابات',
    average: 'معدل ثلاث سنوات',
    numberOfStudents: 'عدد الطلاب الخريجين',
    fra2020Categories: 'فئات تقييم الموارد الحرجية 2020',
    doctoralDegree: 'درجة الدكتوراة',
    mastersDegree: 'درجةالماجستير',
    bachelorsDegree: 'درجة البكالوريوس',
    technicianCertificate: 'شهادة/دبلوم فني',
    total: 'الإجمالي الكلي',
    female: 'أنثى',
    male: 'ذكر',
  },
  nonWoodForestProductsRemovals: {
    nonWoodForestProductsRemovals: 'إزالة منتجات حرجية غير خشبية وقيمتها عام 2015',
    nameOfProduct: 'اسم المنتج الحرجي غير الخشبي',
    keySpecies: 'النوع الأساسي',
    quantity: 'الكمية',
    unit: 'الواحدة',
    value: 'القيمة (1000 عملة محلية)',
    category: 'فئة المنتج الحرجي غير الخشبي',
    plantProductsSelectHeading: 'منتجات نباتية/مادة أولية',
    food: '1 غذاء',
    fodder: '2 علف',
    rawMaterialForMedicine: '3 مادة أولية لمنتجات طبية وعطرية',
    rawMaterialForColorants: '4 مادة أولية تستخدم في الملونات والأصبغة',
    rawMaterialForUtensils: '5 مادة أولية تستخدم في صناعة أوانٍ يدوية ',
    ornamentalPlants: '6 نباتات زينة',
    exudates: '7 نضحات',
    otherPlantProducts: '8 منتجات نباتية أخرى',
    animalProductsSelectHeading: 'منتجات حيوانية/ مادة أولية',
    livingAnimals: '9 حيوانات حية',
    hidesSkins: '10 جلود الحيوانات ونصبها',
    wildHoney: '11 عسل بري وشمع النحل',
    wildMeat: '12 لحم بري',
    animalRawMaterialForMedicine: '13 مادة أولية للأدوية',
    animalRawMaterialForColorants: '14 مادة أولية للملونات',
    otherEdibleAnimalProducts: '15 منتجات حيوانية أخرى صالحة للأكل',
    otherNonEdibleAnimalProducts: '16 منتجات حيوانية أخرى غير صالحة للأكل',
    allOtherPlantProducts: 'جميع المنتجات النباتية الأخرى',
    allOtherAnimalProducts: 'جميع المنتجات الحيوانية الأخرى',
    total: 'الإجمالي الكلي',
    currency: 'اسم العملة',
    notSelected: false,
  },
  sustainableDevelopment: {
    sustainableDevelopment: 'الهدف الخامس عشر من أهداف التنمية المستدامة',
    indicator: 'المؤشر',
    percent: 'النسبة المئوية',
    nameOfAgencyResponsible: 'اسم الهيئة المسؤولة',
    sdgIndicator1: 'مؤشر هدف التنمية المستدامة 15-1-1 مساحة الغابة كنسبة من إجمالي مساحة الأرض عام 2015',
    sdgIndicator2: 'مؤشر هدف التنمية المستدامة 15-2-1 التقدم باتجاه الإدارة المستدامة للغابات',
    forestAreaProportionLandArea2015: 'مساحة الغابة كنسبة من إجمالي مساحة الأرض عام 2015',
    subIndicator: 'المؤشر الفرعي {{no}}',
    forestAreaAnnualNetChangeRate: 'المعدل السنوي لصافي التغيير في مساحة الغابة',
    aboveGroundBiomassStockForests: 'مخزون الكتلة الحيوية فوق الأرض في الغابة',
    percent2015ForestAreaBaseline: 'النسبة المئوية (بيانات خط المنطلق الخاصة بمساحة الغابة عام 2015)',
    proportionForestAreaLegallyEstablishedProtectedAreas: 'نسبة مساحة الغابة الموجودة ضمن مناطق محمية قانونياً',
    proportionForestAreaLongTermForestManagement: 'نسبة مساحة الغابة الخاضعة لخطة إدارة طويلة الأجل للغابة',
    forestArea1000Ha: 'مساحة الغابة (1000 هـ)',
    forestAreaVerifiedForestManagement: 'مساحة الغابة الخاضعة لخطط اعتماد إدارة الغابة المتحقق منها بشكل مستقل ',
  },
  panEuropeanIndicators: {
    panEuropeanIndicators: 'المؤشرات الكمية في عموم أوروبا للإدارة المستدامة للغابات',
    uploadQuestionnaire: 'حمّل الاستبيان',
    chooseFile: 'اختر ملفاً',
    downloadQuestionnaire: 'نزل الاستبيان',
    download: 'تنزيل',
    remove: 'إزالة',
    noQuestionnaire: 'لم يتم اختيار استبيان',
    panEuropeanQualitativeIndicators: 'المؤشرات الكمية في عموم أوروبا للإدارة المستدامة للغابات',
    accessReportingPage: 'ادخل إلى صفحة إعداد التقارير',
  },
  assessment: {
    fra: false,
    panEuropean: 'عموم أوروبا',
    deskStudy: 'دراسة مكتبية',
    statusChangeNotification: {
      subject: '{{country}} تغير الحالة الي {{status}} على منصة تقييم الموارد الحرجية.',
      textMessage: `عزيزي {{recipientName}},

{{changer}} غير الحالة الخاصه {{assessment}} إلى "{{status}}"بالنسبة لـ  {{country}} على منصة تقييم الموارد الحرجية.

{{message}}

قم بزيارة المنصة على: {{- serverUrl}}

فريق تقييم الموارد الحرجية
{{- serverUrl}}`,
      htmlMessage: `عزيزي {{recipientName}},
<br/><br/>
{{changer}} غير الحالة الخاصه {{assessment}} إلى "{{status}}"بالنسبة لـ {{country}} على منصة تقييم الموارد الحرجية.
<br/><br/>
{{message}}
<br/><br/>
<a href="{{- serverUrl}}"><b>لزيارة المنصة</b></a>
<br/><br/>
فريق تقييم الموارد الحرجية
<br/>
{{- serverUrl}}`,
    },
    status: {
      changing: {
        label: 'تغيير...',
      },
      notStarted: {
        label: 'لم يبدأ',
      },
      editing: {
        label: 'تعديل...',
        previous: 'العودة إلى تعديل',
      },
      review: {
        label: 'قيد المراجعة',
        next: 'أرسل إلى المراجعة',
        previous: 'العودة إلى المراجعة',
      },
      approval: {
        label: 'بانتظار الموافقة',
        next: 'أرسل للحصول على الموافقة',
        previous: 'العودة إلى الموافقة',
      },
      accepted: {
        label: 'مقبول',
        next: 'اقبل',
        previous: false,
      },
    },
  },
  multiSelect: {
    placeholder: 'اختيار...',
  },
  emoji: {
    picker: {
      search: 'ابحث',
      categories: {
        search: 'ابحث في النتائج',
        recent: 'مستخدم بشكل متكرر',
        people: 'أوجه ضاحكة وأشخاص',
        nature: 'حيوانات وطبيعة',
        foods: 'طعام وشراب',
        activity: 'نشاط',
        places: 'سفر وأماكن',
        objects: 'أشياء',
        symbols: 'رموز',
        flags: 'أعلام',
      },
    },
  },
  country: {
    region: {
      asia: 'آسيا',
      europe: 'أوروبا',
      oceania: 'أوقيانوسيا',
      north_and_central_america: 'أمريكا الشمالية والوسطى',
      south_america: 'أمريكا الجنوبية',
      africa: 'أفريقيا',
      atlantis: 'أطلانطس',
      forest_europe: 'المبادرة الأوروبية للغابات',
    },
  },
  countryMessageBoard: {
    messageBoard: 'لوح الرسائل',
    messageBoardDesc: 'يمكن لجميع الأعضاء القطريين مشاهدة الرسائل الموضوعة هنا ',
    oneToOneMessages: 'رسائل من شخص إلى شخص',
  },
  tutorial: {
    watch: 'المشاهدة',
    passwordLogin: 'البرنامج التعليمي لمنصة الفرا - كيفية تسجيل الدخول باستخدام كلمة مرور محددة ذاتيًا.',
    googleLogin: 'البرنامج التعليمي لمنصة الفرا - كيفية تسجيل الدخول باستخدام جوجل.',
    collaboratorAdd: 'البرنامج التعليمي لمنصة الفرا - كيفية إضافة شخص اخر للتعاون في ملئ التقارير',
    platformNavigation: 'البرنامج التعليمي لمنصة الفرا - استكشاف المنصة',
    documentUpload: 'البرنامج التعليمي لمنصة الفرا - كيفية رفع المستندات',
    ndpAdd: 'البرنامج التعليمي لمنصة الفرا - كيفية إضافة نقطة بيانات وطنية',
    passwordLoginShort: 'كيفية تسجيل الدخول باستخدام كلمة مرور محددة ذاتيًا',
    googleLoginShort: 'كيفية تسجيل الدخول باستخدام جوجل',
    guidelinesAndSpecifications: 'المبادئ التوجيهية والمواصفات',
    ndpAddReferenceLink: 'البرنامج التعليمي لمنصة الفرا - كيفية إضافة رابط مرجعي لنقطة البيانات الوطنية؟',
    nationalDataAddReferenceLink: 'البرنامج التعليمي لمنصة الفرا - كيفية إضافة رابط مرجعي للبيانات الوطنية؟',
  },
};
