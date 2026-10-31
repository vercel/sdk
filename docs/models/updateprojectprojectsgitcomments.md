# UpdateProjectProjectsGitComments

## Example Usage

```typescript
import { UpdateProjectProjectsGitComments } from "@vercel/sdk/models/updateprojectprojectsresponse200applicationjsonresponsebodysecuritymanagedrulesaibotsaction.js";

let value: UpdateProjectProjectsGitComments = {
  onCommit: false,
  onPullRequest: false,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `onCommit`                                       | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on commits |
| `onPullRequest`                                  | *boolean*                                        | :heavy_check_mark:                               | Whether the Vercel bot should comment on PRs     |