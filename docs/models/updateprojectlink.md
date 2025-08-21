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
  projectId: "<id>",
  projectName: "<value>",
  projectNameWithNamespace: "<value>",
  projectNamespace: "<value>",
  projectUrl: "https://these-railway.info/",
  type: "gitlab",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink4`

```typescript
const value: models.UpdateProjectLink4 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "29c344fb-ec55-4e0b-9ed8-51a768225fd2",
  workspaceUuid: "<id>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://rundown-violin.com/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UpdateProjectLink5`

```typescript
const value: models.UpdateProjectLink5 = {
  org: "<value>",
  type: "github-custom-host",
  host: "outrageous-embossing.info",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://tight-peony.name",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

