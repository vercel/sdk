# GitSource

Defines the Git Repository source to be deployed. This property can not be used in combination with `files`.


## Supported Types

### `models.GitSource1`

```typescript
const value: models.GitSource1 = {
  ref: "main",
  repoId: 123456789,
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "github",
};
```

### `models.GitSource2`

```typescript
const value: models.GitSource2 = {
  org: "vercel",
  ref: "main",
  repo: "next.js",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "github",
};
```

### `models.GitSource3`

```typescript
const value: models.GitSource3 = {
  org: "vercel",
  ref: "main",
  repo: "next.js",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  host: "unconscious-hyphenation.net",
  type: "github-custom-host",
};
```

### `models.GitSource4`

```typescript
const value: models.GitSource4 = {
  projectId: 987654321,
  ref: "main",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "gitlab",
};
```

### `models.GitSource5`

```typescript
const value: models.GitSource5 = {
  ref: "main",
  repoUuid: "123e4567-e89b-12d3-a456-426614174000",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  type: "bitbucket",
  workspaceUuid: "987e6543-e21b-12d3-a456-426614174000",
};
```

### `models.GitSource6`

```typescript
const value: models.GitSource6 = {
  owner: "bitbucket_user",
  ref: "main",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  slug: "my-awesome-project",
  type: "bitbucket",
};
```

