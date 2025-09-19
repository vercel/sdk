# GetDomainTransferResponseBodyStatus

The current state of an ongoing transfer. `pending_owner`: Awaiting approval by domain's admin contact (every transfer begins with this status). If approval is not given within five days, the transfer is cancelled. `pending_admin`: Waiting for approval by Vercel Registrar admin. `pending_registry`: Awaiting registry approval (the transfer completes after 7 days unless it is declined by the current registrar). `completed`: The transfer completed successfully. `cancelled`: The transfer was cancelled. `undef`: No transfer exists for this domain. `unknown`: This TLD is not supported by Vercel's Registrar.

## Example Usage

```typescript
import { GetDomainTransferResponseBodyStatus } from "@vercel/sdk/models/getdomaintransferop.js";

let value: GetDomainTransferResponseBodyStatus = "pending_admin";
```

## Values

```typescript
"completed" | "undef" | "pending_owner" | "pending_admin" | "pending_registry" | "cancelled" | "unknown"
```