# GetProjectsResponseBodyGitComments

## Example Usage

```typescript
import { GetProjectsResponseBodyGitComments } from "@vercel/sdk/models/getprojectslinkprojectsresponse200applicationjsonresponsebody2projects5deployhooks.js";

let value: GetProjectsResponseBodyGitComments = {
  onCommit: false,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |