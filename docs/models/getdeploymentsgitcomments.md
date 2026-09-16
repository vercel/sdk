# GetDeploymentsGitComments

Since June '23

## Example Usage

```typescript
import { GetDeploymentsGitComments } from "@vercel/sdk/models/getdeploymentsop.js";

let value: GetDeploymentsGitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |