
# Culinary Canvas

Welcome to Culinary Canvas, an elegant web application for a modern restaurant. This platform allows users to explore the restaurant's offerings, make reservations, order food online (simulated), read blog posts, and provide feedback.

## 1. Core Features

*   **Home Showcase**: Landing page displaying the restaurant's ambiance, cuisine philosophy, location highlights, mock awards, and information about its (mock) chefs.
*   **Table Reservations**: An interactive form allowing users to select a date, time, number of guests, and seating preference to book a table (simulated submission).
*   **Menu Display**: A categorized menu showcasing various dishes with names, detailed descriptions, prices, and dietary information (e.g., veg, non-veg). Users can filter items by dietary type.
*   **Online Order**: An online ordering system where users can browse menu items by category, add dishes to a cart, manage cart item quantities, view a running total, and simulate a checkout process with a form for delivery details (simulated submission).
*   **Feedback Form**: A dedicated page for customers to submit their name (optional), a star rating, and comments. Recent (mock) reviews are displayed (simulated submission).
*   **Contact Details**: Comprehensive contact information including email, phone number, physical address with a Google Maps link, and direct links to the restaurant's (placeholder) Swiggy and Zomato pages. Social media links are also provided.
*   **Blog**: A section to display promotional or informational blog posts with individual post pages for detailed reading.
*   **Theme Toggle**: A user interface control to switch the application's appearance between light and dark modes, with preferences persisted in `localStorage`.

## 2. Tech Stack

*   **Framework**: Next.js (App Router)
*   **Language**: TypeScript
*   **UI Library**: React
*   **Component Library**: ShadCN UI
*   **Styling**: Tailwind CSS, with CSS HSL Variables for robust theming (light/dark modes).
*   **AI Integration**: Genkit (configured with Google Gemini models, e.g., `googleai/gemini-2.0-flash`). Currently, the AI infrastructure is in place but not utilized for major user-facing features.
*   **Form Handling**: React Hook Form, with Zod for schema validation.
*   **State Management**: Primarily React Context and component state.
*   **Deployment**: Configured for Firebase App Hosting (see `apphosting.yaml`).

## 3. Design & Technical Specifications

### 3.1. Webpage Design UI (Responsive Web Application for Desktop & Mobile)
The application is designed to be fully responsive, adapting its layout and components for optimal viewing and interaction across desktops, tablets, and mobile devices. Key considerations include readable text, touch-friendly targets, and efficient use of screen real estate.

### 3.2. Brand Identity & Design Specifications

#### 3.2.1. Typography
*(As defined in `tailwind.config.ts` and `src/app/layout.tsx`)*

*   **Headline Font**: 'Playfair Display', serif (Used for main page titles, section headings, card titles, and the brand logo)
*   **Body Font**: 'PT Sans', sans-serif (Used for general text content, descriptions, button text, form labels, etc.)
*   **Code Font**: `monospace` (Fallback, defined in `tailwind.config.ts` but not prominently used in current UI).

#### 3.2.2. Color Scheme (Effective Theme from `src/app/globals.css`)

The application uses a warm, inviting color palette centered around browns, reddish-browns, and orange-reds, evoking a sophisticated yet comfortable dining atmosphere.

**Core Theme HSL Variables (Light Mode / Dark Mode):**

