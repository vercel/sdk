# UserEventJobPayload89CommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayload89CommitVerification } from "@vercel/sdk/models/sixtythree.js";

let value: UserEventJobPayload89CommitVerification = "unverified";
```

## Values

```typescript
"unknown" | "unverified" | "verified"
```