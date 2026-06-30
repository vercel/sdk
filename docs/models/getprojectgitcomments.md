# GetProjectGitComments

## Example Usage

```typescript
import { GetProjectGitComments } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectGitComments = {
  onPullRequest: true,
  onCommit: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |