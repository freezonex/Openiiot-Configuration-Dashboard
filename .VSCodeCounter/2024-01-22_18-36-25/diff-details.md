# Diff Details

Date : 2024-01-22 18:36:25

Directory /Users/yangyueHelen/Desktop/material-ui-nextjs

Total : 65 files,  3813 codes, -4 comments, 157 blanks, all 3966 lines

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.env](/.env) | Properties | 0 | 0 | 1 | 1 |
| [README.md](/README.md) | Markdown | 1 | -1 | 0 | 0 |
| [jsconfig.json](/jsconfig.json) | JSON with Comments | 3 | -4 | 1 | 0 |
| [next.config.js](/next.config.js) | JavaScript | 8 | 1 | 1 | 10 |
| [package-lock.json](/package-lock.json) | JSON | 966 | 0 | 0 | 966 |
| [package.json](/package.json) | JSON | 3 | 0 | 0 | 3 |
| [prisma/schema.prisma](/prisma/schema.prisma) | Prisma | 1 | 0 | 0 | 1 |
| [public/images/Freezonex.svg](/public/images/Freezonex.svg) | XML | 11 | 0 | 1 | 12 |
| [server.js](/server.js) | JavaScript | -44 | -1 | -7 | -52 |
| [src/app/(dashboard)/apps/create/page.js](/src/app/(dashboard)/apps/create/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/apps/edit/[id]/page.js](/src/app/(dashboard)/apps/edit/%5Bid%5D/page.js) | JavaScript | 9 | 0 | 2 | 11 |
| [src/app/(dashboard)/apps/page.js](/src/app/(dashboard)/apps/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/cores/create/page.js](/src/app/(dashboard)/cores/create/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/cores/edit/[id]/page.js](/src/app/(dashboard)/cores/edit/%5Bid%5D/page.js) | JavaScript | 9 | 0 | 2 | 11 |
| [src/app/(dashboard)/cores/page.js](/src/app/(dashboard)/cores/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/edges/create/page.js](/src/app/(dashboard)/edges/create/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/edges/edit/[id]/page.js](/src/app/(dashboard)/edges/edit/%5Bid%5D/page.js) | JavaScript | 9 | 0 | 2 | 11 |
| [src/app/(dashboard)/edges/page.js](/src/app/(dashboard)/edges/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/flows/create/page.js](/src/app/(dashboard)/flows/create/page.js) | JavaScript | -221 | -2 | -20 | -243 |
| [src/app/(dashboard)/flows/page.js](/src/app/(dashboard)/flows/page.js) | JavaScript | -1 | -8 | -1 | -10 |
| [src/app/(dashboard)/layout.js](/src/app/(dashboard)/layout.js) | JavaScript | -5 | 1 | 0 | -4 |
| [src/app/(dashboard)/tenants/create/page.js](/src/app/(dashboard)/tenants/create/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/tenants/edit/[name]/page.js](/src/app/(dashboard)/tenants/edit/%5Bname%5D/page.js) | JavaScript | 9 | 0 | 2 | 11 |
| [src/app/(dashboard)/tenants/page.js](/src/app/(dashboard)/tenants/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/user/page.js](/src/app/(dashboard)/user/page.js) | JavaScript | -6 | 0 | -3 | -9 |
| [src/app/(dashboard)/users/create/page.js](/src/app/(dashboard)/users/create/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/(dashboard)/users/edit/[name]/page.js](/src/app/(dashboard)/users/edit/%5Bname%5D/page.js) | JavaScript | 9 | 0 | 2 | 11 |
| [src/app/(dashboard)/users/page.js](/src/app/(dashboard)/users/page.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/app/api/user/[name]/[role]/route.js](/src/app/api/user/%5Bname%5D/%5Brole%5D/route.js) | JavaScript | -23 | -1 | -2 | -26 |
| [src/components/Home/AppDashboard/AppForm.js](/src/components/Home/AppDashboard/AppForm.js) | JavaScript | 269 | 0 | 6 | 275 |
| [src/components/Home/AppDashboard/AppTable.js](/src/components/Home/AppDashboard/AppTable.js) | JavaScript | 141 | 0 | 8 | 149 |
| [src/components/Home/AppDashboard/OverviewLayout.js](/src/components/Home/AppDashboard/OverviewLayout.js) | JavaScript | 65 | 0 | 4 | 69 |
| [src/components/Home/CoreDashboard/CoreForm.js](/src/components/Home/CoreDashboard/CoreForm.js) | JavaScript | 268 | 0 | 6 | 274 |
| [src/components/Home/CoreDashboard/CoreTable.js](/src/components/Home/CoreDashboard/CoreTable.js) | JavaScript | 140 | 1 | 8 | 149 |
| [src/components/Home/CoreDashboard/OverviewLayout.js](/src/components/Home/CoreDashboard/OverviewLayout.js) | JavaScript | 65 | 0 | 4 | 69 |
| [src/components/Home/EdgeDashboard/EdgeForm.js](/src/components/Home/EdgeDashboard/EdgeForm.js) | JavaScript | 273 | 0 | 5 | 278 |
| [src/components/Home/EdgeDashboard/EdgeTable.js](/src/components/Home/EdgeDashboard/EdgeTable.js) | JavaScript | 140 | 0 | 8 | 148 |
| [src/components/Home/EdgeDashboard/OverviewLayout.js](/src/components/Home/EdgeDashboard/OverviewLayout.js) | JavaScript | 65 | 0 | 4 | 69 |
| [src/components/Home/FlowDashboard/CreateFlow.js](/src/components/Home/FlowDashboard/CreateFlow.js) | JavaScript | 286 | 2 | 20 | 308 |
| [src/components/Home/FlowDashboard/FlowTable.js](/src/components/Home/FlowDashboard/FlowTable.js) | JavaScript | 134 | 0 | 8 | 142 |
| [src/components/Home/FlowDashboard/OverviewLayout.js](/src/components/Home/FlowDashboard/OverviewLayout.js) | JavaScript | 65 | 0 | 4 | 69 |
| [src/components/Home/Overview.js](/src/components/Home/Overview.js) | JavaScript | -173 | 0 | -6 | -179 |
| [src/components/Home/OverviewLayout.js](/src/components/Home/OverviewLayout.js) | JavaScript | -39 | 0 | -3 | -42 |
| [src/components/Home/SideNav.js](/src/components/Home/SideNav.js) | JavaScript | -152 | -1 | -14 | -167 |
| [src/components/Home/SideNav/AppNav.js](/src/components/Home/SideNav/AppNav.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/components/Home/SideNav/CoreNav.js](/src/components/Home/SideNav/CoreNav.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/components/Home/SideNav/EdgeNav.js](/src/components/Home/SideNav/EdgeNav.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/components/Home/SideNav/FlowNav.js](/src/components/Home/SideNav/FlowNav.js) | JavaScript | 86 | 0 | 4 | 90 |
| [src/components/Home/SideNav/SideNav.js](/src/components/Home/SideNav/SideNav.js) | JavaScript | 119 | 5 | 14 | 138 |
| [src/components/Home/SideNav/TenantNav.js](/src/components/Home/SideNav/TenantNav.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/components/Home/SideNav/UserNav.js](/src/components/Home/SideNav/UserNav.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/components/Home/TenantDashboard/OverviewLayout.js](/src/components/Home/TenantDashboard/OverviewLayout.js) | JavaScript | 57 | 0 | 4 | 61 |
| [src/components/Home/TenantDashboard/TenantForm.js](/src/components/Home/TenantDashboard/TenantForm.js) | JavaScript | 215 | 0 | 3 | 218 |
| [src/components/Home/TenantDashboard/TenantTable.js](/src/components/Home/TenantDashboard/TenantTable.js) | JavaScript | 152 | 0 | 10 | 162 |
| [src/components/Home/UserDashboard/OverviewLayout.js](/src/components/Home/UserDashboard/OverviewLayout.js) | JavaScript | 57 | 0 | 4 | 61 |
| [src/components/Home/UserDashboard/UserForm.js](/src/components/Home/UserDashboard/UserForm.js) | JavaScript | 267 | 0 | 6 | 273 |
| [src/components/Home/UserDashboard/UserTable.js](/src/components/Home/UserDashboard/UserTable.js) | JavaScript | 138 | 0 | 9 | 147 |
| [src/components/Login/Login.js](/src/components/Login/Login.js) | JavaScript | 132 | 0 | 7 | 139 |
| [src/components/NoderedIcon.js](/src/components/NoderedIcon.js) | JavaScript | -25 | 0 | -3 | -28 |
| [src/components/Utils/Logo.js](/src/components/Utils/Logo.js) | JavaScript | 49 | 0 | 4 | 53 |
| [src/components/Utils/NoderedIcon.js](/src/components/Utils/NoderedIcon.js) | JavaScript | 25 | 0 | 3 | 28 |
| [src/config.js](/src/config.js) | JavaScript | 14 | 0 | 1 | 15 |
| [src/static/image/Freezonex.svg](/src/static/image/Freezonex.svg) | XML | -23 | 0 | -2 | -25 |
| [src/utils/actions.js](/src/utils/actions.js) | JavaScript | 35 | 2 | 6 | 43 |
| [src/utils/http.js](/src/utils/http.js) | JavaScript | 25 | 2 | -1 | 26 |

[Summary](results.md) / [Details](details.md) / [Diff Summary](diff.md) / Diff Details