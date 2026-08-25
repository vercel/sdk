# TypeSnowflakeWif

## Example Usage

```typescript
import { TypeSnowflakeWif } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypeSnowflakeWif = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `clientName`                                            | *string*                                                | :heavy_minus_sign:                                      | Snowflake client name.                                  |
| `accountIdentifier`                                     | *string*                                                | :heavy_minus_sign:                                      | Snowflake account identifier.                           |
| `extras`                                                | Record<string, *any*>                                   | :heavy_minus_sign:                                      | Additional provider metadata stored with the connector. |