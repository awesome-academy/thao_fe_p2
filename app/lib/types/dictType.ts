export interface DictType {
  homepage?: {
    title?: string;
    greeting?: string;
    viewPosts?: string;
    findTour?: string;
    loading?: string;
    searchResults?: string;
    noResults?: string;
    backToHome?: string;
    destinationLabel?: string;
    dateLabel?: string;
    guestsLabel?: string;
    day?: string;
    days?: string;
    maxGuests?: string;
    searching?: string;
    filterByPrice?: string;
    filterByCategories?: string;
    applyFilters?: string;
    buildYourOwnPackage?: string;
    price?: string;
    minPrice?: string;
    maxPrice?: string;
    sortBy?: string;
    priceLow?: string;
    priceHigh?: string;
    nameAZ?: string;
    toursFound?: string;
    previous?: string;
    next?: string;
    viewTour?: string;
    unknownDestination?: string;
  };
  services?: {
    category?: string;
    title?: string;
    guidedTours?: string;
    guidedToursDescription?: string;
    bestFlightsOptions?: string;
    bestFlightsOptionsDescription?: string;
    religiousTours?: string;
    religiousToursDescription?: string;
    medicalInsurance?: string;
    medicalInsuranceDescription?: string;
  };
  trendingPackages?: {
    promotion?: string;
    title?: string;
    bookNow?: string;
    loading?: string;
    error?: string;
    retry?: string;
    retryLabel?: string;
    errorMessage?: string;
    viewTour?: string;
  };
  footer?: {
    description?: string;
    company?: string;
    aboutUs?: string;
    careers?: string;
    blog?: string;
    pricing?: string;
    maldives?: string;
    losAngeles?: string;
    lasVegas?: string;
    toronto?: string;
    joinOurNewsletter?: string;
    newsletterDescription?: string;
    subscribe?: string;
    copyright?: string;
    destinations?: string;
  };
  languageSwitcher?: {
    label?: string;
  };
  common?: {
    back?: string;
    header?: {
      getInTouch?: string;
      login?: string;
      signUp?: string;
      logout?: string;
      logoutSuccess?: string;
      logoutFailed?: string;
    };
  };
  auth?: {
    login?: {
      title?: string;
      subtitle?: string;
      email?: string;
      password?: string;
      rememberMe?: string;
      signIn?: string;
      googleSignIn?: string;
      noAccount?: string;
      register?: string;
      invalidCredentials?: string;
      signingIn?: string;
      invalid_email?: string;
      password_too_short?: string;
      login_successful?: string;
      validation_failed?: string;
      server_error?: string;
      orContinueWith?: string;
      googleSignInError?: string;
      logout?: string;
      logoutSuccess?: string;
      logoutFailed?: string;
    };
    register?: {
      title?: string;
      subtitle?: string;
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      signUp?: string;
      googleSignUp?: string;
      haveAccount?: string;
      login?: string;
      passwordMismatch?: string;
      emailExists?: string;
      registrationFailed?: string;
      signingUp?: string;
      successMessage?: string;
      successful_registration?: string;
      name_too_short?: string;
      email_invalid?: string;
      password_too_short?: string;
      confirm_password_too_short?: string;
      server_error?: string;
      orContinueWith?: string;
      noAccount?: string;
      multipleErrors?: string;
    };
  };

  useProfile?: {
    role?: string;
    logout?: string;
    logoutSuccess?: string;
  };
}
