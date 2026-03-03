# TwoHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyNine } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndSixtyNine = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 1102.65,
      sha: "<value>",
    },
    installationId: 9734.17,
    isPrivate: true,
    org: "<value>",
    prId: 4318.76,
    projectId: "<id>",
    repo: "<value>",
    repoId: 4675.19,
    type: "now-comment",
    provider: "github-limited",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |