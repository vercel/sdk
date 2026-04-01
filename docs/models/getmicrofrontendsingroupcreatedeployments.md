# GetMicrofrontendsInGroupCreateDeployments

Whether the Vercel bot should automatically create GitHub deployments https://docs.github.com/en/rest/deployments/deployments#about-deployments NOTE: repository-dispatch events should be used instead

## Example Usage

```typescript
import { GetMicrofrontendsInGroupCreateDeployments } from "@vercel/sdk/models/getmicrofrontendsingroupkind.js";

let value: GetMicrofrontendsInGroupCreateDeployments = "disabled";
```

## Values

```typescript
"enabled" | "disabled"
```