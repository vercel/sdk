# OneHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyFour } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndTwentyFour = {
  job: {
    headInfo: {
      project: {
        id: "<id>",
      },
      ref: "<value>",
      sha: "<value>",
    },
    prId: 783.03,
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