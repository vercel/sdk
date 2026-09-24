# GetProjectsResponseBodyGitComments

## Example Usage

```typescript
import { GetProjectsResponseBodyGitComments } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2projectstype.js";

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