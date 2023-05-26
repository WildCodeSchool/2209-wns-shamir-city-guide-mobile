export const enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export const enum StatusCodeClass {
  INFORMATIONAL_RESPONSE = "INFORMATIONAL_RESPONSE",
  SUCCESSFUL = "SUCCESSFUL",
  REDIRECTION = "REDIRECTION",
  CLIENT_ERROR = "CLIENT_ERROR",
  SERVER_ERROR = "SERVER_ERROR"
}

export const enum StatusCodeMessage {
  OK = "OK",
  CREATED = "Created",
  BAD_REQUEST = "Bad Request",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  NOT_FOUND = "Not Found",
  UNPROCESSABLE_ENTITY = "Unprocessable Entity",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}

/* Constants for user roles */
export const enum UserRoles {
  SUPER_ADMIN = "SUPER_ADMIN",
  CITY_ADMIN = "CITY_ADMIN",
  CONTRIBUTOR = "CONTRIBUTOR",
  USER = "USER"
}

/* Constants for colors palette */
export const enum Colors {
  PURPLE = "#8245Ab",
  WHITE = "#DCE2f2",
  GREYLIGHT = "#c6ced5",
  GREY = "#707d85",
  BLUEGREY = "#36454f",
  BLUELIGHT = "#4981A6",
  BLUEMEDIUM = "#025373",
  BLUEGREEN = "#024959",
  BLACK = "#1B1212",
}

/* Constants for default tag icon */

export const enum DefaultIconsNames {
  TAG = "LocalOfferOutlined",
  TYPE = "ClassOutlined",
  CATEGORY = "CategoryOutlined",
  USER = "PersonOutlined",
  ROLE = "PermContactCalendarOutlined",
  POI = "InterestsOutlined",
  CIRCUIT = "TravelExploreOutlined",
  CITY = "LocationCityOutlinedIcon"
}

/* Constants for default tag icon */
export const enum DefaultIconsColors {
  BLACK = "#1B1212",
}

export const tokenName = "city-guid_token";

// ICONS
export const tagsIconsName: { [key: string]: string } = {
    "LocalBarRounded": 'local-bar',
    "WavesOutlined": 'waves',
    "LocalCafeRounded": 'local-cafe',
    "LocalMoviesRounded": 'local-movies',
    "AudiotrackRounded": 'audiotrack',
    "CollectionsRounded": 'collections',
    "YardOutlined": 'grass',
    "AccountBalanceRounded": 'account-balance',
    "DirectionsWalkOutlined": 'directions-walk',
    "RestaurantRounded": 'restaurant',
    "ShoppingCartOutlined": 'shopping-cart',
    "SportsKabaddiRounded": 'sports-kabaddi',
    "TheaterComedyRounded": 'theater-comedy'
}

export const categoriesIconsName: { [key: string]: string } = {
  "ChangeHistoryOutlined": 'change-history',
  "TheaterComedyOutlined": 'theater-comedy',
  "TableRestaurantOutlined": 'restaurant',
  "EmojiNatureOutlined": 'emoji-nature',
  "SportsHandballOutlined": 'sports-handball'
}

export const typesIconsName: { [key: string]: string } = {
  "PaletteOutlined": 'palette',
  "AttractionsOutlined": 'attractions',
  "EventOutlined": 'event',
  "HistoryEduOutlined": 'history-edu',
  "SpaOutlined": 'spa',
  "LocalDiningOutlined": "local-dining",
  "NightlifeOutlined": "nightlife"
}
