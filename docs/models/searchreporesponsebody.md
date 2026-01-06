# SearchRepoResponseBody


## Supported Types

### `models.SearchRepoResponseBody1`

```typescript
const value: models.SearchRepoResponseBody1 = {};
```

### `models.SearchRepoResponseBody2`

```typescript
const value: models.SearchRepoResponseBody2 = {
  gitAccount: {
    provider: "gitlab",
    namespaceId: 245.69,
  },
  repos: [
    {
      id: "<id>",
      provider: "github",
      url: "https://delectable-taxicab.com",
      name: "<value>",
      slug: "<value>",
      namespace: "<value>",
      owner: {
        id: "<id>",
        name: "<value>",
      },
      ownerType: "team",
      private: true,
      defaultBranch: "<value>",
      updatedAt: 3664.49,
    },
  ],
};
```

