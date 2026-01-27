# GitComments

## Example Usage

```typescript
import { GitComments } from "@vercel/sdk/models/createprojectop.js";

let value: GitComments = {
  onPullRequest: false,
  onCommit: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |