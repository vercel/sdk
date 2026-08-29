# UserEventJobPayload1029CommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayload1029CommitVerification } from "@vercel/sdk/models/ninetyseven.js";

let value: UserEventJobPayload1029CommitVerification = "unverified";
```

## Values

```typescript
"unknown" | "unverified" | "verified"
```