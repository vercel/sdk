# OneHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFive } from "@vercel/sdk/models/usereventpayload72action.js";

let value: OneHundredAndThirtyFive = {
  job: {
    headInfo: {
      project: {
        id: "<id>",
      },
      ref: "<value>",
      sha: "<value>",
    },
    prId: 7563.68,
    project: {
      id: "<id>",
    },
    provider: "gitlab",
    ref: "<value>",
    sha: "<value>",
    type: "gitlab-now-comment",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |