# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/sixty.js";

let value: NinetyEight = {
  job: {
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
    prId: 6804.15,
    projectId: "<id>",
    repo: "<value>",
    repoId: "<id>",
    type: "cursor-origin-now-comment",
    provider: "cursor-origin",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |