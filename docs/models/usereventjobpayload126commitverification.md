# UserEventJobPayload126CommitVerification

Since 6 Nov 2025 The verification status of the commit. - 'verified' if the commit is verified - 'unverified' if the commit is not verified - 'unknown' if the commit verification status is unknown or not supported

## Example Usage

```typescript
import { UserEventJobPayload126CommitVerification } from "@vercel/sdk/models/ninetytwo.js";

let value: UserEventJobPayload126CommitVerification = "verified";
```

## Values

```typescript
"unknown" | "unverified" | "verified"
```