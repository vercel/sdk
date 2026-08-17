# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/usereventpayload80configuration.js";

let value: NinetyNine = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 5082.46,
    isPrivate: true,
    org: "<value>",
    prId: 2521.87,
    projectId: "<id>",
    repo: "<value>",
    repoId: 332.38,
    type: "now-comment",
    provider: "github-limited",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |