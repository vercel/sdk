# ConnectReconsent

Existing authorizations no longer cover the connector's configured scopes, so they must be re-authorized.

## Example Usage

```typescript
import { ConnectReconsent } from "@vercel/sdk/models/connectreconsent.js";

let value: ConnectReconsent = {
  scope: "user",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `scope`                                                                               | [models.Scope](../models/scope.md)                                                    | :heavy_check_mark:                                                                    | The affected authorization scope. user means each affected user must authorize again. |