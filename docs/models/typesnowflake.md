# TypeSnowflake

## Example Usage

```typescript
import { TypeSnowflake } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypeSnowflake = {
  accountIdentifier: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `clientName`                                            | *string*                                                | :heavy_minus_sign:                                      | Snowflake OAuth client name.                            |
| `accountIdentifier`                                     | *string*                                                | :heavy_check_mark:                                      | Snowflake account identifier.                           |
| `defaultSessionRole`                                    | *string*                                                | :heavy_minus_sign:                                      | Default Snowflake role for created sessions.            |
| `extras`                                                | Record<string, *any*>                                   | :heavy_minus_sign:                                      | Additional provider metadata stored with the connector. |