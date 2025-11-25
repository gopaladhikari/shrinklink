export const messages = {
  SUCCESS: {
    URL_SHORTENED: "Your URL has been shortened successfully!",
    URL_COPIED: "Short link copied to clipboard!",
    URL_DELETED: "Link deleted successfully.",
    QR_DOWNLOADED: "QR code downloaded successfully!",
    SETTINGS_SAVED: "Settings saved successfully.",
  },

  ERROR: {
    INVALID_URL: "Please enter a valid URL.",
    URL_REQUIRED: "URL is required.",
    URL_NOT_FOUND: "URL not found.",
    SHORT_CODE_NOT_FOUND: "Short link not found.",
    FAILED_TO_SHORTEN: "Failed to shorten the URL. Try again.",
    FAILED_TO_LOAD: "Unable to load data.",
    FAILED_TO_DELETE: "Failed to delete the link.",
    FAILED_TO_COPY: "Failed to copy to clipboard.",
    NETWORK: "Network error. Please check your connection.",
    UNKNOWN: "Something went wrong. Please try again.",
  },

  CONFIRM: {
    DELETE_LINK: "Are you sure you want to delete this link?",
  },
};

export type Messages = typeof messages;
