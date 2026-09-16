# OneHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSix } from "@vercel/sdk/models/onehundred.js";

let value: OneHundredAndSix = {
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
    sha: "<value>",
    type: "vercel-push",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |