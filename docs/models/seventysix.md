# SeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySix } from "@vercel/sdk/models/usereventpayload34afterresourcestype.js";

let value: SeventySix = {
  job: {
    type: "vercel-push",
    ref: "<value>",
    repo: "<value>",
    sha: "<value>",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      sha: "<value>",
    },
    org: "<value>",
    provider: "vercel",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |