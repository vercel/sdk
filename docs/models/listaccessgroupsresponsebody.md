# ListAccessGroupsResponseBody


## Supported Types

### `models.ListAccessGroupsResponseBody1`

```typescript
const value: models.ListAccessGroupsResponseBody1 = {};
```

### `models.ListAccessGroupsResponseBody2`

```typescript
const value: models.ListAccessGroupsResponseBody2 = {
  accessGroups: [
    {
      accessGroupId: "ag_123a6c5209bc3778245d011443644c8d27dc2c50",
      createdAt: "1588720733602",
      isDsyncManaged: true,
      membersCount: 5,
      name: "my-access-group",
      projectsCount: 2,
      teamId: "team_123a6c5209bc3778245d011443644c8d27dc2c50",
      teamRoles: [
        "DEVELOPER",
        "BILLING",
      ],
      updatedAt: "1588720733602",
    },
  ],
  pagination: {
    count: 2726.07,
    next: "<value>",
  },
};
```

