# GetTeamsTeams


## Supported Types

### `models.Team`

```typescript
const value: models.Team = {
  id: "ABCDEFG000011111",
  data: {
    query: "<value>",
    creatorId: "<id>",
    title: "<value>",
    groupId: "<id>",
    ownerId: "<id>",
    projectId: "<id>",
    createdAt: 5042.66,
  },
};
```

### `models.TeamLimited`

```typescript
const value: models.TeamLimited = {
  limited: false,
  limitedBy: [
    "scope",
  ],
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
    enforced: false,
  },
  id: "team_nllPyCtREAqxxdyFKbbMDlxd",
  slug: "my-team",
  name: "My Team",
  avatar: "6eb07268bcfadd309905ffb1579354084c24655c",
  membership: {
    confirmed: false,
    confirmedAt: 2822.91,
    role: "DEVELOPER",
    createdAt: 4110.54,
    created: 7470.91,
  },
  created: "<value>",
  createdAt: 1630748523395,
};
```

