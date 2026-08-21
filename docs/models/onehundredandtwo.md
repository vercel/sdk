# OneHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwo } from "@vercel/sdk/models/eightyseven.js";

let value: OneHundredAndTwo = {
  job: {
    repoPushedAt: 118.82,
    type: "push",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 6467.65,
      sha: "<value>",
    },
    installationId: 9929.72,
    isPrivate: false,
    org: "<value>",
    prId: 8134.51,
    repo: "<value>",
    repoId: 5063.88,
    provider: "github",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |