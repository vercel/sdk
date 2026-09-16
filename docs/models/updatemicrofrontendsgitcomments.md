# UpdateMicrofrontendsGitComments

## Example Usage

```typescript
import { UpdateMicrofrontendsGitComments } from "@vercel/sdk/models/updatemicrofrontendshaskey.js";

let value: UpdateMicrofrontendsGitComments = {
  onCommit: true,
  onPullRequest: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |