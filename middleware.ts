import { createAuthMiddleware } from 'cosmic-authentication';

// Create middleware with protected routes
// All configuration can now be optional - defaults are handled internally
export const middleware = createAuthMiddleware({
  protectedRoutes: [
    // No protected routes for now
    // Uncomment below to protect routes (example protected pages)
    // '/projects',
    // '/dashboard',
    // '/settings',
  ]
});

// Use the default matcher config or customize as needed
// Configure middleware to run on Node.js runtime instead of Edge
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|api/|login|callback|auth/|images/|fonts/|static/|public/|favicon.ico).*)',
  ],
  runtime: 'nodejs',
};