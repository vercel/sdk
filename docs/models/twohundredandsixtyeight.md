# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndSixtyEight = {
  job: {
    type: "gitlab-push",
    headInfo: {
      project: {
        id: "<id>",
      },
      ref: "<value>",
      sha: "<value>",
    },
    project: {
      id: "<id>",
    },
    ref: "<value>",
    sha: "<value>",
    provider: "gitlab",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |