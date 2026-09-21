# ResponseBodyGitComments

## Example Usage

```typescript
import { ResponseBodyGitComments } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson1securitymanagedrulesaibotsaction.js";

let value: ResponseBodyGitComments = {
  onCommit: true,
  onPullRequest: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |