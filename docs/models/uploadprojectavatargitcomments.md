# UploadProjectAvatarGitComments

## Example Usage

```typescript
import { UploadProjectAvatarGitComments } from "@vercel/sdk/models/uploadprojectavatargitprovideroptions.js";

let value: UploadProjectAvatarGitComments = {
  onCommit: false,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |