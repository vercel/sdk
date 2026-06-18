# EightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { EightySix } from "@vercel/sdk/models/usereventpayload54action.js";

let value: EightySix = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 6510.39,
    isPrivate: true,
    org: "<value>",
    prId: 139.61,
    projectId: "<id>",
    repo: "<value>",
    repoId: 6357.51,
    type: "now-comment",
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |