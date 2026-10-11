# Owner

GitHub App owner.

## Example Usage

```typescript
import { Owner } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: Owner = {
  type: "organization",
  id: 425941,
  slug: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `type`                                                                               | [models.ConnectConnectorUpdateDataType](../models/connectconnectorupdatedatatype.md) | :heavy_check_mark:                                                                   | GitHub App owner type.                                                               |
| `id`                                                                                 | *number*                                                                             | :heavy_check_mark:                                                                   | GitHub App owner numeric ID.                                                         |
| `slug`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | GitHub App owner login.                                                              |
| `name`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | GitHub App owner display name.                                                       |