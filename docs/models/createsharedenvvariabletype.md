# CreateSharedEnvVariableType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { CreateSharedEnvVariableType } from "@vercel/sdk/models/createsharedenvvariableop.js";

let value: CreateSharedEnvVariableType = "encrypted";
```

## Values

```typescript
"encrypted" | "sensitive" | "system" | "plain"
```