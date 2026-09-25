# PayloadJob


## Supported Types

### `models.Job1`

```typescript
const value: models.Job1 = {
  headInfo: {
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
  },
  name: "<value>",
  owner: "<value>",
  provider: "bitbucket",
  ref: "<value>",
  repoUuid: "<id>",
  sha: "<value>",
  slug: "<value>",
  type: "bitbucket-push",
  workspaceUuid: "<id>",
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
  provider: "bitbucket",
  ref: "<value>",
  repoUuid: "<id>",
  sha: "<value>",
  slug: "<value>",
  type: "bitbucket-now-comment",
  workspaceUuid: "<id>",
};
```

### `models.Job3`

```typescript
const value: models.Job3 = {
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 9833.18,
    sha: "<value>",
  },
  installationId: 7689.26,
  isPrivate: true,
  org: "<value>",
  prId: 9263.01,
  provider: "github-custom-host",
  repo: "<value>",
  repoId: 2040.46,
  type: "pr",
};
```

### `models.Job4`

```typescript
const value: models.Job4 = {
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    repoId: 4252.15,
    sha: "<value>",
  },
  installationId: 303.87,
  isPrivate: false,
  org: "<value>",
  prId: 7508.37,
  provider: "github-custom-host",
  repo: "<value>",
  repoId: 1371.4,
  repoPushedAt: 8181.47,
  type: "push",
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
  provider: "github",
  repo: "<value>",
  repoId: 599.5,
  type: "now-comment",
};
```

### `models.Job6`

```typescript
const value: models.Job6 = {
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
  provider: "gitlab",
  ref: "<value>",
  sha: "<value>",
  type: "gitlab-push",
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
  provider: "gitlab",
  ref: "<value>",
  sha: "<value>",
  type: "gitlab-now-comment",
};
```

### `models.Job8`

```typescript
const value: models.Job8 = {
  headInfo: {
    org: "<value>",
    ref: "<value>",
    repo: "<value>",
    sha: "<value>",
  },
  org: "<value>",
  provider: "vercel",
  ref: "<value>",
  repo: "<value>",
  repoId: "<id>",
  sha: "<value>",
  type: "vercel-push",
};
```

### `models.Job9`

```typescript
const value: models.Job9 = {
  headInfo: {
    owner: "<value>",
    ownerId: "<id>",
    ref: "<value>",
    repo: "<value>",
    repoId: "<id>",
    sha: "<value>",
  },
  installationId: "<id>",
  owner: "<value>",
  provider: "cursor-origin",
  ref: "<value>",
  repo: "<value>",
  repoId: "<id>",
  sha: "<value>",
  type: "cursor-origin-push",
};
```

### `models.Job10`

```typescript
const value: models.Job10 = {
  headInfo: {
    owner: "<value>",
    ownerId: "<id>",
    ref: "<value>",
    repo: "<value>",
    repoId: "<id>",
    sha: "<value>",
  },
  installationId: "<id>",
  owner: "<value>",
  prId: 6654.62,
  projectId: "<id>",
  provider: "cursor-origin",
  repo: "<value>",
  repoId: "<id>",
  type: "cursor-origin-now-comment",
};
```

