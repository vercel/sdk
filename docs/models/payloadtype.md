# PayloadType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { PayloadType } from "@vercel/sdk/models/usereventpayload141newteam.js";

let value: PayloadType = "encrypted";
```

## Values

```typescript
"encrypted" | "plain" | "sensitive" | "system"
```