# CreateDeploymentGitSource


## Supported Types

### `models.CreateDeploymentGitSource1`

```typescript
const value: models.CreateDeploymentGitSource1 = {
  type: "github",
  repoId: "<id>",
};
```

### `models.CreateDeploymentGitSource2`

```typescript
const value: models.CreateDeploymentGitSource2 = {
  type: "github",
  org: "<value>",
  repo: "<value>",
};
```

### `models.GitSource3`

```typescript
const value: models.GitSource3 = {
  type: "gitlab",
  projectId: "<id>",
};
```

### `models.GitSource4`

```typescript
const value: models.GitSource4 = {
  type: "bitbucket",
  repoUuid: "<id>",
};
```

### `models.GitSource5`

```typescript
const value: models.GitSource5 = {
  type: "bitbucket",
  owner: "<value>",
  slug: "<value>",
};
```

### `models.CreateDeploymentGitSource6`

```typescript
const value: models.CreateDeploymentGitSource6 = {
  type: "custom",
  ref: "<value>",
  sha: "<value>",
  gitUrl: "https://fruitful-masterpiece.org",
};
```

### `models.CreateDeploymentGitSource7`

```typescript
const value: models.CreateDeploymentGitSource7 = {
  type: "github",
  ref: "<value>",
  sha: "<value>",
  repoId: 4004.48,
};
```

### `models.CreateDeploymentGitSource8`

```typescript
const value: models.CreateDeploymentGitSource8 = {
  type: "gitlab",
  ref: "<value>",
  sha: "<value>",
  projectId: 6658.72,
};
```

### `models.CreateDeploymentGitSource9`

```typescript
const value: models.CreateDeploymentGitSource9 = {
  type: "bitbucket",
  ref: "<value>",
  sha: "<value>",
  workspaceUuid: "<id>",
  repoUuid: "<id>",
};
```

