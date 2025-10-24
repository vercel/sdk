# UpdateSharedEnvVariableEnvironmentType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { UpdateSharedEnvVariableEnvironmentType } from "@vercel/sdk/models/updatesharedenvvariableop.js";

let value: UpdateSharedEnvVariableEnvironmentType = "encrypted";
```

## Values

```typescript
"encrypted" | "sensitive" | "system" | "plain"
```