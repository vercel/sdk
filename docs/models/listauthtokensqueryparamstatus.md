# ListAuthTokensQueryParamStatus

Filter by token status. Omit or use `all` to include every status.

## Example Usage

```typescript
import { ListAuthTokensQueryParamStatus } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensQueryParamStatus = "revoked";
```

## Values

```typescript
"active" | "all" | "expired" | "revoked"
```