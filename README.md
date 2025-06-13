
# Culinary Canvas

Welcome to Culinary Canvas, an elegant web application for a modern restaurant. This platform allows users to explore the restaurant's offerings, make reservations, order food online, read blog posts, and provide feedback.

## 1. Core Features (Culinary Canvas)

*   **Home Showcase**: Landing page showcasing the restaurant's ambiance, cuisine, location, awards, and chef information.
*   **Table Reservations**: Interactive reservation form with date, time, and seating options.
*   **Menu Display**: Categorized menu with dish names, descriptions, prices, and dietary options.
*   **Online Order**: Online ordering system to select dishes and manage cart; visual total at checkout.
*   **Feedback Form**: Form for customer feedback; displays recent reviews.
*   **Contact Details**: Restaurant contact info: email, phone, location (Google Maps); links to Swiggy/Zomato pages.
*   **Blog**: Page to display promotional or informational blog posts.
*   **Theme Toggle**: Switch between light and dark mode.

## 2. Tech Stack

*   **Framework**: Next.js (App Router)
*   **Language**: TypeScript
*   **UI Library**: React
*   **Component Library**: ShadCN UI
*   **Styling**: Tailwind CSS, CSS HSL Variables for theming
*   **AI Integration**: Genkit (with Google Gemini models)
*   **Form Handling**: React Hook Form, Zod for validation

## 3. Design & Technical Specifications Template

_The following sections are based on a comprehensive template provided, detailing design, AI, and technical specifications. Some content may be illustrative of how such an application would be documented and might refer to features or specifics not yet implemented or differently implemented in the current "Culinary Canvas" restaurant application._

### 3.1. Webpage Design UI (Responsive Web Application for Desktop & Mobile)

_(This section outlines general design goals, similar to what Culinary Canvas aims for)_
________________________________________
### 3.2. Brand Identity & Design Specifications
________________________________________
#### 3.2.1. Typography

*(Note: Culinary Canvas currently uses 'Playfair Display' for headlines and 'PT Sans' for body text, as defined in `tailwind.config.ts` and `src/app/layout.tsx`. The following is an illustrative example of detailed typography specification from the provided template.)*

● Main Heading Font (e.g., Page Titles): Poppins (Bold, 36px - 48px)
● Section Heading Font (e.g., Card Titles): Poppins (Semibold, 24px - 30px)
● Sub Heading Font: Poppins (Medium, 18px - 22px)
● Text Content Font (Body): Inter (Regular, 16px)
● Small/Supporting Text Font: Inter (Regular, 12px - 14px)
● Button Text Font: Inter (Medium, 14px - 16px)
● Code Font (Conceptual, for AI interaction/display): Consolas, 'Courier New', monospace
● Brand Name & Logo Font: Poppins (Bold, typically matches main heading size in header)
________________________________________
#### 3.2.2. Color Scheme (Effective Theme from globals.css & tailwind.config.ts)

*(Note: Culinary Canvas has its own color scheme defined in `src/app/globals.css` featuring reddish-browns and orange-reds. The following is an illustrative example of a detailed color scheme specification from the provided template.)*

