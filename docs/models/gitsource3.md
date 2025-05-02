# GitSource3

## Example Usage

```typescript
import { GitSource3 } from "@vercel/sdk/models/createdeploymentop.js";

let value: GitSource3 = {
  org: "vercel",
  ref: "main",
  repo: "next.js",
  sha: "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0",
  host: "specific-gerbil.com",
  type: "github-custom-host",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `org`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | vercel                                                                             |
| `ref`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | main                                                                               |
| `repo`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                | next.js                                                                            |
| `sha`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                | a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0                                           |
| `host`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `type`                                                                             | [models.CreateDeploymentGitSourceType](../models/createdeploymentgitsourcetype.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |