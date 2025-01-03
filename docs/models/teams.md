# Teams


## Supported Types

### `{ [k: string]: any }`

```typescript
const value: { [k: string]: any } = {
  "key": "<value>",
};
```

### `models.TeamLimited`

```typescript
const value: models.TeamLimited = {
  limited: false,
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
    confirmedAt: 6091.64,
    role: "VIEWER",
    createdAt: 761.45,
    created: 1580.60,
  },
  created: "<value>",
  createdAt: 1630748523395,
};
```

