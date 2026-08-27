# CreateOrTransferDomainEchMode

Whether the domain is enrolled in Encrypted Client Hello. `auto` leaves the decision to Vercel, `enabled` always enrolls, and `disabled` never enrolls and opts out of automatic enrollment.

## Example Usage

```typescript
import { CreateOrTransferDomainEchMode } from "@vercel/sdk/models/createortransferdomainop.js";

let value: CreateOrTransferDomainEchMode = "auto";
```

## Values

```typescript
"auto" | "disabled" | "enabled"
```