# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/fortyseven.js";

let value: Eighty = {
  job: {
    headInfo: {
      project: {
        id: "<id>",
      },
      ref: "<value>",
      sha: "<value>",
    },
    prId: 7344.14,
    project: {
      id: "<id>",
    },
    ref: "<value>",
    sha: "<value>",
    type: "gitlab-now-comment",
    provider: "gitlab",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |