# Lenis Smooth Scrolling Integration

This project now includes [Lenis](https://lenis.studiofreight.com/) for smooth, high-performance scrolling. Lenis provides butter-smooth scrolling with GPU acceleration and customizable easing.

## Features

- ✅ Smooth scrolling throughout the entire website
- ✅ GPU-accelerated performance
- ✅ Custom easing function for natural movement
- ✅ Automatic initialization on app start
- ✅ Utility functions for programmatic scrolling
- ✅ Back to top button with smooth scrolling
- ✅ Fallback to native scrolling if needed

## Files Added/Modified

### New Files
- `src/hooks/use-lenis.ts` - React hook for initializing Lenis
- `src/lib/scroll-utils.ts` - Utility functions for smooth scrolling
- `src/components/BackToTopButton.tsx` - Smooth back-to-top button

### Modified Files
- `src/App.tsx` - Integrated Lenis hook and BackToTopButton
- `src/index.css` - Disabled default smooth scrolling
- `package.json` - Added Lenis dependency

## Usage

### Automatic Smooth Scrolling
Lenis is automatically initialized when the app loads. All scrolling (mouse wheel, scrollbar, touch) will be smooth.

### Programmatic Scrolling
Use the utility functions for smooth scrolling in your components:

```tsx
import { scrollToTop, scrollToElement, scrollBy } from '@/lib/scroll-utils';

// Scroll to top smoothly
const handleScrollToTop = () => {
  scrollToTop();
};

// Scroll to a specific element
const handleScrollToSection = () => {
  scrollToElement('#section-id', -100); // -100px offset for header
};

// Scroll by a specific amount
const handleScrollDown = () => {
  scrollBy(500); // Scroll down 500px
};
```

### Scroll to Element Examples
```tsx
// By ID
scrollToElement('#hero-section');

// By class (first match)
scrollToElement('.content-section');

// By element reference
const elementRef = useRef<HTMLDivElement>(null);
scrollToElement(elementRef.current);

// With offset (useful for fixed headers)
scrollToElement('#section', -80); // 80px offset for navigation
```

### Navigation Links with Smooth Scrolling
If you want navigation links to scroll smoothly within the same page:

```tsx
import { scrollToElement } from '@/lib/scroll-utils';

const SmoothNavLink = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#target-section', -100);
  };

  return (
    <a href="#target-section" onClick={handleClick}>
      Go to Section
    </a>
  );
};
```

## Configuration

The Lenis configuration is set in `src/hooks/use-lenis.ts`:

```tsx
const lenis = new Lenis({
  duration: 1.2,  // Scroll duration in seconds
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
});
```

### Available Options
- `duration`: Animation duration (default: 1.2)
- `easing`: Easing function for smooth animation
- `wheelMultiplier`: Mouse wheel sensitivity
- `touchMultiplier`: Touch scroll sensitivity
- `infinite`: Enable infinite scrolling

## Performance Considerations

- Lenis uses `requestAnimationFrame` for smooth 60fps scrolling
- GPU acceleration is automatically enabled
- Minimal performance impact on modern browsers
- Graceful fallback to native scrolling if needed

## Browser Support

Lenis works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Troubleshooting

### Scrolling Not Working
1. Check browser console for errors
2. Ensure Lenis is properly initialized (check network tab)
3. Verify no CSS conflicts with `overflow` properties

### Performance Issues
1. Reduce `duration` value for faster scrolling
2. Simplify easing function
3. Check for other scroll libraries conflicts

### Mobile Issues
1. Lenis handles touch scrolling automatically
2. Set `smoothTouch: true` in config if needed
3. Adjust `touchMultiplier` for sensitivity

## Examples in This Project

1. **Back to Top Button**: `src/components/BackToTopButton.tsx`
   - Appears after scrolling 400px
   - Uses `scrollToTop()` utility
   - Smooth fade in/out animation

2. **Navigation Scroll Detection**: `src/components/Navigation.tsx`
   - Already listens to scroll events
   - Can be enhanced with Lenis scroll progress

## Advanced Usage

### Listening to Scroll Events
```tsx
useEffect(() => {
  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    });
  }
}, []);
```

### Stopping/Starting Lenis
```tsx
const lenis = (window as any).lenis;
if (lenis) {
  lenis.stop(); // Stop smooth scrolling
  lenis.start(); // Resume smooth scrolling
}
```

### Custom Scroll Target
```tsx
// Scroll to specific coordinates
lenis.scrollTo(1000); // Scroll to 1000px from top
lenis.scrollTo(1000, { duration: 2 }); // Custom duration
```

## Next Steps

1. **Section Anchors**: Add smooth scrolling to any anchor links
2. **Scroll Animations**: Integrate with scroll-triggered animations
3. **Progress Indicators**: Add scroll progress bars
4. **Parallax Effects**: Combine with parallax scrolling
5. **Horizontal Scrolling**: Set up horizontal scroll sections

For more advanced features, visit the [Lenis documentation](https://github.com/studio-freight/lenis).