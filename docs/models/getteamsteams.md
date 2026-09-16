# GetTeamsTeams


## Supported Types

### `models.Team`

```typescript
const value: models.Team = {
  avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
  billing: {
    plan: "pro",
  },
  createdAt: 1630748523395,
  creatorId: "R6efeCJQ2HKXywuasPDc0fOWB",
  description: "Our mission is to make cloud computing accessible to everyone.",
  emailDomain: "example.com",
  id: "team_nllPyCtREAqxxdyFKbbMDlxd",
  inviteCode: "hasihf9e89",
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
};
```

### `models.TeamLimited`

```typescript
const value: models.TeamLimited = {
  avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
  createdAt: 1630748523395,
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
};
```

