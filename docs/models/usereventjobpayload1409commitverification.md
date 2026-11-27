# UserEventJobPayload1409CommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayload1409CommitVerification } from "@vercel/sdk/models/usereventjobpayload1405provider.js";

let value: UserEventJobPayload1409CommitVerification = "unverified";
```

## Values

```typescript
"unknown" | "unverified" | "verified"
```