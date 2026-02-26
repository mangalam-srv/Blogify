# Blogify Design System & Style Guide

## Color Palette

### Core Colors
```
Primary (Dark): #111827
Accent (Blue):  #2563EB
Success:        #16A34A
Danger:         #DC2626

Background:     #F8FAFC
Surface:        #FFFFFF
Border:         #E5E7EB
Muted Text:     #6B7280
Light Text:     #9CA3AF
```

### Usage Rules
- **Primary (#111827)**: Headings, main text, primary backgrounds
- **Accent (#2563EB)**: Links, buttons, active states, important elements
- **Background (#F8FAFC)**: Page background, light sections
- **Surface (#FFFFFF)**: Cards, modals, forms
- **Border (#E5E7EB)**: Separators, dividers, input borders
- **Muted (#6B7280)**: Secondary text, descriptions, placeholder
- **Success (#16A34A)**: Approve actions, published status
- **Danger (#DC2626)**: Delete actions, error states

## Typography

### Font Family
Primary: **Inter** (via Google Fonts)
Fallback: System UI sans-serif

### Type Scale
```
Display:  44px - bold    (Not regularly used)
H1:       40px - bold    (Page titles, hero headings)
H2:       28px - 600     (Section headings)
H3:       20px - 600     (Subsection headings)
Body:     16px - 400     (Regular text)
Small:    14px - 400     (Secondary text, captions)
Tiny:     12px - 400     (UI labels, small text)
```

### Line Heights
- Display/Headers: 1.2
- Body text: 1.6
- Rich text content: 1.7-1.8 (for readability)

### Letter Spacing
- Normal: 0 (default)
- Headings: -0.01em (tight)

## Spacing Scale (8px base)

```
0:   0px
1:   8px    ← minimum padding/margin
2:   16px   ← standard spacing
3:   24px   ← section spacing
4:   32px   ← large spacing
5:   40px   ← extra large
6:   48px
```

### Application Rules
- Buttons: 8px sides, 12px top/bottom (md size)
- Cards: 24px padding (md size)
- Sections: 24-32px gap between items
- Page sections: 64px top/bottom margin

## Component Sizing

### Button Sizes
```
sm:  px-3 py-1.5 text-sm
md:  px-4 py-2   text-base
lg:  px-6 py-3   text-lg
```

### Border Radius
```
Small:  4px    (small elements)
Medium: 8px    (standard - cards, inputs)
Large:  12px   (rounded-xl - cards, buttons)
Full:   9999px (rounded-full - badges, pills)
```

### Shadows
```
None:      no box-shadow
Subtle:    0 1px 2px 0 rgba(0,0,0,0.05)
Default:   0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)
Elevated:  0 10px 15px -3px rgba(0,0,0,0.1)
```

## Component Patterns

### Button Variants

#### Primary Button
- Background: #2563EB
- Text: White
- Hover: #1d4ed8 (darker blue)
- Active: #1e40af (even darker)
- Focus: Ring with #2563EB

#### Secondary Button
- Background: #F3F4F6
- Text: #111827
- Border: #E5E7EB
- Hover: #E5E7EB
- Focus: Ring with #2563EB

#### Danger Button
- Background: #DC2626
- Text: White
- Hover: #991b1b
- Focus: Ring with #DC2626

#### Ghost Button
- Background: transparent
- Text: #111827
- Hover: #F3F4F6
- Focus: Ring with #2563EB

### Form Elements

#### Input Styling
- Border: 1px #E5E7EB
- Focus: 2px ring #2563EB + transparent border
- Padding: 10px 16px (2.5py 4px)
- Border radius: 8px (rounded-lg)
- Placeholder: #9CA3AF

#### Label Styling
- Font size: 14px (text-sm)
- Font weight: 500 (medium)
- Color: #111827
- Margin bottom: 8px

### Card Styling
- Background: #FFFFFF
- Border: 1px #E5E7EB
- Border radius: 12px (rounded-xl)
- Shadow: subtle
- Padding: 24px (default)
- Hover: lift effect (-4px), shadow elevation

### Badge Styling
- Padding: 4px 12px (py-1 px-3)
- Border radius: 9999px (rounded-full)
- Font size: 14px (text-sm)
- Font weight: 500 (medium)

### Table Styling
- Header background: #F9FAFB
- Header text: #111827 bold
- Body text: #6B7280
- Row border: 1px #E5E7EB
- Row hover: #F9FAFB background
- Cell padding: 16px top/bottom (py-4), 24px left/right (px-6)

## Interaction Principles

### Transitions
- Default duration: 200ms
- Easing: ease (ease-in-out)
- Properties: color, background-color, border-color, box-shadow

### Hover Effects
1. **Buttons**: Slight darkening or background change
2. **Cards**: Lift effect (-4px translate) + shadow increase
3. **Links**: Color change + underline (in rich text)
4. **Inputs**: Border/ring color change
5. **Table rows**: Background color change

### Focus States
- All interactive elements have 2px focus ring
- Ring color matches component color scheme
- Ring offset: 2px (white space between element and ring)

### Active States
- Buttons: Darker shade of base color
- Nav items: Accent background or border highlight
- Checkboxes/selects: Accent color ring

### Disabled States
- Opacity: 50% (disabled:opacity-50)
- Cursor: not-allowed
- No hover effects
- Muted text color

### Loading States
- Spinner animation: 1s rotation loop
- Subtle overlay: rgba(0,0,0,0.1)
- Center alignment

## Layout Patterns

### Container Width
- Max width: 1280px (max-w-7xl)
- Padding: 24px sm:48px lg:80px
- Responsive: adjust for mobile

### Section Spacing
- Top/Bottom: 64px (py-16 sm:py-24)
- Between items: 32px gap
- Between sections: 64px

### Grid Columns
- Desktop: 3 columns (lg:grid-cols-3)
- Tablet: 2 columns (md:grid-cols-2)
- Mobile: 1 column (grid-cols-1)
- Gap: 32px (gap-8)

### Admin Layout
- Sidebar: 256px (w-64)
- Mobile sidebar: 80px (lg:w-20)
- Main content: flex-1
- Max content width: 1280px

## Accessibility Requirements

### Color Contrast
- Large text: 3:1 minimum ratio (4.5:1 recommended)
- Normal text: 4.5:1 minimum ratio (7:1 recommended)
- UI components: 3:1 minimum ratio

### Focus Management
- All interactive elements must be focusable
- Focus order should be logical
- Focus indicators must be visible

### Text
- Font size minimum: 12px (exceptions allowed)
- Line height: 1.5+ for body text
- Letter spacing: 0 (no compression)

### Images
- All images need alt text
- Decorative images: alt=""
- Functional images: descriptive alt text

### Forms
- Every input needs associated label
- Error messages linked to inputs
- Success/validation feedback provided

### Semantics
- Use semantic HTML (nav, article, section, aside, etc.)
- Proper heading hierarchy (h1 → h2 → h3)
- Links should have descriptive text

## Dark Mode Considerations

Currently: Light theme with dark accents
Future dark mode implementation:
- Swap primary (#111827) with #FFFFFF
- Swap surface (#FFFFFF) with #1F2937
- Adjust contrasts accordingly
- Test WCAG compliance

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Assets & Icons

### Icons
- Emoji-based: 📊, ✍️, 📝, 💬 (in admin sidebar)
- Character-based: ✓, ✕ (in tables)
- SVG recommended for complex icons

### Images
- Featured images: Aspect ratio 16:9
- Thumbnails: Square (1:1)
- Avatars: Circle, 40px minimum
- Optimize: JPG/WebP for photos, PNG for graphics

## Code Examples

### Using the Design System in Components

```jsx
// Button with proper styling
<Button 
  variant="primary" 
  size="md" 
  className="w-full"
>
  Action
</Button>

// Card with proper spacing
<Card className="p-6 hover:shadow-lg">
  <h3 className="text-lg font-semibold text-[#111827] mb-4">
    Title
  </h3>
  <p className="text-[#6B7280]">Content</p>
</Card>

// Input with label and error
<Input
  label="Email Address"
  type="email"
  placeholder="user@example.com"
  error={error ? "Invalid email" : ""}
  required
/>

// Badge for status
<Badge variant="success" size="sm">
  Published
</Badge>
```

## Maintenance

### Updating Colors
1. Update color variables in `tailwind.config.js`
2. Update color constants in this guide
3. Update Tailwind classes in components
4. Test contrast ratios

### Adding New Components
1. Follow existing component structure
2. Use design system colors and spacing
3. Ensure accessibility (focus states, semantics)
4. Add to `components/UI/index.js` barrel export
5. Document component usage

### Modifying Spacing
1. Update in `tailwind.config.js` extends
2. Use consistent 8px base unit
3. Test responsive behavior

### Font Changes
1. Update Google Fonts import in `index.css`
2. Update `tailwind.config.js` fontFamily
3. Test all font weights
4. Update this guide

---

**Last Updated**: 2026
**Version**: 1.0
**Status**: Production Ready
