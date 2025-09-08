# UpdateProjectLink


## Supported Types

### `models.UpdateProjectLink1`

```typescript
const value: models.UpdateProjectLink1 = {
  org: "<value>",
  type: "github",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink2`

```typescript
const value: models.UpdateProjectLink2 = {
  type: "github-limited",
  org: "<value>",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink3`

```typescript
const value: models.UpdateProjectLink3 = {
  org: "<value>",
  type: "github-custom-host",
  host: "fatherly-stay.net",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink4`

```typescript
const value: models.UpdateProjectLink4 = {
  projectId: "<id>",
  projectName: "<value>",
  projectNameWithNamespace: "<value>",
  projectNamespace: "<value>",
  projectUrl: "https://pleasant-resource.biz/",
  type: "gitlab",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink5`

```typescript
const value: models.UpdateProjectLink5 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "945badaa-aa44-426f-bd2a-eb05c09da18e",
  workspaceUuid: "<id>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://inconsequential-monster.org",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

