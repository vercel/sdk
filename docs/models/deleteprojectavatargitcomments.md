# DeleteProjectAvatarGitComments

## Example Usage

```typescript
import { DeleteProjectAvatarGitComments } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarGitComments = {
  onCommit: true,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |