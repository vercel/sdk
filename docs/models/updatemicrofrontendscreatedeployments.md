# UpdateMicrofrontendsCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { UpdateMicrofrontendsCreateDeployments } from "@vercel/sdk/models/updatemicrofrontendsoidctokenconfig.js";

let value: UpdateMicrofrontendsCreateDeployments = "enabled";
```

## Values

```typescript
"enabled" | "disabled"
```