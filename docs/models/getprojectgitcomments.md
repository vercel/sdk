# GetProjectGitComments

## Example Usage

```typescript
import { GetProjectGitComments } from "@vercel/sdk/models/getprojecthas2.js";

let value: GetProjectGitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |