# Application

## Example Usage

```typescript
import { Application } from "@vercel/sdk/models/createconnectorop.js";

let value: Application = {
  id: "<id>",
  clientId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `id`                   | *string*               | :heavy_check_mark:     | N/A                    |
| `clientId`             | *string*               | :heavy_check_mark:     | N/A                    |
| `name`                 | *string*               | :heavy_check_mark:     | N/A                    |
| `description`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `developer`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `developerUrl`         | *string*               | :heavy_minus_sign:     | N/A                    |
| `imageUrl`             | *string*               | :heavy_minus_sign:     | N/A                    |
| `redirectUris`         | *string*[]             | :heavy_minus_sign:     | N/A                    |
| `distribution`         | *string*               | :heavy_minus_sign:     | N/A                    |
| `webhookResourceTypes` | *string*[]             | :heavy_minus_sign:     | N/A                    |
| `webhookUrl`           | *string*               | :heavy_minus_sign:     | N/A                    |
| `webhookEnabled`       | *boolean*              | :heavy_minus_sign:     | N/A                    |
| `createdAt`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `updatedAt`            | *string*               | :heavy_minus_sign:     | N/A                    |