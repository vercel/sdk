# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/usereventpayloadteam.js";

let value: OneHundredAndOne = {
  job: {
    prId: 5825.01,
    type: "pr",
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 7689.26,
      sha: "<value>",
    },
    installationId: 4223.38,
    isPrivate: true,
    org: "<value>",
    repo: "<value>",
    repoId: 3830.86,
    provider: "github-custom-host",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |