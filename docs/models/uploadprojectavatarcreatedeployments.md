# UploadProjectAvatarCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { UploadProjectAvatarCreateDeployments } from "@vercel/sdk/models/uploadprojectavataraction.js";

let value: UploadProjectAvatarCreateDeployments = "disabled";
```

## Values

```typescript
"disabled" | "enabled"
```