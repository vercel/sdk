# ClaimDomainOwnershipEchMode

Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment.

## Example Usage

```typescript
import { ClaimDomainOwnershipEchMode } from "@vercel/sdk/models/claimdomainownershipop.js";

let value: ClaimDomainOwnershipEchMode = "auto";
```

## Values

```typescript
"auto" | "disabled" | "enabled"
```