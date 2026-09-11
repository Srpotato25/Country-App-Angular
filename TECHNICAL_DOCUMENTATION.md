# Country-App-Angular - Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Installation & Setup](#installation--setup)
6. [Running the Application](#running-the-application)
7. [Building for Production](#building-for-production)
8. [Testing](#testing)
9. [Key Components](#key-components)
10. [Services](#services)
11. [Routing](#routing)
12. [Styling](#styling)
13. [API Integration](#api-integration)
14. [Development Workflow](#development-workflow)

---

## Project Overview

**Country-App-Angular** is a web application built with Angular that displays information about countries and their capitals. The application allows users to search, filter, and explore detailed information about countries across different criteria.

- **Repository:** `Srpotato25/Country-App-Angular`
- **Language Composition:** 
  - TypeScript: 59.3%
  - HTML: 39.4%
  - CSS: 1.3%
- **Status:** Public Repository
- **Created:** July 11, 2026
- **Last Updated:** September 11, 2026

---

## Architecture

The application follows a **modular component-based architecture** with feature modules and lazy loading patterns:

```
src/
├── app/
│   ├── country/              # Feature module for country operations
│   │   ├── components/       # Reusable country-related components
│   │   ├── pages/           # Feature pages
│   │   ├── services/        # Country business logic
│   │   ├── layouts/         # Layout components for country module
│   │   ├── interfaces/      # TypeScript interfaces
│   │   └── country.routes.ts # Feature routing
│   │
│   ├── shared/              # Shared across features
│   │   ├── pages/          # Shared pages (HomePage)
│   │   └── components/     # Reusable components
│   │
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Main application routing
│   ├── app.config.ts       # App configuration & providers
│   ├── app.html            # Root template
│   └── environments/       # Environment configurations
│
├── main.ts                 # Application bootstrap
├── styles.css              # Global styles
└── index.html              # Entry HTML file
```

**Architecture Principles:**
- **Lazy Loading:** Country routes are lazily loaded
- **Feature Modules:** Country functionality is isolated in its own module
- **Standalone Components:** Uses Angular's standalone component API
- **Reactive Programming:** Leverages RxJS for data flows

---

## Technology Stack

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Angular** | ^21.2.0 | Web framework |
| **TypeScript** | ~5.9.2 | Programming language |
| **RxJS** | ~7.8.0 | Reactive programming library |

### Styling
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | ^4.3.1 | Utility-first CSS framework |
| **PostCSS** | ^8.5.15 | CSS transformation tool |
| **DaisyUI** | ^5.5.23 | Tailwind CSS component library |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **Angular CLI** | ^21.2.9 | Command-line interface for Angular |
| **Vitest** | ^4.0.8 | Unit test runner |
| **JSDOM** | ^28.0.0 | JavaScript DOM implementation |
| **Prettier** | ^3.8.1 | Code formatter |
| **NPM** | ^11.12.1 | Package manager |

### Other Dependencies
- **@angular/forms** - Form handling
- **@angular/common** - Common Angular utilities
- **@angular/router** - Routing module
- **@angular/compiler** - Angular compiler
- **@angular/platform-browser** - Browser platform utilities
- **tslib** - TypeScript runtime library

---

## Project Structure

### Root-Level Files

```
├── angular.json          # Angular CLI configuration
├── package.json          # NPM dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TypeScript config
├── README.md             # Basic project readme
├── TECHNICAL_DOCUMENTATION.md  # This file
├── .gitignore            # Git ignore rules
├── public/               # Static assets
└── dist/                 # Build output (generated)
```

### Source Directory Structure

#### Main Application Components

**`src/app/app.ts`** - Root Component
- Bootstraps the entire application
- Renders router outlet and footer
- Uses title signal for app configuration

**`src/app/app.html`** - Root Template
- Main layout container
- Router outlet for page rendering
- Footer component placement

**`src/app/app.config.ts`** - Application Configuration
- Provides router configuration
- Configures HTTP client with fetch backend
- Sets up global error listeners

**`src/app/app.routes.ts`** - Main Routes
- Home page route (empty path)
- Country feature routes (lazy loaded)
- Wildcard redirect to home

#### Country Feature Module

**`src/app/country/country.routes.ts`** - Feature Routes
- Layout-based routing structure
- Nested child routes:
  - `by-capital` - Search by capital name
  - `by-country` - Search by country name
  - `by-region` - Search by region
  - `by/:code` - Detail view for specific country

**`src/app/country/layouts/CountryLayout/`**
- Wrapper component for country pages
- Contains top navigation menu
- Manages nested routing outlet

#### Pages

- **`src/app/country/pages/by-capital-page/`** - Capital search page
- **`src/app/country/pages/by-country-page/`** - Country search page
- **`src/app/country/pages/by-region-page/`** - Region filter page
- **`src/app/country/pages/country-page/`** - Country detail page
- **`src/app/shared/pages/home-page/`** - Home/landing page

#### Components

Reusable components in `src/app/country/components/`:
- **CountrySearchInput** - Search input component
- **CountryList** - Display countries in list format
- **TopMenu** - Navigation menu
- **CountryFooter** - Application footer

#### Services

**`src/app/country/services/country.service.ts`**
- Handles HTTP communication with REST Countries API
- Methods for searching by capital, country, region
- Response normalization logic

#### Interfaces

**`src/app/country/interfaces/rest-countries.interface.ts`**
- TypeScript interfaces for API responses
- Country data model definitions

#### Environments

**`src/app/environments/environment.ts`**
- Environment-specific configuration
- API base URL and keys
- Development and production settings

---

## Installation & Setup

### Prerequisites
- **Node.js:** Version 18 or higher
- **NPM:** Version 11.12.1 (as specified in package.json)
- **Angular CLI:** Global installation recommended

### Step 1: Clone the Repository
```bash
git clone https://github.com/Srpotato25/Country-App-Angular.git
cd Country-App-Angular
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create or update `src/app/environments/environment.ts`:
```typescript
export const environment = {
  RestCountriesUrl: 'https://api.countries.com',
  RestCountriesApiKey: 'your-api-key-here'
};
```

### Step 4: Verify Installation
```bash
ng version
```

---

## Running the Application

### Development Server
Start the local development server with hot reload:

```bash
npm start
```
or
```bash
ng serve
```

**Access the application at:** `http://localhost:4200/`

The application will automatically reload when you modify source files.

### Development Server (Alternative)
```bash
ng serve --configuration development
```

### Navigation
- **Home Page:** `http://localhost:4200/`
- **By Country:** `http://localhost:4200/country/by-country`
- **By Capital:** `http://localhost:4200/country/by-capital`
- **By Region:** `http://localhost:4200/country/by-region`
- **Country Detail:** `http://localhost:4200/country/by/:code` (e.g., `/country/by/us`)

---

## Building for Production

### Build Command
```bash
npm run build
```
or
```bash
ng build
```

### Build Output
- **Location:** `dist/` directory
- **Configuration:** Optimized for production
- **Features:** Output hashing enabled, all assets hashed

### Production Build Settings (from angular.json)
```json
{
  "configurations": {
    "production": {
      "budgets": [
        {
          "type": "initial",
          "maximumWarning": "500kB",
          "maximumError": "1MB"
        },
        {
          "type": "anyComponentStyle",
          "maximumWarning": "4kB",
          "maximumError": "8kB"
        }
      ],
      "outputHashing": "all"
    }
  }
}
```

### Watch Mode Build
For continuous compilation during development:
```bash
npm run watch
```
or
```bash
ng build --watch --configuration development
```

---

## Testing

### Unit Tests
Run unit tests using Vitest:

```bash
npm test
```
or
```bash
ng test
```

### Test Framework Details
- **Runner:** Vitest 4.0.8
- **DOM Implementation:** JSDOM
- **Configuration:** Defined in angular.json under test builder

### Running Tests with Watch Mode
```bash
ng test --watch
```

### Running Tests with Coverage
```bash
ng test --coverage
```

### End-to-End Tests (E2E)
```bash
ng e2e
```

**Note:** Angular CLI does not include a default E2E framework. You can install and configure your preferred framework (Cypress, Playwright, WebdriverIO, etc.).

---

## Key Components

### App Component (`src/app/app.ts`)
- **Type:** Root component
- **Selector:** `app-root`
- **Imports:** RouterOutlet, CountryFooter
- **Template:** `app.html`
- **Features:** 
  - Application title management with signals
  - Main layout structure
  - Responsive container

### CountryLayout Component
- **Path:** `src/app/country/layouts/CountryLayout/CountryLayout.ts`
- **Purpose:** Layout wrapper for country pages
- **Imports:** RouterOutlet, TopMenu
- **Children Routing:** Handles nested route rendering

### ByCountryPage Component
- **Path:** `src/app/country/pages/by-country-page/by-country-page.ts`
- **Change Detection:** OnPush strategy for performance
- **Imports:** CountrySearchInput, CountryList
- **Purpose:** Search and display countries by name

### CountrySearchInput Component
- **Purpose:** Reusable search input field
- **Features:** Debounced input, query submission

### CountryList Component
- **Purpose:** Display filtered country results
- **Features:** List rendering, navigation to detail view

### TopMenu Component
- **Purpose:** Navigation menu for country section
- **Features:** Links to different search methods

### CountryFooter Component
- **Path:** `src/app/country/components/country-footer/country-footer`
- **Purpose:** Global footer element
- **Location:** Rendered in root app component

### HomePage Component
- **Path:** `src/app/shared/pages/home-page/home-page.ts`
- **Purpose:** Landing page
- **Imports:** RouterLink
- **Features:** Introduction and navigation links

---

## Services

### CountryService

**Location:** `src/app/country/services/country.service.ts`

**Purpose:** Handle all HTTP communication with the REST Countries API

**Injection:** Provided at root level (`providedIn: 'root'`)

#### Methods

**`searchByCapital(query: string): Observable<RESTCountry[]>`**
- Searches countries by capital name
- Parameters:
  - `query` (string): Capital name to search
- Returns: Observable array of country objects
- Features:
  - Case-insensitive search (converts to lowercase)
  - Includes API authorization header
  - Normalizes responses (handles both direct arrays and nested data)
  - Graceful error handling with empty array fallback

#### API Integration Details
- **Base URL:** Retrieved from environment configuration
- **API Key:** Bearer token authentication
- **Endpoints:**
  - `/capitals?q={query}` - Search by capital

#### Response Normalization
The service handles multiple response formats:
```typescript
if (Array.isArray(resp)) return resp as RESTCountry[];
if (resp && Array.isArray((resp as any).data)) return (resp as any).data as RESTCountry[];
return [] as RESTCountry[];
```

---

## Routing

### Route Hierarchy

```
/ (Home)
├── /country (Feature Module - Lazy Loaded)
│   ├── /by-capital (ByCapitalPage)
│   ├── /by-country (ByCountryPage)
│   ├── /by-region (ByRegionPage)
│   └── /by/:code (CountryPage - Detail View)
└── /** (Wildcard - Redirects to /)
```

### Main Routes (`app.routes.ts`)
```typescript
[
  { path: '', component: HomePage },
  { path: 'country', loadChildren: () => import('./country/country.routes') },
  { path: '**', redirectTo: '' }
]
```

### Feature Routes (`country.routes.ts`)
- Wrapped in CountryLayout component
- Child routes for different search methods
- Wildcard redirect to layout root

### Route Configuration

**Main App Routes:**
- Empty path loads HomePage
- `/country` lazy loads the country feature module
- Wildcard `**` redirects to home

**Country Feature Routes:**
- Configured as children of CountryLayout
- Supports nested routing with layout persistence
- Each search method has dedicated component

### Navigation
- **Router Links:** Used in components for navigation
- **Router Outlet:** Primary in app, secondary in CountryLayout
- **Programmatic Navigation:** Can be implemented with Router injection

---

## Styling

### Global Styles Architecture

**File:** `src/styles.css`

### Tailwind CSS Integration
```css
@import "tailwindcss";
@plugin "daisyui";
```

### Styling Stack
1. **Tailwind CSS (v4.3.1)** - Utility-first CSS framework
2. **DaisyUI (v5.5.23)** - Tailwind component library
3. **PostCSS (v8.5.15)** - CSS processing

### CSS Configuration
**PostCSS:** Configured to process Tailwind directives

### Utility Classes
The application leverages Tailwind's utility classes for:
- Flexbox layouts
- Spacing (margins, padding)
- Responsive design
- Component styling

### DaisyUI Components
Provides pre-built components:
- Buttons
- Cards
- Modals
- Navigation elements
- And many more

### Component Styling
Components use inline Tailwind classes in templates and component-specific CSS files

### Responsive Design
- Mobile-first approach
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Flexible layouts with Flexbox/Grid

### Color Scheme
Uses DaisyUI's theme system for consistent design

---

## API Integration

### REST Countries API

**API Service:** `CountryService`

#### Configuration
```typescript
const API_URL = environment.RestCountriesUrl;
const API_KEY = environment.RestCountriesApiKey;
```

#### HTTP Client Configuration
Configured in `app.config.ts`:
```typescript
provideHttpClient(withFetch())
```

#### Authentication
- **Method:** Bearer token in Authorization header
- **Header Format:** `Authorization: Bearer ${API_KEY}`

#### Endpoints Used

**Search by Capital:**
- **Endpoint:** `{API_URL}/capitals?q={query}`
- **Method:** GET
- **Parameters:** `q` (lowercase capital name)
- **Response:** Array of country objects or nested data structure

#### Response Structure (RESTCountry Interface)
```typescript
interface RESTCountry {
  name: string;
  capital: string;
  region: string;
  code: string;
  // ... other country properties
}
```

#### Error Handling
- Graceful degradation: returns empty array on error
- Response normalization handles API variation
- Observable-based for async operations

#### Interceptors
- Global error listeners configured in app.config

#### Headers Management
Dynamic headers set per request based on requirements

---

## Development Workflow

### Code Generation with Angular CLI

#### Generate a New Component
```bash
ng generate component country/components/new-component
# or
ng g c country/components/new-component
```

#### Generate a New Service
```bash
ng generate service country/services/new-service
# or
ng g s country/services/new-service
```

#### Generate a New Interface
```bash
ng generate interface country/interfaces/new-interface
# or
ng g i country/interfaces/new-interface
```

#### Generate a New Directive
```bash
ng generate directive country/directives/new-directive
# or
ng g d country/directives/new-directive
```

#### Generate a New Pipe
```bash
ng generate pipe country/pipes/new-pipe
# or
ng g p country/pipes/new-pipe
```

### Code Formatting

**Format all files:**
```bash
npx prettier --write .
```

**Format specific file:**
```bash
npx prettier --write src/app/file.ts
```

**Check formatting:**
```bash
npx prettier --check .
```

### Development Best Practices

1. **Use Standalone Components**
   - Modern Angular approach (v14+)
   - No NgModule required
   - Better tree-shaking

2. **Change Detection Strategy**
   - Use OnPush for performance
   - Implement signals for reactive updates
   - Avoid unnecessary change detection cycles

3. **Lazy Loading**
   - Load feature modules on demand
   - Reduces initial bundle size
   - Improves performance

4. **Service Injection**
   - Use `inject()` function (newer approach)
   - Provides at root level when possible
   - Avoid constructor injection in modern code

5. **Reactive Programming**
   - Leverage RxJS operators
   - Use `map`, `filter`, `switchMap`, etc.
   - Unsubscribe properly (async pipe handles this)

6. **Typing**
   - Use strict TypeScript (strict mode enabled)
   - Define interfaces for API responses
   - Avoid `any` type

7. **Component Communication**
   - Use inputs/outputs for parent-child
   - Services for shared state
   - Signals for local state

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/feature-name

# Create Pull Request on GitHub
```

### Common NPM Scripts

```bash
npm start          # Start dev server
npm run build      # Build for production
npm run watch      # Watch mode build
npm test           # Run unit tests
npm run ng -- help # Show all available commands
```

---

## Performance Optimization

### Bundle Analysis
Check build output sizes:
```bash
ng build --stats-json
```

### Production Build Configuration
```json
{
  "optimization": true,
  "outputHashing": "all",
  "sourceMap": false,
  "extractLicenses": true
}
```

### Change Detection
- **OnPush Strategy:** Reduces change detection cycles
- **Signals:** Alternative to observables for simple state

### Lazy Loading
- Feature modules loaded on-demand
- Reduces initial bundle size

### Tree Shaking
- Dead code elimination
- Requires ES module imports
- Enabled in production builds

---

## Environment Configuration

### Environment Files Location
`src/app/environments/environment.ts`

### Environment Variables
```typescript
export const environment = {
  RestCountriesUrl: string;      // API base URL
  RestCountriesApiKey: string;   // API authentication key
};
```

### Using Environment Variables
```typescript
import { environment } from '../../environments/environment';

const url = environment.RestCountriesUrl;
```

### Production vs Development
- Development: Full source maps, no optimization
- Production: Optimized, minified, hashed assets

---

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
ng serve --port 4300
```

**Dependencies Conflict**
```bash
npm install --legacy-peer-deps
# or
npm cache clean --force
rm -rf node_modules
npm install
```

**TypeScript Errors**
```bash
npx tsc --noEmit
```

**Build Failures**
1. Check node version: `node --version`
2. Clear cache: `npm cache clean --force`
3. Rebuild: `npm run build`

---

## Additional Resources

- [Angular Documentation](https://angular.dev)
- [Angular CLI Commands](https://angular.dev/tools/cli)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com)
- [RxJS Operators](https://rxjs.dev/api)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [REST Countries API](https://restcountries.com)

---

## License

This project is part of a public repository. Please check the repository for any specific licensing information.

---

**Document Version:** 1.0  
**Last Updated:** September 2026  
**Maintained By:** Srpotato25
