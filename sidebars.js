/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	mySidebar: [
		{
			type: "doc",
			id: "home",
			label: "WELCOME",
		},
		{
			type: "category",
			collapsible: false,
			label: "Get Started",
			items: [
				{
					type: "doc",
					id: "tutorials/quickstart",
					label: "Quickstart",
				},
				{
					type: "category",
					label: "Introduction",
					items: [
						{
							type: "doc",
							id: "tutorials/introduction/what-is-permit",
							label: "What is Permit?",
						},
					],
				},
				{
					type: "category",
					label: "Onboarding",
					items: [
						{
							type: "doc",
							id: "tutorials/onboarding/lets-begin",
							label: "Let's begin!",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/your-workspace",
							label: "Your Workspace",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/policy-and-resources",
							label: "Policy & Resources",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/roles-and-permissions",
							label: "Roles & Permissions",
						},
						{
							type: "doc",
							id: "tutorials/onboarding/connect-your-app",
							label: "Connect Your App",
						},
					],
				},
			],
		},
		{
			type: "category",
			label: "Features",
			collapsible: false,
			collapsed: false,
			items: [
				{
					type: "doc",
					id: "features/projects-and-env",
					label: "Projects & Environments",
				},
				{
					type: "category",
					label: "Policy Editor",
					collapsed: false,
					items: [
						{
							type: "doc",
							id: "features/policy-editor/editor-overview",
							label: "Editor Overview",
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "RBAC",
							items: [
								{
									type: "doc",
									id: "features/policy-editor/rbac/overview",
									label: "Overview",
								},
								{
									type: "doc",
									id: "features/policy-editor/rbac/components",
									label: "Components",
								},
								{
									type: "doc",
									id: "features/policy-editor/rbac/building-rbac-policy",
									label: "Building an RBAC Policy",
								},
							],
						},
						{
							type: "category",
							collapsible: true,
							collapsed: true,
							label: "ABAC",
							items: [
								{
									type: "doc",
									id: "features/policy-editor/abac/overview",
									label: "Overview",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/components",
									label: "Components",
								},
								{
									type: "doc",
									id: "features/policy-editor/abac/building-abac-policy",
									label: "Building an ABAC Policy",
								},
							],
						},
					],
				},
				{
					type: "doc",
					id: "features/user-management",
					label: "User Management",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "Audit Logs",
					items: [
						{
							type: "autogenerated",
							dirName: "features/audit-logs",
						},
					],
				},
				{
					type: "doc",
					id: "features/coming-soon",
					label: "Coming Soon",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			label: "Concepts",
			items: [
				{
					type: "doc",
					id: "concepts/authorization-concepts",
					label: "Authorization Concepts",
				},
				{
					type: "doc",
					id: "concepts/control-plane-and-data-plane",
					label: "Control & Data Planes",
				},
				{
					type: "doc",
					id: "concepts/multi-tenancy",
					label: "Multi-Tenancy",
				},
				{
					type: "doc",
					id: "concepts/pdp",
					label: "Policy Decision Point",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: false,
			label: "API",
			items: [
				{
					type: "doc",
					id: "api/migrating-v1-v2",
					label: "Migrating v1 to v2",
				},
				{
					type: "category",
					collapsible: true,
					collapsed: true,
					label: "ABAC API",
					items: [
						{
							type: "doc",
							id: "api/working-with-abac/overview",
							label: "Overview",
						},
						{
							type: "doc",
							id: "api/working-with-abac/operators",
							label: "Operators",
						},
						{
							type: "doc",
							id: "api/working-with-abac/building-conditions",
							label: "Building Conditions",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-sets",
							label: "Condition Sets",
						},
						{
							type: "doc",
							id: "api/working-with-abac/condition-set-rules",
							label: "Condition Set Rules",
						},
						{
							type: "doc",
							id: "api/working-with-abac/examples",
							label: "Examples",
						},
					],
				},
				{
					type: "doc",
					id: "api/api-reference",
					label: "API Reference",
				},
				{
					type: "doc",
					id: "api/api-with-cli",
					label: "API Calls using the CLI",
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			collapsed: true,
			label: "SDK",
			items: [
				{
					type: "category",
					label: "NodeJS",
					items: [
						{
							type: "doc",
							id: "sdk/nodejs/quickstart-nodejs",
							label: "Quickstart",
						},
						{
							type: "category",
							label: "Tenant",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/tenant/get-tenant",
									label: "getTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/create-tenant",
									label: "createTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/update-tenant",
									label: "updateTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/delete-tenant",
									label: "deleteTenant",
								},
								{
									type: "doc",
									id: "sdk/nodejs/tenant/list-tenants",
									label: "listTenants",
								},
							],
						},
						{
							type: "category",
							label: "User",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/user/get-user",
									label: "getUser",
								},
								{
									type: "doc",
									id: "sdk/nodejs/user/create-user",
									label: "createUser",
								},
								{
									type: "doc",
									id: "sdk/nodejs/user/delete-user",
									label: "deleteUser",
								},
							],
						},
						{
							type: "category",
							label: "Role",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/role/get-role",
									label: "getRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/get-assigned-roles",
									label: "getAssignedRoles",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/create-role",
									label: "createRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/update-role",
									label: "updateRoles",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/delete-role",
									label: "deleteRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/assign-role",
									label: "assignRole",
								},
								{
									type: "doc",
									id: "sdk/nodejs/role/unassign-role",
									label: "unassignRole",
								},
							],
						},
						{
							type: "category",
							label: "Resource",
							items: [
								{
									type: "doc",
									id: "sdk/nodejs/resource/create-resource",
									label: "createResource",
								},
								{
									type: "doc",
									id: "sdk/nodejs/resource/update-resource",
									label: "updateResource",
								},
								{
									type: "doc",
									id: "sdk/nodejs/resource/delete-resource",
									label: "deleteResource",
								},
							],
						},
					],
				},
			],
		},
		{
			type: "category",
			collapsible: true,
			label: "Security",
			items: [
				{
					type: "autogenerated",
					dirName: "security",
				},
			],
		},
		{
			type: "category",
			collapsed: true,
			label: "Release Notes",
			items: [
				{
					type: "doc",
					id: "release-notes/v2",
					label: "v. 2.0.0",
				},
			],
		},
		{
			type: "doc",
			id: "faq",
			label: "FAQ",
		},
	],
};

module.exports = sidebars;
