# Iulian's Photo Stories

Act as an expert UI/UX Web Designer and Frontend Developer. Build a premium, modern, and highly responsive single-page portfolio website for a professional photographer named Iulian. 

Design System & Global Styles:

- Theme: Dark Mode Premium.

- Background Color: Dark-Gray #2d2d2d.

- Text Color: White #FFFFFF for headings and primary text, light gray (#cccccc) for secondary text.

- Accent Color: #F6AD1A (use this for primary buttons, active links, hover states, and key highlights).

- Typography: Use "Mariella Noeve" (or a very similar elegant, high-contrast serif/display font if that specific one is unavailable) for all Headings (H1, H2, H3). Use "Poppins" for all body text, paragraphs, and small UI elements. 

- General Layout: Minimalist, spacious (use generous padding between sections, 100px+), using Flexbox and CSS Grid. 

Header & Navigation (Crucial):

- Create a Fixed (sticky) header that stays at the top on scroll. 

- Initial state: Transparent background so it blends seamlessly with the Hero Banner. 

- Scroll state: Add a subtle backdrop-filter (blur) and a semi-transparent #2d2d2d background when scrolling down.

- Layout: Logo on the far left. Centered navigation links (Despre mine, Portofoliu, Testimoniale, Contact). On the far right, a CTA button: "Programează" (Background: #F6AD1A, Text: #2d2d2d, rounded corners, bold Poppins font).

- Mobile/Tablet: Hide standard links and display a Hamburger Menu icon that triggers a smooth, full-height Offcanvas menu.

Section 1: Hero Banner (Overlapping typography style):

- The header must blend into this section. Height: 100vh.

- Layout: Centered alignment. 

- Background: Solid #2d2d2d.

- Typography Layer (z-index: 1): Massive, bold, edge-to-edge text spanning the background saying "POVEȘTILE LUI IULIAN". Make this text outline-only (stroke) or low-opacity solid white (#ffffff with 5% opacity) so it acts as a graphic element.

- Image Layer (z-index: 2): Place a portrait image of the photographer holding a camera (centered). The image should overlap the massive background text. 

- Action Layer (z-index: 3): Positioned at the bottom center of the hero section. Two buttons side-by-side: 

  1. "Ai nevoie de un fotograf?" (Solid #F6AD1A background, #2d2d2d text).

  2. "Cine sunt eu" (Outline button, transparent background, white border, white text, hover effect to #F6AD1A).

Section 2: Despre mine (About me):

- Layout: 2 columns (CSS Grid or Flexbox). 

- Left side: A clean, artistic photo placeholder. 

- Right side: Elegant heading "Despre mine" in Mariella Noeve. Subheading: "Fiecare nuntă este una specială, următoarea este despre voi!". Body text in Poppins describing his passion for storytelling through photography.

Section 3: Fotografii premiate (Award-winning photos):

- Layout: Full-width container with a sleek CSS Masonry Grid or an interactive Slider/Carousel. 

- Image cards should have a subtle hover effect (zoom-in image slightly inside the container, dark gradient overlay appears with the award title in white).

Section 4: Ce spun Protagoniștii (Testimonials):

- Layout: Clean, modern slider or 3-column grid.

- Card design: Slightly lighter gray background (e.g., #383838), soft border-radius. Include quote icon in #F6AD1A, italicized text in Poppins, and the couple's name below. 

Section 5: Avantaje și Beneficii (Advantages & Benefits):

- Layout: 4-column grid.

- Content: Minimalist outline icons (colored in #F6AD1A) followed by a short title (H3) and brief text. (Examples: Echipament Premium, Livrare Rapidă, Experiență, Editare de Top). 

- Keep it highly scannable with plenty of whitespace.

Section 6: Ultimele povești (Latest stories / Portfolio):

- Heading centered. 

- Layout: 3-column photo grid showing recent events/weddings. 

- Hover state: Images should darken slightly, and the name of the event/wedding should fade in at the center. Clean, borderless design.

Section 7: Contact - "Hai să ne cunoaștem":

- Layout: Split screen (50/50).

- Left: Inspiring lifestyle image of the photographer.

- Right: A clean, modern contact form. Floating labels for inputs (Nume, Email, Telefon, Data evenimentului, Mesajul tău). Input fields should have a transparent background with only a bottom border (solid white or light gray), which turns #F6AD1A on focus. Submit button taking full width, colored #F6AD1A.

Section 8: Articole (Blog):

- Layout: 3-column grid featuring the latest 3 articles.

- Card design: Image thumbnail at the top, Title in Mariella Noeve, short excerpt in Poppins, and a "Citește mai mult" link with an arrow icon. Text links hover to #F6AD1A.

Section 9: FAQs (Întrebări frecvente):

- Layout: Centered, max-width 800px. 

- UI Component: Smooth Accordion. Questions in bold Poppins or Mariella Noeve. When clicked, it expands smoothly. A plus/minus icon on the right side of each row that changes to #F6AD1A when active.

Section 10: Footer:

- Minimalist and dark. 

- Logo centered or left-aligned. 

- Quick links, Social Media icon links (minimalist white icons with hover effect to #F6AD1A). 

- Bottom row: Copyright text in small Poppins font. Include a "Back to top" sticky button in the bottom right corner (Subtle #F6AD1A circle with up arrow).

Please generate the complete React/Tailwind code ensuring absolute pixel-perfect responsiveness on mobile, tablet, and desktop.

Attached you can find: 1st image of the photographer, 2nd is the example for the banner, 3rd is the heading font and text font for the banner. Body text should be poppins.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://iulian-portraits-crafted.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e3c6bb7d-8d10-4307-98d5-57e219e27b7a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
