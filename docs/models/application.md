# Application

Linear OAuth application metadata.

## Example Usage

```typescript
import { Application } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: Application = {
  id: "<id>",
  clientId: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | Linear OAuth application ID.                               |
| `clientId`                                                 | *string*                                                   | :heavy_check_mark:                                         | Linear OAuth client ID.                                    |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | Linear OAuth application name.                             |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application description.                      |
| `developer`                                                | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application developer name.                   |
| `developerUrl`                                             | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application developer URL.                    |
| `imageUrl`                                                 | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application image URL.                        |
| `redirectUris`                                             | *string*[]                                                 | :heavy_minus_sign:                                         | Registered redirect URIs for the Linear OAuth application. |
| `distribution`                                             | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application distribution mode.                |
| `webhookResourceTypes`                                     | *string*[]                                                 | :heavy_minus_sign:                                         | Linear resource types delivered to the webhook.            |
| `webhookUrl`                                               | *string*                                                   | :heavy_minus_sign:                                         | Linear webhook URL.                                        |
| `webhookEnabled`                                           | *boolean*                                                  | :heavy_minus_sign:                                         | Whether the Linear webhook is enabled.                     |
| `createdAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application creation timestamp.               |
| `updatedAt`                                                | *string*                                                   | :heavy_minus_sign:                                         | Linear OAuth application update timestamp.                 |