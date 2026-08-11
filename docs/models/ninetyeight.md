# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/fiftyseven.js";

let value: NinetyEight = {
  job: {
    type: "cursor-origin-push",
    ref: "<value>",
    sha: "<value>",
    headInfo: {
      owner: "<value>",
      ownerId: "<id>",
      ref: "<value>",
      repo: "<value>",
      repoId: "<id>",
      sha: "<value>",
    },
    installationId: "<id>",
    owner: "<value>",
    repo: "<value>",
    repoId: "<id>",
    provider: "cursor-origin",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |