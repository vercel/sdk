# ListAuthTokensRequest

## Example Usage

```typescript
import { ListAuthTokensRequest } from "@vercel/sdk/models/listauthtokensop.js";

let value: ListAuthTokensRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `kind`                                                                               | [models.ListAuthTokensQueryParamKind](../models/listauthtokensqueryparamkind.md)     | :heavy_minus_sign:                                                                   | Filter by token kind. Omit or use `all` to include every kind.                       |
| `status`                                                                             | [models.ListAuthTokensQueryParamStatus](../models/listauthtokensqueryparamstatus.md) | :heavy_minus_sign:                                                                   | Filter by token status. Omit or use `all` to include every status.                   |