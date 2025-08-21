# CreateProjectLink


## Supported Types

### `models.CreateProjectLink1`

```typescript
const value: models.CreateProjectLink1 = {
  org: "<value>",
  type: "github",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.CreateProjectLink2`

```typescript
const value: models.CreateProjectLink2 = {
  type: "github-limited",
  org: "<value>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://essential-brief.net/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.CreateProjectLink3`

```typescript
const value: models.CreateProjectLink3 = {
  projectId: "<id>",
  projectName: "<value>",
  projectNameWithNamespace: "<value>",
  projectNamespace: "<value>",
  projectUrl: "https://spiffy-rawhide.net/",
  type: "gitlab",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.CreateProjectLink4`

```typescript
const value: models.CreateProjectLink4 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "20e7beaa-9bd9-4e0e-a2ff-1b971429806e",
  workspaceUuid: "<id>",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.CreateProjectLink5`

```typescript
const value: models.CreateProjectLink5 = {
  org: "<value>",
  type: "github-custom-host",
  host: "blue-luck.net",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

