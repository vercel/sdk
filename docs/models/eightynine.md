# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/sixtyseven.js";

let value: EightyNine = {
  job: {
    prId: 1187.16,
    type: "pr",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 7689.26,
      sha: "<value>",
    },
    installationId: 9930.19,
    isPrivate: true,
    org: "<value>",
    repo: "<value>",
    repoId: 6715.41,
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |