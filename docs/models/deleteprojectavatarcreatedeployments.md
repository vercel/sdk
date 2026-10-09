# DeleteProjectAvatarCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { DeleteProjectAvatarCreateDeployments } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarCreateDeployments = "disabled";
```

## Values

```typescript
"disabled" | "enabled"
```