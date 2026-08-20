# Activation

Whether the new key is activated automatically after its public key has propagated, or manually via the activate endpoint. Defaults to `automatic`.

## Example Usage

```typescript
import { Activation } from "@vercel/sdk/models/createkmssigningkeyop.js";

let value: Activation = "automatic";
```

## Values

```typescript
"automatic" | "manual"
```