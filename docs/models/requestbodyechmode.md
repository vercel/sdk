# RequestBodyEchMode

Encrypted Client Hello enrollment. 'auto' leaves it to Vercel, 'disabled' never enrolls and opts out of automatic enrollment.

## Example Usage

```typescript
import { RequestBodyEchMode } from "@vercel/sdk/models/patchdomainop.js";

let value: RequestBodyEchMode = "disabled";
```

## Values

```typescript
"auto" | "disabled"
```