# TypePhoton

## Example Usage

```typescript
import { TypePhoton } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: TypePhoton = {
  projectId: "<id>",
  projectSecret: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `projectId`                         | *string*                            | :heavy_check_mark:                  | Photon project ID.                  |
| `projectSecret`                     | *string*                            | :heavy_check_mark:                  | Photon project secret.              |
| `webhookSecret`                     | *string*                            | :heavy_minus_sign:                  | Photon webhook verification secret. |