# GetSharedEnvVarType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { GetSharedEnvVarType } from "@vercel/sdk/models/getsharedenvvarop.js";

let value: GetSharedEnvVarType = "encrypted";
```

## Values

```typescript
"encrypted" | "sensitive" | "system" | "plain"
```