# OneHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFive } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndTwentyFive = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 4252.15,
      sha: "<value>",
    },
    installationId: 1765.07,
    isPrivate: true,
    org: "<value>",
    prId: 8391.3,
    provider: "github",
    repo: "<value>",
    repoId: 1438.77,
    repoPushedAt: null,
    type: "push",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |