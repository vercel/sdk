# OneHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyEight } from "@vercel/sdk/models/onehundredandeighteen.js";

let value: OneHundredAndTwentyEight = {
  job: {
    headInfo: {
      org: "<value>",
      ref: "<value>",
      repo: "<value>",
      repoId: 4252.15,
      sha: "<value>",
    },
    installationId: 786.26,
    isPrivate: true,
    org: "<value>",
    prId: 324.48,
    provider: "github-custom-host",
    repo: "<value>",
    repoId: 3011.37,
    repoPushedAt: 6930.83,
    type: "push",
  },
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `job`               | *models.PayloadJob* | :heavy_check_mark:  | N/A                 |