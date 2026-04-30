# PayloadType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { PayloadType } from "@vercel/sdk/models/job6.js";

let value: PayloadType = "encrypted";
```

## Values

```typescript
"system" | "encrypted" | "plain" | "sensitive"
```