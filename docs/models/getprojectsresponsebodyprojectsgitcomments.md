# GetProjectsResponseBodyProjectsGitComments

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsGitComments } from "@vercel/sdk/models/getprojectstoprojectsresponse2001.js";

let value: GetProjectsResponseBodyProjectsGitComments = {
  onCommit: true,
  onPullRequest: true,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |