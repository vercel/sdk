# NinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetySeven } from "@vercel/sdk/models/fiftytwo.js";

let value: NinetySeven = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 1518.84,
    isPrivate: false,
    org: "<value>",
    prId: 2316.51,
    projectId: "<id>",
    repo: "<value>",
    repoId: 3484.23,
    type: "now-comment",
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |