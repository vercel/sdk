# ImportConnectorTokensResponseBody

## Example Usage

```typescript
import { ImportConnectorTokensResponseBody } from "@vercel/sdk/models/importconnectortokensop.js";

let value: ImportConnectorTokensResponseBody = {
  accepted: 5461.79,
  imported: 9737.99,
  tokens: [
    {
      expiresAt: 5549.82,
      subject: {
        type: "app",
      },
      environment: "production",
      succeeded: false,
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accepted`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `imported`                                                                       | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `tokens`                                                                         | [models.ImportConnectorTokensTokens](../models/importconnectortokenstokens.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |