# GetTeamsTeams


## Supported Types

### `models.Team`

```typescript
const value: models.Team = {
  id: "team_nllPyCtREAqxxdyFKbbMDlxd",
  creatorId: "R6efeCJQ2HKXywuasPDc0fOWB",
  updatedAt: 1611796915677,
  emailDomain: "example.com",
  saml: {
    connection: {
      status: "linked",
      type: "OktaSAML",
      state: "active",
      connectedAt: 1611796915677,
      lastReceivedWebhookEvent: 1611796915677,
    },
    directory: {
      type: "OktaSAML",
      state: "active",
      connectedAt: 1611796915677,
      lastReceivedWebhookEvent: 1611796915677,
    },
    enforced: false,
  },
  inviteCode: "hasihf9e89",
  description: "Our mission is to make cloud computing accessible to everyone.",
  stagingPrefix: "<value>",
  previewDeploymentSuffix: "example.dev",
  slug: "my-team",
  name: "My Team",
  avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
  membership: {
    confirmed: false,
    confirmedAt: 2738.3,
    role: "MEMBER",
    createdAt: 7074.8,
    created: 7786.93,
  },
  createdAt: 1630748523395,
};
```

### `models.TeamLimited`

```typescript
const value: models.TeamLimited = {
  limited: true,
  limitedBy: [],
  saml: {
    connection: {
      type: "OktaSAML",
      status: "linked",
      state: "active",
      connectedAt: 1611796915677,
      lastReceivedWebhookEvent: 1611796915677,
    },
    directory: {
      type: "OktaSAML",
      state: "active",
      connectedAt: 1611796915677,
      lastReceivedWebhookEvent: 1611796915677,
    },
    enforced: true,
  },
  id: "team_nllPyCtREAqxxdyFKbbMDlxd",
  slug: "my-team",
  name: "My Team",
  avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
  membership: {
    confirmed: true,
    confirmedAt: 7470.91,
    role: "DEVELOPER",
    createdAt: 964.08,
    created: 6198.36,
  },
  createdAt: 1630748523395,
};
```

