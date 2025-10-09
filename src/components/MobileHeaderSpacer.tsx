/**
 * Mobile Header Spacer Component
 * 
 * This component provides spacing for the fixed navigation bar on mobile devices.
 * It prevents content from being hidden behind the navbar.
 * 
 * Usage:
 * - Add at the top of page components that need spacing from the fixed navbar
 * - Only visible on mobile devices (< md breakpoint)
 * - Height matches the navbar height (h-28)
 */

const MobileHeaderSpacer = () => {
  return <div className="h-28 md:h-0" aria-hidden="true" />;
};

export default MobileHeaderSpacer;