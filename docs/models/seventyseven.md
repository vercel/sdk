# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/resources.js";

let value: SeventySeven = {
  job: {
    type: "bitbucket-push",
    headInfo: {
      owner: "<value>",
      ref: "<value>",
      repoUuid: "<id>",
      sha: "<value>",
      slug: "<value>",
    },
    name: "<value>",
    owner: "<value>",
    ref: "<value>",
    repoUuid: "<id>",
    sha: "<value>",
    slug: "<value>",
    workspaceUuid: "<id>",
    provider: "bitbucket",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |