# CreateProjectGitComments

## Example Usage

```typescript
import { CreateProjectGitComments } from "@vercel/sdk/models/createprojecttargets.js";

let value: CreateProjectGitComments = {
  onCommit: true,
  onPullRequest: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |