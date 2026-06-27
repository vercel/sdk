# PayloadType

The type of this cosmos doc instance, if blank, assume secret.

## Example Usage

```typescript
import { PayloadType } from "@vercel/sdk/models/onehundredandtwentyfour.js";

let value: PayloadType = "encrypted";
```

## Values

```typescript
"encrypted" | "plain" | "sensitive" | "system"
```