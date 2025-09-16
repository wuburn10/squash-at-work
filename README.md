# 🎾 Squash Academy Landing Page

A modern, responsive landing page for Malaysia's premier squash academy, built with React, Vite, Tailwind CSS, and Framer Motion animations.

## ✨ Features

- **🏠 Hero Section**: Full-screen animated background with compelling call-to-action
- **📋 Programs Section**: Comprehensive program offerings with detailed cards and pricing
- **⚡ Activities Section**: Weekly activities overview with animated icons
- **🏆 Past Events**: Interactive timeline showcasing international tournaments and achievements
- **👥 Coaches Section**: Meet the coaching team with detailed profiles and credentials  
- **💬 Testimonials**: Interactive slider with parent and student testimonials
- **📅 Calendar Section**: Upcoming events with filtering capabilities
- **📞 CTA Footer**: Contact information and final call-to-action

## 🚀 Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **PostCSS & Autoprefixer** - CSS processing

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd squash@work
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design Features

### Animations
- Smooth scroll navigation
- Framer Motion page transitions
- Interactive hover effects
- Loading animations
- Particle effects in hero section

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Responsive typography and spacing

### UI Components
- Animated background with court lines
- Interactive program cards
- Timeline visualization
- Testimonial slider
- Event filtering system
- Sticky navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx    # Hero background animations
│   ├── Navigation.jsx           # Sticky navigation bar
│   ├── HeroSection.jsx         # Hero section with CTA
│   ├── ProgramsSection.jsx     # Programs and pricing
│   ├── ActivitiesSection.jsx   # Weekly activities
│   ├── PastEventsSection.jsx   # Events timeline
│   ├── CoachesSection.jsx      # Coach profiles
│   ├── TestimonialsSection.jsx # Testimonials slider
│   ├── CalendarSection.jsx     # Upcoming events
│   └── CTAFooter.jsx          # Footer with contact info
├── lib/
│   └── utils.js               # Utility functions
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## 🎯 Key Sections

### Hero Section
- Animated squash court background
- Compelling headline and subtext
- Dual call-to-action buttons
- Scroll indicator animation

### Programs Section
- 7 different program offerings
- Detailed program cards with pricing
- Expandable schedule table
- Age group and level indicators

### Activities Section
- 8 weekly activity types
- Icon-based visual design
- Program availability indicators
- Interactive hover effects

### Past Events Section
- Timeline visualization
- International tournament history
- Achievement statistics
- Responsive card layout

### Coaches Section
- 6 coach profiles with credentials
- Specialization and experience details
- Achievement highlights
- Program associations

### Testimonials Section
- Interactive slider with navigation
- Parent and student testimonials
- Video testimonial placeholders
- Rating system with stars

### Calendar Section
- Upcoming events with filtering
- Event categorization
- Priority indicators
- Registration links

## 🔗 External Integrations

- Google Forms integration for registrations
- Social media links (Facebook, Instagram, YouTube)
- External tournament and event links

## 🎨 Customization

### Colors
Primary colors are defined in Tailwind config:
- Orange: `orange-500` (#f97316)
- Slate: `slate-900` (#0f172a)
- Gray variations for text and backgrounds

### Fonts
- System fonts for optimal performance
- Font weights: 400, 500, 600, 700, 800

### Animations
All animations use Framer Motion for consistent performance:
- Page transitions
- Hover effects  
- Loading states
- Scroll-triggered animations

## 📱 Mobile Optimization

- Responsive navigation with hamburger menu
- Touch-friendly interactive elements
- Optimized image and content sizing
- Mobile-specific animations

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes  
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ for Malaysia's premier squash academy**