Core Theme HSL Variables:
● Primary (Emerald Green):
 ○ Light Mode: hsl(142.1 76.2% 36.3%) (#10b981 approx.)
 ○ Dark Mode: hsl(142.1 70.6% 45.3%) (#16a34a approx.)
● Accent (Blueish):
 ○ Light Mode: hsl(200 70% 60%) (#4cbce8 approx.)
 ○ Dark Mode: hsl(200 60% 35%) (#247ba0 approx.)
● Background:
 ○ Light Mode: hsl(0 0% 100%) (#FFFFFF)
 ○ Dark Mode: hsl(20 14.3% 4.1%) (#0c0a09)
● Foreground (Text):
 ○ Light Mode: hsl(240 10% 3.9%) (#09090b)
 ○ Dark Mode: hsl(0 0% 95%) (#f2f2f2)
● Card Background:
 ○ Light Mode: hsl(0 0% 100%) (#FFFFFF)
 ○ Dark Mode: hsl(24 9.8% 10%) (#1c1917)
● Border:
 ○ Light Mode: hsl(214.3 31.8% 91.4%) (#e5e7eb)
 ○ Dark Mode: hsl(240 3.7% 15.9%) (#262626)
● Destructive (Errors/Warnings):
 ○ Light Mode: hsl(0 84.2% 60.2%) (#f43f5e)
 ○ Dark Mode: hsl(0 62.8% 30.6%) (#9f1239)

Original PRD Brand Palette Intentions (from template):
● Brand Primary: Dark Blue (#0f172a)
● Brand Accent: Emerald (#10b981) - (This is used as theme primary in template)
● Brand Light Background: Off-white (#f8f9fa)
________________________________________
#### 3.2.3. 🌙 Dark Mode & ☀️ Light Mode Variants (Effective Implementation)

*(Note: Culinary Canvas implements dark/light mode via `ThemeProvider` and CSS variables in `globals.css`. The following illustrates a detailed breakdown from the template.)*

● Light Mode:
 ○ Background: hsl(0 0% 100%) (#FFFFFF)
 ○ Text: hsl(240 10% 3.9%) (#09090b)
 ○ Primary Buttons: Background hsl(142.1 76.2% 36.3%) (Emerald), Text hsl(355.7 100% 97.3%)
 ○ Accent Elements: Color hsl(200 70% 60%) (Blueish)
● Dark Mode:
 ○ Background: hsl(20 14.3% 4.1%) (#0c0a09)
 ○ Text: hsl(0 0% 95%) (#f2f2f2)
 ○ Primary Buttons: Background hsl(142.1 70.6% 45.3%) (Lighter Emerald), Text hsl(144.9 80.4% 10%)
 ○ Accent Elements: Color hsl(200 60% 35%) (Darker Blueish)
________________________________________
### 3.3. User Features & Main Pages (Illustrative Example from Template)

*(Note: The features listed below are from the provided template for an application called "NutriGuide AI" and serve as an example of how features might be documented. For actual Culinary Canvas features, see Section 1: Core Features.)*
________________________________________
#### 3.3.1. 👤 General User Experience
The application is designed for general users seeking nutritional information and guidance related to Indian food products and recipes. There are no distinct user roles like 'admin' or 'partner' dashboards. All features are accessible to any visitor.
________________________________________
#### 3.3.2. 📌 Key Features (Template Example):
•	Theme Toggle: Dark/light mode toggle with user preference persistence (localStorage).
•	Smart Label Analysis:
 * Upload food label images (OCR via AI) for ingredient analysis.
 * Manually enter product details and ingredients.
 * AI-Generated Health Report: Includes detailed analysis, positive/potential concerns, key nutrients, overall health rating (1-5 stars), processing level rating, sugar content rating, nutrient density rating.
 * Healthier Indian Alternatives: Suggestions for better choices.
 * PDF Download: Option to download the generated health report.
•	Contextual AI Chat (Product Analysis): Engage in AI chat related to the generated food label report.
•	Indian Recipe Suggestions:
 * Input available ingredients, health concerns, and household size.
 * AI-Generated Meal Ideas: Suggests 2-5 healthy Indian dish names.
 * Detailed Recipe Generation: Provides full recipe for a selected dish (title, description, servings, prep/cook time, adjusted ingredients, instructions, health notes, tips).
 * PDF Download: Option to download the detailed recipe.
•	Contextual AI Chat (Recipes): Engage in AI chat related to the generated recipe.
•	Detailed Nutrition Check:
 * Upload nutrition table images or manually input values (calories, fats, vitamins, etc.).
 * AI-Generated Nutrition Analysis: Includes overall analysis, macronutrient balance, micronutrient highlights, dietary suitability, nutrition density rating, processing level assessment, serving size context.
 * PDF Download: Option to download the nutrition analysis report.
•	Contextual AI Chat (Nutrition Analysis): Engage in AI chat related to the generated nutrition report.
•	Blog: Articles on healthy eating, food labels, and Indian nutrition. Includes category filtering and individual post pages.
•	Contact Page: Information for users to reach out.
•	Responsive Design: Adapts to various screen sizes (desktop, tablet, mobile).
________________________________________
#### 3.3.3. 📍 Key Navigation Flows (Illustrative User Journeys from Template):
1.	Food Label Analysis:
 User lands on Homepage → Navigates to "Analyze Label" page → Chooses image upload or manual input method → Submits data → Views AI Health Report → Optionally downloads PDF → Optionally engages in AI Chat about the report.
2.	Recipe Suggestions:
 User lands on Homepage → Navigates to "Recipes" page → Enters available ingredients, health concerns, household size → Receives dish suggestions → Selects a dish → Views detailed AI-generated recipe → Optionally downloads PDF → Optionally engages in AI Chat about the recipe.
3.	Nutrition Check:
 User lands on Homepage → Navigates to "Nutrition Check" page → Chooses image upload or manual input for nutritional values → Submits data → Views AI Nutrition Analysis → Optionally downloads PDF → Optionally engages in AI Chat about the analysis.
4.	Blog Engagement:
 User lands on Homepage → Navigates to "Blog" page → Filters articles by category (optional) → Clicks on a blog post title/image → Reads the full blog post.
5.	Theme Customization:
 User clicks theme toggle button (Sun/Moon icon) in Header → Interface switches between light and dark mode → Preference is saved in browser's localStorage.
________________________________________
### 3.4. 💡 Unique Selling Propositions / Key Differentiators (Illustrative Example from Template)

*(Note: These USPs are from the provided "NutriGuide AI" template.)*

•	AI-Driven Indian Context: Focus on providing health reports and recipe alternatives relevant to Indian food products and dietary habits.
•	Integrated Contextual AI Chat: Allows users to ask follow-up questions directly related to the specific AI-generated report (label, recipe, nutrition) they are viewing.
•	Comprehensive AI Toolkit: Offers a suite of AI tools from label analysis to recipe generation and nutrition checking, all within one platform.
•	User-Friendly Interface: Utilizes ShadCN UI components for a clean, modern, and accessible user experience.
•	Client-Side AI Interaction: Leverages Genkit to call Gemini models for analysis and chat, providing dynamic content generation.
________________________________________
### 3.5. 📌 Data Flow & Backend (Illustrative Example from Template)

*(Note: Culinary Canvas is set up with Genkit. The following details specific AI flows from the provided template.)*
________________________________________
#### 3.5.1. 🤖 AI Model Integration:
•	Core AI Engine: Genkit framework.
•	Language Models: Google Gemini models (e.g., `gemini-2.0-flash` specified in `src/ai/genkit.ts` for Culinary Canvas).
•	Capabilities Utilized (Template Example):
 * Text Generation: For health reports, recipe details, nutrition analysis, chat responses.
 * Image Understanding (Vision): For OCR from food labels and nutrition tables.
 * Structured Data Output: AI models are prompted to return data in specific JSON schemas (defined with Zod).
•	AI Flows Defined (Template Example):
 * `generateHealthReport`: Analyzes food labels/ingredients.
 * `recipeSuggestions`: Suggests dishes based on inputs.
 * `getDetailedRecipe`: Generates full recipes.
 * `analyzeNutrition`: Analyzes nutritional data.
 * `contextAwareAIChat`: Powers contextual chat for reports.
________________________________________
#### 3.5.2. ☁️ Cloud Services:
•	Google AI Platform: Utilized via the `@genkit-ai/googleai` plugin for accessing Gemini models. Requires `GOOGLE_API_KEY`.
________________________________________
#### 3.5.3. 🔒 User Data Management:
•	Theme Preference: Stored client-side in the browser's localStorage (Implemented in Culinary Canvas).
•	Uploaded Images/Input Data (Template Example): Transmitted to the backend (Genkit/Gemini) for processing. Not persistently stored by the application itself after the AI response is generated, as per current design.
•	Generated Reports/Recipes/Analyses (Template Example): Displayed to the user dynamically. Not persistently stored on the server for individual users beyond the current session unless the user downloads a PDF.
•	No user accounts or server-side session management beyond what Genkit might use for its operations.
________________________________________
### 3.6. ⚙️ UI Components & Design Patterns (Based on ShadCN UI & Custom Components)
________________________________________
#### 3.6.1. 🧩 Key UI Components Used (Culinary Canvas & Template):
*(This list combines components generally used in ShadCN applications and those present in Culinary Canvas)*
•	Layout & Navigation: Navbar (`Navbar.tsx`), Footer (`Footer.tsx`), Sheet (for mobile menu), Link (Next.js).
•	Content Display: Card (extensively for menu items, blog posts, homepage sections), Alert (for success/error messages), Image (`next/image`), StarRatingDisplay/Input (custom components).
•	Forms & Input: Form (React Hook Form), Input, Textarea, Select, Button, Calendar, Popover, RadioGroup.
•	Interaction & Feedback: Dialog (for checkout), Toast (for notifications), Tooltip, ScrollArea, Separator, Tabs.
•	Structure & Styling: `cn` utility for conditional classes, Tailwind CSS for overall styling.
________________________________________
#### 3.6.2. 🎨 Theming:
•	Dark/Light Mode: Implemented via `ThemeProvider.tsx` which toggles a 'dark' class on the HTML element.
•	CSS Variables: Extensive use of CSS HSL variables defined in `src/app/globals.css` for both light and dark themes, utilized by ShadCN components and custom styles.
•	Responsive Design: Achieved using Tailwind CSS's responsive prefixes (sm, md, lg) and flex/grid layouts.

## 4. Getting Started (Culinary Canvas)

Follow these instructions to get a local copy of Culinary Canvas up and running.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Environment Variables

While Culinary Canvas doesn't strictly require environment variables for its current features to run, the Genkit setup (for potential AI features) typically relies on a `GOOGLE_API_KEY`. If you plan to develop or use AI features:

1.  Create a `.env` file in the root of the project.
2.  Add your Google AI API key:
    ```env
    GOOGLE_API_KEY=your_google_api_key_here
    ```
    (The `src/ai/genkit.ts` file is configured to use Google AI. Refer to Genkit and Google AI documentation for obtaining an API key.)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd culinary-canvas
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

1.  Start the Next.js development server:
    ```bash
    npm run dev
    ```
    This will typically start the application on `http://localhost:9002`.

2.  If you intend to use or develop Genkit AI flows, start the Genkit development server in a separate terminal:
    ```bash
    npm run genkit:dev
    # or for watching changes
    npm run genkit:watch
    ```
    This usually starts on `http://localhost:4000` (Genkit UI) and `http://localhost:3400` (Genkit API).

### Building for Production

To create a production build:
```bash
npm run build
```
This command bundles the application for production. You can then start the production server using `npm run start`.

## 5. Project Structure

A brief overview of the key directories:

*   `src/app/`: Contains all the Next.js App Router pages and layouts.
    *   `(default)/`: Layout for main application pages.
    *   `blog/`, `contact/`, etc.: Route groups for specific pages.
    *   `globals.css`: Global styles and Tailwind CSS theme variables.
    *   `layout.tsx`: Root layout for the entire application.
    *   `page.tsx`: Homepage.
*   `src/components/`: Reusable React components.
    *   `layout/`: Components related to overall page structure (Navbar, Footer, ThemeProvider).
    *   `sections/`: Components specific to sections of a page (e.g., blog cards, menu items).
    *   `shared/`: General-purpose shared components (Logo, SectionWrapper).
    *   `ui/`: ShadCN UI components.
*   `src/lib/`: Utility functions, constants, type definitions.
    *   `constants.ts`: Application-wide constants (navigation links, mock data).
    *   `types.ts`: TypeScript type definitions.
    *   `utils.ts`: Utility functions (e.g., `cn` for classnames).
*   `src/ai/`: Genkit AI integration.
    *   `genkit.ts`: Genkit initialization and configuration.
    *   `dev.ts`: Development server entry point for Genkit.
    *   `flows/`: (Conventionally where AI flows would be defined - currently empty in Culinary Canvas but part of the Genkit setup).
*   `public/`: Static assets like images.
    *   `media/`: Contains images used throughout the application.
*   `next.config.ts`: Next.js configuration file.
*   `tailwind.config.ts`: Tailwind CSS configuration file.
*   `components.json`: ShadCN UI configuration.

## 6. Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing coding style and includes tests where appropriate.

## 7. License

This project is licensed under the MIT License - see the LICENSE.md file for details (if one exists, otherwise assume standard open source or proprietary as per project owner).
