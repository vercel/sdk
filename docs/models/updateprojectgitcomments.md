# UpdateProjectGitComments

Opt-in to Git pull request and commit comments on the project level. Replaces `github.silent`.

## Example Usage

```typescript
import { UpdateProjectGitComments } from "@vercel/sdk/models/updateprojectenvironments.js";

let value: UpdateProjectGitComments = {
  onPullRequest: true,
  onCommit: false,
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `onPullRequest`                                       | *boolean*                                             | :heavy_check_mark:                                    | Whether or not Vercel should comment on pull requests |
| `onCommit`                                            | *boolean*                                             | :heavy_check_mark:                                    | Whether or not Vercel should comment on commits       |