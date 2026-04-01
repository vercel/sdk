# UpdateMicrofrontendsGitComments

## Example Usage

```typescript
import { UpdateMicrofrontendsGitComments } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsGitComments = {
  onPullRequest: true,
  onCommit: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |