# OneHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyOne } from "@vercel/sdk/models/seventythree.js";

let value: OneHundredAndTwentyOne = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 9392.53,
    isPrivate: false,
    org: "<value>",
    prId: 4282,
    projectId: "<id>",
    provider: "github",
    repo: "<value>",
    repoId: 8297.06,
    type: "now-comment",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |