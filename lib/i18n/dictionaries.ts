import { LocaleKey } from './config';

// Define types for the dictionary structure
export interface Dictionary {
  common: {
    appName: string;
    tagline: string;
    loading: string;
    error: string;
    success: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    create: string;
    submit: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    sort: string;
    download: string;
    upload: string;
    yes: string;
    no: string;
    confirm: string;
    actions: string;
    settings: string;
    help: string;
    logout: string;
    login: string;
    register: string;
    profile: string;
    dashboard: string;
    welcome: string;
    noData: string;
    required: string;
    optional: string;
    learnMore: string;
    open: string;
    viewAll: string;
  };
  auth: {
    email: string;
    password: string;
    forgotPassword: string;
    resetPassword: string;
    signIn: string;
    signUp: string;
    signOut: string;
    createAccount: string;
    alreadyHaveAccount: string;
    dontHaveAccount: string;
    rememberMe: string;
    firstName: string;
    lastName: string;
    companyName: string;
    phoneNumber: string;
    termsAndConditions: string;
    privacyPolicy: string;
    agreeToTerms: string;
  };
  navigation: {
    home: string;
    dashboard: string;
    applications: string;
    reports: string;
    settings: string;
    account: string;
    help: string;
    support: string;
    documentation: string;
    pricing: string;
    about: string;
  };
  dashboard: {
    title: string;
    summary: string;
    recentActivity: string;
    quickActions: string;
    alerts: string;
    upcomingChanges: string;
    costImpact: string;
    savingsOpportunities: string;
  };
  apps: {
    costCalculator: {
      title: string;
      description: string;
      problem: string;
      uploadData: string;
      calculateImpact: string;
      reports: string;
      beforeAfter: string;
      impactCharts: string;
      exportReports: string;
      purchaseOrders: string;
      landedCosts: string;
      tariffRates: string;
      additionalFees: string;
      totalImpact: string;
      costBreakdown: string;
      uploadInstructions: string;
      fileFormats: string;
      sampleFile: string;
      results: string;
      saveCalculation: string;
    };
    supplyChainPlanner: {
      title: string;
      description: string;
      problem: string;
      alternativeSuppliers: string;
      tariffComparison: string;
      logisticsAnalysis: string;
      supplierDatabase: string;
      countryRisk: string;
      leadTime: string;
      qualityRating: string;
      minimumOrder: string;
      contactSupplier: string;
      compareSuppliers: string;
      filterBy: string;
      sortBy: string;
      supplierDetails: string;
      verifiedSupplier: string;
      requestSample: string;
    };
    pricingOptimizer: {
      title: string;
      description: string;
      problem: string;
      scenarioModeling: string;
      absorb: string;
      passThrough: string;
      split: string;
      breakEvenAnalysis: string;
      marginProtection: string;
      communicationTemplates: string;
      competitiveBenchmarks: string;
      priceSensitivity: string;
      customerSegments: string;
      volumeDiscounts: string;
      profitMargin: string;
      revenueImpact: string;
      customerRetention: string;
      optimizedPrice: string;
      priceChange: string;
    };
    tariffTracker: {
      title: string;
      description: string;
      problem: string;
      announcements: string;
      warnings: string;
      historicalPatterns: string;
      actionAlerts: string;
      thirtyDays: string;
      sixtyDays: string;
      ninetyDays: string;
      ustrAnnouncements: string;
      productCategories: string;
      historicalTrends: string;
      recommendedActions: string;
      setAlerts: string;
      lastTimeScenario: string;
      upcomingChanges: string;
      potentialImpact: string;
      notificationSettings: string;
    };
    routeOptimizer: {
      title: string;
      description: string;
      problem: string;
      routingSuggestions: string;
      usmcaBenefits: string;
      dutyDrawback: string;
      customsDocumentation: string;
      multiCountryRouting: string;
      transitTime: string;
      totalCost: string;
      customsFees: string;
      shippingMethods: string;
      documentRequirements: string;
      optimizedRoute: string;
      alternativeRoutes: string;
      compareRoutes: string;
      generateDocuments: string;
    };
  };
  reports: {
    title: string;
    generateReport: string;
    downloadReport: string;
    shareReport: string;
    scheduleReport: string;
    reportTypes: string;
    costImpactReport: string;
    supplierAnalysisReport: string;
    pricingStrategyReport: string;
    tariffOutlookReport: string;
    shippingOptimizationReport: string;
    customReport: string;
    dateRange: string;
    filters: string;
    format: string;
    includeCharts: string;
    includeRawData: string;
    executiveSummary: string;
  };
  settings: {
    title: string;
    account: string;
    profile: string;
    billing: string;
    subscription: string;
    team: string;
    notifications: string;
    preferences: string;
    integrations: string;
    apiKeys: string;
    security: string;
    language: string;
    theme: string;
    dataManagement: string;
    importData: string;
    exportData: string;
    deleteAccount: string;
  };
  errors: {
    required: string;
    invalidEmail: string;
    invalidPassword: string;
    invalidFormat: string;
    fileTooBig: string;
    unsupportedFileType: string;
    serverError: string;
    networkError: string;
    unauthorized: string;
    notFound: string;
    alreadyExists: string;
  };
  upload: {
    dragDrop: string;
    browse: string;
    uploading: string;
    uploadComplete: string;
    processingFile: string;
    fileValidation: string;
    invalidFile: string;
    maxSize: string;
    allowedTypes: string;
    uploadFailed: string;
    tryAgain: string;
  };
  dates: {
    today: string;
    yesterday: string;
    tomorrow: string;
    last7Days: string;
    last30Days: string;
    thisMonth: string;
    lastMonth: string;
    thisYear: string;
    lastYear: string;
    custom: string;
  };
  tariffTerms: {
    htsCode: string;
    tariffRate: string;
    countryOfOrigin: string;
    section301: string;
    section232: string;
    antidumping: string;
    countervailing: string;
    mostFavoredNation: string;
    specialPrograms: string;
    freeTradeAgreement: string;
    usmca: string;
    gsp: string;
    mpf: string;
    hmf: string;
  };
}

// Dictionary loaders
const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default as Dictionary),
  es: () => import('./dictionaries/es.json').then(module => module.default as Dictionary),
};

// Dictionary cache for improved performance
const dictionaryCache = new Map<LocaleKey, Promise<Dictionary>>();

/**
 * Load a dictionary for the specified locale
 * @param locale The locale to load the dictionary for
 * @returns A promise that resolves to the dictionary
 */
export async function getDictionary(locale: LocaleKey): Promise<Dictionary> {
  // Check if the dictionary is already in the cache
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }
  
  // Get the appropriate loader function
  const loader = dictionaries[locale] || dictionaries.en;
  
  // Load the dictionary and cache it
  const dictionaryPromise = loader();
  dictionaryCache.set(locale, dictionaryPromise);
  
  return dictionaryPromise;
}

/**
 * Clear the dictionary cache
 * Useful for testing or when dictionaries are updated at runtime
 */
export function clearDictionaryCache(): void {
  dictionaryCache.clear();
}

/**
 * Get all supported locales
 * @returns An array of supported locale keys
 */
export function getSupportedLocales(): LocaleKey[] {
  return Object.keys(dictionaries) as LocaleKey[];
}

/**
 * Check if a locale is supported
 * @param locale The locale to check
 * @returns True if the locale is supported, false otherwise
 */
export function isLocaleSupported(locale: string): locale is LocaleKey {
  return locale in dictionaries;
}

export default {
  getDictionary,
  clearDictionaryCache,
  getSupportedLocales,
  isLocaleSupported,
};
