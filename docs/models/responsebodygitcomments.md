# ResponseBodyGitComments

## Example Usage

```typescript
import { ResponseBodyGitComments } from "@vercel/sdk/models/getprojectsop.js";

let value: ResponseBodyGitComments = {
  onPullRequest: true,
  onCommit: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |