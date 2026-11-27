# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndForty = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      sha: "<value>",
    },
    org: "<value>",
    provider: "vercel",
    ref: "<value>",
    repo: "<value>",
    repoId: "<id>",
    sha: "<value>",
    type: "vercel-push",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |