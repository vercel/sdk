# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/usereventpayload25beforetype.js";

let value: SixtySeven = {
  job: {
    repoPushedAt: 6561.49,
    type: "push",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 6467.65,
      sha: "<value>",
    },
    installationId: 9005.87,
    isPrivate: false,
    org: "<value>",
    prId: 8441.99,
    repo: "<value>",
    repoId: 2991.2,
    provider: "github",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |