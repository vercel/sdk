# AddRepositoryPermissionRequestBody

## Example Usage

```typescript
import { AddRepositoryPermissionRequestBody } from "@vercel/sdk/models/addrepositorypermissionop.js";

let value: AddRepositoryPermissionRequestBody = {
  teamId: "team_LLHUOMOoDlqOp8wPE4kFo9pE",
  teamSlug: "my-team",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `teamId`                                               | *string*                                               | :heavy_minus_sign:                                     | ID of a team that is granted access to a repository.   | team_LLHUOMOoDlqOp8wPE4kFo9pE                          |
| `teamSlug`                                             | *string*                                               | :heavy_minus_sign:                                     | Slug of a team that is granted access to a repository. | my-team                                                |