*   **Background**:
    *   Light: `hsl(25 50% 91.6%)` (#F5E7DE - Desaturated brown)
    *   Dark: `hsl(25 30% 13%)` (#2A1F18 - Very dark brown)
*   **Foreground (Text)**:
    *   Light: `hsl(25 32% 21%)` (#3D2B1F - Dark brown)
    *   Dark: `hsl(25 25% 85%)` (#E0D8D3 - Light grayish brown)
*   **Primary (Key Brand Color, Headings, Accents)**:
    *   Light: `hsl(25 71% 31%)` (#8B4513 - Saturated reddish-brown)
    *   Dark: `hsl(25 57% 45%)` (#A0522D - Lighter reddish-brown, Sienna)
*   **Primary Foreground (Text on Primary Backgrounds)**:
    *   Light: `hsl(25 50% 95%)` (Light cream)
    *   Dark: `hsl(25 25% 90%)` (Brighter cream)
*   **Accent (Interactive Elements, Highlights)**:
    *   Light: `hsl(25 75% 47%)` (#D2691E - Orange-red, Chocolate)
    *   Dark: `hsl(25 80% 60%)` (#E87A30 - Lighter orange-red)
*   **Accent Foreground (Text on Accent Backgrounds)**:
    *   Light: `hsl(0 0% 100%)` (White)
    *   Dark: `hsl(25 30% 10%)` (Very dark brown)
*   **Card Background**:
    *   Light: `hsl(25 30% 97%)` (Warmer white)
    *   Dark: `hsl(25 32% 21%)` (#3D2B1F - Dark brown)
*   **Card Foreground**:
    *   Light: `hsl(25 32% 21%)` (Dark brown)
    *   Dark: `hsl(25 25% 85%)` (Light grayish brown)
*   **Border**:
    *   Light: `hsl(25 40% 80%)` (Brownish border)
    *   Dark: `hsl(25 25% 30%)` (Darker border)
*   **Input Background**:
    *   Light: `hsl(25 40% 82%)` (Slightly lighter for input)
    *   Dark: `hsl(25 25% 33%)` (Slightly lighter for input on dark)
*   **Destructive (Errors, Warnings)**:
    *   Light: `hsl(0 84.2% 60.2%)` (#f43f5e)
    *   Dark: `hsl(0 62.8% 30.6%)` (#9f1239)

#### 3.2.3. 🌙 Dark Mode & ☀️ Light Mode Variants
Implemented using `ThemeProvider` (`src/components/layout/ThemeProvider.tsx`) and CSS custom properties (variables) in `src/app/globals.css`. The theme system dynamically applies styles for:
*   Backgrounds (page, cards, popovers)
*   Text colors (foreground, muted foreground, primary, accent)
*   Button styles (primary, secondary, accent variants)
*   Borders and input field styles

### 3.3. User Features & Main Pages

#### 3.3.1. 👤 General User Experience
The application is designed for restaurant patrons. There are no distinct user roles like 'admin'; all features are accessible to any visitor.

#### 3.3.2. 📌 Key Pages & Functionality:
*   **Homepage (`/`)**:
    *   Hero section with imagery and call-to-action buttons (Reserve, View Menu).
    *   "Our Story" section with descriptive text and an image.
    *   "Accolades & Recognition" section displaying mock awards.
    *   "Meet Our Culinary Artists" section showcasing mock chef profiles with images and bios.
*   **Menu Page (`/menu`)**:
    *   Displays menu items categorized (Starters, Mains, Desserts, Beverages).
    *   Allows filtering by dietary preference (All, Veg, Non-Veg).
    *   Each menu item is presented in a card with image, name, description, price, and dietary type.
*   **Reservations Page (`/reservations`)**:
    *   A form for users to input their name, email, desired date, time, number of guests, and seating preference.
    *   Includes form validation and displays a mock success message upon submission.
*   **Order Online Page (`/order`)**:
    *   Tabbed interface to browse menu items by category.
    *   Users can add items to a cart.
    *   A persistent cart summary displays items, quantities, and allows quantity updates or item removal.
    *   An order summary calculates subtotal, taxes, and total.
    *   A "Proceed to Checkout" button opens a modal with a form for name, phone, and address.
    *   Includes form validation and displays a mock order confirmation.
*   **Blog Page (`/blog`)**:
    *   Displays a grid of blog post cards, each with an image, title, date, and excerpt.
    *   Clicking a card navigates to the individual blog post page.
*   **Individual Blog Post Page (`/blog/[slug]`)**:
    *   Displays the full content of a selected blog post, including title, date, author (if any), category badge, and main image.
    *   Styled for readability.
*   **Feedback Page (`/feedback`)**:
    *   A form for users to submit their name (optional), a star rating (1-5), and comments.
    *   Simulates submission with a success message and updates a section displaying recent (mock) reviews.
*   **Contact Page (`/contact`)**:
    *   Displays contact information (email, phone, address with map link).
    *   Provides direct links for ordering via Swiggy and Zomato.
    *   Includes links to social media profiles.

#### 3.3.3. 📍 Key Navigation Flows:
1.  **Making a Reservation**:
    User lands on Homepage → Clicks "Reserve a Table" (or navigates via Navbar) → Lands on Reservations Page → Fills out form → Clicks "Reserve Table" → Sees success message.
2.  **Ordering Food Online**:
    User navigates to "Order Online" (via Navbar) → Browses menu → Adds items to Cart → Cart updates → Clicks "Proceed to Checkout" → Fills checkout form → Clicks "Place Order" → Sees success message, cart clears.
3.  **Exploring the Menu**:
    User lands on Homepage → Clicks "View Menu" (or navigates via Navbar) → Lands on Menu Page → Selects dietary filter → Clicks on category tabs → Scrolls to view menu items.
4.  **Reading the Blog**:
    User navigates to "Blog" (via Navbar) → Sees blog posts → Clicks on a post → Lands on the individual blog post page.
5.  **Submitting Feedback**:
    User navigates to "Feedback" (via Navbar) → Fills in form → Clicks "Submit Feedback" → Sees success message → Feedback (mock) appears in "Recent Reviews".
6.  **Changing Theme**:
    User clicks the theme toggle icon (Sun/Moon) in the Navbar → Interface switches between light and dark mode → Preference is saved in browser's `localStorage`.

### 3.4. 💡 Unique Selling Propositions / Key Differentiators

*   **Elegant & Modern UI**: A visually appealing interface built with ShadCN UI and Tailwind CSS.
*   **Comprehensive Restaurant Functionality**: Covers key restaurant interactions: menu browsing, reservations (simulated), online ordering (simulated), and feedback (simulated).
*   **Responsive Design**: Ensures a seamless experience across various devices.
*   **Integrated Theming**: User-selectable light and dark modes enhance accessibility and user preference.

### 3.5. 📌 Data Flow & Backend

#### 3.5.1. 🤖 AI Model Integration (Current Setup)
*   **Core AI Engine**: Genkit framework (`src/ai/genkit.ts`).
*   **Language Models**: Configured to use Google Gemini models (e.g., `googleai/gemini-2.0-flash` as specified in `src/ai/genkit.ts`).
*   **Current Usage**: The Genkit infrastructure is set up, but no specific AI-driven features are currently implemented for the end-user. Form submissions (feedback, reservations, orders) are handled client-side and log data to the console for demonstration.

#### 3.5.2. ☁️ Cloud Services (Relevant to Genkit)
*   **Google AI Platform**: Utilized via the `@genkit-ai/googleai` plugin for accessing Gemini models. Requires a `GOOGLE_API_KEY` in the environment for any potential Genkit operations.

#### 3.5.3. 🔒 User Data Management
*   **Theme Preference**: Stored client-side in the browser's `localStorage`.
*   **Form Submissions (Reservations, Orders, Feedback)**: Currently, data is handled client-side.
    *   Input data is collected using React Hook Form.
    *   On submission, data is logged to the console (simulating a backend call).
    *   Mock success messages are displayed to the user.
    *   The feedback form updates a client-side list of (mock) recent reviews.
*   **No Persistent User Accounts**: The application does not currently feature user registration or login.
*   **No Server-Side Database for User Data**: Order history, reservation details, and feedback are not persistently stored on a server.

### 3.6. ⚙️ UI Components & Design Patterns

#### 3.6.1. 🧩 Key UI Components Used (ShadCN UI & Custom)
*   **Layout & Navigation**: `Navbar`, `Footer`, `ThemeProvider`, `Sheet` (Mobile Menu), `Link` (Next.js).
*   **Content Display**: `Card` components, `Alert`, `Image` (`next/image`), `StarRatingDisplay`, `Badge`, `Separator`, `Tabs`.
*   **Forms & Input**: `Form` (React Hook Form), `Input`, `Textarea`, `Button`, `Calendar`, `Popover`, `Select`, `RadioGroup`, `StarRatingInput`.
*   **Interaction & Feedback**: `Dialog` (Order Checkout), `Toaster`.
*   **Custom Shared Components**: `Logo`, `SectionWrapper`.

#### 3.6.2. 🎨 Theming & Styling Approach
*   **Dark/Light Mode**: Managed by `ThemeProvider` toggling a `.dark` class.
*   **CSS HSL Variables**: Defined in `src/app/globals.css` for themes.
*   **Tailwind CSS**: Used for all utility-first styling.
*   **`cn` Utility**: For merging Tailwind classes.

## 4. Getting Started

Follow these instructions to get a local copy of Culinary Canvas up and running.

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn

### Environment Variables

If you plan to experiment with Genkit (even though it's not driving features currently), a `GOOGLE_API_KEY` is typically required:

1.  Create a `.env` file in the root of the project.
2.  Add your Google AI API key:
    ```env
    GOOGLE_API_KEY=your_google_api_key_here
    ```

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/shivam367/CulinaryCanvas.git
    cd CulinaryCanvas
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

2.  If you intend to use or develop Genkit AI flows in the future, you can start the Genkit development server in a separate terminal (optional for current functionality):
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
    *   `(default)/`: Layout for main application pages (if used, currently pages are in root or specific route groups).
    *   `blog/`, `contact/`, `feedback/`, `menu/`, `order/`, `reservations/`: Route groups for specific pages.
    *   `globals.css`: Global styles and Tailwind CSS theme variables.
    *   `layout.tsx`: Root layout for the entire application.
    *   `page.tsx`: Homepage.
*   `src/components/`: Reusable React components.
    *   `layout/`: Components related to overall page structure.
    *   `sections/`: Components specific to sections of a page.
    *   `shared/`: General-purpose shared components.
    *   `ui/`: ShadCN UI components.
*   `src/lib/`: Utility functions, constants, type definitions (`constants.ts` contains mock data).
*   `src/hooks/`: Custom React hooks.
*   `src/ai/`: Genkit AI integration setup (`genkit.ts`, `dev.ts`). The `flows/` directory is conventional for Genkit flows but is currently empty.
*   `public/`: Static assets like images (`public/media/` contains application images).
*   `next.config.ts`: Next.js configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration.
*   `components.json`: ShadCN UI configuration.
*   `apphosting.yaml`: Firebase App Hosting configuration.

## 6. Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing coding style.

## 7. License

This project is licensed under the MIT License.
```
MIT License

Copyright (c) [Year] [Your Name/Company Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

