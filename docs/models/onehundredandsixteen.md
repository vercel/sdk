# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/fiftynine.js";

let value: OneHundredAndSixteen = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 4252.15,
      sha: "<value>",
    },
    installationId: 7998.83,
    isPrivate: false,
    org: "<value>",
    prId: 328.45,
    provider: "github-custom-host",
    repo: "<value>",
    repoId: 5112.1,
    repoPushedAt: 5143.28,
    type: "push",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |