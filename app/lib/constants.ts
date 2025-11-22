export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: Number(process.env.HTTP_BAD_REQUEST_STATUS) || 400,
  UNAUTHORIZED: Number(process.env.HTTP_UNAUTHORIZED_STATUS) || 401,
  NOT_FOUND: Number(process.env.HTTP_NOT_FOUND_STATUS) || 404,
  SERVER_ERROR: Number(process.env.HTTP_SERVER_ERROR_STATUS) || 500,
} as const;

export const TAILWIND = {
  CONTAINER: 'max-w-3xl mx-auto py-12 px-4',
  ICON_SIZE: 'w-4 h-4',
  BUTTON_PRIMARY: 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded',
  BUTTON_DANGER: 'bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded',
} as const;

export const REQUEST_TIMEOUT = 5000; // in milliseconds

export const TOAST_DURATION = 4000; // in milliseconds

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0';

export const CONTENT_TYPES = {
  JSON: 'application/json',
  PLAIN_TEXT: 'text/plain',
} as const;

export const POST_DETAIL_CONTENT = {
  NOT_FOUND: 'Post not found',
  NO_TITLE: 'No Title',
  NO_CONTENT: 'No content',
  REQUEST_TIMEOUT: 'Request timed out. Please try again.',
  DELETE_FAILED: 'Failed to delete post. Please try again.',
  DELETE_SUCCESS: 'Post deleted successfully.',
  EDIT_SUCCESS: 'Post edited successfully.',
  BACK_TO_POSTS: 'Back to Posts',
  EDIT: 'Edit',
  DELETE: 'Delete',
  CONFIRM_DELETE: 'Are you sure you want to delete this post?',
  CONFIRM: 'Confirm',
  DELETING: 'Deleting...',
  CANCEL: 'Cancel',
  LOADING: 'Loading post...',
};

export const POSTCARD_CONTENT = {
  READ_MORE: 'Read More →',
  NO_CONTENT: 'No content',
  NO_TITLE: 'No Title',
};

export const POSTS_CONTENT = {
  LOADING: 'Loading posts...',
};

export const POST_LIST_CONTENT = {
  NO_POSTS: 'No posts available. Please add a new post.',
  LOADING: 'Loading posts...',
  ERROR: 'Failed to load posts. Please try again later.',
  NO_CONTENT: 'No content available.',
  NO_TITLE: 'Posts',
  ADD_POST: 'Add Post',
};

export const AUTH_MESSAGES = {
  LOGIN_SUCCESSFUL: 'Login successful',
  INVALID_EMAIL_OR_PASSWORD: 'Invalid email or password',
  LOGIN_FAILED: 'Login failed',
  REGISTRATION_SUCCESSFUL: 'Registration successful',
  REGISTRATION_FAILED: 'Registration failed',
  GOOGLE_SIGN_IN_FAILED: 'Google sign in failed',
  MULTIPLE_ERRORS: 'Multiple errors found:',
} as const;

export const AUTH_LABELS = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
  FULL_NAME: 'Full Name',
  CONFIRM_PASSWORD: 'Confirm Password',
  SIGN_IN: 'Sign In',
  SIGN_UP: 'Sign Up',
  SIGNING_IN: 'Signing in',
  SIGNING_UP: 'Signing up',
  SIGNING_IN_WITH_DOTS: 'Signing in...',
  REGISTER: 'Register',
  CREATE_YOUR_ACCOUNT: 'Create your account',
} as const;

export const AUTH_PLACEHOLDERS = {
  EMAIL: 'ban@email.com',
  EMAIL_EXAMPLE: 'john.doe@example.com',
  PASSWORD: '••••••••',
  FULL_NAME: 'John Doe',
} as const;

export const AUTH_ERROR_MESSAGES = {
  LOGIN_ERROR: 'Login error:',
  GOOGLE_SIGN_IN_ERROR: 'Google sign in error:',
} as const;

export const AUTH_LOGIN_CONSTANTS = {
  SIGN_IN_PROVIDER: 'credentials',
  INVALID_CREDENTIALS: 'Invalid credentials',
  LOGIN_SUCCESSFUL: 'Login successful',
  DEFAULT_TITLE: 'Login',
  DEFAULT_SUBTITLE: 'Login to your account',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'ban@email.com',
  PASSWORD_LABEL: 'Password',
  PASSWORD_PLACEHOLDER: '••••••••',
  SIGNING_IN: 'Signing in...',
  SIGN_IN: 'Sign In',
  USER_HOME_PATH: '/user/home',
  LOGIN_ERROR_PREFIX: 'Login error:',
  LOGIN_FAILED_MESSAGE: 'Login failed',
} as const;

export const AUTH_REGISTER_CONSTANTS = {
  ERROR_TEXT_CLASS: 'text-red-500 text-sm mt-1',
  PASSWORD_PLACEHOLDER: '********',
  DEFAULT_TITLE: 'Create Account',
  DEFAULT_SUBTITLE: 'Sign up to get started',
  FULL_NAME_LABEL: 'Full Name',
  FULL_NAME_PLACEHOLDER: 'John Doe',
  EMAIL_LABEL: 'Email',
  EMAIL_PLACEHOLDER: 'john.doe@example.com',
  PASSWORD_LABEL: 'Password',
  CONFIRM_PASSWORD_LABEL: 'Confirm Password',
  SIGNING_UP: 'Signing up...',
  SIGN_UP: 'Sign Up',
  SUCCESS_MESSAGE: 'Registration successful',
} as const;

export const HERO_SECTION_CONSTANTS = {
  FIND_TOUR: 'Find Tour',
  WHERE_TO_LABEL: 'Where to?',
  DATE_LABEL: 'Date',
  GUESTS_LABEL: 'Guests',
  WHERE_TO_PLACEHOLDER: 'Where to? (e.g., Switzerland)',
  DEFAULT_TITLE: "No matter where you're going to, we'll take you there.",
  DEFAULT_GREETING: 'Explore new places, create unforgettable memories.',
  LOADING: 'Loading destinations...',
  SEARCHING: 'Searching...',
  SEARCH_RESULTS: 'Search Results',
  NO_RESULTS: 'No tours found matching your criteria.',
  BACK_TO_HOME: 'Back to Home',
  DESTINATION_LABEL: 'Destination',
  DAY: 'day',
  DAYS: 'days',
  MAX_GUESTS: 'Max',
  AN_ERROR_OCCURRED: 'An error occurred',
  FILTER_BY_PRICE: 'Filter By Price',
  FILTER_BY_CATEGORIES: 'Filter By Categories',
  APPLY_FILTERS: 'Apply Filters',
  BUILD_YOUR_OWN_PACKAGE: 'Build Your Own Package',
  PRICE: 'Price',
  MIN_PRICE: 'Min Price',
  MAX_PRICE: 'Max Price',
  SORT_BY: 'Sort By',
  PRICE_LOW: 'Price (Low)',
  PRICE_HIGH: 'Price (High)',
  NAME_AZ: 'Name (A-Z)',
  PREVIOUS: 'Previous',
  NEXT: 'Next',
} as const;

export const SERVICES_SECTION_CONSTANTS = {
  CATEGORY: 'CATEGORY',
  DEFAULT_TITLE: 'We Offer Best Services',
  GUIDED_TOURS: 'Guided Tours',
  GUIDED_TOURS_DESCRIPTION:
    "Professional guided tours to explore the world's most iconic destinations.",
  BEST_FLIGHTS_OPTIONS: 'Best Flights Options',
  BEST_FLIGHTS_OPTIONS_DESCRIPTION:
    'Best flight options with competitive pricing and flexible booking.',
  RELIGIOUS_TOURS: 'Religious Tours',
  RELIGIOUS_TOURS_DESCRIPTION:
    'Religious tours to sacred sites and cultural heritage.',
  MEDICAL_INSURANCE: 'Medical Insurance',
  MEDICAL_INSURANCE_DESCRIPTION:
    'Comprehensive medical insurance for your journey.',
} as const;

export const TRENDING_PACKAGES_SECTION_CONSTANTS = {
  PROMOTION: 'PROMOTION',
  DEFAULT_TITLE: 'Our Trending Tour Packages',
  BOOK_NOW: 'Book Now',
  ERROR_MESSAGE: 'Unable to load trending packages. Please try again.',
  RETRY_LABEL: 'Try Again',
} as const;

export const FOOTER_CONSTANTS = {
  DESCRIPTION: 'Travel helps companies manage payments easily.',
  COMPANY: 'Company',
  ABOUT_US: 'About Us',
  CAREERS: 'Careers',
  BLOG: 'Blog',
  PRICING: 'Pricing',
  MALDIVES: 'Maldives',
  LOS_ANGELES: 'Los Angeles',
  LAS_VEGAS: 'Las Vegas',
  TORONTO: 'Toronto',
  JOIN_OUR_NEWSLETTER: 'Join Our Newsletter',
  NEWSLETTER_DESCRIPTION:
    'Will send you weekly updates for your better tour packages.',
  SUBSCRIBE: 'Subscribe',
  COPYRIGHT: 'Travel. All Rights Reserved.',
  DESTINATIONS: 'Destinations',
} as const;

export const HEADER_AUTH_SECTION_CONSTANTS = {
  GET_IN_TOUCH: 'Get in Touch',
  LOGIN: 'Login',
  SIGN_UP: 'Sign Up',
  LOGOUT: 'Logout',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  LOGOUT_FAILED: 'Logout failed',
} as const;

export const SEARCH_TOURS_CONSTANTS = {
  DEFAULT_IMAGE: '/images/home_bg.jpg',
  DEFAULT_LIMIT: 50,
  LOCALE_VI: 'vi-VN',
  LOCALE_EN: 'en-US',
  ITEMS_PER_PAGE: 10,
  MIN_PRICE: 100,
  MAX_PRICE: 3600,
  DEFAULT_MIN_PRICE: 100,
  DEFAULT_MAX_PRICE: 3600,
  UNKNOWN_DESTINATION: 'Unknown',
  DAY: 'Day',
  DAYS: 'Days',
} as const;

export const SORT_CRITERIA = {
  PRICE_ASC: 'priceAsc',
  PRICE_DESC: 'priceDesc',
  NAME_ASC: 'nameAsc',
} as const;

export const URL_SEARCH_PARAMS = {
  MIN_PRICE: 'minPrice',
  MAX_PRICE: 'maxPrice',
  CATEGORIES: 'categories',
  SORT_BY: 'sortBy',
  PAGE: 'page',
  DESTINATION: 'destination',
  DATE: 'date',
  GUESTS: 'guests',
} as const;

export const IMAGE_DIMENSIONS = {
  HERO_WIDTH: 1920,
  HERO_HEIGHT: 600,
} as const;

export const TOAST_DURATIONS = {
  ERROR: 5000,
  DEFAULT: 4000,
} as const;

export const AUTH_CONFIG = {
  MIN_PASSWORD_LENGTH: 6,
  SESSION_COOKIE_NAME: 'next-auth.session-token',
} as const;

export const QUERY_CONFIG = {
  STALE_TIME_5_MIN: 5 * 60 * 1000,
  ENABLED: true,
} as const;

export const TOUR_SEARCH_CONTENT = {
  LOADING: 'Loading tours...',
} as const;
