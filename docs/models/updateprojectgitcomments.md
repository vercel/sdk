# UpdateProjectGitComments

## Example Usage

```typescript
import { UpdateProjectGitComments } from "@vercel/sdk/models/updateprojectprojectsresourceconfig.js";

let value: UpdateProjectGitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |