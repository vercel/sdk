# NinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySix } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: NinetySix = {
  job: {
    prId: 6317.69,
    type: "pr",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 7689.26,
      sha: "<value>",
    },
    installationId: 8899.97,
    isPrivate: true,
    org: "<value>",
    repo: "<value>",
    repoId: 6104.68,
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |