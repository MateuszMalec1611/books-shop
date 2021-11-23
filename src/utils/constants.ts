const size = {
    mobileBreakpoint: '768px',
    tabletBreakpoint: '992px',
    desktopBreakpoint: '1200px',
    largeDesktopBreakpoint: '1400px',
};

export const device = {
    mobileBreakpoint: `(min-width: ${size.mobileBreakpoint})`,
    tabletBreakpoint: `(min-width: ${size.tabletBreakpoint})`,
    desktopBreakpoint: `(min-width: ${size.desktopBreakpoint})`,
    largeDesktopBreakpoint: `(min-width: ${size.largeDesktopBreakpoint})`,
};
