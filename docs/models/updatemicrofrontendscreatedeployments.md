# UpdateMicrofrontendsCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { UpdateMicrofrontendsCreateDeployments } from "@vercel/sdk/models/updatemicrofrontendsbotfilter.js";

let value: UpdateMicrofrontendsCreateDeployments = "disabled";
```

## Values

```typescript
"disabled" | "enabled"
```