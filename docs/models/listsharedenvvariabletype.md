# ListSharedEnvVariableType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { ListSharedEnvVariableType } from "@vercel/sdk/models/listsharedenvvariableop.js";

let value: ListSharedEnvVariableType = "encrypted";
```

## Values

```typescript
"encrypted" | "sensitive" | "system" | "plain"
```