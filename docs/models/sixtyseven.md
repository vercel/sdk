# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/payloadproject.js";

let value: SixtySeven = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 5954.02,
    isPrivate: false,
    org: "<value>",
    prId: 9005.87,
    projectId: "<id>",
    repo: "<value>",
    repoId: 2178.03,
    type: "now-comment",
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |