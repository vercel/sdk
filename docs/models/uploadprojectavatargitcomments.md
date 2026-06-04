# UploadProjectAvatarGitComments

## Example Usage

```typescript
import { UploadProjectAvatarGitComments } from "@vercel/sdk/models/uploadprojectavatarmanagedrules.js";

let value: UploadProjectAvatarGitComments = {
  onPullRequest: false,
  onCommit: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |