# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/eightytwo.js";

let value: OneHundredAndThirtySeven = {
  job: {
    headInfo: {
      owner: "<value>",
      ref: "<value>",
      repoUuid: "<id>",
      sha: "<value>",
      slug: "<value>",
    },
    name: "<value>",
    owner: "<value>",
    prId: 1348.66,
    provider: "bitbucket",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    type: "bitbucket-now-comment",
    workspaceUuid: "<id>",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |