# UserEventJobPayload1359CommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayload1359CommitVerification } from "@vercel/sdk/models/job2.js";

let value: UserEventJobPayload1359CommitVerification = "unknown";
```

## Values

```typescript
"unknown" | "unverified" | "verified"
```