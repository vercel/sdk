# GetDomainEchMode

Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment.

## Example Usage

```typescript
import { GetDomainEchMode } from "@vercel/sdk/models/getdomainop.js";

let value: GetDomainEchMode = "auto";
```

## Values

```typescript
"auto" | "disabled" | "enabled"
```