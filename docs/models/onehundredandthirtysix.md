# OneHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySix } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: OneHundredAndThirtySix = {
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
    provider: "bitbucket",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    type: "bitbucket-push",
    workspaceUuid: "<id>",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |