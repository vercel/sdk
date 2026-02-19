# PayloadJob


## Supported Types

### `models.Job1`

```typescript
const value: models.Job1 = {
  type: "bitbucket-push",
  headInfo: {
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
  },
  name: "<value>",
  owner: "<value>",
  ref: "<value>",
  repoUuid: "<id>",
  sha: "<value>",
  slug: "<value>",
  workspaceUuid: "<id>",
  provider: "bitbucket",
};
```

### `models.Job2`

```typescript
const value: models.Job2 = {
  headInfo: {
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
  },
  name: "<value>",
  owner: "<value>",
  prId: 2753.27,
  ref: "<value>",
  repoUuid: "<id>",
  sha: "<value>",
  slug: "<value>",
  type: "bitbucket-now-comment",
  workspaceUuid: "<id>",
  provider: "bitbucket",
};
```

### `models.Job3`

```typescript
const value: models.Job3 = {
  prId: 9833.18,
  type: "pr",
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 7689.26,
    sha: "<value>",
  },
  installationId: 2467.86,
  isPrivate: false,
  org: "<value>",
  repo: "<value>",
  repoId: 6297.66,
  provider: "github",
};
```

### `models.Job4`

```typescript
const value: models.Job4 = {
  repoPushedAt: 303.87,
  type: "push",
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 6467.65,
    sha: "<value>",
  },
  installationId: 9847.95,
  isPrivate: false,
  org: "<value>",
  prId: 1371.4,
  repo: "<value>",
  repoId: 3515.58,
  provider: "github-custom-host",
};
```

### `models.Job5`

```typescript
const value: models.Job5 = {
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 1102.65,
    sha: "<value>",
  },
  installationId: 4535.07,
  isPrivate: true,
  org: "<value>",
  prId: 338.22,
  projectId: "<id>",
  repo: "<value>",
  repoId: 897.64,
  type: "now-comment",
  provider: "github",
};
```

### `models.Job6`

```typescript
const value: models.Job6 = {
  type: "gitlab-push",
  headInfo: {
    project: {
      id: "<id>",
    },
    ref: "<value>",
    sha: "<value>",
  },
  project: {
    id: "<id>",
  },
  ref: "<value>",
  sha: "<value>",
  provider: "gitlab",
};
```

### `models.Job7`

```typescript
const value: models.Job7 = {
  headInfo: {
    project: {
      id: "<id>",
    },
    ref: "<value>",
    sha: "<value>",
  },
  prId: 4645.99,
  project: {
    id: "<id>",
  },
  ref: "<value>",
  sha: "<value>",
  type: "gitlab-now-comment",
  provider: "gitlab",
};
```

