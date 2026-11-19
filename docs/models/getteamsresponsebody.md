# GetTeamsResponseBody

A paginated list of teams.


## Supported Types

### `models.GetTeamsResponseBody1`

```typescript
const value: models.GetTeamsResponseBody1 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  teams: [
    {
      avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
      billing: {
        plan: "pro",
      },
      createdAt: 1630748523395,
      creatorId: "R6efeCJQ2HKXywuasPDc0fOWB",
      defaultDeploymentProtection: {},
      description:
        "Our mission is to make cloud computing accessible to everyone.",
      directorySyncSource: "none",
      emailDomain: "example.com",
      id: "team_nllPyCtREAqxxdyFKbbMDlxd",
      inviteCode: "hasihf9e89",
      limited: false,
      name: "My Team",
      orgRootTeamId: "team_nllPyCtREAqxxdyFKbbMDlxd",
      parentId: "org_nllPyCtREAqxxdyFKbbMDlxd",
      platform: true,
      previewDeploymentSuffix: "example.dev",
      saml: {
        connection: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
          status: "<value>",
        },
        directory: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
        },
        enforced: true,
      },
      slug: "my-team",
      stagingPrefix: "<value>",
      updatedAt: 1611796915677,
    },
  ],
};
```

### `models.GetTeamsResponseBody2`

```typescript
const value: models.GetTeamsResponseBody2 = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  teams: [
    {
      avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
      createdAt: 1630748523395,
      directorySyncSource: "organization",
      id: "team_nllPyCtREAqxxdyFKbbMDlxd",
      limited: true,
      limitedBy: [],
      name: "My Team",
      orgRootTeamId: "team_nllPyCtREAqxxdyFKbbMDlxd",
      parentId: "org_nllPyCtREAqxxdyFKbbMDlxd",
      saml: {
        connection: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
          status: "<value>",
        },
        directory: {
          connectedAt: 1611796915677,
          lastReceivedWebhookEvent: 1611796915677,
          lastSyncedAt: 1611796915677,
          state: "active",
          type: "OktaSAML",
        },
        enforced: true,
      },
      slug: "my-team",
    },
  ],
};
```

