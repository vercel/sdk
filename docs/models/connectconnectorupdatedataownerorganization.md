# ConnectConnectorUpdateDataOwnerOrganization

Linear organization that owns the OAuth application.

## Example Usage

```typescript
import { ConnectConnectorUpdateDataOwnerOrganization } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataOwnerOrganization = {
  id: "<id>",
  slug: "<value>",
  name: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `id`                          | *string*                      | :heavy_check_mark:            | Linear organization ID.       |
| `slug`                        | *string*                      | :heavy_check_mark:            | Linear organization slug.     |
| `name`                        | *string*                      | :heavy_check_mark:            | Linear organization name.     |
| `logoUrl`                     | *string*                      | :heavy_minus_sign:            | Linear organization logo URL. |