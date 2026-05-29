import { requireAuth } from '@clerk/express';

export const protectRoute = [
    requireAuth({signInUrl: "/sign-in"}), // this will ensure the user is authenticated and adds the user object to req.auth()
    async (req, res, next) => {
        try {
            // You can access the authenticated user's info via req.auth()
            const clerkId = req.auth().userId;

            if (!clerkId) {
                return res.status(401).json({ error: 'Unauthorized' });
            }

            //find user in Db by clerkId
            const user = await User.findOne({ clerkId });

            if (!user) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            req.user = user; // attach user to request object for use in route handlers
            next();
        } catch (error) {
            console.error('Error in protectRoute middleware:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }
];