# UserEventJobPayloadCommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayloadCommitVerification } from "@vercel/sdk/models/userevent.js";

let value: UserEventJobPayloadCommitVerification = "unknown";
```

## Values

```typescript
"unknown" | "verified" | "unverified"
```