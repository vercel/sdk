# GetDomainsEchMode

Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment.

## Example Usage

```typescript
import { GetDomainsEchMode } from "@vercel/sdk/models/getdomainsop.js";

let value: GetDomainsEchMode = "auto";
```

## Values

```typescript
"auto" | "disabled" | "enabled"
```