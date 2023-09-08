import { authMiddleware } from "@clerk/nextjs";

// [/] หน้าเริ่มต้นไป / landing pages
export default authMiddleware({
    publicRoutes: ['/']
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};