# ResponseBodyLink


## Supported Types

### `models.GetProjectsLink1`

```typescript
const value: models.GetProjectsLink1 = {
  org: "<value>",
  type: "github",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.GetProjectsLink2`

```typescript
const value: models.GetProjectsLink2 = {
  type: "github-limited",
  org: "<value>",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.GetProjectsLink3`

```typescript
const value: models.GetProjectsLink3 = {
  org: "<value>",
  type: "github-custom-host",
  host: "pretty-guide.biz",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://probable-lady.net/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.GetProjectsLink4`

```typescript
const value: models.GetProjectsLink4 = {
  projectId: "<id>",
  projectName: "<value>",
  projectNameWithNamespace: "<value>",
  projectNamespace: "<value>",
  projectUrl: "https://negligible-baritone.biz/",
  type: "gitlab",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://same-baritone.com",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.GetProjectsLink5`

```typescript
const value: models.GetProjectsLink5 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "2c8c1b05-c73d-47ef-8b00-6fd5afb6a034",
  workspaceUuid: "<id>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://sunny-longboat.com",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

