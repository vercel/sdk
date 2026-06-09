# UploadProjectAvatarLink


## Supported Types

### `models.UploadProjectAvatarLink1`

```typescript
const value: models.UploadProjectAvatarLink1 = {
  org: "<value>",
  type: "github",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UploadProjectAvatarLink2`

```typescript
const value: models.UploadProjectAvatarLink2 = {
  type: "github-limited",
  org: "<value>",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://amazing-horde.name",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UploadProjectAvatarLink3`

```typescript
const value: models.UploadProjectAvatarLink3 = {
  org: "<value>",
  type: "github-custom-host",
  host: "limited-popularity.com",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://new-spring.name/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UploadProjectAvatarLink4`

```typescript
const value: models.UploadProjectAvatarLink4 = {
  projectId: "<id>",
  projectName: "<value>",
  projectNameWithNamespace: "<value>",
  projectNamespace: "<value>",
  projectUrl: "https://staid-legislature.org/",
  type: "gitlab",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://polite-exasperation.biz/",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UploadProjectAvatarLink5`

```typescript
const value: models.UploadProjectAvatarLink5 = {
  name: "<value>",
  slug: "<value>",
  owner: "<value>",
  type: "bitbucket",
  uuid: "dd1ccdd2-a182-46b7-af05-0abf915ab0ba",
  workspaceUuid: "<id>",
  deployHooks: [],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

### `models.UploadProjectAvatarLink6`

```typescript
const value: models.UploadProjectAvatarLink6 = {
  org: "<value>",
  repo: "<value>",
  type: "vercel",
  deployHooks: [
    {
      id: "<id>",
      name: "<value>",
      ref: "<value>",
      url: "https://flashy-venom.net",
    },
  ],
  gitCredentialId: "<id>",
  productionBranch: "<value>",
};
```

