# GetMicrofrontendsInGroupGitComments

## Example Usage

```typescript
import { GetMicrofrontendsInGroupGitComments } from "@vercel/sdk/models/getmicrofrontendsingroupflatratetier.js";

let value: GetMicrofrontendsInGroupGitComments = {
  onPullRequest: true,
  onCommit: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |